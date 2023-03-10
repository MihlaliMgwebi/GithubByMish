
export async function listPublicRepositories(): Promise<IPublicRepositories | undefined> {
    return fetch("https://api.github.com/repositories")
        .then((response) => response.json() as Promise<IPublicRepositories>)
        .then((data) => data)
        .catch((err) => {
            return undefined;
        })
}