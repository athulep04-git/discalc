import React from 'react';

function Footer() {
  return (
    <footer
      className="text-center py-3 mt-4 "
      style={{
        backgroundColor: '#359944ff',
        color: 'white',
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
      }}
    >
      ©All Rights Reserved
    </footer>
  );
}

export default Footer;
