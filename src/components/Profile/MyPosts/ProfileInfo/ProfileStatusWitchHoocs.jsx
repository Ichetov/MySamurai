import { useEffect } from "react";
import { useState } from "react";

const  ProfileStatusWitchHoocs = (props)=> {

 const [editMode, setEditMode] = useState(false)
 const [text, setText] = useState(props.status)



 const addText = (e) => {
    setText(e.target.value)
  };

  const activateEditMode = () => {
    setEditMode(true);

    
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.upDateStatus(text);
  };

useEffect(() => {
  setText(props.status);
}, [props.status]);


    return (
      <div>
        {!editMode && (
          <div>
            <span onClick={activateEditMode}>
              {props.status || "no status"}
            </span>
          </div>
        )}
        {editMode && (
          <div>
            <input autoFocus={true} onBlur={deactivateEditMode}
            onChange={addText}
            value = {text} />
          </div>
        )}
      </div>
    );
  }


export default ProfileStatusWitchHoocs;
