import { cilPuzzle, cilShieldAlt, cilSpeedometer } from '@coreui/icons';
import CIcon from '@coreui/icons-react';

import {
  CNavGroup,
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
          <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
          Nav item
        </CNavItem>
        <CNavItem href="#">
          <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
          With badge
          {/* <CBadge color="primary ms-auto">NEW</CBadge> */}
        </CNavItem>
        <CNavGroup toggler="Nav dropdown">
          <CNavItem href="#">
            <CIcon customClassName="nav-icon" icon={cilPuzzle} /> Nav dropdown
            item
          </CNavItem>
          <CNavItem href="#">
            <CIcon customClassName="nav-icon" icon={cilPuzzle} /> Nav dropdown
            item
          </CNavItem>
        </CNavGroup>
      </CSidebarNav>
      <CSidebarToggler />
    </CSidebar>
  );
};

export default Sidebar;
