'use client';

import React from 'react';

export interface TabContentProps {
  title: string;
  children: React.ReactNode;
}

const TabContent: React.FC<TabContentProps> = ({ title, children }) => (
  <div className="bg-white rounded-lg shadow-sm p-3 sm:p-6">
    <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-6">{title}</h2>
    <div className="space-y-4">
      {children}
    </div>
  </div>
);

export default TabContent;