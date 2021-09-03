import { Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";

import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import ReseauSociauxPage from "../Users/ReseauxSociaux";
import validate from "./validation";

const ConnexionPagee = ({ setLoggedUser }) => {
  const history = useHistory();
  const [checked, setChecked] = useState({});
  const [error, setError] = useState("");

  const [user, setUser] = useState({
    email: "",
    password: "",
    auth: true,
  });
  const handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;

    setUser({ ...user, [name]: value });
  };

  // PROPOSITION DE JULIEN
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log();

    const { data } = await axios.get("http://localhost:3060/users");
    const exist = data.find(
      (u) =>
        u.email === user.email &&
        u.password === user.password &&
        u.auth === user.auth
    );
    if (exist) {
      console.log(exist);
      setLoggedUser({
        ...user,
        isAuthenticated: true,
        firstname: exist.firstname,
        role: exist.role,
        entreprise: exist.entreprise,
      });
      history.push("/");
    } else {
      setLoggedUser(null);
      setError("Identifiants incorrects");
    }
  };

  return (
    <div className={"container mt-5 main"}>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name={"email"} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Mot de passe</Form.Label>
          <Form.Control
            type="password"
            name={"password"}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Envoyer
        </Button>
        <Link to="/ValidationPass">Mot de passe oublié?</Link>
      </Form>
      {error && <p className={"text-danger"}>{error}</p>}

      <div className="reseauSociauxCnx">
        <ReseauSociauxPage />
      </div>
    </div>
  );
};

export default ConnexionPagee;
