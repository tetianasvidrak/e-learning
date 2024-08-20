import LogoutIcon from "../../assets/icons/logout.svg?react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/auth-slice";

const Logout = () => {
  const dispatch = useDispatch();

  const onHandlerLogout = () => dispatch(logout());
  return (
    <button className="logout" type="button" onClick={onHandlerLogout}>
      <span className="logout__text">Log out</span>
      <LogoutIcon className="logout__icon" />
    </button>
  );
};

export default Logout;
