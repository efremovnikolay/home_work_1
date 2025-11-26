import React from "react";

type PostCardProps = {
  title: string;
  body: string;
};

function PostCard({ title, body }: PostCardProps) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
}

export default PostCard;
