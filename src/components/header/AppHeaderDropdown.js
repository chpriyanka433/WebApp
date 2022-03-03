import React from 'react';
import {
  //CAvatar,
  //CBadge,
  CDropdown,
  //CDropdownDivider,
  //CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react';
import {
  cilLockLocked,
} from '@coreui/icons';
import CIcon from '@coreui/icons-react';
//import avatar8 from './../../assets/images/avatars/8.jpg';

const AppHeaderDropdown = () => {
  const user = JSON.parse(localStorage.getItem('userInfo'));
  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CIcon icon={cilLockLocked} className="me-2" />
        Admin Login
        {/* <CAvatar src={avatar8} size="md" />*/}

      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem href="#">
          <CIcon  className="me-2"
            to='/'
            onClick={() => {
              window.location.href = '/Login';
            }}
          />
          Log out
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};

export default AppHeaderDropdown;
