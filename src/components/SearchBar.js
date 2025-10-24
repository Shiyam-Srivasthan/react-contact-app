function SearchBar({ onSearch }) {
  return (
        <div className="search-container">
            <div className="search-wrapper">
                <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="gray" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="24" y1="24" x2="16.65" y2="16.65"></line>
                </svg>
                <input type="text" placeholder="Search contacts by name..." onChange={(e) => onSearch(e.target.value)} className="search-bar" />
            </div>
        </div>
    );
}

export default SearchBar;
