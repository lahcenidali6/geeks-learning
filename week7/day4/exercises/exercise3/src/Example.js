import React from "react";
import data from "./data.json"
console.log(data)
class Example1 extends React.Component{
    render(){
        return (
            <ul>
                {data["SocialMedias"].map(link=>{
                    return <li>{link}</li>
                })}
            </ul>
        )
    }
}
export default Example1