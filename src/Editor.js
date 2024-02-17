import React from 'react'
import ReactQuill  from 'react-quill';

const Editor = ({value,onChange}) => {
  return (
  
    <ReactQuill value={value} 
    onChange={onChange}
    />
  )
}

export default Editor