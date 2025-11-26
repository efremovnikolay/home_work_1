import React from "react";
import PostCard from "../../entities/post/ui/PostCard";

type Post = {
  id: number;
  title: string;
  body: string;
};

function PostList() {
  const posts: Post[] = [
    { id: 1, title: "Пост 1", body: "Это текст поста 1" },
    { id: 2, title: "Пост 2", body: "Это текст поста 2" },
    { id: 3, title: "Пост 3", body: "Это текст поста 3" },
  ];

  return (
    <div>
      {posts.map((post) => (
        <PostCard key={post.id} title={post.title} body={post.body} />
      ))}
    </div>
  );
}

export default PostList;
