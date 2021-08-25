import "semantic-ui-css/semantic.min.css";
import { Menu } from "semantic-ui-react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Aside({setDrinksData, drinksData}) {
  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9292/categories")
      .then((r) => r.json())
      .then((data) => {
        setCategoryData(data);
      });
  }, []);



  return (
    <Menu vertical floated='left'style={{marginTop:"80px"}}>
      {categoryData.map((category) => (
        <Menu.Item key={Math.random()}>
          <Menu.Header>{category.name}</Menu.Header>
          <Menu.Menu >
            {drinksData
              .filter((drink) => drink.category_id === category.id)
              .map((drink) => ( 
                <NavLink exact to={`/drinks/${drink.id}`} >
                  <Menu.Item key={drink.index} >{drink.name}</Menu.Item>
                </NavLink>
              ))}
          </Menu.Menu>
        </Menu.Item>
      ))}
    </Menu>
    )

}

export default Aside;
