import React from "react";

function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName);
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    try {
      let parsedItem;
      //1.- Cuando no hay informacion en localStorage
      if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify([]));
        parsedItem = [];
      } else {
        //Si ya hay información, traerla del localStorage
        parsedItem = JSON.parse(localStorageItem);
      }
      setItem(parsedItem);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  },[]);

  const saveItem = (newTodos) => {
    const stringifedTodos = JSON.stringify(newTodos); // Castea los TODOs a string
    localStorage.setItem(itemName, stringifedTodos);
    setItem(newTodos);
  };

  return [item, saveItem, loading, error];
}

export { useLocalStorage };
