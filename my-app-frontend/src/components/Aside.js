import "semantic-ui-css/semantic.min.css";
import { Menu } from "semantic-ui-react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Aside() {
  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9292/categories")
      .then((r) => r.json())
      .then((data) => {
        setCategoryData(data);
      });
  }, []);

  const [drinksData, setDrinksData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9292/drinks")
      .then((r) => r.json())
      .then((data) => {
        setDrinksData(data);
      });
  }, []);

  return (

    <Menu vertical floated='left' width={5}>
      {categoryData.map((category) => (
        <Menu.Item>
          <Menu.Header>{category.name}</Menu.Header>
          <Menu.Menu>
            {drinksData
              .filter((drink) => drink.category_id == category.id)
              .map((drink) => (
                <NavLink to={`/drinks/${drink.id}`} >
                  <Menu.Item>{drink.name}</Menu.Item>
                </NavLink>
              ))}
          </Menu.Menu>
        </Menu.Item>
      ))}
    </Menu>
    )

}

export default Aside;
