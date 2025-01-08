const save = (key, value) => {
  try {
    let array = []
    array.push(value)
    const serializedState = JSON.stringify(array);

    localStorage.setItem(key, serializedState);
  } catch (err) {
    console.error("Set state error: ", err);
  }
};

export { save };
