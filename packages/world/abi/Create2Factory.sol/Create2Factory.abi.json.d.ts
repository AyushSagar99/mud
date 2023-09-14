declare const abi: [
  {
    anonymous: false;
    inputs: [
      {
        indexed: false;
        internalType: "address";
        name: "addr";
        type: "address";
      },
      {
        indexed: false;
        internalType: "uint256";
        name: "salt";
        type: "uint256";
      }
    ];
    name: "ContractDeployed";
    type: "event";
  },
  {
    inputs: [
      {
        internalType: "bytes";
        name: "byteCode";
        type: "bytes";
      },
      {
        internalType: "uint256";
        name: "salt";
        type: "uint256";
      }
    ];
    name: "deployContract";
    outputs: [];
    stateMutability: "nonpayable";
    type: "function";
  }
];
export default abi;