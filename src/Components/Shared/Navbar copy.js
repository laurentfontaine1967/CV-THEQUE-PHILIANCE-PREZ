import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Image } from "react-bootstrap";

class BootstrapNavbar extends React.Component {
  render() {
    return (
      <div className="mb-4">
        <div className="row">
          <div className="col-md-12 ">
            <Navbar
              id="navbar"
              bg="secondary"
              variant="dark"
              expand="lg"
              sticky="top"
            >
              <Navbar.Brand href="/Home">
                <Image
                  src="/images/logo_philiance_sourcing.png"
                  widht="50"
                  height="50"
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto ">
                  <Nav.Link as={Link} to="/Home">
                    Accueil
                  </Nav.Link>
                  <Nav.Link as={Link} to="/Inscription">
                    S'inscrire
                  </Nav.Link>
                  <Nav.Link as={Link} to="/Connexion">
                    Se connecter
                  </Nav.Link>
                  <Nav.Link as={Link} to="/Profil">
                    Profil
                  </Nav.Link>
                  <Nav.Link as={Link} to="/Test">
                    Test
                  </Nav.Link>
                  <Nav.Link as={Link} to="/MonProfilCv">
                    Profil details
                  </Nav.Link>
                  <Nav.Link as={Link} to="/ProfilEntreprise">
                    Profil Entreprise
                  </Nav.Link>
                  <Nav.Link as={Link} to="/RechercherCv">
                    Rechercher un CV
                  </Nav.Link>
                  <Nav.Link as={Link} to="/Validation">
                    Validation
                  </Nav.Link>
                  <Nav.Link as={Link} to="/Validationpass">
                    ValidationPass
                  </Nav.Link>
                  <Nav.Link as={Link} to="/ListUser">
                    Les utilisateurs
                  </Nav.Link>
                  <Nav.Link as={Link} to="/Email">
                    Les emails
                  </Nav.Link>
                  <Nav.Link as={Link} to="/PresentationCV">
                    CV philiance
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </div>
      </div>
    );
  }
}

export default BootstrapNavbar;
