import React, { Component } from 'react'

class Counter extends Component {
    // state = {
    //     count: this.props.counter.value,
    //     imageUrl: "https://picsum.photos/200",
    //     tags: ["tag1", "tag2", "tag3"]
    // }

    styles = {
        fontSize: 14,
        fontWeight: "bold"
    }

    // constructor() {
    //     super()
    //     this.handleIncrement = this.handleIncrement.bind(this)
    // }

    render() {
        // console.log(this.props)
        return (
            <div>
                {/* {this.props.children} */}
                {/* <img src={this.state.imageUrl} alt="" /> */}

                <span style={ this.styles } className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={ () => this.props.onIncrement(this.props.counter) } className='btn btn-secondary btn-sm'>Increment</button>
                <button onClick={ () => this.props.onDelete(this.props.counter.id)} className='btn btn-danger btn-sm m-2'>Delete</button>
                {/* <ul>
                    { this.state.tags.map(tag => <li key={tag}>{ tag }</li>) }
                </ul> */}
            </div>
        )
    }

    getBadgeClasses() {
        let classes = "badge m-2 "
        classes += (this.props.counter.value === 0) ? "bg-warning" : "bg-primary"
        return classes
    }

    formatCount() {
        // return this.state.count === 0 ? "Zero" : this.state.count
        const { value } = this.props.counter
        return value === 0 ? "Zero" : value
    }
}
 
export default Counter;