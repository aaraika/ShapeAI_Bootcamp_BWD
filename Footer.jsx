import React from "react";

function Footer(){

  var curryear = new Date().getFullYear()
  return (
   <footer>
     <p>Copyright @ 2021 {curryear}</p>
   </footer>
    );
}

export default Footer;