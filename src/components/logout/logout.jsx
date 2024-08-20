import LogoutIcon from "../../assets/icons/logout.svg?react";

const Logout = () => {
  return (
    <button className="logout">
      <span className="logout__text">Log out</span>
      <LogoutIcon className="logout__icon" />
    </button>
  );
};

export default Logout;
