import React from 'react'



const DetailsLayoutHoc =
 (Component) =>
 ({...props}) => {
  return (
    <div>
        
        <Component {...props} />
        
        </div>
  )
}

export default DetailsLayoutHoc