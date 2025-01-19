import { type Chain, type Client, type Hex, type Transport } from "viem";
import type { GetSmartAccountParameter, SmartAccount } from "viem/account-abstraction";
export type CallType = "call" | "delegatecall" | "batchcall";
export type ExecutionMode<callType extends CallType> = {
    type: callType;
    revertOnError?: boolean;
    selector?: Hex;
    data?: Hex;
};
export type SupportsExecutionModeParameters<TSmartAccount extends SmartAccount | undefined, callType extends CallType = CallType> = GetSmartAccountParameter<TSmartAccount> & ExecutionMode<callType>;
/**
 * Encodes the execution mode for a smart account operation.
 *
 * @param mode - The execution mode parameters.
 * @returns The encoded execution mode as a hexadecimal string.
 */
export declare function encodeExecutionMode<callType extends CallType>({ type, revertOnError, selector, data }: ExecutionMode<callType>): Hex;
/**
 * Checks if a smart account supports a specific execution mode.
 *
 * @param client - The client instance.
 * @param args - Parameters including the smart account and execution mode details.
 * @returns A boolean indicating whether the execution mode is supported.
 * @throws {AccountNotFoundError} If the account is not found.
 *
 * @example
 * import { supportsExecutionMode } from '@biconomy/sdk'
 *
 * const isSupported = await supportsExecutionMode(nexusClient, {
 *   type: 'call',
 *   revertOnError: true,
 *   selector: '0x12345678'
 * })
 * console.log(isSupported) // true or false
 */
export declare function supportsExecutionMode<TSmartAccount extends SmartAccount | undefined, callType extends CallType = CallType>(client: Client<Transport, Chain | undefined, TSmartAccount>, args: SupportsExecutionModeParameters<TSmartAccount, callType>): Promise<boolean>;
//# sourceMappingURL=supportsExecutionMode.d.ts.map