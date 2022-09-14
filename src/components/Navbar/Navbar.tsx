import { Link } from "react-router-dom";
import module from "./Navbar.module.scss";
import logo from "./Group.png";

const Navbar: React.FC = () => {
  return (
    <div className={module.Navbar}>
      <img src={logo} className={module.Logo} />
      <Link to={"/"} className={module.linkNavbar}>
        Home
      </Link>
      <Link to={"/Catalog"} className={module.linkNavbar}>
        Catalog
      </Link>
    </div>
  );
};

export default Navbar;
