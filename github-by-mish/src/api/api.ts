
export async function listPublicRepositories(): Promise<IPublicRepository[] | undefined> {
    return fetch("https://api.github.com/repositories")
        .then((response) => response.json() as Promise<IPublicRepository[]>)
        .then((data) => data)
        .catch((err) => {
            return undefined;
        })
}