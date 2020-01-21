const mongoose = require('mongoose'); //banco
const PointsSchema = require('./utils/PointSchema');

//formato do schema
//estruturacao entidade dentro do banco
//padrao de um model
const DevSchema = new mongoose.Schema({
   name: String,
   github_username: String,
   bio: String,
   avatar_url: String,
   techs: [String],
   location: { type: PointsSchema, index: '2dsphere' },
});

module.exports = mongoose.model('Dev', DevSchema);
