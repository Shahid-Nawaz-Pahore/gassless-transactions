import type { Chain, Client, Hex, Transport } from "viem";
import type { ModularSmartAccount } from "../../utils/Types";
/**
 * Parameters for trusting attesters in a smart session validator.
 *
 * @template TModularSmartAccount - Type of the modular smart account, extending ModularSmartAccount or undefined.
 */
export type TrustAttestersParameters<TModularSmartAccount extends ModularSmartAccount | undefined> = {
    /** The addresses of the attesters to be trusted. */
    attesters?: Hex[];
    /** The address of the registry contract. */
    registryAddress?: Hex;
    /** The maximum fee per gas unit the transaction is willing to pay. */
    maxFeePerGas?: bigint;
    /** The maximum priority fee per gas unit the transaction is willing to pay. */
    maxPriorityFeePerGas?: bigint;
    /** The nonce of the transaction. If not provided, it will be determined automatically. */
    nonce?: bigint;
    /** The modular smart account to use for trusting attesters. If not provided, the client's account will be used. */
    account?: TModularSmartAccount;
    /** The threshold of the attesters to be trusted. */
    threshold?: number;
};
/**
 * Trusts attesters for the smart session validator.
 *
 * This function prepares and sends a user operation to trust specified attesters
 * in the smart session validator's registry.
 *
 * @template TModularSmartAccount - Type of the modular smart account, extending ModularSmartAccount or undefined.
 * @param client - The client used to interact with the blockchain.
 * @param parameters - Parameters including the attesters to trust, registry address, and optional gas settings.
 * @returns A promise that resolves to the hash of the sent user operation.
 *
 * @throws {AccountNotFoundError} If no account is provided and the client doesn't have an associated account.
 *
 * @example
 * ```typescript
 * const result = await trustAttesters(nexusClient, {
 *   attesters: ['0x1234...', '0x5678...'],
 *   registryAddress: '0xabcd...',
 *   maxFeePerGas: 1000000000n
 * });
 * console.log(`Transaction hash: ${result}`);
 * ```
 *
 * @remarks
 * - Ensure that the client has sufficient gas to cover the transaction.
 * - The registry address should be the address of the contract managing trusted attesters.
 */
export declare function trustAttesters<TModularSmartAccount extends ModularSmartAccount | undefined>(client: Client<Transport, Chain | undefined, TModularSmartAccount>, parameters?: TrustAttestersParameters<TModularSmartAccount>): Promise<Hex>;
//# sourceMappingURL=trustAttesters.d.ts.map