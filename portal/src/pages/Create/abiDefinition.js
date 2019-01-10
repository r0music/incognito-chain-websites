const abi = JSON.parse('[{"constant":true,"inputs":[{"name":"collateralAmount","type":"uint256"},{"name":"debtAmount","type":"uint256"},{"name":"collateralPrice","type":"uint256"},{"name":"assetPrice","type":"uint256"}],"name":"collateralRatio","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"collateralAmount","type":"uint256"},{"name":"debtAmount","type":"uint256"},{"name":"collateralPrice","type":"uint256"},{"name":"assetPrice","type":"uint256"}],"name":"safelyCollateralized","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"lid","type":"bytes32"},{"name":"digest","type":"bytes32"},{"name":"stableCoinReceiver","type":"bytes"},{"name":"request","type":"uint256"},{"name":"offchain","type":"bytes32"}],"name":"sendCollateral","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"value","type":"uint256"},{"name":"percent","type":"uint256"}],"name":"part","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"lid","type":"bytes32"},{"name":"offchain","type":"bytes32"}],"name":"refundCollateral","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"lid","type":"bytes32"},{"name":"interest","type":"uint256"},{"name":"collateralPrice","type":"uint256"},{"name":"assetPrice","type":"uint256"},{"name":"offchain","type":"bytes32"}],"name":"liquidate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"name","type":"bytes32"}],"name":"get","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"name","type":"bytes32"},{"name":"value","type":"uint256"},{"name":"offchain","type":"bytes32"}],"name":"update","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"lid","type":"bytes32"},{"name":"offchain","type":"bytes32"}],"name":"wipeDebt","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"lender","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"loans","outputs":[{"name":"state","type":"uint8"},{"name":"borrower","type":"address"},{"name":"digest","type":"bytes32"},{"name":"amount","type":"uint256"},{"name":"request","type":"uint256"},{"name":"principle","type":"uint256"},{"name":"escrowDeadline","type":"uint256"},{"name":"stableCoinReceiver","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"lid","type":"bytes32"},{"name":"offchain","type":"bytes32"}],"name":"rejectLoan","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"params","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"lid","type":"bytes32"},{"name":"key","type":"bytes32"},{"name":"offchain","type":"bytes32"}],"name":"acceptLoan","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_lender","type":"address"},{"name":"_owner","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"lid","type":"bytes32"},{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"offchain","type":"bytes32"}],"name":"__sendCollateral","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"lid","type":"bytes32"},{"indexed":false,"name":"key","type":"bytes32"},{"indexed":false,"name":"offchain","type":"bytes32"}],"name":"__acceptLoan","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"lid","type":"bytes32"},{"indexed":false,"name":"offchain","type":"bytes32"}],"name":"__rejectLoan","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"lid","type":"bytes32"},{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"offchain","type":"bytes32"}],"name":"__refundCollateral","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"lid","type":"bytes32"},{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"offchain","type":"bytes32"}],"name":"__liquidate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"lid","type":"bytes32"},{"indexed":false,"name":"offchain","type":"bytes32"}],"name":"__wipeDebt","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"name","type":"bytes32"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"offchain","type":"bytes32"}],"name":"__update","type":"event"}]');

export default abi;