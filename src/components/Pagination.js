import React from 'react';
import { Arrow } from './svgs';
import theme from './theme';
import { range } from './helpers';
import PropTypes from 'prop-types';

export default function Pagination({
  itemsPerPage,
  totalItems,
  currentPage,
  pageNeighbours,
  setCurrentPage,
}) {
  let pageNumbers;
  // finding the median of maxValue if there are total items else total pages = 1
  const totalPages = totalItems ? Math.ceil(totalItems / itemsPerPage) : 1;
  // setting range of neighbour to a range between 0-2
  const neighbours =
    typeof pageNeighbours === 'number'
      ? Math.max(0, Math.min(pageNeighbours, 2))
      : 0;
  /* total number is gotten from neighbour which is btwn 0 and 2 
       I multiplied that value by 2 to account for numbers on each side 
       while 3 is added to account for the number itself
        the first number and the last number 
    */
  const totalNumbers = neighbours * 2 + 3;

  // const totalBlocks = totalNumbers + 2;

  if (totalPages > totalNumbers) {
    const LEFT_PAGE = 'LEFT';
    const RIGHT_PAGE = 'RIGHT';
    //  start page either 2 or currentPage - neighbour
    const startPage = Math.max(2, currentPage - neighbours);
    //  start page either second to the last page or currentPage + neighbour
    const endPage = Math.min(totalPages - 1, currentPage + neighbours);
    // getting available range of pages
    let pages = range(startPage, endPage);
    // adding first and last page
    /**
     * hasLeftSpill: has hidden pages to the left
     * hasRightSpill: has hidden pages to the right
     * spillOffset: number of hidden pages either to the left or to the right
     */
    /* if pages are greater than 2 which is the heights
     neighbours then hasLeftSpill is true else false */
    const hasLeftSpill = startPage > 2;
    /*  if total pages minus the current last neighbour  is 
    greater than 1 then true else false  */
    const hasRightSpill = totalPages - endPage > 1;
    /*  spillOffset is the total number of pages either to left or right
     it is gotten by totalNUmbers minus pageLength plus 1 which accounts 
     for either first or last page 
    */
    const spillOffset = totalNumbers - (pages.length + 1);
    switch (true) {
      // handle: (1) < {5 6} [7] {8 9} (10)
      case hasLeftSpill && !hasRightSpill: {
        const extraPages = range(startPage - spillOffset, startPage - 1);
        pages = [LEFT_PAGE, ...extraPages, ...pages];
        break;
      }

      // handle: (1) {2 3} [4] {5 6} > (10)
      case !hasLeftSpill && hasRightSpill: {
        const extraPages = range(endPage + 1, endPage + spillOffset);
        pages = [...pages, ...extraPages, RIGHT_PAGE];
        break;
      }

      // handle: (1) < {4 5} [6] {7 8} > (10)
      case hasLeftSpill && hasRightSpill:
      default: {
        pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
        break;
      }
    }
    pageNumbers = [1, ...pages, totalPages];
  } else {
    pageNumbers = range(1, totalPages);
  }

  const prev = () => {
    // getting ref for pagination ul
    // const paginationList = pagination.current;
    // checking if currentPage is greater than the firstPage
    if (currentPage > 1) {
      // getting prevPage
      const prevPage = currentPage - 1;
      // setting previous page
      setCurrentPage(prevPage);
      // scroll back to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return;
  };

  const next = (e) => {
    // checking if currentPage is greater than the firstPage
    if (currentPage < totalPages) {
      // getting prevPage
      const nextPage = currentPage + 1;
      // setting previous page
      setCurrentPage(nextPage);
      // scroll back to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return;
  };

  return (
    <nav className='container-xl'>
      <ul className='pagination-container d-flex flex-wrap justify-content-center'>
        {/* shows arrow if current page greater than 1 */}
        {currentPage > 1 ? (
          <li className='page-arrow left page-item'>
            <button
              className='arrow-btn pagination-link'
              aria-label='Previous'
              onClick={() => prev()}
            >
              <Arrow direction='left' width='15px' height='15px' />
            </button>
          </li>
        ) : null}
        {pageNumbers.map((number) => {
          if (typeof number !== 'number') {
            return (
              <li
                key={number}
                className='page-item mx-1 d-flex align-items-center'
              >
                ...
              </li>
            );
          }
          return (
            <li key={number} className='page-item'>
              <button
                href='#'
                className={`pagination-link ${
                  number === currentPage ? 'active' : ''
                }`}
                onClick={() => {
                  setCurrentPage(number);
                  // scroll back to top
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                {number}
              </button>
            </li>
          );
        })}
        {/* shows arrow if current page is less than total page or not equals to 1 */}
        {currentPage < totalPages && totalPages !== 1 ? (
          <li className='page-arrow right page-item'>
            <button
              className='arrow-btn pagination-link'
              aria-label='Next'
              onClick={() => next()}
            >
              <Arrow width='15px' height='15px' />
            </button>
          </li>
        ) : null}
      </ul>
      <style jsx>{`
        .pagination-container {
          list-style-type: none;
          padding-left: 0;
          margin-top: 150px;
          @media (max-width: 767.98px) {
            margin-top: 80px;
          }

          button {
            background-color: ${theme.colors.tertiary};
          }
          .pagination-link {
            outline: none;
            width: 40px;
            height: 40px;
            display: flex;
            text-align: center;
            font-size: 20px;
            justify-content: center;
            align-items: center;
            color: ${theme.colors.paragraphColor};
            font-family: ${theme.fontFamily.circularBook};
            opacity: 0.7;
            transition: color 300ms ease-out, opacity 300ms ease-out;
            border-radius: 2px;
            background-color: transparent;
            @media (max-width: 575.98px) {
              width: 25px;
              height: 25px;
              font-size: 18px;
            }

            &.active {
              transition: color 300ms ease-in, opacity300ms ease-in;
              color: ${theme.colors.black};
              border: ${theme.border.brands};
              opacity: 0.7;
            }
            &:hover {
              color: ${theme.colors.black};
              transition: color 300ms ease-in;
              opacity: 1;
            }
          }
          .page-arrow {
            border: ${theme.border.brands};
            &.left {
              margin-right: 30px;
              @media (max-width: 575.98px) {
                margin-right: 5px;
              }
            }
            &.right {
              margin-left: 30px;
              @media (max-width: 575.98px) {
                margin-left: 5px;
              }
            }
          }
        }
        :global(.page-arrow svg) {
          fill: ${theme.colors.black};
          transition: ${theme.effects.allIn(200)};
          opacity: 1;
        }
        :global(.page-arrow:focus svg) {
          fill: ${theme.colors.black};
          transition: ${theme.effects.allIn(200)};
        }
      `}</style>
    </nav>
  );
}
Pagination.propTypes = {
  itemsPerPage: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};
