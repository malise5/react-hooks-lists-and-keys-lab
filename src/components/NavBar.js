import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const navigation = links.map((link)=> (<a key={link} href={"#" + link}>{link}</a>));

  return <nav>{navigation} </nav>;
}

export default NavBar;
