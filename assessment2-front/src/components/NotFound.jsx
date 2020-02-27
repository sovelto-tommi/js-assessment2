import React from 'react'
import {Link} from 'react-router-dom';

export default function NotFound({location, history}) {
    return (
        <div>
            <h1>Not found: <code style={{color: "white", fontWeight: "bold"}}>{location.pathname}</code></h1>
            <p>Page you tried to reach is not available</p>
            <p>Go <Link to="/">Home</Link>, or go <span className="linkspan" onClick={history.goBack}>back</span></p>
        </div>
    )
}
