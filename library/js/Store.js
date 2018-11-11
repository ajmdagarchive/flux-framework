"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Store {
    constructor(reducer, store, dispatcher, emitter) {
        this.reducer = reducer;
        this.store = store;
        dispatcher.register((action) => {
            this.store = this.reducer(this.store, action);
            // @ts-ignore
            emitter.trigger("string eventName", Object.assign({ actionType: action.type }, store));
        });
    }
    get getstore() {
        return this.store;
    }
}
exports.default = Store;
