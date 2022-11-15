import React from 'react';
import Sidebar from './Sidebar/Sidebar';

const Dashboard = () => {
  return (
    <div className="d-flex ">
      <div className="w-10">
        <Sidebar></Sidebar>
      </div>
      <div className="w-75"> hiiiiiiiiiii dashboard</div>
    </div>
  );
};

export default Dashboard;
