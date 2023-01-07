require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife off suggest name response oval undo hunt canoe army gas'; 
let testAccounts = [
"0x53f1a1c8eb77c214d7b7e3e74bff32aff32d243cb5254c0907042d5a4201277d",
"0x06c0e46ac1aa674033a4ff8676b1e71b035e3fd1e8b7afcdacb550d2bfa0955b",
"0x65b6b60e0171b2ddabaff4ee89ba10e3300d745ee54da7ed51a43ea78ed7bf4b",
"0x83bb3dad5bb1645b45d58c72c9a66a6a2b86bc2bf27d74c68fdf0d493534df9f",
"0xe04628bd99c7afb4c1eff207b5eab5873dc87b95e3afe731837aa7adf00756dd",
"0xc24d9d29fe58e2aa1fefc4dd309b15622ed343a41da44248bc3aaca3e0136681",
"0xe066b1f93f052622bd5e5961958176a02d3f583c630cf72f56cabdc2e5738910",
"0x8c75340d701b63b517b8f7c580f18be1b3fa198bdc242fd8ab36f26f4ace6348",
"0x1bcccb2d0ad0df4b7e736b48abb93d5d7770159e891b17a96cc77f8dff49cacb",
"0xc21c1e3ec9460c7114d49d5cd5537aab287e02d9f60a32ed04d51c4d490f8ddb"
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


