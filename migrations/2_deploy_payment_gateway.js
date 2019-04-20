const PaymentGateway = artifacts.require('PaymentGateway');

module.exports = function(deployer, network, accounts) {
  deployer.deploy(PaymentGateway, accounts[0]);
};
