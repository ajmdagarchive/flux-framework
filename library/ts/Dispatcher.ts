export interface IAction {
  type: string;
  data: any;
}

export class Dispatcher {
  private callbacks: Array<((object: IAction) => any)>;

  constructor() {
    this.callbacks = [];
  }

  public register(callback: (action: IAction) => void) {
    this.callbacks.push(callback);
  }

  public dispatch(action: IAction) {
    this.callbacks.forEach((callback: (action: IAction) => void) => {
      callback(action);
    });
  }
}
