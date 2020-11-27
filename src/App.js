import React, { Component } from 'react';
import Badge from './components/Badge';
import Paginate from './components/paginate';
const PaginatedBadge = Paginate(Badge);
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { data: null, error: null };
  }

  componentDidMount() {
    fetch('https://hsos.herokuapp.com/User/fetchBadges')
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          this.setState(function (state) {
            return {
              ...state,
              data: data.details,
              error: false,
            };
          });
        } else {
          this.setState(function (state) {
            return {
              ...state,
              error: data.message,
            };
          });
        }
      })
      .catch((error) =>
        this.setState(function (state) {
          return {
            ...state,
            error: 'Ops, Somthing went wrong',
          };
        })
      );
  }

  render() {
    if (this.state.data === null) {
      return <div>isLoading</div>;
    } else if (this.state.data !== null) {
      const { perPage, total, data } = this.state.data;
      return (
        <div className='App'>
          <PaginatedBadge perPage={perPage} total={total} data={data} />
          <style jsx>{``}</style>
        </div>
      );
    } else {
      return <div>{this.state.data.message}</div>;
    }
  }
}
