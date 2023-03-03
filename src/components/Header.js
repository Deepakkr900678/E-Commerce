import React from "react";
import list from "../data";
import Cards from "./Card";
import "./Header.css";
import Pagination from 'react-bootstrap/Pagination';

const Header = ({ handleClick }) => {
  return (
    <div className="main">
      <div>
        <div className="container1">
          <h2>Filter By Brand</h2>
          <input type="checkbox" /> Zebronics<br />
          <input type="checkbox" /> Apple<br />
          <input type="checkbox" /> HP<br />
          <input type="checkbox" /> Dell<br />
        </div>
        <br />
        <div className="container1">
          <h2>Filter By Categories</h2>
          <input type="checkbox" /> Laptop<br />
          <input type="checkbox" /> Mobile<br />
          <input type="checkbox" /> Head_Phones<br />
          <input type="checkbox" />  Speakers<br />
          <input type="checkbox" /> Smart_TV<br />
        </div>
      </div>
      <div className="container2">
        <section className="right">
          {list.map((item) => (
            <Cards key={item.id} item={item} handleClick={handleClick} />
          ))}
        </section>
      </div>
      <Pagination className="pagination">
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item>{3}</Pagination.Item>
        <Pagination.Item>{4}</Pagination.Item>
        <Pagination.Next />
      </Pagination>
    </div>
  );
};

export default Header;
