export function isDataStale(reducer) {
    const lastUpdated = reducer.lastUpdated;
    const currentTime = Date.now();

    const oneDayMs=1000*60*60*24;

    const diff = currentTime - lastUpdated;
    const daysDiff = Math.round(diff/oneDayMs);

    return daysDiff > 0;

}

export function shouldFetch(reducer) {
    if(!reducer) {
        return true
    } else if (reducer.items.length === 0) {
        return true
    } else if (reducer.isFetching) {
        return false
    } else {
        return reducer.didInvalidate
    }
}