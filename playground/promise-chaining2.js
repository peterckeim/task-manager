require('../src/db/mongoose')
const Task = require('../src/models/task')

// 5e6d34ed0264eb4d38bc4042

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed : false })
    return count
}

deleteTaskAndCount('5e6c44c6e063513b3c5e391b').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})