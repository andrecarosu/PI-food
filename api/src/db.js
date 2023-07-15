
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

// Cargamos las variables de entorno desde el archivo .env
dotenv.config();

// Accedemos a las variables de entorno necesarias
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;

const sequelize = new Sequelize(`postgres://user1:ua86lW8sQ70peFJ61A6ceGR4keNY03ec@dpg-chsjag1mbg57s5r2jgl0-a.oregon-postgres.render.com/food_e5h0`, {
  //postgres://user1:ua86lW8sQ70peFJ61A6ceGR4keNY03ec@dpg-chsjag1mbg57s5r2jgl0-a/food_e5h0
  //`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Recipe, Diets } = sequelize.models;
console.log(sequelize.models);

// Aca vendrian las relaciones
// Product.hasMany(Reviews);
Recipe.belongsToMany(Diets, {through: 'recipediets'})
Diets.belongsToMany(Recipe, {through: 'recipediets'})
module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
