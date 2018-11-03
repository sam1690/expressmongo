var express = require('express')
var app = express()


if(process.env.NODE_ENV === 'prod')
{
    console.log('running in production mode')
}
if(process.env.NODE_ENV === 'dev')
{
    console.log('running in development mode')

}