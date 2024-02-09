import { FiHome, FiList } from "react-icons/fi";
import { menuNavLink } from "./subComponents/subComponentsIndex";

const ComponentNavigationLinks = () => {
  // Todo: update this to return different menus based on role


  return (
    <>
      {menuNavLink(<FiHome />, "/", "Dashboard")}
      {menuNavLink(<FiList />, "/all-jobs", "All jobs")}
    </>
  );
};

export default ComponentNavigationLinks;
