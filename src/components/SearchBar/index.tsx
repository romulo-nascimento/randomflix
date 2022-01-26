import { ChangeEvent, useState } from 'react';

import { SearchBarProps } from './types';

const SearchBar = ({ onChange }: SearchBarProps) => {
  const [searchString, setSearchString] = useState('');
    
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setSearchString(value);
    onChange(value);
  };
    
  return (
    <input
      type="text"
      className="border-4 border-purple rounded-full py-4 px-8 w-full"
      placeholder="type here your favorites shows"
      value={searchString}
      onChange={handleChange}
    />
  );
};

export default SearchBar;