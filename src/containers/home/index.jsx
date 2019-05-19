import React, { Component } from 'react';


class Home extends Component{
    render(){
        return(
            <div>
                <h3>Welcome</h3>
                <div>
                    <code>react app with redux and react-router</code>
                </div>

                <div>
                    <code>
                        the idea behind this app is to fetch a list of articles
                        from reddit API
                    </code>
                </div>
            </div>
        )
    }
}

export default Home;