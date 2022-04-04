import React ,{useReducer ,createContext ,useContext }from 'react';


const AuthorizerContext = createContext();

const AuthorizerProvider = ({ children })=>{

    const initialAuthState = {
        loginStatus : false ,
        encodedToken : ""
    }


    const authReducerFunc=(authState , authAction)=>{
        const { type , payload } =authAction;
        console.log("from reducer", authAction);
        switch(type){
            case "LOGIN":
                return { ...authState , loginStatus : true ,encodedToken: payload.userData.encodedToken }
            case "SIGNUP":
                return { ...authState , loginStatus : true ,encodedToken: payload.userData.encodedToken }
            case "LOGOUT":
                return { ...authState , loginStatus : false ,encodedToken:""}

            default:
                return authState;
        }
    }

    const [ authState , authDispatch ] =useReducer( authReducerFunc , initialAuthState );
    console.log("from context" , authState);

    return<>
        <AuthorizerContext.Provider value={{ authState , authDispatch }}>
            {children}
        </AuthorizerContext.Provider>
    </>
}

const useAuthorizer = () => useContext(AuthorizerContext);

export{ useAuthorizer , AuthorizerProvider };
