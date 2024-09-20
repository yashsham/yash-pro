"use client";

import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const ClientComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <h2>Search AI Tools</h2>
      <div className="search-bar">
        <AiOutlineSearch />
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search for tools..."
          className="border p-2 rounded"
        />
      </div>
      <p className="mt-4">Your search query: {searchQuery}</p>
    </div>
  );
};

export default ClientComponent;
