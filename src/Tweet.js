import React, { useState } from "react";

const Tweet = (props) => {

    const [counter,setCounter] = useState(0);

    const text = props.text;
    const author = props.author;
    const date = props.date;

    const retweet = () => {
        setCounter(counter + 1);
    }

    return (
        <>
            <h3>{text}</h3>
            <h5>Tweeted by {author} on {date}</h5>
            <h6>Retweets: {counter}</h6>
            <button onClick={retweet}>Retweet +</button>
        </>
    )
}

export default Tweet;