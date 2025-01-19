import { BaseError } from "viem";
import type { Service } from "..";
export type KnownError = {
    name: string;
    regex: string;
    description: string;
    causes: string[];
    solutions: string[];
    docsUrl?: string;
};
export declare const ERRORS_URL = "https://raw.githubusercontent.com/bcnmy/aa-errors/main/docs/errors.json";
export declare const DOCS_URL = "https://docs.biconomy.io/troubleshooting/commonerrors";
type AccountAbstractionErrorParams = {
    docsSlug?: string;
    metaMessages?: string[];
    details?: string;
};
declare class AccountAbstractionError extends BaseError {
    name: string;
    version: string;
    constructor(title: string, params?: AccountAbstractionErrorParams);
}
export declare const getAAError: (message: string, httpStatus?: number, service?: Service) => Promise<AccountAbstractionError>;
export {};
//# sourceMappingURL=getAAError.d.ts.map