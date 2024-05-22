import React from "react";
import "./App.css";
import SearchInput from "./components/SearchInput";
import UserTable from "./components/UserTable";

function App() {
  return (
    <div className="App">
      <SearchInput />
      <UserTable />
    </div>
  );
}

export default App;
