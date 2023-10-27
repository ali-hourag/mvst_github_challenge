
// Type repositories fetched from GitHub API and will
// be used throughout the components
export interface UserDataReposTypes {
    name: string,
    createdAt: string,
    updatedAt: string,
    description: string,
    isPrivate: boolean,
    owner: {
        login: string
    },
    languages: {
        nodes: NodeType[]
    }
}

type NodeType = {
    name: string,
    color: string
}