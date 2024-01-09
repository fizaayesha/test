import React, { useState } from "react";
import styled from "styled-components";
import entries from "../test";
import ReactPaginate from "react-paginate";
import {
  SearchOutlined,
  ImportExportOutlined,
  Sort,
  ArrowBackIosNewSharp,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";

function Menu() {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  const sortedEntries = entries
    .filter(
      (item) =>
        item.order_id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.order_date.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.order_amount.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.transaction_fees.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortField) {
        const aValue = a[sortField].toLowerCase();
        const bValue = b[sortField].toLowerCase();
        return sortOrder === "asc"
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }
      return 0;
    });

  const offset = currentPage * itemsPerPage;
  const currentPageData = sortedEntries.slice(offset, offset + itemsPerPage);

  const pageCount = Math.ceil(sortedEntries.length / itemsPerPage);

  const handlePageClick = (selected) => {
    setCurrentPage(selected.selected);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(0);
  };

  return (
    <MenuStyled>
      <h2>Transactions | This Month</h2>
      <div className="boxing">
        <div className="search-container">
          <div className="search-box">
            <SearchOutlined />
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
              onClick={() => setCurrentPage(0)}
            />
          </div>
          <div className="top-icons">
            <span className="sorting">
              Sort <Sort />
            </span>
            <span>
              <ImportExportOutlined />
            </span>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Order Date</th>
              <th>Order Amount</th>
              <th>Transaction Fees</th>
            </tr>
          </thead>
          <tbody>
            {currentPageData.map((item, index) => (
              <React.Fragment key={item.id}>
                <tr>
                  <td className="blue-text">{item.order_id}</td>
                  <td>{item.order_date}</td>
                  <td>{item.order_amount}</td>
                  <td>{item.transaction_fees}</td>
                </tr>
                {index < currentPageData.length - 1 && (
                  <tr className="horizontal-line">
                    <td colSpan="4"></td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
        <PaginationContainer>
          <ReactPaginate
            previousLabel={<ArrowBackIosNewSharp />}
            nextLabel={<ArrowForwardIosOutlined />}
            pageCount={pageCount}
            pageRangeDisplayed={3}
            marginPagesDisplayed={1}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            activeClassName={"active"}
          />
        </PaginationContainer>
      </div>
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  width: 98%;
  border-radius: 10px;
  border-color: 5px solid pink;
  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #333;
    width: 100%;
  }
  .boxing {
    padding-right: 1rem;
    background-color: white;
    box-shadow: #f2f2f2;
    .search-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-left: 2rem;
      .search-box {
        display: flex;
        align-items: center;
        width: 15%;
        border: 1px solid #f2f2f2;
        margin-top: 1rem;
        svg {
          margin-right: 0.5rem;
        }

        input {
          padding: 0.5rem;
          border: none;
        }
      }
      .top-icons {
        display: flex;
        align-items: center;
        width: 15%;
        .sorting {
          margin-left: 9.5rem;
        }
        span {
          border: 1px solid #f2f2f2;
          cursor: pointer;
          display: flex;
          margin-left: 10px;
          align-items: center;
          color: black;
          border-radius: 2px;
        }
      }
    }

    table {
      margin-left: 0.5rem;
      font-size: 0.9rem;
      width: 100%;
      border-collapse: collapse;
      margin-top: 1rem;

      th,
      td {
        padding: 14px 0px 0px 0px;
        text-align: left;
      }
      th {
        background-color: #f2f2f2;
        border-bottom: 10px solid #f2f2f2;
        /* margin-left: 2rem; */
      }
      .blue-text {
        color: blue;
      }
      .horizontal-line td {
        border-bottom: 1px solid #ddd;
        margin-left: -2rem;
      }

      tr:hover {
        background-color: #e2e2e2;
      }
    }

    @media screen and (max-width: 670px) {
      table {
        th,
        td {
          display: block;
          width: 100%;
          box-sizing: border-box;
        }

        th {
          text-align: center;
        }
      }
    }
  }
`;
const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;

  .pagination {
    display: flex;
    list-style: none;
    cursor: pointer;
    li {
      margin: 0.5rem;
      padding: 0.3rem;
      border: 1px solid #ddd;
      border-radius: 3px;
    }

    .active {
      background-color: #007bff;
      color: #fff;
    }
  }
`;

export default Menu;
