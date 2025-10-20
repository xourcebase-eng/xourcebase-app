import React from 'react';

const SectionTitle = ({ children, color = "indigo" }) => (
  <h2 className={`text-3xl sm:text-4xl font-extrabold mb-6 text-center text-${color}-800 dark:text-${color}-300`}>
    {children}
  </h2>
);

export default SectionTitle;