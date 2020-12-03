import React, { Component } from 'react';
import Badge from './components/Badge';
import Paginate from './components/paginate';
import Loader from './components/Loader';
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
          console.log(data);
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
      return <Loader />;
    } else if (this.state.data !== null) {
      const { data } = this.state;

      return (
        <div className='App'>
          <PaginatedBadge perPage={30} data={data} />
          <style jsx>{``}</style>
        </div>
      );
    } else {
      return <div>{this.state.data.message}</div>;
    }
  }
}
