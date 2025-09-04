import React, { useEffect, useState } from "react";
import axios from "axios";
import { Log } from "../utils/log";
import "./Page.css";

function Stats() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    Log("Visited Stats Page");
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      // Replace with your backend API URL
      const response = await axios.get("http://localhost:5000/api/stats");
      setStats(response.data);
    } catch (err) {
      console.error("Error fetching stats:", err);
    }
  };

  return (
    <div className="page">
      <h2>Stats Page</h2>
      {stats.length > 0 ? (
        <ul>
          {stats.map((item, index) => (
            <li key={index}>
              <strong>{item.shortUrl}</strong> → {item.clicks} clicks
            </li>
          ))}
        </ul>
      ) : (
        <p>No stats available yet.</p>
      )}
    </div>
  );
}

export default Stats;
