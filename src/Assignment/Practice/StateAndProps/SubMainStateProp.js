// import React, { useState } from 'react'

// function SubMainStateProp({count}) {
//     const [addCount,setAddCount] = useState(
//         {id:1 , counter : 1},
//     );
// const handleCount = () => {
//     setAddCount({
//         ...addCount,
//         counter:addCount.counter + count.countInc
//     })
// }
// console.log(addCount,"add")
//   return (
//     <div>SubMainStateProp <button onClick={handleCount}>Add</button></div>
//   )
// }

// export default SubMainStateProp


import React, { Component } from 'react';

class SubMainStateProp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addCount: { id: 1, counter: 1 }
    };
  }

  handleCount = () => {
    this.setState(prevState => ({
      addCount: {
        ...prevState.addCount,
        counter: prevState.addCount.counter + this.props.count.countInc
      }
    }));
  }

  render() {
    return (
      <div>
        SubMainStateProp <button onClick={this.handleCount}>Add</button>
      </div>
    );
  }
}

export default SubMainStateProp;