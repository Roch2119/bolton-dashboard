import React, { useState } from 'react';
import { BarChart, Target, Users, Globe, Calendar } from 'lucide-react';

/* --- Tab Content Component --- */
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

/* --- Global Notes Component --- */
interface Note {
  id: number;
  text: string;
}

const Notes: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [newNote, setNewNote] = useState('');

  const handleAddNote = () => {
    if (newNote.trim() === '') return;
    const note: Note = {
      id: Date.now(),
      text: newNote,
    };
    setNotes([...notes, note]);
    setNewNote('');
  };

  const handleDeleteNote = (id: number) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="notes-section mt-8 border-t pt-4">
      <h2 className="text-2xl font-bold mb-4">Notes</h2>
      <ul className="mb-4">
        {notes.map((note) => (
          <li key={note.id} className="flex items-center justify-between mb-2">
            <span>{note.text}</span>
            <button
              onClick={() => handleDeleteNote(note.id)}
              className="text-red-500 ml-2"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <div className="flex">
        <input
          type="text"
          placeholder="Add a note..."
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          className="flex-grow border p-2 rounded-l"
        />
        <button
          onClick={handleAddNote}
          className="bg-blue-500 text-white p-2 rounded-r"
        >
          Add
        </button>
      </div>
    </div>
  );
};

/* --- Strategy Dashboard Component --- */
export const StrategyDashboard: React.FC = () => {
  // Remove owner-only restrictions; Notes will be visible to everyone.
  const [activeTab, setActiveTab] = useState('overview');

  const regions = {
    southAsia: {
      name: 'South Asia',
      countries: ['India', 'Bangladesh', 'Nepal'],
      focus:
        'Academic excellence, career opportunities, and affordable education',
    },
    africa: {
      name: 'Africa',
      countries: ['Egypt', 'Ghana', 'Kenya', 'Nigeria', 'Libya'],
      focus:
        'Industry partnerships, scholarships, and post-study opportunities',
    },
    europe: {
      name: 'Europe',
      countries: ['Austria', 'Switzerland'],
      focus: 'Research opportunities and specialized programs',
    },
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
          <h1 className="text-2xl font-bold">
            International Student Recruitment Strategy
          </h1>
          <p className="text-gray-100">University of Greater Manchester</p>
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

      {/* Tab Content */}
      <div className="space-y-6">
        {activeTab === 'overview' && (
          <TabContent title="Campaign Overview">
            <div className="space-y-4">
              {/* Campaign Objectives */}
              <div>
                <h3 className="section-subtitle">Campaign Objectives</h3>
                <ul className="list-container">
                  <li>
                    Increase international student enrollment from targeted
                    regions: South Asia, Africa, and Europe
                  </li>
                  <li>
                    Build brand awareness in 10 key countries across three regions
                  </li>
                  <li>
                    Generate qualified leads through region-specific social media
                    campaigns
                  </li>
                  <li>
                    Establish University of Greater Manchester as a preferred UK
                    study destination
                  </li>
                </ul>
              </div>
              {/* Budget Allocation */}
              <div>
                <h3 className="section-subtitle">Budget Allocation</h3>
                <ul className="list-container">
                  <li>Total Daily Budget: $100</li>
                  <li>
                    South Asia Region: $35/day (India: $15, Bangladesh: $10, Nepal: $10)
                  </li>
                  <li>
                    Africa Region: $45/day (Egypt: $10, Ghana: $8, Kenya: $8, Nigeria: $12, Libya: $7)
                  </li>
                  <li>
                    Europe Region: $20/day (Austria: $10, Switzerland: $10)
                  </li>
                  <li>Campaign Duration: 15 days initial test phase</li>
                  <li>Total Investment: $1,500</li>
                </ul>
              </div>
            </div>
          </TabContent>
        )}

        {activeTab === 'audience' && (
          <TabContent title="Target Audience">
            <div className="space-y-6">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="section-subtitle text-blue-600">
                  South Asia Demographics
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Target Profile</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Age: 17-25 (Undergraduate), 21-35 (Postgraduate)</li>
                      <li>Education: Top 30% academic performers</li>
                      <li>Language: Minimum IELTS 6.0 or equivalent</li>
                      <li>Family Income: Middle to upper-middle class</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Key Interests</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>STEM and Business programs</li>
                      <li>Post-study work opportunities</li>
                      <li>Career development</li>
                      <li>International exposure</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="section-subtitle text-blue-600">
                  African Markets
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Target Profile</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Age: 18-30 (Both levels)</li>
                      <li>Education: Strong academic background</li>
                      <li>Language: IELTS 6.0 or equivalent</li>
                      <li>Background: Urban professionals and students</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Key Interests</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Business and Engineering programs</li>
                      <li>Scholarship opportunities</li>
                      <li>Industry connections</li>
                      <li>UK work experience</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="section-subtitle text-blue-600">
                  European Focus
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Target Profile</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Age: 18-35 (Focus on postgraduate)</li>
                      <li>Education: Bachelor's degree holders</li>
                      <li>Language: B2 level English minimum</li>
                      <li>Professional: Early to mid-career</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Key Interests</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Specialized master's programs</li>
                      <li>Research opportunities</li>
                      <li>Innovation and technology</li>
                      <li>Industry partnerships</li>
                    </ul>
                  </div>
                </div>
              </div>
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
                      <li>
                        Focus on academic excellence and career prospects
                      </li>
                      <li>
                        Highlight affordable education compared to other UK universities
                      </li>
                      <li>
                        Showcase successful alumni from the region
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-medium mb-2">Africa Campaign</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        Emphasize industry partnerships and job placement rates
                      </li>
                      <li>
                        Feature scholarship opportunities and student support
                      </li>
                      <li>
                        Highlight success stories from African graduates
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-medium mb-2">Europe Campaign</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        Focus on research opportunities and specialized programs
                      </li>
                      <li>
                        Highlight cultural exchange and international environment
                      </li>
                      <li>
                        Showcase facility excellence and innovation
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-medium mb-2">Budget Distribution</h4>
                <div className="grid gap-4">
                  <div>
                    <h5 className="font-medium text-blue-600">
                      South Asia ($35/day)
                    </h5>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>India: $15/day - Primary market focus</li>
                      <li>Bangladesh: $10/day - Growing market</li>
                      <li>Nepal: $10/day - Emerging market</li>
                      <li>Expected CPM: $3-5</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-blue-600">
                      Africa ($45/day)
                    </h5>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Egypt: $10/day - Key North African market</li>
                      <li>Nigeria: $12/day - Largest African market</li>
                      <li>Ghana: $8/day - Growing West African market</li>
                      <li>Kenya: $8/day - Key East African market</li>
                      <li>Libya: $7/day - Developing market</li>
                      <li>Expected CPM: $2-4</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-blue-600">
                      Europe ($20/day)
                    </h5>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Austria: $10/day - Premium market</li>
                      <li>Switzerland: $10/day - Premium market</li>
                      <li>Expected CPM: $6-8</li>
                    </ul>
                  </div>
                </div>
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
                        {region.countries.map((country) => (
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

      {/* --- Global Notes Section (Visible to Everyone) --- */}
      <Notes />
    </div>
  );
};

export default StrategyDashboard;