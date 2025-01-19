import { type Chain, type Client, type Hex, type Transport } from "viem";
import { type GetSmartAccountParameter, type SmartAccount } from "viem/account-abstraction";
import type { ModuleMeta } from "../../../modules/utils/Types";
export type UninstallModuleParameters<TSmartAccount extends SmartAccount | undefined> = GetSmartAccountParameter<TSmartAccount> & {
    module: ModuleMeta;
    maxFeePerGas?: bigint;
    maxPriorityFeePerGas?: bigint;
    nonce?: bigint;
};
/**
 * Uninstalls a module from a smart account.
 *
 * @param client - The client instance.
 * @param parameters - Parameters including the smart account, module to uninstall, and optional gas settings.
 * @returns The hash of the user operation as a hexadecimal string.
 * @throws {AccountNotFoundError} If the account is not found.
 *
 * @example
 * import { uninstallModule } from '@biconomy/sdk'
 *
 * const userOpHash = await uninstallModule(nexusClient, {
 *   module: {
 *     type: 'executor',
 *     address: '0x...',
 *     context: '0x'
 *   }
 * })
 * console.log(userOpHash) // '0x...'
 */
export declare function uninstallModule<TSmartAccount extends SmartAccount | undefined>(client: Client<Transport, Chain | undefined, TSmartAccount>, parameters: UninstallModuleParameters<TSmartAccount>): Promise<Hex>;
//# sourceMappingURL=uninstallModule.d.ts.map