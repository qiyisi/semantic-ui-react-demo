import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <nav>
        <ul style={{ listStyle: "none" }}>
          <li>
            <Link to="/button">Button</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
