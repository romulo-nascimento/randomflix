export const getFromStorage = (key: string) => JSON.parse(localStorage.getItem(key));

export const saveOnStorage = (key: string, value: unknown) => {
  localStorage.setItem(key, typeof value === 'string' ? value : JSON.stringify(value));
};
