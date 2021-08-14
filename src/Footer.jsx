import React from "react";

var today = new Date();
var current_year = today.getFullYear();

function Footer() {
    return <footer><p>Copyright @ {current_year}</p></footer>
}
export default Footer;