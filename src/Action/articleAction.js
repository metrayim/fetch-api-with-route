import { actionType } from './actionType'
import axios from 'axios'
export const fetchArticle = () => {
    return (dispatch) => {
        axios.get('http://api-ams.me/v1/api/articles?page=1&limit=15')
            .then(result => {
                // console.log("result", result);
                dispatch({
                    type: actionType.FETCH_ARTICLE,
                    payLoad: result.data.DATA
                })
            })
            .catch(error => console.log("eroror fetch", error))
    }
}
export const deleteArticle = (dataId) => {
    // return (dispatch)=>{
    //     return axios.delete('http://api-ams.me/v1/api/articles/' + dataId)
    //     .then(result=>{
    //         console.log(result,"show data")
    //     })
    // }
    // console.log(result.data.DATA,"hiiiiii")
    const apiUrl = 'http://api-ams.me/v1/api/articles/' + dataId;
    const formData = new FormData();
    console.log(dataId, "dataID state")
    return (dispatch) => {
        return fetch(apiUrl, { method: 'DELETE', body: formData })
            .then(rep => rep.json())
            .then(result => {
                // console.log(result.DATA,'data for iterater')
                // dispatch({
                //     type: actionType.DELETE_ARTICLE,
                //     payLoad:result.DATA

                // })
                return fetch('http://api-ams.me/v1/api/articles?page=1&limit=15')
                .then(res=>res.json())
                .then(result=>{
                    dispatch({
                        type: actionType.FETCH_ARTICLE,
                        payLoad: result.DATA
                    })

                })

            })
    }
}

export const onAdd = () => {
    return (dispatch) => {
        dispatch({
            type: actionType.ON_ADD,
            isAdd: true,
            isEdit: false
        })
    }
}

export const postSucces = (data) => {
    return {
        type: actionType.CREATE_POST,
        id: data.ID,
        title: data.TITLE,
        description: data.DESCRIPTION,
        isAdd: false,
        isEdit: false
    }
}
export const createPost = (title, description) => {
    return (dispatch) => {
        return fetch("http://api-ams.me/v1/api/articles",
            {
                method: "POST",
                body: JSON.stringify({ TITLE: title, DESCRIPTION: description }),
                headers: { "content-type": "application/json;charset=UTF-8" }
            }).then(respon => respon.json())
            .then(result => {
                dispatch(postSucces(postSucces(result.DATA)))
                // console.log(result)

            }
            )
    }

}
export const OnEdit = (id) => {
    return (dispatch) => {
        return fetch("http://api-ams.me/v1/api/articles/" + id)
            .then(respon => respon.json())
            .then(result => {
                console.log(result.DATA, "respon udate")
                dispatch({
                    type: actionType.ON_EDIT,
                    payLoad: {
                        id: result.DATA.ID,
                        title: result.DATA.TITLE,
                        description: result.DATA.DESCRIPTION
                    }
                })
            })
    }
}
export const updateSucces = (data) => {
    return {
        type: actionType.UPDATE_ARTICLE,
        id: data.ID,
        title: data.TITLE,
        description: data.DESCRIPTION,
        isAdd: false,
        isEdit: false
    }
}
export const updateArticle = (article) => {
    return (dispatch) => {
        return fetch("http://api-ams.me/v1/api/articles/" + article.id,
            {
                method: "PUT",
                body: JSON.stringify({ TITLE: article.title, DESCRIPTION: article.description }),
                headers: { "content-type": "application/json;charset=UTF-8" }
            }).then(respon => respon.json())
            .then(result =>
                dispatch(updateSucces(result.DATA))

            )
    }
}
export const viewArticle = (id) => {
    return (dispatch) => {
        return fetch("http://api-ams.me/v1/api/articles/" + id)
            .then(respon => respon.json())
            .then(result =>
                dispatch({
                    type: actionType.VEIW_ARTICLE,
                    payLoad: {
                        id: result.DATA.ID,
                        title: result.DATA.TITLE,
                        description: result.DATA.DESCRIPTION
                    }
                })

            )

    }
}
export const handleShow = (id) => {
    return (dispatch) => {
        dispatch({
            type: actionType.HANDLE_SHOW,
            modaleShow: true,
            id: id

        })
    }
}

