import { type Chain, type Client, type Transport } from "viem";
import type { GetSmartAccountParameter, SmartAccount } from "viem/account-abstraction";
import type { ModuleMeta } from "../../../modules/utils/Types";
export type IsModuleInstalledParameters<TSmartAccount extends SmartAccount | undefined> = GetSmartAccountParameter<TSmartAccount> & {
    module: ModuleMeta;
};
/**
 * Checks if a specific module is installed on a given smart account.
 *
 * @param client - The client instance.
 * @param parameters - Parameters including the smart account and the module to check.
 * @returns A boolean indicating whether the module is installed.
 * @throws {AccountNotFoundError} If the account is not found.
 * @throws {Error} If the accountId result is empty.
 *
 * @example
 * import { isModuleInstalled } from '@biconomy/sdk'
 *
 * const isInstalled = await isModuleInstalled(nexusClient, {
 *   module: {
 *     type: 'executor',
 *     address: '0x...',
 *     context: '0x'
 *   }
 * })
 * console.log(isInstalled) // true or false
 */
export declare function isModuleInstalled<TSmartAccount extends SmartAccount | undefined>(client: Client<Transport, Chain | undefined, TSmartAccount>, parameters: IsModuleInstalledParameters<TSmartAccount>): Promise<boolean>;
//# sourceMappingURL=isModuleInstalled.d.ts.map