import React from 'react';
import Sidebar from './Sidebar/Sidebar';

const Dashboard = () => {
  return (
    <div className="d-flex ">
      <div className="bg-gray">
        <Sidebar></Sidebar>
      </div>
      <div> hiiiiiiiiiii dashboard</div>
    </div>
  );
};

export default Dashboard;
