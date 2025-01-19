import { getGasFeeValues } from "./getGasFeeValues.js";
export const bicoBundlerActions = () => (client) => ({
    getGasFeeValues: async () => getGasFeeValues(client)
});
//# sourceMappingURL=index.js.map