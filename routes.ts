
/**
 * an array of public routes that are accessible without authentication
 * this routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes = [
  "/",
]

/**
 * an array of authentication routes
 * @type {string[]}
 */

export const authRoutes = [
  "/auth/login",
  "/auth/register",
]

/**
 * an array of protected routes that require authentication
 * @type {string[]}
 */
export const protectedRoutes = [
  "/settings",
]


/** * an array of API authentication routes
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication purposes
 * @type {string[]}
 */

export const apiAuthRoutes = "/api/auth"

/**
 * The default redirection path after loggeding in
 * @type {string}
 */

export const defaultRedirectPath = "/settings"