import React, { useEffect } from 'react'

function FunctionUnMountComponent() {
    useEffect(() => {
        // Anything in here is fired on component mount.
        return () => {
            // Anything in here is fired on component unmount.
        }
    }, [])
  return (
    <div>FunctionUnMountComponent</div>
  )
}

export default FunctionUnMountComponent