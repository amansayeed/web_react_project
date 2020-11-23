import React from 'react';
import faker from 'faker';

const Camments = (props) => {



    return (
    <>
        <div class="ui comments">
            <div className="comment">
                <div class="avatar" >
                <img src={faker.image.avatar()}  alt="sdljksd"/></div>

                <div className="content">
    <a className="author">{props.author}</a>
                    <div class="metadata">
                        <span className="date">Today at 5:42PM</span>
                    </div>
                    <div className="text">
                        {props.text}
                    </div>
                </div>
            </div>
         </div>
            
        </>);

};


export default Camments;