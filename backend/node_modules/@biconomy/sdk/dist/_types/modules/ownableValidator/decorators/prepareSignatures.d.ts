import type { Chain, Client, Hex, Transport } from "viem";
import type { ModularSmartAccount } from "../../utils/Types";
export type PrepareSignaturesParameters<TModularSmartAccount extends ModularSmartAccount | undefined> = {
    account?: TModularSmartAccount;
    signatures: Hex[];
};
export declare function prepareSignatures<TModularSmartAccount extends ModularSmartAccount | undefined>(client: Client<Transport, Chain | undefined, TModularSmartAccount>, parameters: PrepareSignaturesParameters<TModularSmartAccount>): Promise<Hex>;
//# sourceMappingURL=prepareSignatures.d.ts.map