import { useState } from 'react';

export const SearchForm = ({ handleSubmit }) => {
  const [query, setQuery] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    if (query) {
      handleSubmit(query);
    }
  };

  const onChange = e => {
    setQuery(e.target.value.trim());
  };

  return (
    <form onSubmit={onSubmit} onChange={onChange} autoComplete="off">
      <input type="text" name="query" placeholder="Enter name" />
      <button>Search</button>
    </form>
  );
};
