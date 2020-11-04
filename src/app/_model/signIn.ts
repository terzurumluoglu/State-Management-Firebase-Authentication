import * as firebase from "firebase/app";
import 'firebase/auth';

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

export class Provider {
    type: Login;
}

export class Login {
    name: string;
    provider: any;
    scope: string
}

export const providers: Provider[] = [
    {
        type: {
            name: LoginType.google,
            provider: new firebase.default.auth.GoogleAuthProvider(),
            scope: 'https://www.googleapis.com/auth/userinfo.profile'
        }
    },
    {
        type: {
            name: LoginType.facebook,
            provider: new firebase.default.auth.FacebookAuthProvider(),
            scope: 'public_profile,email'
        }
    },
    {
        type: {
            name: LoginType.github,
            provider: new firebase.default.auth.GithubAuthProvider(),
            scope: 'user'
        }
    }
];