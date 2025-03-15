import React from 'react';

const Profile = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold">User Profile</h1>
      <div className="mt-4">
        <p className="text-lg">Name: John Doe</p>
        <p className="text-lg">Email: johndoe@gmail.com</p>
        {/* Add more user details here */}
      </div>
    </div>
  );
};

export default Profile;
