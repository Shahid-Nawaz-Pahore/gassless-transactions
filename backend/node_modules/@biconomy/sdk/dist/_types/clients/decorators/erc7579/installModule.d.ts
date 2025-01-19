import { type Chain, type Client, type Hex, type Transport } from "viem";
import { type GetSmartAccountParameter, type SmartAccount } from "viem/account-abstraction";
import type { ModuleMeta } from "../../../modules/utils/Types";
export type InstallModuleParameters<TSmartAccount extends SmartAccount | undefined> = GetSmartAccountParameter<TSmartAccount> & {
    module: ModuleMeta;
    maxFeePerGas?: bigint;
    maxPriorityFeePerGas?: bigint;
    nonce?: bigint;
};
/**
 * Installs a module on a given smart account.
 *
 * @param client - The client instance.
 * @param parameters - Parameters including the smart account, module to install, and optional gas settings.
 * @returns The hash of the user operation as a hexadecimal string.
 * @throws {AccountNotFoundError} If the account is not found.
 *
 * @example
 * import { installModule } from '@biconomy/sdk'
 *
 * const userOpHash = await installModule(nexusClient, {
 *   module: {
 *     type: 'executor',
 *     address: '0x...',
 *     context: '0x'
 *   }
 * })
 * console.log(userOpHash) // '0x...'
 */
export declare function installModule<TSmartAccount extends SmartAccount | undefined>(client: Client<Transport, Chain | undefined, TSmartAccount>, parameters: InstallModuleParameters<TSmartAccount>): Promise<Hex>;
//# sourceMappingURL=installModule.d.ts.map