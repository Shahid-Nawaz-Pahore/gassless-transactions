import { BaseError } from "viem";
export const ERRORS_URL = "https://raw.githubusercontent.com/bcnmy/aa-errors/main/docs/errors.json";
export const DOCS_URL = "https://docs.biconomy.io/troubleshooting/commonerrors";
const UNKOWN_ERROR_CODE = "520";
const knownErrors = [];
const matchError = (message) => knownErrors.find((knownError) => message.toLowerCase().indexOf(knownError.regex.toLowerCase()) > -1) ?? null;
const buildErrorStrings = (error, status, service) => [
    `${status}: ${error.description}\n`,
    error.causes?.length
        ? ["Potential cause(s): \n", ...error.causes, ""].join("\n")
        : "",
    error.solutions?.length
        ? ["Potential solution(s): \n", ...error.solutions].join("\n")
        : "",
    service ? `\nSent via: ${service}` : ""
].filter(Boolean);
class AccountAbstractionError extends BaseError {
    constructor(title, params = {}) {
        super(title, params);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "AccountAbstractionError"
        });
        Object.defineProperty(this, "version", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "@biconomy/sdk"
        });
    }
}
export const getAAError = async (message, httpStatus, service) => {
    if (!knownErrors.length) {
        const errors = (await (await fetch(ERRORS_URL)).json());
        knownErrors.push(...errors);
    }
    const details = `${service} - ${typeof message}` === "string"
        ? message
        : JSON.stringify(message);
    const matchedError = matchError(details);
    const status = matchedError?.regex ?? (httpStatus ?? UNKOWN_ERROR_CODE).toString();
    const metaMessages = matchedError
        ? buildErrorStrings(matchedError, status, service)
        : [];
    const title = matchedError ? matchedError.name : "Unknown Error";
    const docsSlug = matchedError?.docsUrl ?? DOCS_URL;
    return new AccountAbstractionError(title, {
        docsSlug,
        metaMessages,
        details
    });
};
//# sourceMappingURL=getAAError.js.map