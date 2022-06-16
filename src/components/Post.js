import React, { useState } from "react";
import { Link } from "react-router-dom";

function Post({ title, text, photoUrl, uuid, single }) {
  const [exp, setExp] = useState(900);
  const shortText = text?.slice(0, exp);
  const textArr = shortText.split("");
  const secondArr = [];
  let count = 0;
  // textArr.map((char) => {
  //   secondArr.push(char);
  //   if (char === ".") {
  //     count = count + 1;
  //   }
  //   if (count === 3) {
  //     secondArr.push("<br/>");
  //     count = 0;
  //   }
  // });
  console.log(single);
  const showMore = () => {
    const myInterval = setInterval(() => {
      setExp((prevState) => prevState + 1);
    }, 5);
    setTimeout(() => {
      clearInterval(myInterval);
    }, 2000);
  };

  return (
    <div className="mb-20">
      {" "}
      <div className="w-4/5 mx-auto h-80">
        <img className="object-cover h-full w-full" src={photoUrl} />
      </div>{" "}
      <h2 className="text-2xl my-2 text-center">{title}</h2>
      {single ? (
        <p>{text}</p>
      ) : (
        <p style={{ textIndent: "15px" }}>
          {shortText}...
          {exp === 900 ? (
            <span className="cursor-pointer font-semibold" onClick={showMore}>
              Read More
            </span>
          ) : (
            <Link className="cursor-pointer font-semibold" to={`/post/${uuid}`}>
              {" "}
              Read More
            </Link>
          )}
        </p>
      )}
    </div>
  );
}

export default Post;
