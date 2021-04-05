import React from "react";

export class Post extends React.Component{
    constructor() {
        super();
        this.state = {
            title: '',
            author: '',
            text: ''
        }
    }
    componentDidMount() {
        console.log("Компонет Post отрисован");
        const formData = new FormData();
        formData.append('id',1);
        fetch("http://v90355zw.beget.tech/php12/getPost.php", {
                method: 'POST',
                body: formData
            })
            .then(response=>response.json())
            .then(result=>{
                console.log(result);
                this.setState({
                    title: result.title,
                    author: result.author,
                    text: result.text
                });
            })
    }

    render() { // Сначала вызывается рендер
        return <div>
            <div className="mb-3" style={{backgroundColor:"LightYellow",textAlign:"center",height:100}}>
                <p>Автор: {this.state.author}</p>
                <p>Статья: {this.state.title}</p>
            </div>
            <div className="mb-3" style={{backgroundColor:"LightCyan",textAlign:"center",height:300}}>
            <p>{this.state.text}</p>
            </div>
        </div>
    }
}