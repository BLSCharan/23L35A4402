// src/utils/log.js
import { getAuthToken } from "./auth";

export async function Log(message) {
  try {
    const token = await getAuthToken();

    if (!token) {
      console.error("No token found, cannot send log");
      return;
    }

    await fetch("http://localhost:5000/api/logs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ message, timestamp: new Date().toISOString() }),
    });

    console.log("Log sent:", message);
  } catch (error) {
    console.error("Log error:", error);
  }
}
