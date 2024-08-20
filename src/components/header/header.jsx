import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Logout from "../logout";
import Logo from "../logo";
import Container from "../container/container";

// eslint-disable-next-line react/prop-types
const Header = ({ role }) => {
  const navigationConfig = [
    {
      id: uuidv4(),
      role: "teacher",
      label: "Courses",
      href: "/teacher/courses",
    },
    {
      id: uuidv4(),
      role: "teacher",
      label: "Users",
      href: "/teacher/users",
    },
    {
      id: uuidv4(),
      role: "user",
      label: "Courses",
      href: "/user/courses",
    },
    {
      id: uuidv4(),
      role: "user",
      label: "Vocabulary",
      href: "/user/vocabulary",
    },
  ];

  const currRole = navigationConfig.filter((obj) => obj.role === role);

  return (
    <header className="header">
      <Container>
        <div className="header__inner">
          <Logo />
          <nav className="header__nav">
            <ul className="header__list">
              {currRole.map((item) => (
                <li key={item.id} className="header__list-item">
                  <NavLink className="header__link" to={item.href}>
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <Logout />
        </div>
      </Container>
    </header>
  );
};

export default Header;
