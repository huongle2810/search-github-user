import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { fetchUsers, clearUsers } from "../redux/users/slicedUsers";
import { debounce } from "lodash";

const SearchInput: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();

  const debouncedSearchUsers = debounce((query: string) => {
    if (query.length >= 3) {
      dispatch(fetchUsers(query));
    } else {
      dispatch(clearUsers());
    }
  }, 300);

  useEffect(() => {
    debouncedSearchUsers(query);
    return () => debouncedSearchUsers.cancel();
  }, [query]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
  };

  return (
    <input
      type="text"
      value={query}
      onChange={handleChange}
      placeholder="Search GitHub users"
    />
  );
};

export default SearchInput;
