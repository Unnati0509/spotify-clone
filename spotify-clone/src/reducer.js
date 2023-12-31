export const initialState = {
    user:null,
    playlists:[],
    playing:false,
    item:null,
    //token:'BQCaojXHcMYtWXgYGX8Tj35Smt67Bx7bSX9XlL9AV5eX1KDIUbV8zMbDUnAolOP1vZ9kE5vrmUN2b49-O72p3ExzMjK5W_Uuv5396AVwVivzzR1ELpjrPBjE4mJQBNRBSCkjU73p8ovKRPD4BV4Dacx_cGQoQv8ujrvZbUDvD-9_nAgyV2fUr_5c2FPL-Sgux_4JirXqbT0l4kp_TDzy'
}

const reducer = (state,action) =>{
    console.log(action);
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user:action.user

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
        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly:action.discover_weekly,
            }
            case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    
            default:
                return state;
            
    }
}
export default reducer;