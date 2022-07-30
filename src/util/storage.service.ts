export const store = (key: string, value: any) => sessionStorage[key] = JSON.stringify(value);

export const load = (key: string, defaultValue = null) => {
    var value = sessionStorage[key] || defaultValue;
    return JSON.parse(value);
}

export const storageService = {
    store,
    load
}