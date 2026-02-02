import { createContext } from "react";
import postsData from "../data/posts.json";

export const PostsContext = createContext([]);

export function PostsProvider({ children }) {
  
  return (
    <PostsContext.Provider value={postsData.posts || []}>
      {children}
    </PostsContext.Provider>
  );
}
