import React, { useEffect } from "react";
import Header from "../components/Header";
import { getPosts } from "../features/auth/postSlice";
import { useSelector, useDispatch } from "react-redux";
import Post from "../components/Post";
function Dashboard() {
  const { posts, isLoading, message } = useSelector((state) => state.post);
  console.log(posts.title);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  return (
    <>
      <Header />
      <div className="mx-auto lg:max-w-2xl mt-40 ">
        {posts?.length < 1 && <p>no post to deplay</p>}
        <div className="">
          {posts?.length > 1 &&
            posts.map((post) => (
              <Post
                uuid={post.uuid}
                key={post.uuid}
                title={post.title}
                text={post.description}
                photoUrl={post.url}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
