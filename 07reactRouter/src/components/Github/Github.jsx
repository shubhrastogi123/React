import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  if (!data) {
    return (
      <div className="text-center mt-10 text-red-500 text-3xl">
        Failed to load data
      </div>
    );
  }

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1630514969818-94aefc42ec47?w=1600&auto=format&fit=crop&q=80')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-gray-800 shadow-lg rounded-lg p-6 w-full max-w-md text-center bg-opacity-90">
        <img
          src={data.avatar_url}
          alt="GitHub Profile"
          className="w-32 h-32 rounded-full mx-auto border-4 border-blue-500 shadow-md"
        />
        <h1 className="text-2xl font-bold mt-4">
          {data.name || "GitHub User"}
        </h1>
        <p className="text-gray-400">@{data.login}</p>
        <p className="text-lg mt-2">
          Followers:{" "}
          <span className="font-bold text-blue-400">{data.followers}</span>
        </p>
        <p className="text-lg">
          Following:{" "}
          <span className="font-bold text-green-400">{data.following}</span>
        </p>
        <a
          href={data.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg text-white font-semibold transition"
        >
          View Profile
        </a>
      </div>
    </div>
  );
}

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/shubhrastogi123");
  return response.json();
};

export default Github;
