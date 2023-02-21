//http://developer.spotify.com/
//doumenation/web-palyback-sdk/quick-start/

export const authEndpoint=
"https://accounts.spotify.com/authorize";

const redirectUri="http://localhost:3000/";

const clientId="ca119840ec0648148f1fa5d0263399b6"

const scopes=[
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
]

export const getTokenFromUrl=()=>{
    return window.location.hash.substring(1).split('&').reduce((initial,item)=>{
        //#access_token=BQDUHfqEZBQKgTGr9S1dG5Kw9P4Lwf5S1MECMfx8vjIZ9TdE51qRzNc8gqkAWy2H5PvReK7EMjROiE6wLgD-Eli3yyoMNW4BWGJtPPHXtsu4CtR18_QD_EVCkf_5uqNNy6174xN8tFtHT8sAObNXqzzMUfV92jMDACwx477n1WSXIrP-9QBBx8dvg0LymxWmZgXCd6e5z38CZ3XmOxt94w&token_type=Bearer&expires_in=3600
        let parts=item.split('=')
        initial[parts[0]]=decodeURIComponent(parts[1])
        return initial;

    },{})
}



export const loginUrl=`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;