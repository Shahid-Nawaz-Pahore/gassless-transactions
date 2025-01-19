import { OWNABLE_VALIDATOR_ADDRESS, getAccount, getOwnableValidatorMockSignature, getOwnableValidatorThreshold, isModuleInstalled } from "@rhinestone/module-sdk";
import { decodeAbiParameters, encodeAbiParameters } from "viem";
import { toModule } from "../utils/toModule.js";
/**
 * Generates the initialization data for the Ownables module.
 *
 * @param parameters - The parameters for initializing the module.
 * @returns The module metadata including the address, type, and encoded init data.
 */
export const getOwnablesModuleInitData = (parameters) => ({
    address: OWNABLE_VALIDATOR_ADDRESS,
    type: "validator",
    initData: encodeAbiParameters([
        { name: "threshold", type: "uint256" },
        { name: "owners", type: "address[]" }
    ], [parameters.threshold, parameters.owners])
});
/**
 * Generates the initialization data for the Ownables module.
 * This function currently returns an empty hex string.
 *
 * @param _ - Optional initialization parameters (currently unused).
 * @returns An empty hex string.
 */
export const getOwnablesInitData = (_) => "0x";
/**
 * Creates an Ownable module for a modular smart account.
 *
 * This function sets up an Ownable module with the specified parameters,
 * including threshold and owners for the smart account.
 *
 * @param parameters - The parameters for creating the Ownable module.
 * @returns A Module object representing the created Ownable module.
 *
 * @example
 * ```typescript
 * const ownableModule = toOwnableValidator({
 *   account: mySmartAccount,
 *   signer: mySigner,
 *   moduleInitArgs: {
 *     threshold: 2n,
 *     owners: ['0x123...', '0x456...']
 *   }
 * });
 * ```
 *
 * @remarks
 * - If the module is already installed, it will use the existing threshold.
 * - If not installed, it will use the threshold from the initialization parameters.
 * - The function generates a mock signature based on the threshold.
 */
export const toOwnableValidator = (parameters) => {
    const { account, signer, client = account.client, initData: initData_ = "0x", initArgs: initArgs_, moduleInitArgs: moduleInitArgs_ = {
        threshold: 1,
        owners: [signer.address]
    }, deInitData = "0x" } = parameters;
    const nexusAccount = getAccount({
        address: account.address,
        type: "nexus"
    });
    const moduleInitData = getOwnablesModuleInitData(moduleInitArgs_);
    const initData = initData_ ?? getOwnablesInitData(initArgs_);
    return toModule({
        signer,
        accountAddress: account.address,
        address: OWNABLE_VALIDATOR_ADDRESS,
        initData: getOwnablesInitData(),
        deInitData,
        moduleInitData,
        getStubSignature: async () => {
            const isInstalled = await isModuleInstalled({
                account: nexusAccount,
                client: client,
                module: {
                    address: OWNABLE_VALIDATOR_ADDRESS,
                    type: "validator",
                    module: OWNABLE_VALIDATOR_ADDRESS,
                    initData: "0x",
                    deInitData: "0x",
                    additionalContext: "0x"
                }
            });
            let threshold;
            if (isInstalled) {
                threshold = await getOwnableValidatorThreshold({
                    account: nexusAccount,
                    client: client
                });
            }
            else {
                const [_threshold, _owners] = decodeAbiParameters([
                    { name: "threshold", type: "uint256" },
                    { name: "owners", type: "address[]" }
                ], initData);
                threshold = Number(_threshold);
            }
            return getOwnableValidatorMockSignature({ threshold });
        }
    });
};
//# sourceMappingURL=toOwnableValidator.js.map