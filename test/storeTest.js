const Store = require('../index.js');
const { assert, expect } = require('chai');

describe('check store', () => {
  it('созданный store - объект', () => {
    const initialState = {};
    const reducer = () => {};

    const store = new Store(reducer, initialState);

    assert.isObject(store);
  });

  it('начальное состоянее совпадает с store.getState', () => {
    const reducer = () => ({});
    const initialState = {a: 1, b: {c: 2, d: 3}};

    const store = new Store(reducer, initialState);
    assert.deepEqual(initialState, store.getState);
  });

  it('сохраняется переданное значение initialState', () => {
    const initialState = {
      count: 5
    };
    const reducer = () => {};

    const store = new Store(reducer, initialState);

    expect(store.getState.count).to.be.equal(5);
  });

  it('subscribe вызывается ровно столько раз, сколько store.update', () => {
    const initialState = {};
    const reducer = () => {};

    let subscribeWorks = [];

    const store = new Store(reducer, initialState);

    store.subscribe(() => subscribeWorks.push(1));

    store.update();
    store.update();

    expect(subscribeWorks.length).to.be.equal(2);
  });

  it('вызов unsubscribe() прекращает вызов коллбэка на store.update()', () => {
    const initialState = {};
    const reducer = () => {};

    let subscribeWorks = [];

    const store = new Store(reducer, initialState);

    const unsubscribeMePlease = store.subscribe(() => subscribeWorks.push(1));

    store.update();
    store.update();

    unsubscribeMePlease();

    store.update();
    store.update();
    store.update();

    expect(subscribeWorks.length).to.be.equal(2);
  });

  it('функция updateState(dispatcher) при использовании экшенов корректно изменяет store.', () => {
    function updateState(state, action) {
      if (action.type === 'INCREMENT') {
        return { count: state.count + action.amount };
      } else if (action.type === 'DECREMENT') {
        return { count: state.count - action.amount };
      } else return state;
    }

    const initialState = {
      count: 0
    };

    const store = new Store(updateState, initialState);
    
    const incrementAction = { type: 'INCREMENT', amount: 3 };
    const decrementAction = { type: 'DECREMENT', amount: 5 };

    store.update(incrementAction);
    store.update(decrementAction);
    store.update({});

    expect(store.getState.count).to.be.equal(-2);
  });
});
