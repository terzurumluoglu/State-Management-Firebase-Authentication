enum LoginType {
    google = 'google',
    facebook = 'facebook',
    github = 'github'
}

export const LOGINTYPES = [
    {
        title: LoginType.facebook,
        cls: 'btn btn-primary'
    },
    {
        title: LoginType.google,
        cls: 'btn btn-danger'
    },
    {
        title: LoginType.github,
        cls: 'btn btn-dark'
    }
];