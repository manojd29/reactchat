import React, { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { auth, provider } from "../firebase";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const signInWithGoogle = () => {
    auth.signInWithPopup(provider).then(() => {
      setLoading(true);
      history.push("/");
    });
  };

  console.log(loading);
  return (
    <>
      <Card>
        <Card.Body>
          <Button onClick={signInWithGoogle} className="w-100" type="submit">
            Sign In With Google
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}
