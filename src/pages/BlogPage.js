import React, { useState, useEffect } from 'react';
import {Container} from "react-bootstrap";
import Header from "../containers/Header";
import NavigationBar from "../containers/Navbar";
import styles from "./BlogPage.module.scss";

export default function BlogPage(props) {
    const [meta, setMeta] = useState("");
    const [navLinks, setNavLinks] = useState([]);

    useEffect(() => {
      fetch("http://localhost:8000/meta/")
        .then(res => res.json())
        .then(
          (result) => {
              setMeta(result.results[0].meta);
          },
          (error) => {
              console.log(error);
              console.log("Failed");
          }
        )
    }, []);

    useEffect(() => {
      fetch("http://localhost:8000/nav-links/")
        .then(res => res.json())
        .then(
          (result) => {
              setNavLinks(result.results);
          },
          (error) => {
              console.log(error);
              console.log("Failed");
          }
        )
    }, []);

    return (
      <React.Fragment>
        <Container>
          <Header meta={meta} />
          <NavigationBar links={navLinks} />
          <Container className={styles.content}>
            <props.component />
          </Container>
        </Container>
      </React.Fragment>
    )
}
