import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import styles from "./Navbar.module.scss";

export default function NavigationBar(props) {
    return (
        <Navbar expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                  {
                    props.links.map((navLink, index) => {
                      return <Nav.Link key={index} className={styles.navbarLinks} href={navLink.link}>{navLink.name}</Nav.Link>
                    })
                  }
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="جست و جو"
                  className="mr-2"
                  aria-label="Search"
                />
                  <Button variant="outline-dark">جست و جو</Button>
              </Form>
            </Navbar.Collapse>
        </Navbar>
    );
}
