import React from "react";
// import React from "../images/cards/";


const Card =(props)=>{







return(<>


<div className=" col-lg-6 col-xxl-4 col-md-12 mx-auto">

<div key={props.img} className="card" >
    <img className="card-img-top icard" src= {props.img} alt="Card image cap" />
    <div className="card-body">
<h3 className="card-title">{props.name} {props.number}</h3>
<p className="card-text">{props.detail}</p>
<h3 className="card-title">{props.dtone}</h3>
        <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
</div>

</div>
</>)





}

export default Card;