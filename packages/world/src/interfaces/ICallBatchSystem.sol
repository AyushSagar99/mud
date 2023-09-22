// SPDX-License-Identifier: MIT
pragma solidity >=0.8.21;

/* Autogenerated file. Do not edit manually. */

import { SystemCallData } from "./../modules/core/types.sol";

interface ICallBatchSystem {
  function callBatch(SystemCallData[] calldata systemCalls) external returns (bytes[] memory returnDatas);
}