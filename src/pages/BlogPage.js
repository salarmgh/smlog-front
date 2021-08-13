import React, { useState, useEffect } from 'react';
import {Container} from "react-bootstrap";
import Header from "../containers/Header";
import NavigationBar from "../containers/Navbar";
import styles from "./BlogPage.module.scss";

export default function BlogPage(props) {
    const backendUrl = process.env.REACT_APP_BACKEND_BASE_URL;
    const [meta, setMeta] = useState("");
    const [navLinks, setNavLinks] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
      fetch(`${backendUrl}/meta/`)
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
      fetch(`${backendUrl}/nav-links/`)
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

    useEffect(() => {
        fetch(`${backendUrl}/categories/`)
          .then(res => res.json())
            .then(
              (result) => {
                setCategories(result.results);
              }
            )
    }, [])

    return (
      <React.Fragment>
        <Container>
          <Header meta={meta} />
          <NavigationBar links={navLinks} categories={categories} />
          <Container className={styles.content}>
            <props.component />
          </Container>
        </Container>
      </React.Fragment>
    )
}
