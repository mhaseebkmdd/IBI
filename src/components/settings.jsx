import React, { useState } from 'react';

const Settings = () => {
  const [notifications, setNotifications] = useState(true);

  const handleToggleNotifications = () => {
    setNotifications((prev) => !prev);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold">Settings</h1>
      <div className="mt-4">
        <div className="flex items-center justify-between">
          <p className="text-lg">Notifications</p>
          <button
            onClick={handleToggleNotifications}
            className="px-4 py-2 bg-red-500 text-white rounded-md"
          >
            {notifications ? 'Disable' : 'Enable'} Notifications
          </button>
        </div>
        {/* Add other settings as needed */}
      </div>
    </div>
  );
};

export default Settings;
