# flux-framework
My first flux-based framework

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

## Install

To use this library, you should create Store instance.
```js
const Store = require('flux-framework');

const store = new Store(reducer, initialState);
```
`reducer` and `initialState` are required.

### reducer
`reducer` is a function that knows how to change state, depending on the input data. Should return new state.

```js
function reducer(state, action) {
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
