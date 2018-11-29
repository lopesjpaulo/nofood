const variables = {
    Api: {
        port: process.env.port || 3000
    },
    Database: {
        connection: process.env.connection || 'mongodb://project_user:123project@ds044577.mlab.com:44577/project_mongo'
    }
}
module.exports = variables;