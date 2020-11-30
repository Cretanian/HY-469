export class TaskModel {

  public _id: string;
  public title: string;
  public description: string;

  constructor(model?: any) {
    Object.assign(this, model);
  }

}
