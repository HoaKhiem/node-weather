const request = require('request')
const key = '2d1d90dba8753dfa7fc202e66d7d1262'
const loc = 'Ha Noi'
const kk = 'http://api.positionstack.com/v1/forward?access_key='+key+'&query=21.0245,105.84117'
const url = 'http://api.positionstack.com/v1/forward?access_key='+key+'&query='+loc+''
request({url: kk, json: true}, (error, {body})=>{
    if(error){
        console.log('No internet connection')
    }else if(body.error){
        console.log('Unable to find location')
    }else{
        console.log(body)
    }
})