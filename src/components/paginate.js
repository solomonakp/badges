import React, { useState } from 'react';
import Pagination from './Pagination';
import { getDisplayName } from './helpers';
import PropTypes from 'prop-types';

export default function withPaginate(Component) {
  function WrappedComponent(props) {
    const [currentPage, setCurrentPage] = useState(1);
    const { data, perPage } = props;
    const total = data.length;
    const indexOfLastItem = currentPage * perPage;
    const indexOfFirstItem = indexOfLastItem - perPage;
    const pageData = data.slice(indexOfFirstItem, indexOfLastItem);
    console.log(pageData);
    return (
      <Component total={total} items={pageData}>
        <Pagination
          itemsPerPage={perPage}
          totalItems={total}
          currentPage={currentPage}
          pageNeighbours={props.pageNeighbours}
          setCurrentPage={setCurrentPage}
        />
      </Component>
    );
  }
  WrappedComponent.defaultProps = {
    pageNeighbours: 2,
  };
  WrappedComponent.propType = {
    // max value is 2
    pageNeighbours: PropTypes.oneOf([0, 1, 2]),
  };
  // setting name for debugging
  WrappedComponent.displayName = `withLayout(${getDisplayName(Component)})`;
  return WrappedComponent;
}
