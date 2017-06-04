import React from 'react';
import Layout from '../../components/Layout';
import Homepage from './Homepage';

export default {

  path: '/',

  action() {
    return {
      component: <Layout><Homepage type="home"/></Layout>,
    };
  },

};