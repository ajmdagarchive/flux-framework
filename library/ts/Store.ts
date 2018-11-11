import { Dispatcher, IAction } from "./Dispatcher";
import { Emitter, IListeners} from "./Emitter";

export default class Store<A extends object, S extends object> {
  private readonly reducer: (store: S, action: object) => S;
  private store: S;

  constructor(reducer: (store: S, action: object) => S, store: S, dispatcher: Dispatcher, emitter: Emitter) {
    this.reducer = reducer;
    this.store = store;

    dispatcher.register((action: IAction) => {
      this.store = this.reducer(this.store, action);
      // @ts-ignore
      emitter.trigger("string eventName", {actionType: action.type, ...store });
    });
  }

  get getstore() {
    return this.store;
  }
}
