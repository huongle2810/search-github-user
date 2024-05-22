import axios from "axios";

export const fetchUsersFromAPI = async (query: string) => {
  const response = await axios.get(
    `https://api.github.com/search/users?q=${query}&per_page=100`
  );
  return response.data.items;
};
