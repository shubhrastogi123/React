import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) {
    return (
      <div className="flex items-center justify-center bg-gray-900 text-white min-h-screen">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center w-full max-w-sm">
          <p className="text-red-400 font-semibold text-xl">
            ⚠ Please login to continue
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center bg-gray-900 text-white min-h-screen">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center w-full max-w-md">
        <h1 className="text-3xl font-semibold mb-4">
          Welcome back, {user.username} 👋
        </h1>
        <p className="text-gray-400">We're glad to have you here!</p>
      </div>
    </div>
  );
}

export default Profile;
