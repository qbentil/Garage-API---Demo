import "./App.css";

import { useEffect, useState } from "react";

import Axios from "./utils/Axios";

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await Axios({
        method: "GET",
        url: "/posts",
      });
      console.log({ posts: data });
      setPosts(data);
    };

    fetchPosts();
  }, []);
  return (
    <h1 className="w-screen h-screen overflow-hidden bg-gray-50 flex items-center justify-center">

      <div class="w-[80%] h-full relative overflow-x-auto">
        {/* header */}
        <div class="flex items-center justify-between px-6 py-4 bg-white border-b">
          <h1 class="text-xl font-semibold text-gray-800">Posts</h1>
        </div>
        <table class="w-full text-sm text-left text-gray-500 ">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3">
                Title
              </th>
              <th scope="col" class="px-6 py-3">
                Body
              </th>
            </tr>
          </thead>
          <tbody>
            {posts.length > 0 &&
              posts.map((post, index) => (
                <tr class="bg-white border-b " key={index}>
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    {post.title}
                  </th>
                  <td class="px-6 py-4">
                    <div class="text-gray-500">{post.body}</div>
                  </td>
                </tr>
              ))}
            {posts.length === 0 && (
              <tr class="bg-white border-b ">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  Loading posts......
                </th>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </h1>
  );
}

export default App;
