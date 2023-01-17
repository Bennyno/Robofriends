import React from 'react'

const Card = ({name, email, id}) => {    //<--You can also destructure within the parameters instead of "props"
    // const {name, email, id } = props //<--Destructuring

    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
             <img alt='robot' src={`https://robohash.org/${id}?200x200`}/>   {/*<--template string literals must be wrapped in squigly brackets bc they're a js object */}
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;