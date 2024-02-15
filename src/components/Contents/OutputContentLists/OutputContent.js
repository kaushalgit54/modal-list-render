import './OutputContentList.css';

const OutputContentList = (props)=>{
    const deleteHandler = ()=>{
        props.onDelete(props.id);
        console.log('Clicked delete');
        
    }
  return (
    <li className="list" onClick={deleteHandler}>{props.children}</li>
  );
};

export default OutputContentList;