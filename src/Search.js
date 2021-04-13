import React, { useState } from "react";
import SearchList from "./SearchList";
import Button from "@material-ui/core/Button";

function Search({ details }) {
  let [searchedField, setSearchedField] = useState("");
  let [bool, setBool] = useState(false);

  const keys = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const handleChange = (e) => {
    setBool(false);
    setSearchedField(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
  };
  const handleBtnClick = (e) => {
    setBool(true);
    setSearchedField(e.target.outerText);
  };

  let filteredBrands;
  if (!bool) {
    filteredBrands = details.filter((brand) => {
      return brand.name.toLowerCase().includes(searchedField.toLowerCase());
    });
  } else {
    filteredBrands = details.filter((brand) => {
      return brand.name
        .toLowerCase()
        .charAt(0)
        .includes(searchedField.toLowerCase());
    });
  }

  const keyboard = keys.map((key) => (
    <Button
      variant="contained"
      className="keys"
      type="submit"
      value={key}
      onClick={handleBtnClick}
      style={{
        maxWidth: "40px",
        maxHeight: "40px",
        minWidth: "40px",
        minHeight: "40px",
      }}
    >
      {key}
    </Button>
  ));

  function searchList() {
    return <SearchList filteredBrands={filteredBrands} />;
  }

  return (
    <>
      <div className="pb-4  font-weight-bolder header">Lorem Ipsum Dollar</div>
      <div className="search-header">
        <form class="form-inline my-2 my-lg-0 form">
          <input
            id="searchTxt"
            className="form-control mr-sm-2 search"
            type="search"
            placeholder="Search here"
            onChange={handleChange}
            aria-label="Search" 
            name="q"
          />
          <Button
            variant="contained"
            color="primary"
            className="search__button"
            type="submit"
            href="#"
            onClick={handleClick}
          >
            Search
          </Button>
        </form>
      </div>
      <center className="keyboard">
        <Button
          variant="contained"
          color="primary"
          type="submit"
          className="All"
          href="https://gaurav-sharma-02.github.io/Display-and-Sort-Coupons/"
        >
          ALL
        </Button>
        {keyboard}
      </center>
      <center className="container">{searchList()}</center>
    </>
  );
}

export default Search;
