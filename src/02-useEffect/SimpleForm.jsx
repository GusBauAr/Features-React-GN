import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "gustavo",
    email: "gustavopgb21@gmail.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    //este es un objeto
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  //useEffect---> sirve para disparar efectos secundarios
  //como cualquier hook es una funcion, esto recibe una funcion como argumento
  useEffect(() => {
    // console.log("useEffect called");
  }, []); //este es un arreglo de dependencias vacio, un arreglo vacio hace que se ejecute una sola vez

  useEffect(() => {
    // console.log("formState changed");
  }, [formState]);

  useEffect(() => {
    // console.log("email changed");
  }, [email]);

  // useEffect(() => {
  //   first

  //   return () => {
  //     second
  //   }
  // }, [third])

  return (
    <>
      <h1> Formulario Simple</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="gustavo@gmail.com"
        name="email"
        value={email}
        onInput={onInputChange}
      />
      {
        (username === 'gustavo2') && <Message />
      }
      
    </>
  );
};
