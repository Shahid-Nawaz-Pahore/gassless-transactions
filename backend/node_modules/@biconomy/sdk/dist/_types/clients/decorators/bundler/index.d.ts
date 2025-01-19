import type { Chain, Client, Prettify, Transport } from "viem";
import { type GetGasFeeValuesReturnType } from "./getGasFeeValues";
export type BicoActions = {
    /**
     * Returns the live gas prices that you can use to send a user operation.
     *
     * @returns slow, standard & fast values for maxFeePerGas & maxPriorityFeePerGas {@link GetGasFeeValuesReturnType}
     *
     * @example
     *
     * import { createClient } from "viem"
     * import { bicoBundlerActions } from "@biconomy/sdk"
     *
     * const bundlerClient = createClient({
     *      chain: goerli,
     *      transport: http("https://api.biconomy.io/v2/goerli/rpc?apikey=YOUR_API_KEY_HERE")
     * }).extend(bicoBundlerActions())
     *
     * await bundlerClient.getGasFeeValues()
     */
    getGasFeeValues: () => Promise<Prettify<GetGasFeeValuesReturnType>>;
};
export declare const bicoBundlerActions: () => <TTransport extends Transport, TChain extends Chain | undefined = Chain | undefined>(client: Client<TTransport, TChain>) => BicoActions;
//# sourceMappingURL=index.d.ts.map