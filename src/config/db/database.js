const mongoose = require('mongoose')

async function connect(){
    try {
        await mongoose.connect('mongodb+srv://ngoccuong:PXT2R9JSvP7aLV0d@cluster0.tfzgh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex : true
        })
        console.log('Ket Noi Thanh Cong')
    } catch (error) {
        console.log('Ket Noi That bai')
    }
}

module.exports = { connect }