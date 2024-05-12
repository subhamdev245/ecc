import React, { useState, useEffect } from 'react';
import axios from 'axios';

const About = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/subhamdev245');
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      {userData ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src={userData.avatar_url}
              alt="Profile"
              className="rounded-lg shadow-lg mb-4"
            />
          </div>
          <div>
            <p className="text-lg mb-4">
              Hello! I'm {userData.name}, a passionate {userData.bio || 'developer'} based in {userData.location || 'somewhere on Earth'}.
            </p>
            <p className="text-lg">
              I love to {userData.bio ? userData.bio : 'write code and build cool projects'}.
            </p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default About;
