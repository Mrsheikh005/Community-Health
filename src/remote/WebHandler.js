import axios from 'axios'
import PrefHandler from '../data/PrefHandler'

const prefs = new PrefHandler()

export default class WebHandler {

    sendPostDataRequest(url, bodyParams, onSuccess, onFailure) {

        prefs.getSession((result) => {

            let headers = {
                'Content-Type': 'application/json',
            }

            // if (result.token) {
            //     headers.Authorization = "Bearer " + result.token
            // }

            console.log("------------API POST REQUEST--------------")
            console.log("URL==>", url)
            console.log("HEADER==>", headers)
            console.log("BODYPARAMS==>", JSON.stringify(bodyParams))

            axios.post(url, bodyParams, {
                headers: headers
            }).then((response) => {
                const respJson = response.data
                 console.log("RESPOSNE==>", JSON.stringify(respJson))

                if (respJson.status == true) {
                    onSuccess(respJson)
                } else {
                    onFailure(respJson.message)
                }
            }).catch((error) => {
                console.log("RESPOSNE==>", error);

                onFailure(error.message)
            })
        })
    }

    sendGetDataRequest(url, params, onSuccess, onFailure) {

        let headers = {
            'Content-Type': 'application/json',
        }

        console.log("------------API GET REQUEST--------------")
        console.log("URL==>", url)
        console.log("HEADER==>", headers)
        console.log("PARAMS==>", params)

        axios.get(url, {
            headers: headers,
            params: params
        }).then((response) => {
            const respJson = response.data
            console.log("RESPOSNE==>", JSON.parse(respJson))

            if (respJson.status == true) {
                onSuccess(respJson)
            } else {
                onFailure(respJson.message)

            }

        }).catch((error) => {
            console.log("RESPOSNE==>", error);

            onFailure(error.message)
        })
    }

}