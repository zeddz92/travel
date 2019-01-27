import i18next from 'i18next';

export function isDataStale(reducer) {
    const lastUpdated = reducer.lastUpdated;
    const currentTime = Date.now();

    const oneDayMs = 1000 * 60 * 60 * 24;

    const diff = currentTime - lastUpdated;
    const daysDiff = Math.round(diff / oneDayMs);

    return daysDiff > 0;

}

export function shouldFetch(reducer) {

    const isNewLanguage = reducer.lng !== i18next.language;
    const isCollectionEmpty = reducer.items && reducer.items.length === 0;
    const isDataEmpty = reducer.data && Object.keys(reducer.data).length === 0;

    if (!reducer) {
        return true
    } else if (isNewLanguage) {
        return true
    } else if (isCollectionEmpty) {
        return true
    } else if (isDataEmpty) {
        return true
    } else if (reducer.isFetching) {
        return false
    } else {
        return reducer.didInvalidate
    }
}