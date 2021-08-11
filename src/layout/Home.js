import React, {useEffect, useState} from "react";
import Posts from "../containers/Posts";
import Pagination from "../components/Pagination";
import { Container } from "react-bootstrap";

export default function Home() {
    const [posts, setPosts] = useState({
        count: 0,
        results: []
    });

    useEffect(() => {
      fetch("http://localhost:8000/posts/")
        .then(res => res.json())
        .then(
          (result) => {
              setPosts(result);
          },
          (error) => {
              console.log(error);
              console.log("Failed");
          }
        )
    }, []);

    return (
      <React.Fragment>
          <Posts posts={posts.results} />
          <Container>
            <Pagination count={posts.count} current={1} />
          </Container>
      </React.Fragment>
    )
}

