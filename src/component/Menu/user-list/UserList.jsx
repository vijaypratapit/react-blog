/** @format */

import React, { useState, useEffect } from "react";
import "./styles.css";
export const UserList = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setUser(data);
      } catch (err) {
        console.error("Error fetching users:", err);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className='user-list'>
      {user.map((user) => (
        <div className='user-item' key={user.id}>
          {user.name}
        </div>
      ))}
    </div>
  );
};
