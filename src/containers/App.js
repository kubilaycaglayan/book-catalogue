import React from 'react';
import { connect } from 'react-redux';
import Query from './Query';
import Error from '../components/Error';
import Loading from '../components/Loading';
import Results from '../components/Results';
import Welcome from '../components/Welcome';
import {
  WELCOME,
  RESULTS_READY,
  LOADING,
  ERROR,
} from '../constants';

const mapStateToProps = state => ({
  status: state.status,
});

const App = props => {
  const { status } = props;
  console.log(status);

  const whichComponent = () => {
    switch (status) {
      case WELCOME:
        return <Welcome />;
      case ERROR:
        return <Error />;
      case LOADING:
        return <Loading />;
      case RESULTS_READY:
        return <Results />;
      default:
        return <Welcome />;
    }
  };

  return (
    <>
      <Query />
      {whichComponent()}
    </>
  );
};

export default connect(
  mapStateToProps,
  null,
)(App);
