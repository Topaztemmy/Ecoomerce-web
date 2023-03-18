export type User = {name: string; email: string}
export type UserList = Array<User & {password: string}>

export async function login (email: string, password: string) {
    const request = await fetch('/user.json')
    const UserJson: UserList = await request.json()
    return UserJson.find(s => s.password === password && s.email === email)
}

export async function getUser (email: string, password: string, name: string) {
    const request = await fetch('/current.json')
    const user: User = await request.json()
    return user
}