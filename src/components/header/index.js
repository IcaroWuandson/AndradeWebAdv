import React from "react";
import { Image } from "react-native";
import { styles } from "./styles"; // Importe os estilos se necessário
import Logo from "../../assets/logoAndrade.jpeg";

const Header = () => {
  return <Image source={Logo} style={styles.logo} />;
};

export default Header;
