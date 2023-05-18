import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  return (
    <Tabs selectedIndex={activeTab} onSelect={handleTabChange}>
      <TabList className='flex justify-center gap-6'>
        <Tab className="px-3 py-2 bg-emerald-400 text-white text-lg font-medium rounded-lg hover:bg-emerald-700 cursor-pointer">Sports Car</Tab>
        <Tab className="px-3 py-2 bg-emerald-400 text-white text-lg font-medium rounded-lg hover:bg-emerald-700 cursor-pointer">Mini Police Car</Tab>
        <Tab className="px-3 py-2 bg-emerald-400 text-white text-lg font-medium rounded-lg hover:bg-emerald-700 cursor-pointer">Regular Car</Tab>
      </TabList>

      <TabPanel className="mt-5">
        <h2>Sports Car Content</h2>
        <p>This is the Sports Car content for tab 1.</p>
      </TabPanel>
      <TabPanel className="mt-5">
        <h2>Mini Police Car</h2>
        <p>This is the Mini Police Car content for tab 2.</p>
      </TabPanel>
      <TabPanel className="mt-5">
        <h2>Regular Car</h2>
        <p>This is the Regular Car content for tab 3.</p>
      </TabPanel>
    </Tabs>
  );
};

export default TabComponent;