const API_BASE = "http://localhost:5000/api";

export async function getRequest(endpoint) {
  try {
    const response = await fetch(`${API_BASE}${endpoint}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("GET API Error:", error);
    return { success: false, message: "Something went wrong" };
  }
}

export async function postRequest(endpoint, payload) {
  try {
    const response = await fetch(`${API_BASE}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("POST API Error:", error);
    return { success: false, message: "Something went wrong" };
  }
}