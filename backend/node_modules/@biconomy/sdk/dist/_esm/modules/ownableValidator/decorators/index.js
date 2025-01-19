import { addOwner } from "./addOwner.js";
import { getAddOwnerTx } from "./getAddOwnerTx.js";
import { getOwners } from "./getOwners.js";
import { getRemoveOwnerTx } from "./getRemoveOwnerTx.js";
import { getSetThresholdTx } from "./getSetThresholdTx.js";
import { getThreshold } from "./getThreshold.js";
import { prepareSignatures } from "./prepareSignatures.js";
import { removeOwner } from "./removeOwner.js";
import { setThreshold } from "./setThreshold.js";
export function ownableActions(ownableModule) {
    return (client) => {
        client?.account?.setModule(ownableModule);
        return {
            getThreshold: (args) => {
                return getThreshold(client, args);
            },
            prepareSignatures: (args) => {
                return prepareSignatures(client, args);
            },
            getAddOwnerTx: (args) => {
                return getAddOwnerTx(client, args);
            },
            getOwners: (args) => {
                return getOwners(client, args);
            },
            getSetThresholdTx: (args) => {
                return getSetThresholdTx(client, args);
            },
            getRemoveOwnerTx: (args) => {
                return getRemoveOwnerTx(client, args);
            },
            addOwner: (args) => {
                return addOwner(client, args);
            },
            removeOwner: (args) => {
                return removeOwner(client, args);
            },
            setThreshold: (args) => {
                return setThreshold(client, args);
            }
        };
    };
}
//# sourceMappingURL=index.js.map