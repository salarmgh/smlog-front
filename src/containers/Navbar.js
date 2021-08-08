import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import styles from "./Navbar.module.scss";

export default function NavigationBar() {
    return (
        <Navbar expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link className={styles.navbarLinks} href="/home">Home</Nav.Link>
                <Nav.Link className={styles.navbarLinks} href="/about">About</Nav.Link>
                <Nav.Link className={styles.navbarLinks} href="/projects">Projects</Nav.Link>
                <Nav.Link className={styles.navbarLinks} href="/rss">RSS</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="mr-2"
                  aria-label="Search"
                />
                  <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
        </Navbar>
    );
}
