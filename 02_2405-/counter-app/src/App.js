import Navbar from './components/navbar';
import Counters from './components/counters';
import React, { Component } from 'react'
import './App.css';

class App extends Component {
    state = {
        counters: [
            { id: 1, value: 4 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 }
        ]
    }

    handleIncrement = counter => {
        // console.log(counter)
        const counters = [...this.state.counters]
        const index = counters.indexOf(counter)
        counters[index] = {...counter}
        counters[index].value++
        this.setState({ counters })
    }

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0
            return c
        })
        this.setState({ counters })
    }

    handleDelete = (counterId) => {
        // console.log("::: Event handler called", counterId)
        const counters = this.state.counters.filter(c => c.id !== counterId)
        this.setState({ counters: counters })
    }

    render() {
        return (
            <>
                <Navbar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
                <main className='container'>
                    <Counters
                        counters={this.state.counters}
                        onReset={this.handleReset}
                        onIncrement={this.handleIncrement}
                        onDelete={this.handleDelete}
                    ></Counters>
                </main>
            </>
        );
    }
}

export default App;
