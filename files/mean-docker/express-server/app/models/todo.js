var mongoose = require('mongoose');

// Define the schema 在这里定义数据库的文件，
module.exports = mongoose.model('Todo', {
    text: {
        type: String,
        default: ''
    }, 
    value: {
        type: String,
        default: ''
    },
    sex: {
        type: String,
        default: ''
    }
});
