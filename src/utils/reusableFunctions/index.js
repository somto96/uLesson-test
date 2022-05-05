/**
 *
 * @param  {...any} logs - The argument(s) to be logged
 * @returns {Function | undefined} Returns the native javascript console.log or undefined depending on the environment
 */
 export const Logger = (...logs) => (process.env.NODE_ENV === "development"
 ? console.log(...logs)
 : undefined);


