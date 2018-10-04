export const increment = () => ({
    type: 'INCREMENT'
});

export const decrement = () => ({
    type: 'DECREMENT'
});

export const incrementRequested = () => ({
    type: 'INCREMENT_REQUESTED'
});

export const decrementRequested = () => ({
    type: 'DECREMENT_REQUESTED'
});

export const reachedMax = () => ({
    type: 'REACHED_MAX'
});

export const reachedMin = () => ({
    type: 'REACHED_MIN'
});

export const featureAdded = (featureName, featureId) => ({
    type: 'FEATURE_ADDED',
    featureName,
    featureId
});