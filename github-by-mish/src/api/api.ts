export async function searchRepositories(): Promise<IRepositories | undefined> {
    return fetch("https://api.github.com/search/repositories?q=stars:>100000")
        .then((response) => response.json() as Promise<IRepositories>)
        .then((data) => data)
        .catch((err) => {
            return undefined;
        })
}

// Lists all users, in the order that they signed up on GitHub. This list includes personal user accounts and organization accounts.
export async function listOfAllUsers(): Promise<IUser[] | undefined> {
    return fetch("https://api.github.com/users")
        .then((response) => response.json() as Promise<IUser[]>)
        .then((data) => data)
        .catch((err) => {
            return undefined;
        })
}

/**
 * Given the username, provides publicly available information about someone with a GitHub account
 * @param {string} username - The employee who is responsible for the project.
 */
export async function getPubliclyAvailableUserInfo(username: string): Promise<IUserInfo | undefined> {
    return fetch(`https://api.github.com/users/${username}`)
        .then((response) => response.json() as Promise<IUserInfo>)
        .then((data) => data)
        .catch((err) => {
            return undefined;
        })
}