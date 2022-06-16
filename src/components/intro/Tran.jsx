// import React, {useEffect, useState} from 'react';
// import axios from 'axios';
// import Test from "./Test";
//
//  function Tran() {
//
// const encodedParams = new URLSearchParams();
// encodedParams.append("q", Test());
// encodedParams.append("target", "ar");
// encodedParams.append("source", "en");
//
// const options = {
//   method: 'POST',
//   url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
//   headers: {
//     'content-type': 'application/x-www-form-urlencoded',
//     'Accept-Encoding': 'application/gzip',
//     'X-RapidAPI-Key': 'aed80a7dbfmsh4c0248e7e1c02ecp1627fdjsnb9f58422c9ab',
//     'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
//   },
//   data: encodedParams
// };
//
// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });
//
//     return (
//         <div>
//             <h3> {} </h3>
//         </div>
//     )
//
// }
//
// export default Tran

import './tran1.scss'
import Test from "./Test";


function Tran() {



    return (
        <div>
            <div>
                <p>Hi There, I'm
                    <span>Khalid Alghamdi</span></p>
            </div>

            <div className="dd">
                <h4>Auto Generated Quotes: </h4>
                <h2><Test/></h2>

            </div>


        </div>
    )

}

export default Tran