import axios from 'axios';
import Cookies from 'js-cookie';

function getCurrentUserToken() {
  const result = Cookies.get('user');
  return result || '';
}

async function callAPIService({data = {}, method = "", url = ""}){
  const token = getCurrentUserToken();
  if (!token) {
    return {error: "unauthorized", data: {}}
  };

  if (!method) method = "GET";

  const options = {
    method,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'Authorization': `Bearer ${token}`,
    },
    url: `${process.env.serviceAPI}${url}`,
    data,
  };

  try {
    const response = await axios(options);
    const {status, data = {}} = response;
    if (!status === 200 || data.Error) {
      return {error:data.Error, data: {}}
    }

    return {result: data.Result, error: ""}
  }
  catch (e) {
    console.log(e)
    return { error: e.message, data: {} };
  }
}

export async function buyAsset(assetType, amount) {
  let data = {
    "BuyingAsset" : assetType,
    "Amount": amount,
  }

  const result = await callAPIService({data, method: "POST", url:"/reserves/purchase"});
  return result;
}

export async function buyTokenByEthereum(amount) {
  let data = {
    "eth_amount": amount,
  }

  const result = await callAPIService({data, method: "POST", url:"/reserves/raise-eth-to-dcb-token"});
  return result;
}

export async function getHistory(assetType=0, perPage=10, page=1, type = 0) {
  let url = `/reserves/usd?type=${type}&buying_asset=${assetType}&limit=${perPage}&type=${type}`;
  const result = await callAPIService({data: {}, method: "GET", url});
  return result;
}

export async function getReserveStatistic() {
  let url = `/reserves/all_stats`;
  const result = await callAPIService({data: {}, method: "GET", url});
  return result;
}

export async function getRaiseReserveInfo() {
  let url = `/reserves/get-raise-reserve-info`;
  const result = await callAPIService({data: {}, method: "GET", url});
  return result;
}

export async function convertETHtoDCBToken(amount) {
  let url = `/reserves/convert-eth-to-dcb-token`;
  const result = await callAPIService({data: {eth_amount: amount}, method: "POST", url});
  return result;
}
