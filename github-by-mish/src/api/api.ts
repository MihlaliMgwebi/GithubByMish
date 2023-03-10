
export async function searchRepositories(): Promise<IRepositories | undefined> {
    return fetch("https://api.github.com/search/repositories?q=stars:>100000")
        .then((response) => response.json() as Promise<IRepositories>)
        .then((data) => data)
        .catch((err) => {
            return undefined;
        })
}

export async function getUser(): Promise<IRepositories | undefined> {
    return fetch("https://api.github.com/search/repositories?q=stars:>100000")
        .then((response) => response.json() as Promise<IRepositories>)
        .then((data) => data)
        .catch((err) => {
            return undefined;
        })
}