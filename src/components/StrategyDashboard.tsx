"use client"

import React, { useState } from 'react';
import { BarChart, Target, Users, Globe, Calendar } from 'lucide-react';

interface TabContentProps {
  title: string;
  children: React.ReactNode;
}

const TabContent: React.FC<TabContentProps> = ({ title, children }) => (
  <div className="content-card">
    <h2 className="section-title">{title}</h2>
    {children}
  </div>
);

export const StrategyDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Target },
    { id: 'audience', label: 'Target Audience', icon: Users },
    { id: 'campaign', label: 'Campaign', icon: BarChart },
    { id: 'regions', label: 'Regions', icon: Globe },
    { id: 'timeline', label: 'Timeline', icon: Calendar },
  ];

  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-md mb-6 overflow-hidden">
        <div className="bg-blue-600 text-white p-6">
          <h1 className="text-2xl font-bold">International Student Recruitment Strategy</h1>
          <p className="text-gray-100">University of Bolton</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex mb-6 bg-white rounded-lg shadow-sm">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`dashboard-tab ${activeTab === id ? 'active' : ''}`}
          >
            <Icon size={16} />
            {label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="space-y-6">
        {activeTab === 'overview' && (
          <TabContent title="Campaign Overview">
            <div className="space-y-4">
              <div>
                <h3 className="section-subtitle">Campaign Objectives</h3>
                <ul className="list-container">
                  <li>Increase international student enrollment from Asia and Africa</li>
                  <li>Build brand awareness in target regions</li>
                  <li>Generate qualified leads through social media campaigns</li>
                  <li>Establish University of Bolton as a preferred UK study destination</li>
                </ul>
              </div>
              <div>
                <h3 className="section-subtitle">Budget Allocation</h3>
                <ul className="list-container">
                  <li>Daily budget: $40 ($20 per region)</li>
                  <li>Campaign duration: 15 days</li>
                  <li>Total investment: $600</li>
                </ul>
              </div>
            </div>
          </TabContent>
        )}

        {activeTab === 'audience' && (
          <TabContent title="Target Audience">
            <div className="grid-container">
              <div>
                <h3 className="section-subtitle">Asia Focus</h3>
                <ul className="list-container">
                  <li>Primary markets: India, Malaysia</li>
                  <li>Age range: 17-30</li>
                  <li>Education level: Secondary completion and above</li>
                  <li>Interests: UK education, study abroad</li>
                </ul>
              </div>
              <div>
                <h3 className="section-subtitle">Africa Focus</h3>
                <ul className="list-container">
                  <li>Primary markets: Nigeria, Ghana</li>
                  <li>Age range: 17-30</li>
                  <li>Education level: Secondary completion and above</li>
                  <li>Interests: UK education, study abroad</li>
                </ul>
              </div>
            </div>
          </TabContent>
        )}

        {activeTab === 'campaign' && (
          <TabContent title="Campaign Structure">
            <div className="space-y-4">
              <div>
                <h3 className="section-subtitle">Ad Variations</h3>
                <ul className="list-container">
                  <li>
                    <span className="font-medium">Campus/Facilities Focus:</span>
                    <br />Modern facilities, technology labs, and campus life
                  </li>
                  <li>
                    <span className="font-medium">Career Outcomes Focus:</span>
                    <br />Employment rates, industry partnerships, and career support
                  </li>
                  <li>
                    <span className="font-medium">Student Testimonial Focus:</span>
                    <br />Success stories from current international students
                  </li>
                </ul>
              </div>
            </div>
          </TabContent>
        )}

        {activeTab === 'regions' && (
          <TabContent title="Regional Strategy">
            <div className="grid-container">
              <div>
                <h3 className="section-subtitle">Asia Strategy</h3>
                <ul className="list-container">
                  <li>Expected daily reach: 2,000-3,000</li>
                  <li>Estimated CPM: $5-7</li>
                  <li>Focus: Academic excellence, facilities</li>
                </ul>
              </div>
              <div>
                <h3 className="section-subtitle">Africa Strategy</h3>
                <ul className="list-container">
                  <li>Expected daily reach: 3,000-4,000</li>
                  <li>Estimated CPM: $3-5</li>
                  <li>Focus: Affordability, career outcomes</li>
                </ul>
              </div>
            </div>
          </TabContent>
        )}

        {activeTab === 'timeline' && (
          <TabContent title="Campaign Timeline">
            <div className="space-y-4">
              <div>
                <h3 className="section-subtitle">Phase 1: Days 1-7</h3>
                <ul className="list-container">
                  <li>Launch all ad variations</li>
                  <li>Monitor initial performance</li>
                  <li>Gather engagement data</li>
                  <li>Track regional performance</li>
                </ul>
              </div>
              <div>
                <h3 className="section-subtitle">Phase 2: Days 8-15</h3>
                <ul className="list-container">
                  <li>Scale successful variations</li>
                  <li>Optimize targeting</li>
                  <li>Adjust messaging based on data</li>
                  <li>Prepare for campaign expansion</li>
                </ul>
              </div>
            </div>
          </TabContent>
        )}
      </div>
    </div>
  );
};

export default StrategyDashboard;