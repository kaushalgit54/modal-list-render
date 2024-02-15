import React from "react";
import './OutputContent.css';
import OutputContentList from "../OutputContentLists/OutputContent";
const OutputContent = (props)=>{
    return (
        
        <ul className="output">
           {
            props.items.map(data =>(
              <OutputContentList
              key={data.id}
              id = {data.id}
              onDelete = {props.onDeleteItem}
              >
                {data.username+'   ('+data.userage+')'}
              </OutputContentList>
            ))
           }
        </ul>
        
    );
};

export default OutputContent;