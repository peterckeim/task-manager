const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database: ' + error)
    }

    const db = client.db(databaseName)

    db.collection('tasks').insertMany([
        {
            description: 'Clean sink',
            completed: false
        }, {
            description: 'Clean bar',
            completed: false
        }, {
            description: 'Clean yard',
            completed: false
        }
    ], (error, result) => {
        if (error) {
            return console.log('Problem inserting documents')
        }

        console.log(result.ops)
    })
})

