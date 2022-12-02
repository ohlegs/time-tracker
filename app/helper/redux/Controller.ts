import {NavigationParams} from 'react-navigation';
import {Action} from 'redux';
import {store} from '../reduxConfig';

export interface ReduxAction<T = any> extends Action<T> {
  value?: any;
  meta?: any;
}

export default class Controller<Action extends ReduxAction = ReduxAction> {
  public getState() {
    return store.getState();
  }

  protected dispatch(action: Action) {
    store.dispatch(action);
  }

  protected dispatchAction<T>(
    action: Action['type'],
    value?: Action['value'],
    meta?: Action['meta'],
  ) {
    store.dispatch({
      type: action,
      value,
      meta,
    });
  }

  protected navigate(routeName: string, params?: NavigationParams) {
    const {navigation} = this.getState().app;
    if (navigation) {
      navigation.navigate(routeName, params);
    }
  }
}
