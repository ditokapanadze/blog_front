import axios from "axios";

const getPosts = async (uuid) => {
  const token = localStorage.getItem("authToken");
  console.log(token);
  const response = await axios.get(
    "http://localhost:8000/api/v1/posts/getposts",
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );
  return response.data;
};

const postService = {
  getPosts,
};

export default postService;
