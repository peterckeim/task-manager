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

    db.collection('tasks').updateMany({
        completed : false
    }, {
        $set: {
            completed : true
        }
    }).then((result) => {
        console.log(result.modifiedCount, 'Records Updated!')
    }).catch((error) => {
        console.log(error)
    })

})

