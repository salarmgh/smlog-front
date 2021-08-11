import React from "react";
import Posts from "../containers/Posts";
import PaginationComponent from "../components/Pagination";
import { Container } from "react-bootstrap";

export default function Home() {
    return (
      <React.Fragment>
          <Posts />
          <Container>
            <PaginationComponent />
          </Container>
      </React.Fragment>
    )
}

