import React from 'react';
// import './App.css';
import FetchData from './FetchData'
import CreateArticle from './CreateArticle';
import { Button,Alert } from 'react-bootstrap';
import {connect} from 'react-redux';
import {onAdd,createPost,OnEdit,updateArticle}from '../../Action/articleAction'
import Swal from 'sweetalert2';
import ShowCard from '../Cards/showCard'
import Footers from '../Footer/footer'
class App extends React.Component {
  state = {
    isAdd: false,
    isEdit: false,
    article: {},
    alert:false,
    showTable:true
  }
  onAdd = () => {
    this.props.onAdd()
    // this.setState({
    //   isAdd:!this.state.isAdd,
    //   isEdit: false,
    // })
    // return (dispatch)=>{
    //   dispatch({type:ON_ADD,
    //     isAdd:true,
    //     isEdit:false
    //   })
    // }

  }
  onEdit = (id) => {
    this.props.OnEdit(id)
    // fetch("http://api-ams.me/v1/api/articles/" + id)
    //   .then(respon => respon.json())
    //   .then(result => {
    //     this.setState({
    //       isAdd: true,
    //       isEdit: true,
    //       article: {
    //         id:result.DATA.ID,
    //         title:result.DATA.TITLE,
    //         description:result.DATA.DESCRIPTION
    //       },

    //     })
       
    //     // console.log(id)
    //   })



  }
  onSubmitArticle = (article) => {
    if (this.props.isAdd && this.props.isEdit) {
      // const title = article.title;
      // const description = article.description;
      
      
      setTimeout(()=>{
      
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your Article has been saved',
          showConfirmButton: false,
          timer: 1500
        })
      },2000)
      setTimeout(()=>{
        this.props.updateArticle(article)
      },2100)
      
      // Swal.fire({
      //   position: 'top-end',
      //   icon: 'success',
      //   title: 'Your work has been saved',
      //   showConfirmButton: false,
      //   timer: 1500
      // })
      // this.state.Datas.push(result.DATA)
      // fetch("http://api-ams.me/v1/api/articles/" + article.id,
      //   {
      //     method: "PUT",
      //     body: JSON.stringify({ TITLE: title, DESCRIPTION: description }),
      //     headers: { "content-type": "application/json;charset=UTF-8" }
      //   }).then(respon => respon.json())
      //   .then(result => {this.setState({isAdd:false,isEdit:false,alert:true}) })
    }
    else {
      // const { article } = this.state
      const title = article.title;
      const description = article.description;
      setTimeout(()=>{
        
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your Article has been ADD',
          showConfirmButton: false,
          timer: 1500
        })
      },2000)
      setTimeout(()=>{
        this.props.createPost(title,description)
      },2100)
      // this.state.Datas.push(result.DATA)
      // fetch("http://api-ams.me/v1/api/articles",
      //   {
      //     method: "POST",
      //     body: JSON.stringify({ TITLE: title, DESCRIPTION: description }),
      //     headers: { "content-type": "application/json;charset=UTF-8" }
      //   }).then(respon => respon.json())
      //   .then(result => {
      //     this.setState({
      //       isAdd: false,
      //       isEdit: false,
      //       alert:true
      //     })
      //     console.log(result)

      //   }
      //   )
    }

  }
  showTable=()=>{
    this.setState({showTable:!this.state.showTable})
  }

  render() {
   const style={
      border:" 2px solid #cccc",
    borderRadius: "10px",
     width:"150px"
    }
    const alerystale={
      width:"200px"
  }
    
    return (
      <div> 
         <Button onClick={this.onAdd} className="mt-5 mb-5 ml-3" style={style}>{this.props.isAdd?'Back':'ADD'}</Button>
        {this.props.isAdd ? <CreateArticle onSubmitArticle={this.onSubmitArticle} article={this.state.article} /> :
          <div>
           
            <Button onClick={this.showTable} className="mt-5 mb-5 ml-5" style={style}>{this.state.showTable?'Show Card':'Show Table'}</Button>

            
            {this.state.showTable ?<FetchData onEdit={this.onEdit} />:<ShowCard/>}
            
            <Footers/>
            
          </div>
        }



      </div>
    )
  }

}
const mapStatetoProps=(centralStore)=>{
  return{
    isAdd:centralStore.articleReducer.isAdd,
    isEdit:centralStore.articleReducer.isEdit

  }
}
export default connect(mapStatetoProps,{onAdd,createPost,OnEdit,updateArticle})(App);
