import React from 'react';
import { connect } from 'react-redux';

class UserHeader extends React.Component {
  render() {
    const { user } = this.props;
    if (!user) {
      return null;
    }

    return <div className="header">{user.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find(user => user.id === ownProps.userId) };
};

// This connects this component to the Redux store and declares the actions it can dispatch to the store.
export default connect(mapStateToProps)(UserHeader);
