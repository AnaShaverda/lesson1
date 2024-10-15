import logo from "../image/logo.webp";
import styles from "../Header/Header.module.css";
import NavList from "./NavList";

// const myStyles = {
//   navigation: {
//     backgroundColor: "red",
//   },
//   ul: {
//     color: "yellow",
//   },
// };

const Header = () => {
  return (
    <>
      <header className={styles.displayFlex}>
        <img src={logo} alt="logo" className={styles.image} />
        <nav>
          <ul className={styles.ul}>
            <NavList name="home" />
            <NavList name="contact" />
            <NavList name="blog" />
            <NavList />
          </ul>
        </nav>
      </header>
    </>
  );
};
export default Header;
