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

  const regions = {
    southAsia: {
      name: "South Asia",
      countries: ["India", "Bangladesh", "Nepal"],
      focus: "Academic excellence, career opportunities, and affordable education"
    },
    africa: {
      name: "Africa",
      countries: ["Egypt", "Ghana", "Kenya", "Nigeria", "Libya"],
      focus: "Industry partnerships, scholarships, and post-study opportunities"
    },
    europe: {
      name: "Europe",
      countries: ["Austria", "Switzerland"],
      focus: "Research opportunities and specialized programs"
    }
  };

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
                  <li>Increase international student enrollment from targeted regions: South Asia, Africa, and Europe</li>
                  <li>Build brand awareness in 10 key countries across three regions</li>
                  <li>Generate qualified leads through region-specific social media campaigns</li>
                  <li>Establish University of Bolton as a preferred UK study destination</li>
                </ul>
              </div>
              <div>
                <h3 className="section-subtitle">Budget Allocation</h3>
                <ul className="list-container">
                  <li>Daily budget: $20 per region</li>
                  <li>Campaign duration: 15 days initial test phase</li>
                  <li>Total investment: $600</li>
                </ul>
              </div>
            </div>
          </TabContent>
        )}

        {activeTab === 'regions' && (
          <TabContent title="Regional Strategy">
            <div className="space-y-6">
              {Object.entries(regions).map(([key, region]) => (
                <div key={key} className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="section-subtitle text-blue-600">{region.name}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2">Target Countries</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {region.countries.map(country => (
                          <li key={country}>{country}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Strategic Focus</h4>
                      <p className="text-gray-700">{region.focus}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabContent>
        )}

        {activeTab === 'campaign' && (
          <TabContent title="Campaign Structure">
            <div className="space-y-4">
              <div>
                <h3 className="section-subtitle">Regional Ad Variations</h3>
                <div className="grid gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-medium mb-2">South Asia Campaign</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Focus on academic excellence and career prospects</li>
                      <li>Highlight affordable education compared to other UK universities</li>
                      <li>Showcase successful alumni from the region</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-medium mb-2">Africa Campaign</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Emphasize industry partnerships and job placement rates</li>
                      <li>Feature scholarship opportunities and student support</li>
                      <li>Highlight success stories from African graduates</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-medium mb-2">Europe Campaign</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Focus on research opportunities and specialized programs</li>
                      <li>Highlight cultural exchange and international environment</li>
                      <li>Showcase facility excellence and innovation</li>
                    </ul>
                  </div>
                </div>
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
                  <li>Launch region-specific campaigns in all target countries</li>
                  <li>Monitor initial performance metrics by country</li>
                  <li>Track engagement rates across different regions</li>
                  <li>Analyze cost variations between markets</li>
                </ul>
              </div>
              <div>
                <h3 className="section-subtitle">Phase 2: Days 8-15</h3>
                <ul className="list-container">
                  <li>Scale successful variations by region</li>
                  <li>Optimize targeting based on Week 1 data</li>
                  <li>Adjust messaging for underperforming markets</li>
                  <li>Prepare region-specific expansion plans</li>
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