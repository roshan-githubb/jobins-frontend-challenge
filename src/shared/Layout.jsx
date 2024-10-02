import PropTypes from "prop-types";
import Sidebar, { SidebarItem } from "./Sidebar";
import { _sideNavMenuLists } from "../pages/dashboard/constants";

const Layout = function Layout({ children }) {

  return (
    <div className="flex">
      <Sidebar>
        {_sideNavMenuLists?.map(({ name = "", isTitle = false, active = false, icon = "" }, _index) => (
          <SidebarItem icon={icon} text={name} active={active} isTitle={isTitle} key={_index} />
        ))}
      </Sidebar>
    {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
