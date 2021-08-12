import React, {useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import Posts from "../containers/Posts";
import Pagination from "../components/Pagination";
import { Container } from "react-bootstrap";

export default function Home() {
    let query = new URLSearchParams(useLocation().search);
    const pageNumber = query.get("page") ? parseInt(query.get("page")) : 1

    const [posts, setPosts] = useState({
        count: 0,
        results: []
    });

    useEffect(() => {
      fetch(`http://localhost:8000/posts/?page=${pageNumber}`)
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
            <Pagination count={Math.ceil(posts.count / 10)} current={pageNumber} />
          </Container>
      </React.Fragment>
    )
}

