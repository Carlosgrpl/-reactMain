import Card from "./Card";

function Card({ user }) {
  const [stylecss, setStylecss] = useState("hidden");

  const handleClick = () => {
    setStylecss("visibility");
  };
  return (
    <>
      <button onClick={handleClick}> Previsualizar </button>
      <section className={stylecss}>
        <h3>
          {user.name} {user.lastName}
        </h3>
        <h4>{user.email}</h4>
      </section>
    </>
  );
}

export default Card;
