import * as React from "react";
import { BiHomeAlt2 } from "react-icons/bi";
import { SlBasket } from "react-icons/sl";
import { FaRegUser } from "react-icons/fa6";
import { BiSolidCategory } from "react-icons/bi";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const [value, setValue] = React.useState("recents");

  React.useEffect(() => {
    const savedHoverState = JSON.parse(localStorage.getItem("hoverState"));
    if (savedHoverState) {
      setValue(savedHoverState);
    }
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    localStorage.setItem("hoverState", JSON.stringify(newValue));
  };
  return (
    <nav className="navigation">
      <div className="container">
        <BottomNavigation value={value} onChange={handleChange} showLabels>
          <BottomNavigationAction
            component={Link}
            to="/"
            label="Home"
            value="home"
            icon={<BiHomeAlt2 />}
          />
          <BottomNavigationAction
            component={Link}
            to="/categories"
            label="Categories"
            value="categories"
            icon={<BiSolidCategory />}
          />
          <BottomNavigationAction
            component={Link}
            to="/basket"
            label="Basket"
            value="basket"
            icon={<SlBasket />}
          />
          <BottomNavigationAction
            component={Link}
            to="/account"
            label="Account"
            value="account"
            icon={<FaRegUser />}
          />
        </BottomNavigation>
      </div>
    </nav>
  );
};
