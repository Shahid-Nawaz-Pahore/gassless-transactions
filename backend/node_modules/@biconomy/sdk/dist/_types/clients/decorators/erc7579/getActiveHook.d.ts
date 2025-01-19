import type { Chain, Client, Hex, Transport } from "viem";
import type { GetSmartAccountParameter, SmartAccount } from "viem/account-abstraction";
export type GetActiveHookParameters<TSmartAccount extends SmartAccount | undefined> = GetSmartAccountParameter<TSmartAccount>;
/**
 * Retrieves the active hook for a given smart account.
 *
 * @param client - The client instance.
 * @param parameters - Parameters for getting the smart account.
 * @returns The address of the active hook as a hexadecimal string.
 * @throws {AccountNotFoundError} If the account is not found.
 *
 * @example
 * import { getActiveHook } from '@biconomy/sdk'
 *
 * const activeHook = await getActiveHook(nexusClient)
 * console.log(activeHook) // '0x...'
 */
export declare function getActiveHook<TSmartAccount extends SmartAccount | undefined>(client: Client<Transport, Chain | undefined, TSmartAccount>, parameters?: GetActiveHookParameters<TSmartAccount>): Promise<Hex>;
//# sourceMappingURL=getActiveHook.d.ts.map