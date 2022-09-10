import React from "react";

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Chat</span>
      <div className='user'>
        <img
          src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
          alt=''
        />
        <span>Murat</span>
        <button>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
