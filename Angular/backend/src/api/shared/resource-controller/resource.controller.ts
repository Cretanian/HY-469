import { NotFound } from 'http-errors';
import { Request, Response, Router, NextFunction } from 'express';
import { MongooseQueryParser, QueryOptions } from 'mongoose-query-parser';
import { Model, Document } from 'mongoose';
import { OK, CREATED, NO_CONTENT } from 'http-status-codes';
import { ICrudController, ICrudRouteOptions, CrudOperations, IPaginateOptions } from '@app/api/shared/interfaces/crud.interface';

export class ResourceController<T extends Document> implements ICrudController {

  protected modelSchema: Model<T>;

  constructor(modelSchema: Model<T>) {
    this.modelSchema = modelSchema;
  }

  /**
   * Apply routes of CRUD operations
   * If no options available then it will apply all CRUD operations
   *
   * @param {ICrudRouteOptions[]} [options=[]]
   * @returns {Router}
   */
  public applyRoutes(options: ICrudRouteOptions[] = []): Router {
    const router = Router();

    // apply all routes if not provided
    if (options.length === 0) {
      options = [
        { operation: CrudOperations.GetAll },
        { operation: CrudOperations.Create },
        { operation: CrudOperations.GetOne },
        { operation: CrudOperations.Update },
        { operation: CrudOperations.Delete }
      ];
    }

    // apply routes depending on options
    options.forEach(o => {
      const middleware = o.middleware || [];

      switch (o.operation) {
        case CrudOperations.GetAll:
          router.get('/', middleware, this.getAll());
          break;

        case CrudOperations.Create:
          router.post('/', middleware, this.create());
          break;

        case CrudOperations.GetOne:
          router.get('/:id', middleware, this.getOne());
          break;

        case CrudOperations.Update:
          router.put('/:id', middleware, this.update());
          router.patch('/:id', middleware, this.update());
          break;

        case CrudOperations.Delete:
          router.delete('/:id', middleware, this.delete());
          break;
      }
    });

    return router;
  }

  // #region CRUD methods

  /**
   * Get all resources paginated
   */
  public getAll() {
    return async (req: Request, res: Response, next?: NextFunction): Promise<Response> => {
      try {
        const queryOptions = this.parseQueryParameters(req);
        let resources: T[];

        // get resources as list
        resources = await this.modelSchema
          .find(queryOptions.query)
          .select(queryOptions.options.select)
          .populate(queryOptions.options.populate)
          .exec();

        return res
          .status(OK)
          .json(resources);

      } catch (e) {
        next(e);
      }
    };
  }

  /**
   * Create a new resource model
   */
  public create() {
    return async (req: Request, res: Response, next?: NextFunction): Promise<Response> => {
      try {
        const resource = await new this.modelSchema(req.body)
          .save();

        return res
          .status(CREATED)
          .json(resource);

      } catch (e) {
        next(e);
      }
    };
  }

  /**
   * Get one resource model by Id
   *
   * @param {string} [id] Model id to be retrieved
   * @returns
   */
  public getOne(id?: string) {
    return async (req: Request, res: Response, next?: NextFunction): Promise<Response> => {
      try {
        const modelId: any = id || req.params.id;
        const queryOptions = this.parseQueryParameters(req);

        const resource = await this.modelSchema
          .findOne({ _id: modelId })
          .select(queryOptions.options.select)
          .populate(queryOptions.options.populate)
          .orFail(new NotFound())
          .exec();

        return res
          .status(OK)
          .json(resource);

      } catch (e) {
        next(e);
      }
    };
  }

  /**
   * Update one resource model by Id
   *
   * @param {string} [id] Model id to be modified
   * @param {string[]} [blacklist=[]] List of properties to ignore
   * @returns
   */
  public update(id?: string, blacklist: string[] = []) {
    return async (req: Request, res: Response, next?: NextFunction): Promise<Response> => {
      try {
        const modelId: any = id || req.params.id;

        // delete blacklisted properties from body
        const defaultBlacklist = ['_id', 'createdAt', 'updatedAt', ...blacklist];
        for (const key of defaultBlacklist) {
          delete req.body[key];
        }

        const resource = await this.modelSchema
          .findOneAndUpdate(
            { _id: modelId },
            req.body,
            { new: true, runValidators: true, context: 'query' }
          )
          .orFail(new NotFound())
          .exec();

        return res
          .status(OK)
          .json(resource);

      } catch (e) {
        next(e);
      }
    };
  }

  /**
   * Delete one resource model by Id
   *
   * @param {string} [id] Model id to be deleted
   */
  public delete(id?: string) {
    return async (req: Request, res: Response, next?: NextFunction): Promise<Response> => {
      try {
        const modelId: any = id || req.params.id;

        await this.modelSchema
          .findOneAndDelete({ _id: modelId })
          .orFail(new NotFound())
          .exec();

        return res
          .sendStatus(NO_CONTENT);

      } catch (e) {
        next(e);
      }
    };
  }

  // #endregion CRUD methods
  // --------------------------------------

  // #region Helpers methods

  /**
   * Parse all query params from URL
   *
   * @protected
   * @param {Request} req
   * @param {string[]} [blacklist=[]]
   * @param {string} [skipKey='page']
   * @param {string} [limitKey='perPage']
   * @returns {{ query: QueryOptions['filter'], options: PaginateOptions }}
   */
  protected parseQueryParameters(
    req: Request,
    blacklist: string[] = [],
    skipKey: string = 'page',
    limitKey: string = 'perPage'
  ): { query: QueryOptions['filter'], options: IPaginateOptions } {

    const queryOptions = new MongooseQueryParser({ limitKey, skipKey, blacklist })
      .parse(req.query);

    return {
      query: queryOptions.filter,
      options: {
        select: queryOptions.select,
        sort: queryOptions.sort,
        populate: queryOptions.populate,
        page: queryOptions.skip || 1,
        lean: false,
        leanWithId: false,
        limit: queryOptions.limit || 10,
      }
    };
  }

  // #endregion Helpers methods
  // --------------------------------------

}
