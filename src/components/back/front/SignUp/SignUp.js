

import React, { Component } from 'react'
// import './CSS/todo.css'



class SignUp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fullName: "",
            email: "",
            phone:"",
            password: "",
            gender: "",


        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    firsthandler = (event) => {
        this.setState({
            fullName: event.target.value
        })
    }
    lasthandler = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    phonehandler = (event) => {
        this.setState({
            phone: event.target.value
        })
    }
    passwordhandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    genderhandler = (event) => {
        this.setState({
            gender: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.fullName} ${this.state.email}  ${this.state.phone}  Registered Successfully !!!!`)
        console.log(this.state);
        this.setState({
            fullName: "",
            email: "",
            phone:"",
            password: '',
            gender: "",
        })
     event.preventDefault()
        
    }


    render() {
        return (
            
         <div className='container'>
              
             <div>
               <h2 className='title'>Create Acount</h2>        
              </div>   

                <form onSubmit={this.handleSubmit}>
                <div class="form-group colum">
                    <label>FullName :</label>
                     <input type="text"  value={this.state.fullName} 
                    onChange={this.firsthandler} placeholder="FullName..." />
                    </div><br />

                    <div class="form-group colum">
                    <label>Email :</label> 
                    <input type="text" value={this.state.email} 
                    onChange={this.lasthandler} placeholder="Email..." />
                    </div><br />

                    <div class="form-group colum">
                    <label>Phone :</label> 
                    <input type="text" value={this.state.phone} 
                    onChange={this.phonehandler} placeholder="Phone..." />
                    </div><br />

                    <div class="form-group colum">
                    <label>Password :</label>
                     <input type="password" value={this.state.password}
                      onChange={this.passwordhandler} placeholder="Password..." />
                      </div><br />

                      <div class="form-group colum">
                    <label>Gender :</label>
                    <select onChange={this.genderhandler} defaultValue="Select Gender">
                        <option defaultValue>Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select><br />
                    </div>

                    
                 <div>
                  <button className="submit" type="submit">Signup</button>
                   </div>
                </form>

            </div>
            
            
        )
    }
}

export default SignUp;