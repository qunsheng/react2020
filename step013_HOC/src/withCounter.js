import React, {Component} from 'react';

// HOC inject name props to original component

// const UpdatedComponent = OriginalComponent => {
//     class NewComponent extends Component {
//         render() {
//             return <OriginalComponent name='Tony' />
//         }
//     }
//     return NewComponent;
// }

// export default UpdatedComponent;

const withCounter = WrappedComponent => { // HOC can implement with additional parameter
    class WithCounter extends Component {

        // common contructors
        constructor(props) {
            super(props);
            this.state = {
                count: 0
            }
        }
    
        // common functions
        incrementCount = () => {
            this.setState( prevState => {
                return { count: prevState.count + 1}
            })
        }

        render() {
            // share common state and function to wrapped component, 
            // ...this.props pass down remaining props to wrapped component
            return <WrappedComponent count = {this.state.count} incrementCount = {this.incrementCount} {...this.props} />
        }
    }
    return WithCounter;
}

export default withCounter;