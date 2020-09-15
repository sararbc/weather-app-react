import React from "react";

export default function SearchEngine() {
  return (
    <form className="SearchEngine">
      <div className="form-group justify-content-center">
        <input
          type="text"
          className="form-control"
          placeholder="Enter your city"
        />
        <span>
          <input type="submit" value="Search" className="btn btn-primary" />
        </span>
        <button className="btn btn-primary secondary">
          <span>📍</span> Current Location
        </button>
      </div>
    </form>
  );
}
