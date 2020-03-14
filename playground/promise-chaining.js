require('../src/db/mongoose')
const User = require('../src/models/user')

// 5e6c40c6063f2e32788d9aca

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('5e6c40c6063f2e32788d9aca', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})
