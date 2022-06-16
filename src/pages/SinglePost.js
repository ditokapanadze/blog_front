import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import { useParams } from "react-router-dom";
import Post from "../components/Post";

function SinglePost() {
  const [post, setPost] = useState();
  const { uuid } = useParams();

  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/api/v1/posts/${uuid}`,
        );
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getPosts();
    return () => {
      setPost();
    };
  }, [uuid]);
  console.log(post);
  return (
    <>
      <Header />
      <div className="mx-auto lg:max-w-2xl mt-40">
        {post && (
          <Post
            title={post.title}
            text={post.description}
            photoUrl={post.url}
            uuid={post.uuid}
            single={true}
          />
        )}
      </div>
    </>
  );
}

export default SinglePost;
