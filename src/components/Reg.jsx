import React from 'react';

export class Reg extends React.Component {
    constructor() {
        super();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.sendForm = this.sendForm.bind(this);
        this.state = {
            name: "",
            lastname: "",
            pass: "",
            email: "",
            info:"",
        }
    }
    sendForm(event){
        event.preventDefault();
        const formData = new FormData();
        formData.append("name",this.state.name);
        formData.append("lastname",this.state.lastname);
        formData.append("email", this.state.email);
        formData.append("pass", this.state.password);
        fetch("http://v90355zw.beget.tech/php12/addReg.php",{
            method: "POST",
            body: formData
        }).then(response=>response.json())
            .then(result=>{
                console.log(result)
            })
    }
    handleInputChange(event){
        const value = event.target.value;
        const name = event.target.name;
        if (name === "email"){
            const formData = new FormData();
            formData.append("email",value);
            fetch("http://v90355zw.beget.tech/php12/checkEmail.php",{
                method: "POST",
                body: formData
            }).then(response=>response.json())
                .then(result=>{
                    console.log(result);
                    if(result.result === "exist"){
                        this.setState({
                            info: "Такой email уже существует!"
                        })
                    }else{
                        this.setState({
                            info: ""
                        })
                    }
                });
        }
        this.setState({
            [name]:value
        })
    }
    render(){
        return <div style={{backgroundImage: `url(http://wallpapers-image.ru/1920x1080/mountains/wallpapers/mountains-wallpapers-1920x1080-00019.jpg)`,height:550}}>
           <div className="col-md-5 my-5 mx-auto" style={{width:300, height:400}}>
            <h1 style={{color:"DarkBlue"}}>Регистрация</h1>
            <form onSubmit={this.sendForm}>
            <div className="mb-3">
                <input name="name" type="text" className="form-control" placeholder="Имя пользователя"/>
            </div>
             <div className="mb-3">
                 <input name="lastname" type="text" className="form-control" placeholder="Фамилия"/>
             </div>
            <div className="mb-3">
                <input value={this.state.email} onChange={this.handleInputChange} name="email" type="email" className="form-control" placeholder="Email"/>
                <p style={{color:"red"}}>{this.state.info}</p>
            </div>
            <div className="mb-3">
                <input name="pass" type="password" className="form-control" placeholder="Пароль"/>
            </div>
            <div className="mb-3">
                <input type="submit" className="form-control btn btn-primary" value="Зарегистрироваться"/>
            </div>
            </form>
            </div>
        </div>
    }
}