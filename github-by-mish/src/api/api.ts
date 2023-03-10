
export async function listPublicRepositories(): Promise<IRepositories | undefined> {
    return fetch("https://api.github.com/repositories")
        .then((response) => response.json() as Promise<IRepositories>)
        .then((data) => data)
        .catch((err) => {
            return undefined;
        })
}