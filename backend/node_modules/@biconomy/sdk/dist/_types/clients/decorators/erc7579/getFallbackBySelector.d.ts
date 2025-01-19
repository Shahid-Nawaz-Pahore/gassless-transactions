import type { Chain, Client, Hex, Transport } from "viem";
import type { GetSmartAccountParameter, SmartAccount } from "viem/account-abstraction";
export type GetFallbackBySelectorParameters<TSmartAccount extends SmartAccount | undefined> = GetSmartAccountParameter<TSmartAccount> & Partial<{
    selector?: Hex;
}>;
/**
 * Retrieves the fallback handler for a given selector in a smart account.
 *
 * @param client - The client instance.
 * @param parameters - Parameters including the smart account and optional selector.
 * @returns A tuple containing the call type and address of the fallback handler.
 * @throws {AccountNotFoundError} If the account is not found.
 *
 * @example
 * import { getFallbackBySelector } from '@biconomy/sdk'
 *
 * const [callType, handlerAddress] = await getFallbackBySelector(nexusClient, {
 *   selector: '0x12345678'
 * })
 * console.log(callType, handlerAddress) // '0x1' '0x...'
 */
export declare function getFallbackBySelector<TSmartAccount extends SmartAccount | undefined>(client: Client<Transport, Chain | undefined, TSmartAccount>, parameters: GetFallbackBySelectorParameters<TSmartAccount>): Promise<[Hex, Hex]>;
//# sourceMappingURL=getFallbackBySelector.d.ts.map