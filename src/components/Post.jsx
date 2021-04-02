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

        fetch("http://v90355zw.beget.tech/php12/getPosts.php")
            .then(response=>response.json())
            .then(result=>{
                console.log(result);
                this.setState({
                    title: result[0].title,
                    author: result[0].author,
                    text: result[0].text
                });
            })
    }

    render() { // Сначала вызывается рендер
        return <div>
            <div>
                <p>Автор: {this.state.author}</p>
                <p>Статья: {this.state.title}</p>
            </div>
            <div>
                <p>{this.state.text}</p>
            </div>
        </div>
    }
}
