import { Link } from "react-router-dom";
import style from "./header.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <div>
        <div className={style.site_logo}>
          <Link to="/">TODO APP</Link>
        </div>
        <nav className={style.nav}>
          <Link to="/regist">할일등록</Link>
          <Link to="#">메뉴2</Link>
          <Link to="/sensor">IoT모니터링</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
