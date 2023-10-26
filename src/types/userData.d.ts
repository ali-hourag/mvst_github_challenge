
export interface UserDataTypes {
    name: string,
    login: string,
    avatarUrl: string,
    followers: {
        totalCount: number
    },
    following: {
        totalCount: number
    },
    repositories: {
        totalCount: number
    }
}