import React from 'react';
// import PropTypes from 'prop-types';
import { createDynamicImport } from '@/services/app';
import {
  Switch,
  Route,
  withRouter,
  // Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';
import Loading from './Loading';

const Home = createDynamicImport(() => import('@/pages/Home'), Loading);
const Create = createDynamicImport(() => import('@/pages/Create'), Loading);

const routers = [
  { path: '/', exact: true, component: Home },
  { path: '/create', exact: true, component: Create },
  // { path: '/chains', exact: true, component: Chains },
  // { path: '/chain/:chainId/blocks', exact: true, component: Blocks },
  // { path: '/chain/:chainId', exact: true, component: Chain },
  // { path: '/block/:blockHash', exact: true, component: Block },
  // { path: '/block/:blockHash/txs', exact: true, component: Txs },
  // { path: '/txs/pending', exact: true, component: PendingTxs },
  // { path: '/tx/:txHash', exact: true, component: Tx },
  // { path: '/tokens', exact: true, component: Tokens },
  // { path: '/token/:customTokenId', exact: true, component: Token },
  // { path: '/committees', exact: true, component: Committees },
  // { path: '/live', exact: true, component: Live },
  // { path: '/info', exact: true, component: Info },
];

class Router extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Switch>
        {
          routers.map(route => (
            <Route key={route.path} {...route} />
          ))
        }
      </Switch>
    );
  }
}

export default withRouter(connect(state => ({ auth: state.auth }), null)(Router));
