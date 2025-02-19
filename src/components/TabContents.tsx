'use client';

import React from 'react';

export interface TabContentProps {
  title: string;
  children: React.ReactNode;
}

const TabContent: React.FC<TabContentProps> = ({ title, children }) => (
  <div className="content-card">
    <h2 className="section-title">{title}</h2>
    {children}
  </div>
);

export default TabContent;