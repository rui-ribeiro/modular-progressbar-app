import { store } from '../store';
import { Provider } from 'react-redux';
import React, { Component } from 'react';
import { featureAdded } from '../modules/actions';

const featureStore = {

}

const features = {
    request: (name) => {
        if (name !== 'progressbar') return;
        import('../myProgressBar').then((p) => {
            featureStore[name] = p;
            store.dispatch(featureAdded(name, name))
        })
    },
    get: (name) => featureStore[name]
};

const FeatureContext = React.createContext(features);

class Environment extends Component {
    render() {
        return <Provider store={store}>
            <FeatureContext.Provider value={features}>
                {this.props.children}
            </FeatureContext.Provider>
        </Provider>
    }
}
const FeatureConsumer = FeatureContext.Consumer;

const injectFeature = (actions, reducers, sagas) => {

}

export { Environment, FeatureConsumer, injectFeature }
