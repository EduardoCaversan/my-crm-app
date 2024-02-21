const BASE_URL = '';

export async function loginUser(username, password) {
  try {
    const response = await fetch(`${BASE_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    console.log("data:", data)
    if (response.body) {
      return data;
    } else {
      throw new Error(data.error);
    }
  } catch (error) {
    throw error;
  }
}
