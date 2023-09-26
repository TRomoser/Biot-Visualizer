// const url = 'https://oap.cloud.buildingsiot.com/api'

export async function fetchData(url, query = null) {
  try {
    if (query) {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });
      
      if (!response.ok) {
        const text = await response.text();
        throw new Error(`Error ${response.status}: ${text}`);
      }

      const data = await response.json();
      return data.data;
    }
  } catch(error) {
    console.error(error);
  }
}