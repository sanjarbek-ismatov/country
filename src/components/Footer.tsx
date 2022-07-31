import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="copyright">
        Ushbu sayt Sanjarbek Ismatov tomonidan ishlab chiqildi!
      </div>
      <div>Barcha huquqlar himoyalangan! {new Date().getFullYear()}</div>
    </footer>
  );
};

export default Footer;
