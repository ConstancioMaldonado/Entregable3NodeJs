const Movie = require("./Movie");
const Director = require("./Director");
const Genre = require("./Genre");
const Actor = require("./Actor");

// TABLE MovieDirector
Movie.belongsToMany(Director, {through: "MovieDirector"})
Director.belongsToMany(Movie, {through: "MovieDirector"})

// TABLE MovieGenre
Movie.belongsToMany(Genre, {through: "MovieGenre"})
Genre.belongsToMany(Movie, {through: "MovieGenre"})

// TABLE MovieActor
Movie.belongsToMany(Actor, {through: "MovieActor"})
Actor.belongsToMany(Movie, {through: "MovieActor"})