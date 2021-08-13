import React, {useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import Posts from "../containers/Posts";
import Pagination from "../components/Pagination";
import { Container } from "react-bootstrap";

export default function Home() {
    const backendUrl = process.env.REACT_APP_BACKEND_BASE_URL;
    let query = new URLSearchParams(useLocation().search);
    const searchQuery = query.get("q")
    const pageNumber = query.get("page") ? parseInt(query.get("page")) : 1

    const [posts, setPosts] = useState({
        count: 0,
        results: []
    });

    useEffect(() => {
      fetch(`${backendUrl}/search/?page=${pageNumber}&search=title:${searchQuery}&search=content:${searchQuery}`)
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
    }, [searchQuery]);

    return (
      <React.Fragment>
          <Posts posts={posts.results} />
          <Container>
            <Pagination count={Math.ceil(posts.count / 10)} current={pageNumber} />
          </Container>
      </React.Fragment>
    )
}

