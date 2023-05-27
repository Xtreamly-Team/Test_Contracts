const USDT = artifacts.require("USDT");
const Shiba = artifacts.require("Shiba");
const Chainlink = artifacts.require("Chainlink");

module.exports = (deployer) => {
    deployer.deploy(USDT, "USD Tether", "USDT", 100000);
    deployer.deploy(Shiba, "Shiba", "SHIB", 100000);
    deployer.deploy(Chainlink, "Chainlink", "LINK", 100000);
}
