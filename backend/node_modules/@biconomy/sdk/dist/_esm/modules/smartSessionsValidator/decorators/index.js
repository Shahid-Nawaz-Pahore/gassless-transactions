import { grantPermission } from "./grantPermission.js";
import { trustAttesters } from "./trustAttesters.js";
import { usePermission } from "./usePermission.js";
/**
 * Creates actions for managing smart session creation.
 *
 * @param _ - Unused parameter (placeholder for potential future use).
 * @returns A function that takes a client and returns SmartSessionCreateActions.
 */
export function smartSessionCreateActions(_) {
    return (client) => {
        return {
            grantPermission: (args) => grantPermission(client, args),
            trustAttesters: (args) => trustAttesters(client, args)
        };
    };
}
/**
 * Creates actions for using smart sessions.
 *
 * @param smartSessionsModule - The smart sessions module to be set on the client's account.
 * @returns A function that takes a client and returns SmartSessionUseActions.
 */
export function smartSessionUseActions(smartSessionsModule) {
    return (client) => {
        client?.account?.setModule(smartSessionsModule);
        return {
            usePermission: (args) => usePermission(client, args)
        };
    };
}
export * from "./grantPermission.js";
export * from "./trustAttesters.js";
export * from "./usePermission.js";
//# sourceMappingURL=index.js.map