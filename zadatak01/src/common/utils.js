// Async function fetch data from server.
// Function return word definition in JSON format or error message if word is not found.
// In case if word not found response code is 404.
// All other response code throw error.

const fetchPatch = async (path) => {
  // Await data to be fetched from server
  let response = await fetch(path);

  //Throw error if response is not OK (200..299) or word is not found (404).
  if (!response.ok) {
    if (response.status === 404) {
      // Await to resolve message from provided server response
      throw new Error(await (await response.json()).message);
    } else {
      // Throw error for any other respons codes
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  }

  // Return JSON object
  return await response.json();
};

export { fetchPatch };
