import React, { useState } from 'react';
import Pagination from './Pagination';
import { getDisplayName } from './helpers';
import PropTypes from 'prop-types';

export default function withPaginate(Component) {
  function WrappedComponent(props) {
    const [currentPage, setCurrentPage] = useState(1);
    const { perPage, total, data } = props;
    return (
      <Component {...props} items={data}>
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
