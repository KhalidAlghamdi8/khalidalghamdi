import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './intro.scss'

function Test() {
    let [posts,setPosts ] = useState([])

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://quotes15.p.rapidapi.com/quotes/random/',
            headers: {
                'x-rapidapi-host': 'quotes15.p.rapidapi.com',
                'x-rapidapi-key': 'aed80a7dbfmsh4c0248e7e1c02ecp1627fdjsnb9f58422c9ab'
            }
        }
        axios.request(options).then( res => {
            // console.log(res)
            setPosts( res.data.content)
            // setPostsA(res.data.originator.name)

        },[])
            .catch(err => {
                console.log(err)
            })
})

        return (
            <div>
               <h3 className="text"> {posts} </h3>
            </div>
        )

    }

    export default Test