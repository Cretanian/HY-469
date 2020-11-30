import { Request, Response, RequestHandler, Router, NextFunction } from 'express';

/**
 * CRUD operation definition
 *
 * @export
 * @enum {string}
 */
export enum CrudOperations {
  GetAll = 'GET_ALL',
  Create = 'CREATE',
  GetOne = 'GET_ONE',
  Update = 'UPDATE',
  Delete = 'DELETE',
}

/**
 * Route options for defining CRUD operations
 * and their middleware methods
 *
 * @export
 * @interface ICrudRouteOptions
 */
export interface ICrudRouteOptions {
  operation: CrudOperations;
  middleware?: RequestHandler[];
}

export interface ICustomLabels {
  totalDocs?: string;
  limit?: string;
  page?: string;
  totalPages?: string;
  docs?: string;
  nextPage?: string;
  prevPage?: string;
}

export interface ICollationOptions {
  locale?: string;
  caseLevel?: boolean;
  caseFirst?: string;
  strength?: number;
  numericOrdering?: boolean;
  alternate?: string;
  maxVariable?: string;
  backwards?: boolean;
}

export interface IPaginateOptions {
  /* tslint:disable-next-line: ban-types */
  select?: Object | string;
  /* tslint:disable-next-line: ban-types */
  sort?: Object | string;
  customLabels?: ICustomLabels;
  collation?: ICollationOptions;
  /* tslint:disable-next-line: ban-types */
  populate?: Object[] | string[] | Object | string;
  lean?: boolean;
  leanWithId?: boolean;
  offset?: number;
  page?: number;
  limit?: number;
}


/**
 * Controller for implementing basic model methods
 * such as Create, Read, Update and Delete (CRUD)
 *
 * @export
 * @interface ICrudController
 */
export interface ICrudController {
  applyRoutes(options?: ICrudRouteOptions[]): Router;
  getAll(): (req: Request, res: Response, next?: NextFunction) => Promise<Response>;
  create(): (req: Request, res: Response, next?: NextFunction) => Promise<Response>;
  getOne(id?: string): (req: Request, res: Response, next?: NextFunction) => Promise<Response>;
  update(id?: string, blacklist?: string[]): (req: Request, res: Response, next?: NextFunction) => Promise<Response>;
  delete(id?: string): (req: Request, res: Response, next?: NextFunction) => Promise<Response>;
}
