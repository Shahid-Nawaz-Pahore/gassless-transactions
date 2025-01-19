import { type Chain, type Client, type Hex, type Transport } from "viem";
import { type GetSmartAccountParameter, type SmartAccount } from "viem/account-abstraction";
import type { ModuleMeta } from "../../../modules/utils/Types";
export type UninstallModulesParameters<TSmartAccount extends SmartAccount | undefined> = GetSmartAccountParameter<TSmartAccount> & {
    modules: ModuleMeta[];
    maxFeePerGas?: bigint;
    maxPriorityFeePerGas?: bigint;
    nonce?: bigint;
};
/**
 * Uninstalls multiple modules from a smart account.
 *
 * @param client - The client instance.
 * @param parameters - Parameters including the smart account, modules to uninstall, and optional gas settings.
 * @returns The hash of the user operation as a hexadecimal string.
 * @throws {AccountNotFoundError} If the account is not found.
 *
 * @example
 * import { uninstallModules } from '@biconomy/sdk'
 *
 * const userOpHash = await uninstallModules(nexusClient, {
 *   modules: [
 *     { type: 'executor', address: '0x...', context: '0x' },
 *     { type: 'validator', address: '0x...', context: '0x' }
 *   ]
 * })
 * console.log(userOpHash) // '0x...'
 */
export declare function uninstallModules<TSmartAccount extends SmartAccount | undefined>(client: Client<Transport, Chain | undefined, TSmartAccount>, parameters: UninstallModulesParameters<TSmartAccount>): Promise<Hex>;
//# sourceMappingURL=uninstallModules.d.ts.map