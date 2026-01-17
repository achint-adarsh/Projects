import { PostList as PostListData } from "../store/post-list-store";
import Post from "./Post";
import { useContext } from "react";

const PostList = () => {
  const { postList } = useContext(PostListData);
  return (
    <>
      {postList.map((post) => (
        <Post key={post.id} post={post}/>
      ))}
    </>
  );
};

export default PostList;
