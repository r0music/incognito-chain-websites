import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@ui/uielements/button';

class HistoryItem extends Component {
    static propTypes = {
        item: PropTypes.object.isRequired

    }
    handleOnSelectBond=(name)=> {
        this.props.onSelectBond(name);
    }
    renderDetail(item) {
        const { TxID, TokenID, BuyBackDate,MadeBuyBackDate, Amount } = item;
        return (
            <div className="wrapperDetail">
                <div className="TxID"><span className="title">TX#</span>{TxID}</div>
                <div className="TokenID"><span className="title from">From</span>{TokenID}</div>
                <div className="Amount"><span className="title">Amount</span>{Amount} CONST</div>
                <div className="BuyBackDate"><span className="title">Buy Back Date</span>{BuyBackDate}</div>
                <div className="BoughtBackAt"><span className="title">Bought Back At</span>{MadeBuyBackDate}</div>
            </div>
        );
    }
    renderBuyBackButton(item) {
        const { BuyBackAvailable } = item;
        //if (!BuyBackAvailable) return false;
        return (
            <Button type="primary" size="large" >
            Buy Back
            </Button>
        );
    }

    render() {
        const { item } = this.props;
        return (
            <div className="wrapperItem">
                <div className="wrapperHistoryItem">
                    {this.renderDetail(item)}
                    {this.renderBuyBackButton(item)}
                </div>
                <div className="line" />
            </div>
        );
    }
}


export default class HistoryList extends Component {
    static propTypes = {
        list: PropTypes.array,
    };
    static defaultProps = {
        list: []
    };

    constructor(props) {
        super(props);
        this.state = {

        }
        
        
    }

    
    
    render(){
        const { list } = this.props;
        return (
            <div className="HistoryList">
            {list.map((item, index)=>
                <HistoryItem key={index}
                    item={item}

                />
            )}
            </div>
        );
    }
}