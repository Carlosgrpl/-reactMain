import Register from "./Register";
import scssStyle from "../scss/index.scss";
import { useState } from "react";

function App() {
  const title = "Registro de usuario";
  const message = {
    msg: "Registro exitoso",
    error: "Error al registrarse",
  };
  const [isLight, setIsLight] = useState(true);
  return (
    <>
      <section className={isLight ? "light" : "dark"}>
        <h1>Eventos</h1>
        <Register title={title} texto="Soy una props" textMessage={message} />
      </section>
    </>
  );
}
export default App;
