import React, { useEffect, useState } from 'react'
import CommentNavbar from './CommentNavbar'
import axios from 'axios'

const ViewAllComments = () => {

    const [viewallcommentsData, setviewallcommentsData] = new useState([])

    const fetchData = () => {
        axios.get("https://jsonplaceholder.typicode.com/comments").then(
            (response) => {
                setviewallcommentsData(response.data)
            }
        ).catch()
    }

    useEffect(() => {fetchData()} , [])
    return (
        <div>
        <CommentNavbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">

                            {viewallcommentsData.map(
                                (value, index) => {
                                    return (
                                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                                            <div class="card">
                                                <div class="card-body">
                                                    <h5 class="card-title">{value.name}</h5>
                                                    <p class="card-text">{value.email}</p>
                                                    <p class="card-text">{value.body}</p>
                                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                                </div>
                                            </div>

                                        </div>
                                    )
                                }
                            )}

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewAllComments