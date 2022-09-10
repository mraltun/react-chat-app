import React from "react";

const Search = () => {
  return (
    <div className='search'>
      <div className='searchForm'>
        <input type='text' placeholder='find a user' />
      </div>
      <div className='userChat'>
        <img
          src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
          alt=''
        />
        <div className='userChatInfo'>
          <span>Jane</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
