
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