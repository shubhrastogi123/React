import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();

  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D)`,
      }}
    >
      <div className="bg-gray-800 bg-opacity-80 p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold">User Profile</h1>
        <p className="text-lg mt-2">
          User ID: <span className="text-blue-400">{userid}</span>
        </p>
      </div>
    </div>
  );
}

export default User;
