import {useState} from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import {Redirect} from 'react-router-dom';
import styles from "./Navbar.module.scss";

export default function NavigationBar(props) {
    const [redirect, setRedirect] = useState(false);
    const [searchQuery, setSearchQuery] = useState(null);

    function searchHandler() {
      setRedirect(true);
    }

    function searchTextHandler(event) {
        setSearchQuery(event.target.value);
    }

    if(redirect) {
      return <Redirect to={`/search?q=${searchQuery}`} />
    } else {
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
                <NavDropdown title="دسته ها" id="basic-nav-dropdown" className={styles.navbarLinks} >
                  {
                    props.categories.map((category, index) => {
                      return <NavDropdown.Item key={index} className={styles.navbarLinks} href={`/category/${category.name}`}>{category.name}</NavDropdown.Item>
                    })
                  }
                 </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  className="mr-2"
                  aria-label="Search"
                  onChange={searchTextHandler}
                />
                  <Button variant="outline-dark" onClick={searchHandler}><i class="bi bi-search"></i></Button>
              </Form>
            </Navbar.Collapse>
        </Navbar>
    ); 
  }
}
