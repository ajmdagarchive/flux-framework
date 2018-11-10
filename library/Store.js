"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Store {
    constructor(updateState, state) {
        this.updateState = updateState;
        this.state = state;
        this.callbacks = [];
    }
    get getState() {
        return this.state;
    }
    update(action) {
        this.state = this.updateState(this.state, action);
        this.callbacks.forEach(cb => {
            cb();
        });
    }
    subscribe(callback) {
        this.callbacks.push(callback);
        return () => (this.callbacks = this.callbacks.filter(cb => cb !== callback));
    }
}
exports.default = Store;
