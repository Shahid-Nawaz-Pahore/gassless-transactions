import { type Chain, type Client, type Transport } from "viem";
import type { GetSmartAccountParameter, SmartAccount } from "viem/account-abstraction";
import type { ModuleType } from "../../../modules/utils/Types";
export type SupportsModuleParameters<TSmartAccount extends SmartAccount | undefined> = GetSmartAccountParameter<TSmartAccount> & {
    type: ModuleType;
};
/**
 * Parses a module type to its corresponding ID.
 *
 * @param type - The module type to parse.
 * @returns The corresponding bigint ID for the module type.
 * @throws {Error} If an invalid module type is provided.
 */
export declare function parseModuleTypeId(type: ModuleType): bigint;
/**
 * Checks if a smart account supports a specific module type.
 *
 * @param client - The client instance.
 * @param args - Parameters including the smart account and module type to check.
 * @returns A boolean indicating whether the module type is supported.
 * @throws {AccountNotFoundError} If the account is not found.
 *
 * @example
 * import { supportsModule } from '@biconomy/sdk'
 *
 * const isSupported = await supportsModule(nexusClient, {
 *   type: 'executor'
 * })
 * console.log(isSupported) // true or false
 */
export declare function supportsModule<TSmartAccount extends SmartAccount | undefined>(client: Client<Transport, Chain | undefined, TSmartAccount>, args: SupportsModuleParameters<TSmartAccount>): Promise<boolean>;
//# sourceMappingURL=supportsModule.d.ts.map