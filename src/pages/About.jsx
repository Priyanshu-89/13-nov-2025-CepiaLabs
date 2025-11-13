import React from 'react'

const About = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">About</h1>
      <p className="text-lg text-gray-600 mb-6">
        During my internship at <span className="font-semibold text-orange-600">CeipaLabs</span>, 
        I worked on multiple creative and functional React-based projects to enhance my frontend development skills. 
        Each project focused on learning real-world concepts like component structure, state management, and responsive design.
      </p>

      <h2 className="text-2xl font-semibold mb-3 text-gray-700">Projects Developed:</h2>
      <ul className="text-left text-gray-600 list-disc list-inside space-y-2">
        <li><span className="font-medium">Mood Change App:</span> A simple React app to toggle between different moods using state and conditional rendering.</li>
        <li><span className="font-medium">Task Management App:</span> Built for organizing tasks with add, delete, and complete functionalities using local storage.</li>
        <li><span className="font-medium">Weather App:</span> Displays real-time weather data fetched from a public API with search functionality.</li>
        <li><span className="font-medium">User Management App:</span> Manages user data with CRUD operations using React forms and validation.</li>
        <li><span className="font-medium">Mini Greeting App:</span> Generates personalized greetings dynamically based on user input and time of day.</li>
      </ul>

      <p className="mt-6 text-gray-600">
        These projects gave me hands-on experience in React.js, Tailwind CSS, and API integration — 
        helping me strengthen my problem-solving and UI development skills.
      </p>
    </div>
  )
}

export default About
