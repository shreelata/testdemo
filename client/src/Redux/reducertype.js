import { Fail_Request, Get_Data, Get_userlist, Make_Request,Remove_user,Add_user,FetchdataForUpdate
    ,Updateuser } from "./Actiontype";



const initialstate = {
    loading: true,
    userlist: [],
    userobj: {},
    userlistdata: [],
    errormessage: ''
}



 const reducer = (state= initialstate,action)=> {
    switch (action.type) {
        case Make_Request:
            return {
                ...state,
                loading: true
            }

        case Fail_Request:
            return {
                ...state,
                loading: false,
                errormessage: action.payload
            }
        case Get_userlist:
          
            return {
                ...state,
                loading: false,
                errormessage: '',
                userlist: action.payload,
                userlistdata:action.payload,
                userobj: {}
            }
            case Get_Data:
            return {
                
                ...state,
                  loading: false,
                errormessage: '',
                userlist: action.payload,
                userobj: {}
              
        }
        case Remove_user:
            return {
                ...state,
                  loading: false,
                errormessage: '',
               
               }
            case Add_user:
                return {
                 ...state,
                  loading: true,
                errormessage: '',
               // userlist: action.payload,
              //  userobj: {}
                
            }
            case FetchdataForUpdate:
            return {
                
                ...state,
                  loading: false,
                errormessage: '',
                userobj:action.payload,
              
        }
        case Updateuser:
                return {
                 ...state,
                  loading: false,
                errormessage: '',
                             
            }

        default:
            return state
    }
}
export default reducer;