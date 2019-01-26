export function isDataStale(reducer) {
    const lastUpdated = reducer.lastUpdated;
    const currentTime = Date.now();

    const oneDayMs=1000*60*60*24;

    const diff = currentTime - lastUpdated;
    const daysDiff = Math.round(diff/oneDayMs);

    return daysDiff > 0;

}

export function shouldFetch(reducer) {

    const isEmpty = reducer.items.length === 0;

    if (isEmpty) {
        return true
    } else if (reducer.isFetching) {
        return false
    } else {
        return reducer.didInvalidate
    }
}