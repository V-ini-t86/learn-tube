import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import ReactPaginate from "react-paginate";
import Items from "./Items";

const MyPaginate = styled(ReactPaginate)({
  // You can redifine classes here, if you want.
  activeClassName: "active", // default to "disabled"
  marginTop: "2rem",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  listStyleType: "none",
  padding: "0 5rem",
});
// margin-bottom: 2rem;
// display: flex;
// flex-direction: row;
// justify-content: space-between;
// list-style-type: none;
// padding: 0 5rem;
// li a {
//   border-radius: 7px;
//   padding: 0.1rem 1rem;
//   border: gray 1px solid;
//   cursor: pointer;
// }
// li.previous a,
// li.next a,
// li.break a {
//   border-color: transparent;
// }
// li.active a {
//   background-color: #0366d6;
//   border-color: transparent;
//   color: white;
//   min-width: 32px;
// }
// li.disabled a {
//   color: grey;
// }
// li.disable,
// li.disabled a {
//   cursor: default;
// }
// `;

function PaginatedItems({ questions, itemsPerPage }) {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(questions.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(questions.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % questions.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <MyPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default PaginatedItems;
