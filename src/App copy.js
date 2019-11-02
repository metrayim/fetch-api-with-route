import React from 'react';
import './App.css';
import FetchData from './Component/FetchData'
import CreateArticle from './Component/CreateArticle';
import { Button,Alert } from 'react-bootstrap';

class App extends React.Component {
  state = {
    isAdd: false,
    isEdit: false,
    article: {},
    alert:false
  }
  onAdd = () => {
    this.setState({
      isAdd: true,
      isEdit: false,
      article: {},
      articles: [],
      
    })

  }
  onEdit = (id) => {
    fetch("http://api-ams.me/v1/api/articles/" + id)
      .then(respon => respon.json())
      .then(result => {
        this.setState({
          isAdd: true,
          isEdit: true,
          article: {
            id:result.DATA.ID,
            title:result.DATA.TITLE,
            description:result.DATA.DESCRIPTION
          },

        })
       
        console.log(id)
      })



  }
  onSubmitArticle = (article) => {
    if (this.state.isAdd && this.state.isEdit) {
      const title = article.title;
      const description = article.description;
      // this.state.Datas.push(result.DATA)
      fetch("http://api-ams.me/v1/api/articles/" + article.id,
        {
          method: "PUT",
          body: JSON.stringify({ TITLE: title, DESCRIPTION: description }),
          headers: { "content-type": "application/json;charset=UTF-8" }
        }).then(respon => respon.json())
        .then(result => {this.setState({isAdd:false,isEdit:false,alert:true}) })
    }
    else {
      // const { article } = this.state
      const title = article.title;
      const description = article.description;
      // this.state.Datas.push(result.DATA)
      fetch("http://api-ams.me/v1/api/articles",
        {
          method: "POST",
          body: JSON.stringify({ TITLE: title, DESCRIPTION: description }),
          headers: { "content-type": "application/json;charset=UTF-8" }
        }).then(respon => respon.json())
        .then(result => {
          this.setState({
            isAdd: false,
            isEdit: false,
            alert:true
          })
          console.log(result)

        }
        )
    }

  }

  render() {
   const style={
      border:" 2px solid #cccc",
    borderRadius: "30px",
    width:"100px"
    }
    const alerystale={
      width:"200px"
  }
    
    return (
      <div>
         <Alert style={alerystale} variant="danger" show={this.state.alert} onClose={() => { this.setState({ alert: false }) }} dismissible>
                    <Alert.Heading >Oh! your data  </Alert.Heading>
                    <p>
                        YOU ARTICLE SUCCESSFUL 
                        
                    </p>
                </Alert>

         
        {this.state.isAdd ? <CreateArticle onSubmitArticle={this.onSubmitArticle} article={this.state.article} /> :
          <div>
            <Button onClick={this.onAdd} className="mt-5 mb-5 " style={style}>Add</Button>
            <FetchData onEdit={this.onEdit} />
          </div>
        }



      </div>
    )
  }

}

export default App;
