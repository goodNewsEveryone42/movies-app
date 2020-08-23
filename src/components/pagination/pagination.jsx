import React from "react";
import { Pagination } from "bootstrap-4-react";

import "./pagination.css";

const PaginationTemlate = () => {
  return (
    <nav aria-label="Page navigation example" className="pagination-nav">
      <Pagination>
        <Pagination.Item disabled>
          <Pagination.Link href="#">Previous</Pagination.Link>
        </Pagination.Item>
        <Pagination.ItemLink href="#">1</Pagination.ItemLink>
        <Pagination.Item active>
          <Pagination.Link href="#">2</Pagination.Link>
        </Pagination.Item>
        <Pagination.ItemLink href="#">3</Pagination.ItemLink>
        <Pagination.ItemLink href="#">Next</Pagination.ItemLink>
      </Pagination>
    </nav>
  );
};

export default PaginationTemlate;
