export interface IListeners {
  [key: string]: Array<(() => void)>;
}

export class Emitter {
  private listeners: IListeners;

  constructor() {
    this.listeners = {};
  }

  public on(eventName: string, callback: () => void) {
    if (!this.listeners[eventName]) {
      this.listeners[eventName] = [];
    }
    this.listeners[eventName].push(callback);
  }

  public trigger(eventName: string, data: object) {
    let listeners = this.listeners[eventName];
    listeners.forEach((callback: (object: object) => void) => {
      callback(data);
    });
  }
}
