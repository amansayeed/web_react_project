import React, {useState}from 'react';
const Contact=()=>
{
    const [data,setData]=useState({

        name:"",
        mobile:"",
        email:"",
        msg:""

    });

    const InputEvent=(event)=>{

        const {name,value}=event.target;

        setData((preVal)=>{

        return{
            ...preVal,
            [name]:value,
        };


        });
    
    
    };
 const formSub=(event)=>{
event.preventDefault();

alert(
    `my name is ${data.name},  my number is ${data.mobile},  my Emial id is ${data.email},  my msg is ${data.msg} `);

 }

return(<>

<div className=" ">
            <div className="text-center display-3">My Services</div>
        </div>
        <div className="container-fluid">
            <div className="col-8 mx-auto">
                <div className="row sec ">

                <form onSubmit={formSub}>
                <div class="form-group my-3">
    <label for="name">Name </label>
    <input type="text"name="name" value={data.name} onChange={InputEvent} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" required/>
    
  </div>
  <div class="form-group my-3">
    <label for="mobile">Mobile </label>
    <input type="text"name="mobile" value={data.mobile} onChange={InputEvent} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Mobile"required/>
    
  </div>
  <div class="form-group my-3">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email"name="email" value={data.email} onChange={InputEvent} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"required/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>

  <div class="form-group my-3">
    <label for="exampleFormControlTextarea1">Example textarea</label>
    <textarea  type="text"name="msg" value={data.msg} onChange={InputEvent} class="form-control" id="exampleFormControlTextarea1" rows="3"required></textarea>
  </div>

<div class="form-group text-center my-3">
  <button type="submit" class="btn btn-outline-primary">Submit</button>
  </div>
</form>
                  
           

         
                   

                </div>
            </div>
        </div>


</>)


}

export default Contact;