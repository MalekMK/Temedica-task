import React from 'react';
import {  Link } from '@mui/material';

const Header = () => {
  return (
    <div style={{ display: 'flex', marginTop: 50 }}>
      <div style={{ display: 'inline-flex', flexGrow: 1 }}>
        <img alt="" src="logo.png" style={{ width: 50, height: 50 }} />
      </div>
      <Link href="https://temedica.com/en/"  underline="hover">external link</Link>
    </div>
  );
}

export { Header };
