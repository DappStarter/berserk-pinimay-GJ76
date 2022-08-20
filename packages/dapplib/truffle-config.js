require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clog orphan slab chase note script column harvest help furnace ghost'; 
let testAccounts = [
"0x153385c7db594b210bc13e7abdd52a274a40590e860a373add2360f265d20234",
"0x19c1fd41a20959f36bd77aa044070e68daee26602ac459774bfb73c69d5a5706",
"0xc010c77aa6bec459e64140b92aff44e621c11e8a4d81c6900271efc409da0dc0",
"0x10e7a29f3ca87a9a74d1f7a5dd168816f1bbe0f1a3493f2587ee7311939676c8",
"0x0aa373b02bea46bce0e01d7bd1b47e51d58617930e7ef4c276eec5a4daa18d70",
"0x4c8a3902dde6b6bcc0e7024c6c7818d34dca56e62e4689d84a76939b2c241475",
"0xd5726daf8dc6069098205cc7d092fccdc61f63490a814309d301feedf6d332dc",
"0x77539a2fd348048787c3c5275d0ed145e94b2f2ebf1491bf01c4e8dc633d6272",
"0x459ba262de37ffa458eb1fba64e76299b34b19dd43c1cdc3173ab57de173422a",
"0x5197617d7130fb38a3c69e5ccf82fcb355a2e59c3ed555a80214413ecfbd2d14"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


