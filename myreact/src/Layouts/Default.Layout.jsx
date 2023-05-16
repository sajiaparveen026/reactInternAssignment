import React from 'react'



const DefaultLayoutHoc =
 (Component) =>
 ({...props}) => {
  return (
    <div>
        
        <Component {...props} />
        
        </div>
  )
}

export default DefaultLayoutHoc