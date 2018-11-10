export default class Store<A extends object, S extends object> {
  private readonly updateState: (state: S, action: object) => S;
  private state: S;
  private callbacks: Array<(() => any)>;

  constructor(updateState: (state: S, action: object) => S, state: S) {
    this.updateState = updateState;
    this.state = state;
    this.callbacks = [];
  }

  get getState() {
    return this.state;
  }

  public update(action: object) {
    this.state = this.updateState(this.state, action);
    this.callbacks.forEach(cb => {
      cb();
    });
  }

  public subscribe(callback: () => void) {
    this.callbacks.push(callback);
    return () =>
      (this.callbacks = this.callbacks.filter(cb => cb !== callback));
  }
}
