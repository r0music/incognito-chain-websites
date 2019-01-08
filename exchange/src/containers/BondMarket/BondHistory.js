import React, { Component } from 'react';
import axios from 'axios';
import Box from '@ui/utility/box';

import LayoutWrapper from '@ui/utility/layoutWrapper.js';

import HistoryList from '@/containers/BondMarket/tableViews/HistoryList';
import BondList from '@/containers/BondMarket/tableViews/BondList';

import bondmarket from '@/services/BondMarket';

import './BondHistory.scss';

const dataTest = {
    BondBuysHistory: {
        abddjflksjdflksdjflsdjflsdjfsdk: {
            TotalAmount: 100,
            BuyBackAvailable: 0,
            BondBuys: [
                {
                    TxID: "KSDFJLDSKFJDSLJFDSLKJFSDKJFDKLSJSKDFDSLKFJSD",
                    TokenID: "sdkjfdskfjdslkfjldskfjlsdkjfls",
                    Amount: 120,
                    BuyBackAvailable: true,
                    BuyBackDate: "2019-01-10",
                    MadeBuyBackDate: "2019-01-10"
                },
                {
                    TxID: "sdkfjoi3uroi3uroi23foksdnvmdvorkwencmshwr3h",
                    TokenID: "sdkjfdskfjdslkfjldskfjlsdkjfls",
                    Amount: 120,
                    BuyBackAvailable: true,
                    BuyBackDate: "2019-01-10",
                    MadeBuyBackDate: "2019-01-10"


                }
    
            ]
        },
        ksdjflkdsjflkdsjflsdkjflskdjflskdjf: {
            TotalAmount: 100,
            BuyBackAvailable: 0,
            BondBuys: [
                {
                    TxID: "KSDFJLDSKFJDSLJFDSLKJFSDKJFDKLSJSKDFDSLKFJSD",
                    TokenID: "sdkjfdskfjdslkfjldskfjlsdkjfls",
                    Amount: 120,
                    BuyBackAvailable: true,
                    BuyBackDate: "2019-01-10",
                    MadeBuyBackDate: "2019-01-10"


                }
    
            ]
        }
    }
};



export default class BondHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bondList: [],
            data: {},
            selectedBondItem: null
        }
    }
    componentDidMount() {
        this.getData();
        
    }

    async getData(){
        //let result = await bondmarket.getHistoryList();
        let result = dataTest;
        if(!result.error){
            const { BondBuysHistory = {} } = result;
            if(BondBuysHistory){
                const keys = Object.keys(BondBuysHistory); 
                const bonds = [];
                keys.forEach(key => {
                    let object = BondBuysHistory[key];
                    object.name = key;
                    bonds.push(object);
    
                });
                if(keys.length > 0) {
                    const firstKey = keys[0];
                    const selectedItem = BondBuysHistory[firstKey];
                    this.setState({
                        selectedBondItem: selectedItem
                    });
                }
              this.setState({bondList:bonds, data: BondBuysHistory});
            }
            
        }
        else{
          //return false;
        }
      }
    handleOnBondClick=(key)=> {
        console.log('On click key:', key);
        const { data } = this.state;
        const selectedItem = data[key];
        this.setState({
            selectedBondItem: selectedItem
        });
    }
    renderBondList() {
        const { bondList } = this.state;
        console.log('Bond List:', bondList);
        return (
            <div className="wrapperBondList">
                <Box title="Bond List">
                    <BondList list={bondList} onSelectBond={this.handleOnBondClick} />
                </Box> 
            </div>
        );
    }
    renderHistoryList() {
        const { selectedBondItem } = this.state;
        return (
            <div className="wrapperHistoryList">
                <Box title="Transaction">
                    {selectedBondItem && <HistoryList list={selectedBondItem.BondBuys}/>}
                </Box>
            </div>
        );
    }
    render(){
        return (
            <LayoutWrapper>
                <div className="wrapperBondHistory">
                    {this.renderBondList()}
                    {this.renderHistoryList()}
                </div>
            </LayoutWrapper>
            );
    }
}