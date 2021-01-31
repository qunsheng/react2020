import React, {Component} from 'react';

// HOC inject name props to HoverCounter

// import UpdatedComponent from './withCounter';
// class HoverCounter extends Component {
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
//                 <h2 onMouseOver = {this.incrementCount}>  {this.props.name} Hovered {count} times</h2>
//             </div>
//         )
//     }
// }

// export default UpdatedComponent (HoverCounter) ;

import withCounter from './withCounter';
class HoverCounter extends Component {

    render ( ) {
        const { count, incrementCount} = this.props;
        return (
            <div>
                <h2 onMouseOver = {incrementCount}>  Hovered {count} times</h2>
            </div>
        )
    }
}

// add common counter function to HoverCounter component
// HOC and pass additional paramter
export default withCounter (HoverCounter) ;