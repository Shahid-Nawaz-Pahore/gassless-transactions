import type { Chain, Client, Hex, Transport } from "viem";
import type { GetSmartAccountParameter, SmartAccount } from "viem/account-abstraction";
export type GetInstalledExecutorsParameters<TSmartAccount extends SmartAccount | undefined> = GetSmartAccountParameter<TSmartAccount> & {
    pageSize?: bigint;
    cursor?: Hex;
};
/**
 * Retrieves the installed executors for a given smart account.
 *
 * @param client - The client instance.
 * @param parameters - Parameters including the smart account, page size, and cursor.
 * @returns A tuple containing an array of executor addresses and the next cursor.
 * @throws {AccountNotFoundError} If the account is not found.
 *
 * @example
 * import { getInstalledExecutors } from '@biconomy/sdk'
 *
 * const [executors, nextCursor] = await getInstalledExecutors(nexusClient, {
 *   pageSize: 10n
 * })
 * console.log(executors, nextCursor) // ['0x...', '0x...'], '0x...'
 */
export declare function getInstalledExecutors<TSmartAccount extends SmartAccount | undefined>(client: Client<Transport, Chain | undefined, TSmartAccount>, parameters?: GetInstalledExecutorsParameters<TSmartAccount>): Promise<readonly [readonly Hex[], Hex]>;
//# sourceMappingURL=getInstalledExecutors.d.ts.map