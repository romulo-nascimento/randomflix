export const getFromStorage = (key: string) => {
    return JSON.parse(localStorage.getItem(key))
}

export const saveOnStorage = (key: string, value: string | {}) => {
    localStorage.setItem(key, typeof value === 'string' ? value : JSON.stringify(value))
}
