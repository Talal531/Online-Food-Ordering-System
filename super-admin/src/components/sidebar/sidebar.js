import React from 'react';
// import './sidebar.css';
import { Label, Menu, Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const SideBarMenu = [
  {
    name: "dashboard", //use small letters
    displayName: "Dashboard",
    labelColor: "teal",
    labelQuantity: 3,
    iconName: "dashboard",
    linkTo: "/dashboard",
  },
  {
    name: "admins", //use small letters
    displayName: "Admins",
    labelColor: "teal",
    labelQuantity: 10,
    iconName: "users",
    linkTo: "/admins",
  },
  {
    name: "restaurants", //use small letters
    displayName: "Restaurants",
    labelColor: "green",
    labelQuantity: 140,
    iconName: "food",
    linkTo: "/restaurants",
  },
  {
    name: "orders", //use small letters
    displayName: "Orders",
    labelColor: "red",
    labelQuantity: 103,
    iconName: "food",
    linkTo: "/orders",
  },
  {
    name: "cuisines", //use small letters
    displayName: "Users",
    labelColor: "blue",
    labelQuantity: 55,
    iconName: "users",
    linkTo: "/users",
  },
  {
    name: "users", //use small letters
    displayName: "Cuisines",
    labelColor: "orange",
    labelQuantity: 55,
    iconName: "tags",
    linkTo: "/cuisines",
  },
  {
    name: "reports", //use small letters
    displayName: "Reports",
    labelColor: "grey",
    labelQuantity: "34",
    iconName: "file text",
    linkTo: "/reports",
  },
  {
    name: "settings", //use small letters
    displayName: "Settings",
    labelColor: "grey",
    labelQuantity: "34",
    iconName: "settings",
    linkTo: "/setting",
  },
  {
    name: "signout", //use small letters
    displayName: "Sign Out",
    labelColor: "red",
    labelQuantity: "0",
    iconName: "sign out",
    linkTo: "/signout",
  },
]

const renderSideBar = () => {
  return (
    SideBarMenu.map(( menu, index ) => {

      return (
        <div key={index}>
        <Menu.Item as={NavLink} to={menu.linkTo} style={{padding: 5}}>
            <Menu.Item name={menu.name} >
              <Label color={menu.labelColor}>{menu.labelQuantity}</Label>
              <Icon name={menu.iconName} />
                {menu.displayName}
            </Menu.Item>
          </Menu.Item>
        </div>
      )
    })
  )
}


const SideBar = () => {

  return (
    <div className="sidebar_container">
        <Menu size="large" vertical inverted pointing>
          {renderSideBar()}
        </Menu>
    </div>
  )
}

export default SideBar;
