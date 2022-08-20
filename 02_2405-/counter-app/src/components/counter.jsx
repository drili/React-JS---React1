import React, { Component } from 'react'

class Counter extends Component {
    state = {
        count: 0,
        imageUrl: "https://picsum.photos/200"
    }

    styles = {
        fontSize: 10,
        fontWeight: "bold"
    }

    render() { 
        return (
            <>
                {/* <img src={this.state.imageUrl} alt="" /> */}

                <span style={ this.styles } className='badge bg-primary m-2'>{this.formatCount()}</span>
                <button className='btn btn-secondary btn-sm'>Increment</button>
            </>
        )
    }

    formatCount() {
        // return this.state.count === 0 ? "Zero" : this.state.count
        const { count } = this.state
        return count === 0 ? "Zero" : count
    }
}
 
export default Counter;