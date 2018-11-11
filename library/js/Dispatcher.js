"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Dispatcher {
    constructor() {
        this.callbacks = [];
    }
    register(callback) {
        this.callbacks.push(callback);
    }
    dispatch(action) {
        this.callbacks.forEach((callback) => {
            callback(action);
        });
    }
}
exports.Dispatcher = Dispatcher;
