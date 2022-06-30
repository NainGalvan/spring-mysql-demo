import React,{ Component} from 'react'

function Home() {
        return (
            <div className='container'>
                <div className='panel panel-default'>
                    <div className='alert alert-success'>
                        <span className='lead'>Welcome to User</span>
                    </div>
                    <div className='panel-body'>
                        <div className='alert alert-info'>
                            <ul>
                                <li>
                                    Please click on
                                    <strong> List All Users </strong>
                                    to get all users
                                </li>
                                <li>
                                    Please click on
                                    <strong> Add user </strong>
                                    to add a new user
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
}


export default Home;