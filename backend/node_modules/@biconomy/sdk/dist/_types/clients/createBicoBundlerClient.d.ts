import { type BundlerRpcSchema, type Chain, type Client, type OneOf, type Prettify, type RpcSchema, type Transport } from "viem";
import { type BundlerActions, type BundlerClientConfig, type PaymasterActions, type SmartAccount } from "viem/account-abstraction";
import { type BicoActions } from "./decorators/bundler";
import type { BicoRpcSchema } from "./decorators/bundler/getGasFeeValues";
export type BicoBundlerClient<transport extends Transport = Transport, chain extends Chain | undefined = Chain | undefined, account extends SmartAccount | undefined = SmartAccount | undefined, client extends Client | undefined = Client | undefined, rpcSchema extends RpcSchema | undefined = undefined> = Prettify<Client<transport, chain extends Chain ? chain : client extends Client<any, infer chain> ? chain : undefined, account, rpcSchema extends RpcSchema ? [...BundlerRpcSchema, ...BicoRpcSchema, ...rpcSchema] : [...BundlerRpcSchema, ...BicoRpcSchema], BundlerActions<account> & PaymasterActions & BicoActions>>;
type BicoBundlerClientConfig = Omit<BundlerClientConfig, "transport"> & OneOf<{
    transport: Transport;
} | {
    bundlerUrl: string;
} | {
    apiKey?: string;
}>;
/**
 * Creates a Bico Bundler Client with a given Transport configured for a Chain.
 *
 * @param parameters - Configuration for the Bico Bundler Client
 * @returns A Bico Bundler Client
 *
 * @example
 * import { createBicoBundlerClient, http } from '@biconomy/sdk'
 * import { mainnet } from 'viem/chains'
 *
 * const bundlerClient = createBicoBundlerClient({ chain: mainnet });
 */
export declare const createBicoBundlerClient: (parameters: BicoBundlerClientConfig) => BicoBundlerClient;
export {};
//# sourceMappingURL=createBicoBundlerClient.d.ts.map