const fetchPatch = async (path) => {
  // Fetch data from server
  let response = await fetch(path);

  //Throw error if response is not OK 200 or word is not found.
  if (!response.ok) {
    if (response.status === 404) {
      throw new Error(await (await response.json()).message);
    } else {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  }

  // Return JSON promise
  return await response.json();
};

export { fetchPatch };
