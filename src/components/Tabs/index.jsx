"use client"
import React from 'react';

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className="tabs flex w-full justify-between p-2 bg-emerald-200 ">
      {tabs.map((tab) => (
        <div
          key={tab.label}
          className={`tab w-1/2 text-center text-16 font-bold ${activeTab === tab.label ? 'active' : ''}`}
          onClick={() => setActiveTab(tab.label)}
        >
          {tab.icon} {tab.label}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
