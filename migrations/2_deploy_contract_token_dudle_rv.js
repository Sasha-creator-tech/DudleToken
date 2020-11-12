const DudleTokenRV = artifacts.require("DudleTokenRV");

module.exports = function (deployer) {
  deployer.deploy(DudleTokenRV);
};