import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <Link to="/" className="navbar-brand">
          Product Catalog
        </Link>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </a>
              <ul class="dropdown-menu">
                {categories.map((category, index) => (
                  <li key={index}>
                    <Link class="dropdown-item" to={`/category/${category}`}>
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
