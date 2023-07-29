// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let directorsArrays = moviesArray.map((movie) => movie.director);
  return directorsArrays.filter((item, index) => {
    return directorsArrays.indexOf(item) === index;
  });
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray.filter(
    (movie) =>
      movie.genre.includes('Drama') && movie.director === 'Steven Spielberg'
  ).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  return parseFloat(
    (
      moviesArray.reduce((acc, movie) => {
        return acc + movie.score;
      }, 0) / moviesArray.length
    ).toFixed(2)
  );
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes('Drama')
  );
  return parseFloat(
    (
      dramaMovies.reduce((acc, movie) => {
        return acc + movie.score;
      }, 0) / moviesArray.length
    ).toFixed(2)
  );
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  return [...moviesArray].sort((a, b) => a.year - b.year);
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  return [...moviesArray]
    .sort((a, b) => a.title.localeCompare(b.title))
    .slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  return moviesArray.map((movie) => {
    const [hours, minutes] = movie.duration.split('h ');
    const durationChanged = parseInt(hours) * 60 + parseInt(minutes);
    return { ...movie, duration: durationChanged };
  });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) {
    return null;
  }

  // Create an object to store the total score and count of movies for each year
  const yearStats = {};

  moviesArray.forEach((movie) => {
    const year = movie.year;
    const score = movie.score;

    if (!yearStats[year]) {
      // If the year does not exist in the yearStats object, initialize it with the first movie's score
      yearStats[year] = { totalScore: score, movieCount: 1 };
    } else {
      // If the year already exists, add the current movie's score to the total score and increment the movie count
      yearStats[year].totalScore += score;
      yearStats[year].movieCount++;
    }
  });

  // Calculate the average score for each year and find the best year
  let bestYear = null;
  let bestAverageScore = 0;

  for (const year in yearStats) {
    const averageScore =
      yearStats[year].totalScore / yearStats[year].movieCount;

    if (averageScore > bestAverageScore) {
      bestYear = year;
      bestAverageScore = averageScore;
    }
  }

  return `The best year was ${bestYear} with an average score of ${bestAverageScore.toFixed(
    2
  )}`;
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
