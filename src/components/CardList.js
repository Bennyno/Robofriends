import React from 'react';
import Card from './Card';

const CardList = ({robots}) => { 
    return(
        <div>
            {
            robots.map((robot, idx) => {
                return (
                    <Card 
                        key={idx} 
                        id={robots[idx].id}
                        name={robots[idx].name} 
                        email={robots[idx].email}
                    />
                )
            })}
        </div>
    )
}

export default CardList;