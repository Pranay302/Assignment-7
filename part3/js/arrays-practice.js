//STEP 1
var movies = ["3 Idots", "Avengers End Game", "Harry Potter", "Pulp Fiction", "Ring"];
window.console.log(movies[1]);
//STEP 2
var myMovies = new Array(5);
myMovies[0] = "3 Idots";
myMovies[1] = "Avengers End Game";
myMovies[2] = "Ring";
myMovies[3] = "Harry Potter";
myMovies[4] = "Pulp Fiction";
window.console.log(myMovies[0]);
//STEP 3
var myMovies = new Array(6);
myMovies[0] = "3 Idots";
myMovies[1] = "Avengers End Game";
myMovies[3] = "Bohemian Rhapsody"
myMovies[3] = "Ring";
myMovies[4] = "Harry Potter";
myMovies[5] = "Pulp Fiction";
window.console.log(myMovies.length);
//STEP 4
var movies = [];
movies[0] = "3 Idots";
movies[1] = "Avengers End Game";
movies[2] = "Ring";
movies[3] = "Harry Potter";
movies[4] = "Pulp Fiction";
movies.splice(0, 1);
window.console.log(movies);
//STEP 5
movies = [];
movies[0] = "3 Idots";
movies[1] = "Avengers End Game";
movies[2] = "Ring";
movies[3] = "Harry Potter";
movies[4] = "Pulp Fiction";
movies[5] = "Child's Play";
movies[6] = "Iron Man 2";
var i;
for (i = 0; i < movies.length; i += 1) {
window.console.log(movies[i]);
}
//STEP 6
movies = [];
movies[0] = "3 Idots";
movies[1] = "Avengers End Game";
movies[2] = "Ring";
movies[3] = "Harry Potter";
movies[4] = "Pulp Fiction";
movies[5] = "Child's Play";
movies[6] = "Iron Man 2";
var movie;
for (movie in movies) {
    window.console.log(movies[movie]);
}
//STEP 7
movies = [];
movies[0] = "3 Idots";
movies[1] = "Avengers End Game";
movies[2] = "Ring";
movies[3] = "Harry Potter";
movies[4] = "Pulp Fiction";
movies[5] = "Child's Play";
movies[6] = "Iron Man 2";
movies.sort();
var movie;
for (movie in movies) {
    window.console.log(movies[movie]);
}
//STEP 8
movies = [];
movies[0] = "3 Idots";
movies[1] = "Avengers End Game";
movies[2] = "Ring";
movies[3] = "Harry Potter";
movies[4] = "Pulp Fiction";
movies[5] = "Child's Play";
movies[6] = "Iron Man 2";
leastFavMovies = [];
leastFavMovies[0]="Exorcist II: The Heretic";
leastFavMovies[1]="The Swarm";
leastFavMovies[2]="An American Hippie in Israel"
window.console.log("Movies I Like:");
window.console.log("\n");
for (movie in movies) {
    window.console.log(movies[movie]);
}
window.console.log("\n");
window.console.log("Movies I Regret watching:");
window.console.log("\n");
for (movie in leastFavMovies) {
        window.console.log(leastFavMovies[movie]);
}
window.console.log("\n");
//STEP 9
movies = [];
movies[0] = "3 Idots";
movies[1] = "Avengers End Game";
movies[2] = "Ring";
movies[3] = "Harry Potter";
movies[4] = "Pulp Fiction";
movies[5] = "Child's Play";
movies[6] = "Iron Man 2";
leastFavMovies = [];
leastFavMovies[0]="Exorcist II: The Heretic";
leastFavMovies[1]="The Swarm";
leastFavMovies[2]="An American Hippie in Israel"
movies = movies.concat(leastFavMovies);
movies.sort();
movies.reverse();
for ( movie in movies) {
    window.console.log(movies[movie]);
}
//STEP 10
movies = [];
movies[0] = "3 Idots";
movies[1] = "Avengers End Game";
movies[2] = "Ring";
movies[3] = "Harry Potter";
movies[4] = "Pulp Fiction";
movies[5] = "Child's Play";
movies[6] = "Iron Man 2";
leastFavMovies = [];
leastFavMovies[0]="Exorcist II: The Heretic";
leastFavMovies[1]="The Swarm";
leastFavMovies[2]="An American Hippie in Israel"
movies = movies.concat(leastFavMovies);
movies.sort();
movies.reverse();
window.console.log(movies.pop());
