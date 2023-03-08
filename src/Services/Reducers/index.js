export const initialState={
    user:null,
    playlists:[],
    token:'',
    scrollPosition:0,
    playlist:Object,

}

const reducer=(state,action)=>{
switch(action.type){
    case 'SET_USER':
        return{
            ...state,user:action.user
        };
    case 'SET_TOKEN':
        return{
            ...state,
            token:action.token
        };
    case 'SET_PLAYLISTS':
        return{
            ...state,
            playlists:action.playlists
        };
    case 'SET_PLAYLIST':
        return{
            ...state,
            playlist:action.playlist
        };
    case 'SET_SCROLLPOSITION':
        return{
            ...state,
            scrollPosition:action.scrollPosition
        };
    default:
        return state;
}
}
export default reducer;