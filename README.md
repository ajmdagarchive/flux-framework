# flux-framework
My first flux-based framework

[![Build Status](https://travis-ci.org/Ajmdag/flux-framework.svg?branch=master)](https://travis-ci.org/Ajmdag/flux-framework)

## Installation
```
npm i -D ajmdag/flux-framework
```

## Development
```
git clone https://github.com/Ajmdag/flux-framework.git
cd flux-framework
npm i
```

# Documentation

## Usage
To use this library, you should create Store instance.
```js
const Store = require('flux-framework');

const store = new Store(stateUpdator, initialState);
```
`stateUpdator` and `initialState` are required.

### stateUpdator
`stateUpdator` is a function that knows how to change state, depending on the input data. Should return new state.

```js
function stateUpdator(state, action) {
  switch(action.type) {
  case 'INCREMENT':
    return { count: state.count + action.amount };
  case 'DECREMENT':
    return { count: state.count - action.amount };
  default: return state;
  }
}
```

### initialState
`initialState` is a data, that describes the initial state of your application or component.

```js
const initialState = {
  count: 0
};
```

### create actions
```js
const incrementAction = { type: "INCREMENT", amount: 3 };
const decrementAction = { type: "DECREMENT", amount: 5 };
```

### udpate store with actions
```js
store.update(incrementAction);
store.update(decrementAction);
```

### subscribe
`subscribe(callback)`. `callback` is a function that will be called when store will be changed.
```js
store.subscribe(() => console.log("State changed", store.state));
```

### unsubscribe
To unsubscribe from store changes just put `store.subscribe(callback)` in a variable(or constant) and call it as a function.
```js
const unsubscribe = store.subscribe(() => console.log("State changed", store.state));
unsubscribe();
```

### getState
To get a store state use this method:
```js
store.getState();
```
