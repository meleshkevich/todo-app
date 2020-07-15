import React from "react";
import './search-panel';

const SearchPanel = () => {
    const searchText = 'Type here to search'
    const searchStyle = {
      fontSize: "14px"
    };
  
    return <input 
    style = {searchStyle}
    placeholder =  {searchText} />;
  };

export default SearchPanel;