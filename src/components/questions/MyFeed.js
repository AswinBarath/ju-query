import React, { useState, useEffect } from "react";
// import QueryBox from '../querybox/QueryBox';
import Post from "../post/Post";
import db from "../../firebase";
import "./MyFeed.css";
import { selectUser } from "../../features/userSlice";
import { useSelector } from "react-redux";

function MyFeed() {
  const currentUser = useSelector(selectUser);

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("questions")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs
            .filter(function (doc) {
                /* debug console */
              console.log(
                doc.data().user.email === currentUser.email,
                doc.data().user.email,
                "===",
                currentUser.email,
                doc.data().user.display === currentUser.display,
                doc.data().user.display,
                "===",
                currentUser.display
              );
              /* debug console */
              if (doc.data().user.email === currentUser.email) {
                return true;
              } else if (doc.data().user.display === currentUser.display) {
                return true;
              } else {
                return false;
              }
            })
            .map(function (doc) {
              return {
                id: doc.id,
                question: doc.data(),
              };
            })
        )
      );
  });

  return (
    <div className="feed">
      <h2>Your Questions</h2>
      {posts.map(({ id, question }) => (
        <Post
          key={id}
          id={id}
          imageUrl={question.imageUrl}
          question={question.question}
          timestamp={question.timestamp}
          JuUser={question.user}
        />
      ))}
    </div>
  );
}

export default MyFeed;
