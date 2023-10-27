
// Type UserData fetched from GitHub API and will
// be used throughout the components
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