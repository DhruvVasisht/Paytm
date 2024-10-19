import React from 'react';
import Balance from '../components/Balance';
import AppBar from '../components/AppBar';
import Users from '../components/Users';

function MainPage() {
  return (
    <div>
      <AppBar/>
      <div className='m-8'>
        <Balance value={"10,000"} />
        <Users/>
      </div>
    </div>
  );
}

export default MainPage;
