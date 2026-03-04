/** @format */

import React from "react";
import useFetch from "./api-call/useFetch";

export default function App() {
  // pass only the URL to the hook
  const { data, error, loading, setData, refetch } = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={() => refetch()}>Refetch</button>
      <button
        onClick={() =>
          // update local data (example: prepend a fake post)
          setData((prev) =>
            Array.isArray(prev)
              ? [{ id: "local", title: "Local post" }, ...prev]
              : prev,
          )
        }>
        Add local post
      </button>

      <ul>
        {Array.isArray(data) ? (
          data.slice(0, 10).map((post) => <li key={post.id}>{post.title}</li>)
        ) : (
          <pre>{JSON.stringify(data, null, 2)}</pre>
        )}
      </ul>
    </div>
  );
}
