import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Link from '@/components/Link';
import bgImage from '@/assets/create-a-proposal.svg';
import { axios, catchError } from '@/services/api';
import { API } from '@/constants';
import queryString from 'query-string';
import dayjs from 'dayjs';

class Redeem extends React.Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    let url = this.props.location.search;
    let params = queryString.parse(url);
    const { type = 'usd' } = params
    if (type == 'eth') {
      this.getETHData()
    } else {
      this.getUSDData()
    }
  }

  getETHData = () => {
    this.setState({ tab: 1 })
    axios.get(API.RESERVE_REDEEM_ETH_LIST, null).then((res) => {
      if (res.status === 200) {
        if (res.data && res.data.Result) {
          this.setState({ data: res.data.Result })
        } else {
          this.setState({ data: [] })
        }
      }
    }).catch((e) => {
      this.setState({ data: [] })
      console.log(e);
      catchError(e);
    });
  }

  getUSDData = () => {
    this.setState({ tab: 0 })
    axios.get(API.RESERVE_REDEEM_USD_LIST, null).then((res) => {
      if (res.status === 200) {
        if (res.data && res.data.Result) {
          this.setState({ data: res.data.Result })
        } else {
          this.setState({ data: [] })
        }
      }
    }).catch((e) => {
      this.setState({ data: [] })
      console.log(e);
      catchError(e);
    });
  }

  render() {
    const {
      auth,
    } = this.props;
    const {
      data,
      tab,
    } = this.state;
    return (
      <div className="home-page">
        <section className="coin-information">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-8">
                <div className="c-card">
                  <div className="hello">
                    {`Hello, ${auth.data.Email}`}
                  </div>
                  <div className="row stats-container">
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="c-card card-create-a-proposal-container" style={{ backgroundImage: `url(${bgImage})` }}>
                  <p>Wanna to redeem usd or ether?</p>
                  <Link to="/redeem/create" className="c-btn c-bg-green">
                    {'Create a request '}
                    <FontAwesomeIcon icon={faAngleRight} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="tabs-container">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="c-card">
                  <div className="tabs">
                    <div className={`tab ${tab === 0 ? 'active' : ''}`} onClick={() => this.getUSDData()}>USD</div>
                    <div className={`tab ${tab === 1 ? 'active' : ''}`} onClick={() => this.getETHData()}>ETH</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {
          data && tab == 1 ?
            (
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="c-card c-card-no-padding">
                      <table className="c-table-portal-home" style={{ width: "100%", tableLayout: "fixed" }}>
                        <colgroup>
                          <col style={{ "width": "7%" }} />
                          <col style={{ "width": "15%" }} />
                          <col style={{ "width": "9%" }} />
                          <col style={{ "width": "15%" }} />
                          <col style={{ "width": "15%" }} />
                          <col style={{ "width": "9%" }} />
                          <col style={{ "width": "20%" }} />
                          <col style={{ "width": "10%" }} />
                        </colgroup>
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>TX ID</th>
                            <th>CONST</th>
                            <th>Ether TX ID</th>
                            <th>Address</th>
                            <th>ETH</th>
                            <th>Created At</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            data.map(r => (
                              <tr>
                                <td className="text-truncate">{r.ID}</td>
                                <td className="text-truncate"><a target={'_blank'} href={r.ConstantTxHash ? `${process.env.explorerUrl}/tx/${r.ConstantTxHash}` : ''}>{r.ConstantTxHash}</a></td>
                                <td className="text-truncate">{r.ConstantAmount}</td>
                                <td className="text-truncate"><a target={'_blank'} href={r.EthTxHash ? `${process.env.etherScanUrl}/tx/${r.EthTxHash}` : ''}>{r.EthTxHash}</a></td>
                                <td className="text-truncate"><a target={'_blank'} href={r.ReceiverAddress ? `${process.env.etherScanUrl}/address/${r.ReceiverAddress}` : ''}>{r.ReceiverAddress}</a></td>
                                <td className="text-truncate">{r.EthAmount}</td>
                                <td className="text-truncate">{dayjs(r.CreatedAt).format('MM-DD-YYYY HH:mm:ss')}</td>
                                <td className={`text-truncate c-status ${
                                  r.Status == 0 ? 'pending'
                                    : (r.Status == 1 ? 'pending'
                                      : (r.Status == 2 ? 'failed'
                                        : (r.Status == 10 ? 'pending'
                                          : (r.Status == 11 ? 'finished'
                                            : (r.Status == 12 ? 'failed'
                                              : (r.Status == 20 ? 'failed'
                                                : (r.Status == 21 ? 'failed'
                                                  : (r.Status == 22 ? 'failed'
                                                    : ''
                                                  )
                                                )
                                              )
                                            )
                                          )
                                        )
                                      )
                                    )
                                  }`}>{
                                    r.Status == 0 ? 'Pending'
                                      : (r.Status == 1 ? 'Pending'
                                        : (r.Status == 2 ? 'Failed'
                                          : (r.Status == 10 ? 'Pending'
                                            : (r.Status == 11 ? 'Finished'
                                              : (r.Status == 12 ? 'Failed'
                                                : (r.Status == 20 ? 'Failed'
                                                  : (r.Status == 21 ? 'Failed'
                                                    : (r.Status == 22 ? 'Failed'
                                                      : ''
                                                    )
                                                  )
                                                )
                                              )
                                            )
                                          )
                                        )
                                      )
                                  }
                                </td>
                              </tr>
                            ))
                          }
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              data && tab == 0 ? (
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <div className="c-card c-card-no-padding">
                        <table className="c-table-portal-home" style={{ width: "100%", tableLayout: "fixed" }}>
                          <colgroup>
                            <col style={{ "width": "7%" }} />
                            <col style={{ "width": "33%" }} />
                            <col style={{ "width": "10%" }} />
                            <col style={{ "width": "10%" }} />
                            <col style={{ "width": "20%" }} />
                            <col style={{ "width": "20%" }} />
                          </colgroup>
                          <thead>
                            <tr>
                              <th>ID</th>
                              <th>TX ID</th>
                              <th>CONST</th>
                              <th>Fee</th>
                              <th>Created At</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            {
                              data.map(r => (
                                <tr>
                                  <td className="text-truncate">{r.ID}</td>
                                  <td className="text-truncate"><a target={'_blank'} href={r.TxHash ? `${process.env.explorerUrl}/tx/${r.TxHash}` : ''}>{r.TxHash}</a></td>
                                  <td className="text-truncate">{r.Amount}</td>
                                  <td className="text-truncate">{r.Fee}</td>
                                  <td className="text-truncate">{dayjs(r.CreatedAt).format('MM-DD-YYYY HH:mm:ss')}</td>
                                  <td className={`text-truncate c-status ${
                                    r.Status == 0 ? 'pending'
                                      : (r.Status == 1 ? 'pending'
                                        : (r.Status == 2 ? 'pending'
                                          : (r.Status == 3 ? 'pending'
                                            : (r.Status == 4 ? 'pending'
                                              : (r.Status == 5 ? 'pending'
                                                : (r.Status == 6 ? 'pending'
                                                  : (r.Status == 7 ? 'failed'
                                                    : (r.Status == 8 ? 'finished'
                                                      : (r.Status == 9 ? 'pending'
                                                        : (r.Status == 10 ? 'pending'
                                                          : (r.Status == 11 ? 'pending'
                                                            : (r.Status == 12 ? 'pending'
                                                              : ''
                                                            )
                                                          )
                                                        )
                                                      )
                                                    )
                                                  )
                                                )
                                              )
                                            )
                                          )
                                        )
                                      )
                                    }`}>{
                                      r.Status == 0 ? 'Pending'
                                        : (r.Status == 1 ? 'Purchasing'
                                          : (r.Status == 2 ? 'Coin Minting'
                                            : (r.Status == 3 ? 'Coin Burning'
                                              : (r.Status == 4 ? 'Coin Burned'
                                                : (r.Status == 5 ? 'Transfering'
                                                  : (r.Status == 6 ? 'Redeeming'
                                                    : (r.Status == 7 ? 'Cancelled'
                                                      : (r.Status == 8 ? 'Done'
                                                        : (r.Status == 9 ? 'Holding'
                                                          : (r.Status == 10 ? 'Coin Burning Failed'
                                                            : (r.Status == 11 ? 'Coin Minting Failed'
                                                              : (r.Status == 12 ? 'Transfering Failed'
                                                                : ''
                                                              )
                                                            )
                                                          )
                                                        )
                                                      )
                                                    )
                                                  )
                                                )
                                              )
                                            )
                                          )
                                        )
                                    }
                                  </td>
                                </tr>
                              ))
                            }
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null
            )
        }
      </div>
    );
  }
}

export default Redeem;