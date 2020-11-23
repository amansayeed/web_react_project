import React from 'react';
import { NavLink } from 'react-router-dom';
const Common=(props)=>
{

    

return(<>

<section>
<div className="home container-fluid  ">
    <div className="row d-flex align-items-center">
        <div className="col-lg-10 mx-auto ">
            <div className="row">
            <div className="col-lg-5 d-flex align-item-center justify-content-center flex-column">
            <h1 className="heading">Welcome to the {props.title}.</h1>

            <p className="my-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore rerum officia dolore sint sed delectus itaque laboriosam molestiae voluptas blanditiis sit possimus debitis eveniet, hic eius minus modi iste praesentium cupiditate repellat.</p>
            <div className=" my-3">
            <NavLink type="button" className="btn btn-outline-secondary button" to={props.Link}> {props.btnName}</NavLink>
            </div>
            </div>

            <div className="col-lg-5 d-flex align-item-end justify-content-end">
                <img  className="responsive object text-right" src={props.base_image} alt=""/>
            </div>
            </div>
        </div>

    </div>

</div>

</section>


</>)


}

export default Common;