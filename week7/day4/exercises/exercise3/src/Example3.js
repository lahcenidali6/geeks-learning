import React from "react";
import data from "./data.json"
console.log(data)
class Example3 extends React.Component{
    render(){
        return (
            <div>
                {data["Experiences"].map((experience, index)=>{
                    return (
                        <div key={index}>
                        <img src={experience.logo}/>
                        <a href={`${experience.url}`}>{experience.companyName}</a>
                        <h4>{experience.roles[0].title}</h4>
                        <p>{experience.roles[0].startDate} {experience.roles[0].location}</p>
                        <p>{experience.roles[0].description}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default Example3