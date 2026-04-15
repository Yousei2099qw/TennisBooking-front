import { useState, useEffect } from "react";

export default function CourtSearcher() {
  const [area, setArea] = useState({ id: 0, name: "Area" });
  const [venue, setVenue] = useState({ id: 0, name: "Venue" });
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    if (area.id === 0 || venue.id === 0) {
      return;
    }
    searchByAreaAndVenue(area.id, venue.id);
  }, [area, venue]);

  const areas = [
    { id: 1, name: "新宿区" },
    { id: 2, name: "渋谷区" },
    { id: 3, name: "港区" },
    { id: 4, name: "千代田区" },
    { id: 5, name: "中央区" },
  ];
  const venues = [
    { id: 1, name: "舎人公園" },
    { id: 2, name: "上沼田公園" },
    { id: 3, name: "江北公園" },
  ];

  const areaListItems = areas.map((area) => (
    <li key={area.id}>
      <button
        type="button"
        className="dropdown-item"
        onClick={() => setArea(area)}
      >
        {area.name}
      </button>
    </li>
  ));

  const venueListItems = venues.map((venue) => (
    <li key={venue.id}>
      <button
        type="button"
        className="dropdown-item"
        onClick={() => setVenue(venue)}
      >
        {venue.name}
      </button>
    </li>
  ));

  /* search by area and venue */
  function searchByAreaAndVenue(areaId: number, venueId: number) {
    console.log("auto search by select:", areaId, venueId);
    console.log("search venueId:", venueId);
    console.log("search areaId:", areaId);

    // 以后可以在这里：
    // fetch(...)
  }

  function searchByKeyword(keyword: string) {
    console.log("search keyword:", keyword);
  }

  return (
    <div className="d-flex flex-column flex-md-row gap-2">
      {/* Area Dropdown */}
      <div className="dropdown">
        <a
          className="btn btn-secondary dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {area.name}
        </a>
        <ul className="dropdown-menu">{areaListItems}</ul>
      </div>
      {/* Venue Dropdown */}
      <div className="dropdown">
        <a
          className="btn btn-secondary dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {venue.name}
        </a>
        <ul className="dropdown-menu">{venueListItems}</ul>
      </div>

      {/* Search Form */}
      <form
        className="d-flex"
        role="search"
        onSubmit={(e) => {
          e.preventDefault();

          if (!keyword.trim()) return;

          searchByKeyword(keyword);
        }}
      >
        <input
          className="form-control me-2"
          type="search"
          placeholder="Court name"
          aria-label="Search"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
