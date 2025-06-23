import React from "react";
import data from "./data.json"
console.log(data)
class Example2 extends React.Component{
    render(){
        return (
            <div>
                {data["Skills"].map(skill=>{
                    return (<><h3>{skill["Area"]}</h3>
                        <ul>
                            {skill["SkillSet"].map(skillset=>{
                                return(<li>{skillset.Name}</li>)
                            })}
                        </ul>
                        </>
                    )
                })}
            </div>
        )
    }
}
export default Example2