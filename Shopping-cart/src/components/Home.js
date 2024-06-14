import Burgir from "../images/Burger.jpg";
import "../styles/home.css";

function Home() {
  return (
    <div>
      <h1>Zion burger</h1>
      <img className="home-image" src={Burgir} alt="Not Found" />
      <p>Burgir</p>
    </div>
  );
}

export default Home;
