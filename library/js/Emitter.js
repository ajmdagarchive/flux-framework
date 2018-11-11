"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Emitter {
    constructor() {
        this.listeners = {};
    }
    on(eventName, callback) {
        if (!this.listeners[eventName]) {
            this.listeners[eventName] = [];
        }
        this.listeners[eventName].push(callback);
    }
    trigger(eventName, data) {
        let listeners = this.listeners[eventName];
        listeners.forEach((callback) => {
            callback(data);
        });
    }
}
exports.Emitter = Emitter;
