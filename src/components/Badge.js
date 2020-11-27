import React, { Component } from 'react';

export default class Badge extends Component {
  render() {
    const { total, data } = this.props;

    return (
      <section className='badges-section'>
        <div className='container'>
          <h2>{`See all ${total} Badges`}</h2>
          <div className='divide'></div>
          <div className='row'>
            {data.map(function (user, index) {
              return user.profileImageURL === null ? null : (
                <div className='col-md-4' key={index}>
                  <img src={user.profileImageURL} alt='' />
                </div>
              );
            })}
          </div>

          <div className='pg-block'>{this.props.children}</div>
        </div>
        <style jsx>{`
          div.col-md-4 {
            margin-bottom: 30px;
            img {
              height: auto;
              max-width: 100%;
            }
          }
          .pg-block {
            padding-top: 40px;
          }
        `}</style>
      </section>
    );
  }
}
