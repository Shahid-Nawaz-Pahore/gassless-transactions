import type { Chain, Client, Hex, Transport } from "viem";
import type { GetSmartAccountParameter, SmartAccount } from "viem/account-abstraction";
export type GetInstalledValidatorsParameters<TSmartAccount extends SmartAccount | undefined> = GetSmartAccountParameter<TSmartAccount> & {
    pageSize?: bigint;
    cursor?: Hex;
};
/**
 * Retrieves the installed validators for a given smart account.
 *
 * @param client - The client instance.
 * @param parameters - Parameters including the smart account, page size, and cursor.
 * @returns A tuple containing an array of validator addresses and the next cursor.
 * @throws {AccountNotFoundError} If the account is not found.
 *
 * @example
 * import { getInstalledValidators } from '@biconomy/sdk'
 *
 * const [validators, nextCursor] = await getInstalledValidators(nexusClient, {
 *   pageSize: 10n
 * })
 * console.log(validators, nextCursor) // ['0x...', '0x...'], '0x...'
 */
export declare function getInstalledValidators<TSmartAccount extends SmartAccount | undefined>(client: Client<Transport, Chain | undefined, TSmartAccount>, parameters?: GetInstalledValidatorsParameters<TSmartAccount>): Promise<readonly [readonly Hex[], Hex]>;
//# sourceMappingURL=getInstalledValidators.d.ts.map