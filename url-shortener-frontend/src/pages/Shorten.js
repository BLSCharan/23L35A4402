import React, { useState, useEffect } from "react";
import axios from "axios";
import { Log } from "../utils/log";
import "./Page.css";

function Shorten() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  useEffect(() => {
    Log("Visited Shorten Page");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace with your backend API URL
      const response = await axios.post("http://localhost:5000/api/shorten", {
        longUrl: url,
      });
      setShortUrl(response.data.shortUrl);
      Log("Generated Short URL");
    } catch (err) {
      console.error("Error shortening URL:", err);
    }
  };

  return (
    <div className="page">
      <h2>URL Shortener</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter URL"
          required
        />
        <button type="submit">Shorten</button>
      </form>

      {shortUrl && (
        <p>
          Shortened URL:{" "}
          <a href={shortUrl} target="_blank" rel="noopener noreferrer">
            {shortUrl}
          </a>
        </p>
      )}
    </div>
  );
}

export default Shorten;
