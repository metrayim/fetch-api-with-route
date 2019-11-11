
import {actionType} from '../Action/actionType'
const init={
    articles:[],
    modalIsOpen: false,
    alert: false,
    isAdd:false,
    isEdit:false,
    article:{},
    id:""
}
export const articleReducer=(state=init,action)=>{
    // console.log("Hleloo",action.payLoad)
    //  const newState={...state}
    //  console.log(newState,"heee")
    // console.log(newState[1].ID)
    // const newState={aritcle:action.payLoad}
    // console.log(newState,"hlllllllll")
    // console.log(action.payLoad,'test 2')
    switch(action.type){
        case actionType.FETCH_ARTICLE:
            // console.log(action.payLoad,"aritcle")
            return{...state,articles:action.payLoad}
        case actionType.DELETE_ARTICLE:
            const newState=state
        case actionType.ON_ADD:
            return {isAdd:!state.isAdd,isEdit:action.isEdit}
        case actionType.CREATE_POST:
            return {...state,isAdd:false,isEdit:false}
        case actionType.ON_EDIT:
            return {article:action.payLoad,isAdd:true,isEdit:true}
        case actionType.UPDATE_ARTICLE:
            return {...state,isAdd:false,isEdit:false}
        case actionType.VEIW_ARTICLE:
            console.log(action.payLoad,"view")
            return {article:action.payLoad}
        case actionType.HANDLE_SHOW:
            return {id:action.id}
        

        default:
            return state;
    }
    
   
}
// Datas: Datas.filter(data => data.ID !== dataId)