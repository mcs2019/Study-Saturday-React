import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';

export default class Main extends React.Component{

    constructor(){
        super()
        this.state = {
            students: [],
            singleStudent:{}
        };
    }
    //to make sure we have data before renderingt the page
    async componentDidMount(){
        // it has a 'data', if you want you can destructure it {data}
        const {data} = await axios.get("/student");
        //IF COULD ASLO BE 
        //====================
        //const cat = await axios.get('/student')
        //const info = cat.data;
        //this.setState({students:info})
        //=====================
        this.setState ({students:data})
        //console.log(info)
    }

    render(){
        console.log(this.state.students)
        return(
            
            <div>
            <h1>Students</h1>
            <ul>
                {this.state.students.map(student =>{
                  return   <li key={student.id}>{ student.fullName} 
                        
                        </li>
                })}
            </ul>
            </div>
            
        )
        
    }

}
