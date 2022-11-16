import { cil3d, cilShieldAlt } from '@coreui/icons';
import CIcon from '@coreui/icons-react';

import {
  CNavItem,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarToggler,
} from '@coreui/react';

import React from 'react';

const Sidebar = () => {
  return (
    <CSidebar style={{ height: '100vh', backgroundColor: '#1a2238' }}>
      <CSidebarBrand>
        {' '}
        <CIcon icon={cilShieldAlt} size="xl" /> &nbsp; Admin Dashboard
      </CSidebarBrand>
      <CSidebarNav>
        <CNavItem href="#">
          <CIcon customClassName="nav-icon" icon={cil3d} />
          See All packages
        </CNavItem>
        <CNavItem href="#">
          <CIcon customClassName="nav-icon" icon={cil3d} /> Add a new package
        </CNavItem>
        <CNavItem href="#">
          <CIcon customClassName="nav-icon" icon={cil3d} />
          Manage Orders
        </CNavItem>
        <CNavItem href="#">
          <CIcon customClassName="nav-icon" icon={cil3d} />
          Create Admin
          {/* <CBadge color="primary ms-auto">NEW</CBadge> */}
        </CNavItem>
      </CSidebarNav>
      <CSidebarToggler />
    </CSidebar>
  );
};

export default Sidebar;
