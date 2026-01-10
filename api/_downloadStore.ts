export const downloads = new Map<string, {
    file: string
    email: string
    expiresAt: number
  }>()
  
export function saveDownloadToken(data: {
    token: string
    file: string
    email: string
    expiresAt: number
}) {
    downloads.set(data.token, {
        file: data.file,
        email: data.email,
        expiresAt: data.expiresAt
})
}

export function getDownloadToken(token: string) {
    return downloads.get(token)
}
