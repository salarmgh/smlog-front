import React from "react";
import {Container} from "react-bootstrap";
import Header from "../containers/Header";
import NavigationBar from "../containers/Navbar";
import styles from "./BlogPage.module.scss";

export default function BlogPage(props) {
    return (
      <React.Fragment>
        <Container>
          <Header />
          <NavigationBar />
          <Container className={styles.content}>
            <props.component />
          </Container>
        </Container>
      </React.Fragment>
    )
}
