import React, {Component} from 'react';

// HOC inject name props to ClickCounter

// import UpdatedComponent from './withCounter';

// class ClickCounter extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0
//         }
//     }

//     // increment count function
//     incrementCount = () => {
//         // if setState parameter is function, the prevSate obj will passed in
//         this.setState( prevState => {
//             // return new state
//             return { count: prevState.count + 1}
//         })
//     }

//     render ( ) {
//         const { count} = this.state;
//         return (
//             <div>
//                 <button onClick = {this.incrementCount}> {this.props.name} Click {count} Times</button>
//             </div>
//         )
//     }
// }

// export default UpdatedComponent ( ClickCounter);

import withCounter from './withCounter';

class ClickCounter extends Component {
 
    render ( ) {
        const { count, incrementCount, name} = this.props;
        return (
            <div>
                <button onClick = {incrementCount}> {name} Click {count} Times</button>
            </div>
        )
    }
}

// add common counter function to ClickCounter component
// HOC and pass additional paramter
export default withCounter ( ClickCounter);