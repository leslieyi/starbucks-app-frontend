import "semantic-ui-css/semantic.min.css";
import { Menu } from "semantic-ui-react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Aside({ setDrinksData, drinksData }) {
  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9292/categories")
      .then((r) => r.json())
      .then((data) => {
        setCategoryData(data);
      });
  }, []);

  return (
    <Menu vertical floated style={{ marginTop: "70px" }}>
      {categoryData.map((category) => (
        <div key={Math.random()}>
        <Menu.Item key={Math.random()}>
          <Menu.Header>{category.name}</Menu.Header>
          <Menu.Menu>
            {drinksData
              .filter((drink) => drink.category_id === category.id)
              .map((drink) => (
                <Menu.Item key={Math.random()}>
                  <NavLink
                    exact
                    to={`/drinks/${drink.id}`}
                    style={{ color: "grey" }}
                    activeStyle={{
                      fontWeight: "bold",
                      color: "black",
                    }}
                  >
                    {drink.name}
                  </NavLink>
                </Menu.Item>
              ))}
          </Menu.Menu>
        </Menu.Item>
        </div>
      ))}
    </Menu>

  );
}

export default Aside;
