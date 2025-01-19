import type { Address, Chain, Client, Hash, Hex, Transport } from "viem";
import type { Call } from "../../../account/utils/Types";
import type { ModularSmartAccount, Module } from "../../utils/Types";
import { type AddOwnerParameters } from "./addOwner";
import { type GetOwnersParameters } from "./getOwners";
import { type GetRemoveOwnerTxParameters } from "./getRemoveOwnerTx";
import { type GetSetThresholdTxParameters } from "./getSetThresholdTx";
import { type GetThresholdParameters } from "./getThreshold";
import { type PrepareSignaturesParameters } from "./prepareSignatures";
import { type RemoveOwnerParameters } from "./removeOwner";
import { type SetThresholdParameters } from "./setThreshold";
export type OwnableActions<TModularSmartAccount extends ModularSmartAccount | undefined> = {
    getRemoveOwnerTx: (args: GetRemoveOwnerTxParameters<TModularSmartAccount>) => Promise<Call>;
    addOwner: (args: AddOwnerParameters<TModularSmartAccount>) => Promise<Hash>;
    removeOwner: (args: RemoveOwnerParameters<TModularSmartAccount>) => Promise<Hash>;
    setThreshold: (args: SetThresholdParameters<TModularSmartAccount>) => Promise<Hash>;
    getOwners: (args?: GetOwnersParameters<TModularSmartAccount>) => Promise<Address[]>;
    getSetThresholdTx: (args: GetSetThresholdTxParameters<TModularSmartAccount>) => Promise<Call>;
    getAddOwnerTx: (args: AddOwnerParameters<TModularSmartAccount>) => Promise<Call>;
    prepareSignatures: (args: PrepareSignaturesParameters<TModularSmartAccount>) => Promise<Hex>;
    getThreshold: (args?: GetThresholdParameters<TModularSmartAccount>) => Promise<number>;
};
export declare function ownableActions(ownableModule: Module): <TModularSmartAccount extends ModularSmartAccount | undefined>(client: Client<Transport, Chain | undefined, TModularSmartAccount>) => OwnableActions<TModularSmartAccount>;
//# sourceMappingURL=index.d.ts.map