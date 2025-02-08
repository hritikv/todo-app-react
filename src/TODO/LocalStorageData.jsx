const todoKey = "reactTodo";

export const getLocalStorageData = () => {
  const localStorageData = localStorage.getItem(todoKey);
  if (!localStorageData) return [];
  return JSON.parse(localStorageData);
};

export const setLocalStorageData = (task) => {
  localStorage.setItem(todoKey, JSON.stringify(task));
};
