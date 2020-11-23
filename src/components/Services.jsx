import React from 'react';
import jdata from "../data.json";
import Card from './card';
const Services = () => {


    let data =jdata.cards;
    data=data.slice(0, 6);
        

    const nurl ="../images/cards/";

    // console.log(data);

    return (<>



     

        <div className="my-5">
            <div className="text-center display-3">My Services</div>
        </div>
        <div className="container-fluid">
            <div className="col-10 mx-auto">
                <div className="row gy-5">
                  
            {data.map((val)=>{

            

                return <Card
                 
                    img={nurl+val.img}
                    name={val.name} 
                    number={val.number}
                    detail={ val.meanings.light
                    
                    }
                

                   dtone= {val.Archetype}

                    key={val.img}
                
                />


            })}


                   

                </div>
            </div>
        </div>

    </>)


}

export default Services