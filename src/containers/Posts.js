import { useState, useEffect } from 'react';
import PostOverview from "../components/PostOverview";

export default function Posts() {
    const [posts, setPosts] = useState([
      {
        id: 0,
        title: "",
        content: "",
        slug: "",
        created_at: "",
        updated_at: ""
      }
    ]);

    useEffect(() => {
      fetch("http://localhost:8000/posts/")
        .then(res => res.json())
        .then(
          (result) => {
              setPosts(result.results);
          },
          (error) => {
              console.log(error);
              console.log("Failed");
          }
        )
    }, []);
    return (
      <div>
          <PostOverview posts={posts}/>
      </div>
    )
}
