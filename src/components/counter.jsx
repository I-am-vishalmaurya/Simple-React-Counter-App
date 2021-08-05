import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        
    };

    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this)
    // }
    

    styles = {
        fontSize: 50,
        fontWeight: 900
    }

    render() {
        return (
            <React.Fragment>
                <div className="container mx-auto mt-5">
                <div className="row">
                <span style={this.styles} className={this.getBadgeClasses()}>
                    {this.formatCount()}
                </span>
                </div>
                <div className="row my-4">
                <button onClick={this.handleIncrement} className="col mx-3 btn-secondary btn-sm">Increment</button>
                <button onClick={this.handleDecrement} className="col mx-3 btn-secondary btn-sm">Decrement</button>
                <button onClick={this.handleReset} className="col mx-3 btn-secondary btn-sm">Reset</button>
                </div>
                </div>
                
            </React.Fragment>
        );
    }
    
    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 })
    }

    handleDecrement = () =>{
        this.setState({ count: this.state.count - 1 })
    }

    handleReset = () =>{
        this.setState({ count: 0 })
    }

    getBadgeClasses() {
        let classes = "main-counter mx-auto badge m-2 badge-";
        
        if(this.state.count === 0){
            classes += "warning"
        }
        else if(this.state.count < 0){
            classes += "danger"
        }
        else{
            classes += "primary"
        }
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}

export default Counter;
