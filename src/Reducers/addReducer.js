const dataArticle = {
    id: '',
    title: '',
    description: '',
    Datas: [],

}
export const addReducer=(state=dataArticle,action)=>{
    const newState={...state}
    return newState

}