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

    db.collection('tasks').deleteOne({
        description : 'Clean sink'
    }).then((result) => {
        console.log('Deleted',result.deletedCount,'records...')
    }).catch( (error) => {
        console.log('Error:',error)
    })
})

