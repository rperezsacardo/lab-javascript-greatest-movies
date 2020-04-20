const getAllDirectors = (array) => {
return array.map((name) => name.director);

}

// _Bonus_: It seems some of the directors had directed multiple array so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const howManyMovies = (array) => {
  const dramaMovies = array.filter ( (movie) => {
      if( movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')){
        return true;
      }else{
        return false
      }
    }  )
return dramaMovies.length
  }
 
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
const roundToDecimalPlaces = (value, digits) => {
  return Math.round(value * 10 ** digits) / 10 ** digits;
}

const ratesAverage = (array) => {
if(!array.length){
  return 0;
}
  
let totalMovies =  array.length
 const ratesArray = array.filter((movie) => {
   if(!movie.rate){
     movie.rate = 0;
     return movie.rate
   } else{
     return movie.rate 
   }
 })

  const ratesSum = array.reduce((acc, movie) => {
      return acc + movie.rate
  },0)

  const average = ratesSum / totalMovies
  return roundToDecimalPlaces (average, 2); 
}

// Iteration 4: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = (array) => {
  const onlyDrama = array.filter((movie)=> {
    if(!movie.rate){
      movie.rate = 0;
      return movie.rate
    }
    if(movie.genre.includes('Drama')){
      return true // Here I could return the directly rate 
    }else{
      return false
    }
    
  })
  if(!onlyDrama.length){
    return 0; 
  }
  const dramaRatesSum = onlyDrama.reduce((acc, movie) =>{
    return acc + movie.rate
    
    },0)

  const drameAverge = dramaRatesSum / onlyDrama.length
  return roundToDecimalPlaces(drameAverge, 2)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
