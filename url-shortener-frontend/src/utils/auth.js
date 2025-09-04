// src/utils/auth.js

export async function getAuthToken() {
  try {
    // call backend API (dummy endpoint for now)
    const response = await fetch("http://localhost:5000/api/auth/token", {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch auth token");
    }

    const data = await response.json();
    return data.token; // { token: "abc123" }
  } catch (error) {
    console.error("Auth error:", error);
    return null;
  }
}
