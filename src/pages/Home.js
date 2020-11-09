import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <nav>
        <ul style={{ listStyle: "none" }}>
          <li>
            <Link to="/button">Button</Link>
          </li>
          <li>
            <Link to="/container">Contianer</Link>
          </li>
          <li>
            <Link to="/divider">Divider</Link>
          </li>
          <li>
            <Link to="/header">Header</Link>
          </li>
          <li>
            <Link to="/image">Image</Link>
          </li>
          <li>
            <Link to="/input">Input</Link>
          </li>
          <li>
            <Link to="/label">Label</Link>
          </li>
          <li>
            <Link to="/list">List</Link>
          </li>
          <li>
            <Link to="/loader">Loader</Link>
          </li>
          <li>
            <Link to="/placeholder">Placeholder</Link>
          </li>
          <li>
            <Link to="/rail">Rail</Link>
          </li>
          <li>
            <Link to="/reveal">Reveal</Link>
          </li>
          <li>
            <Link to="/step">Step</Link>
          </li>
          <li>
            <Link to="/breadcrumb">Breadcrumb</Link>
          </li>
          <li>
            <Link to="/form">Form</Link>
          </li>
          <li>
            <Link to="/grid">Grid</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
