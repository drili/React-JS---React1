import React, { Component } from 'react'

class Counter extends Component {
    state = {
        count: 0,
        tags: ["tag1", "tag2", "tag3"]
    }

    renderTags() {
        if (this.state.tags.length === 0) {
            return (
                <p>There are no tags!</p>
            )
        } else {
            return (
                <ul>
                    { this.state.tags.map(tag => <li key={tag}>{ tag }</li>) }
                </ul>
            )
        }
    }

    render() {
        return (
            <>  
                {/* --- Alternative if-else method */}
                {/* { this.state.tags.length === 0 && "Please create a new tag!" } */}
                { this.renderTags() }
            </>
        )
    }

}
 
export default Counter;