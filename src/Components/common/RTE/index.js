import React, { useRef } from 'react';
import JoditEditor from 'jodit-react';
import { DarkmodeContext } from "../../../contex/darkmode/index";

function RTE ({ content, setContent}){
	const editor = useRef(null);
	const [state, dispatch] = React.useContext(DarkmodeContext);

	return (
    <div 
    style={{
      margin: '20px 10px',
      padding: '10px',
      borderRadius: '10px',
      border: '1px solid #00000021',
	  color: state.shades.secondary,
        backgroundColor: state.shades.primary,
    }}
    >
		<JoditEditor
		 config = {{ theme : 'dark'  }}
		 
			ref={editor}
			value={content}
			tabIndex={1} // tabIndex of textarea
			onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
			// onChange={newContent =>setContent(newContent)}
		/>
    </div>
	);
};


export default RTE