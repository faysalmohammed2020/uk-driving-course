import React, { useState } from "react";
import { Search as SearchIcon } from "lucide-react";

// Define the types for the props
interface SearchProps {
  data: { id: string; name: string }[]; // Example structure, adjust according to your data
  onSearch: (filteredData: { id: string; name: string }[]) => void;
}

const Search: React.FC<SearchProps> = ({ data, onSearch }) => {
  const [query, setQuery] = useState<string>("");

  // Handle input change and trigger the search logic
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    // Filter the data based on the query
    const filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    // Pass filtered data back to parent component
    onSearch(filteredData);
  };

  return (
    <div className="relative w-full">
      <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      <input
        type="text"
        value={query}
        onChange={handleSearchChange}
        placeholder="Search..."
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default Search;
