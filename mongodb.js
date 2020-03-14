// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database: ' + error)
    }

    const db = client.db(databaseName)

    // db.collection('users').findOne({ _id: new ObjectID("5e6b1a75bfd3bb07ac461138") }, (error, result) => {
    //     if (error) {
    //         return console.log('unable to fetch')
    //     }

    //     console.log(result)

    // })

    db.collection('tasks').findOne({ _id : new ObjectID('5e6b1b6c3257983088c931eb')}, (error, result) => {
        if (error) {
            return console.log('error fetching result')
        }
        console.log(result)
    })

    db.collection('tasks').find({ completed: false }).toArray((error, result) => {
        if (error) {
            return console.log('problem finding')
        }
        console.log(result)
    })

    // db.collection('users').find({ age: 27 }).toArray((error, result) => {
    //     if (error) {
    //         return console.log('problem finding')
    //     }
    //     console.log(result)
    // })

    // db.collection('users').find({ age: 27 }).count((error, result) => {
    //     if (error) {
    //         return console.log('problem finding')
    //     }
    //     console.log(result)
    // })



    // db.collection('users').insertOne({
    //         name: 'Vikram',
    //         age: 22
    //     }, (error, result) => {
    //     if (error) {
    //         return console.log('Problem inserting documents')
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Clean sink',
    //         completed: false
    //     }, {
    //         description: 'Clean bar',
    //         completed: false
    //     }, {
    //         description: 'Clean yard',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Problem inserting documents')
    //     }

    //     console.log(result.ops)
    // })


})

