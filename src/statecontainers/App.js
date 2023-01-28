import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary';
import './app.css'


function App() {
    const [robots, setRobots] = useState([]);
    const [searchField, setSearchField] = useState("");
   
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(resp =>  resp.json())
        .then(users => {setRobots(users)});
    }, [])

    const onSearchChange = (event) => {
        setSearchField(event.target.value)
    }

    const filteredRobots = robots.filter(robot =>{
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return !robots.length ? //<--ternary operator
            <h1>Loading</h1> :
        (
        <div className='tc'>
        <h1 className='f2'>RoboFriends</h1>
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
            <ErrorBoundary>
                <CardList robots={filteredRobots}/>
            </ErrorBoundary>
        </Scroll>
        </div>
    );
    
}

export default App;