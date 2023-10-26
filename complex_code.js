/* complex_code.js */

// This code demonstrates a sophisticated algorithm for solving the Traveling Salesman Problem (TSP).
// The code uses a combination of dynamic programming (DP) approach and the Held-Karp algorithm.
// It calculates the shortest possible route that visits each city exactly once and returns to the starting city.

// Define a class to represent a city
class City {
  constructor(name, x, y) {
    this.name = name; // City name
    this.x = x; // X-coordinate
    this.y = y; // Y-coordinate
  }
}

// Define a function to calculate the Euclidean distance between two cities
function calculateDistance(cityA, cityB) {
  const xDistance = Math.abs(cityA.x - cityB.x);
  const yDistance = Math.abs(cityA.y - cityB.y);
  return Math.sqrt(xDistance ** 2 + yDistance ** 2);
}

// Define a function to solve the TSP using DP and the Held-Karp algorithm
function solveTSP(cities) {
  const numCities = cities.length;
  const permutations = 2 ** numCities;
  
  // Initialize the DP table
  const dp = [];
  for (let i = 0; i < permutations; i++) {
    dp[i] = new Array(numCities).fill(Number.MAX_SAFE_INTEGER);
  }

  // Base case: distance from starting city to itself is 0
  dp[1][0] = 0;

  // Iterate over all possible subsets of cities
  for (let mask = 1; mask < permutations; mask++) {
    for (let i = 0; i < numCities; i++) {
      // If city i is not included in the current subset, skip it
      if ((mask & (1 << i)) === 0) continue;
      
      for (let j = 0; j < numCities; j++) {
        // If city j is included in the current subset and not equal to i
        if ((mask & (1 << j)) !== 0 && j !== i) {
          const prevMask = mask ^ (1 << i);
          dp[mask][i] = Math.min(dp[mask][i], dp[prevMask][j] + calculateDistance(cities[j], cities[i]));
        }
      }
    }
  }

  // Find the optimal path length
  let minDistance = Number.MAX_SAFE_INTEGER;
  let lastCity = -1;
  for (let i = 0; i < numCities; i++) {
    if (dp[permutations - 1][i] < minDistance) {
      minDistance = dp[permutations - 1][i];
      lastCity = i;
    }
  }
  
  // Reconstruct the optimal path
  const path = [];
  let mask = permutations - 1;
  for (let i = 0; i < numCities - 1; i++) {
    path.unshift(cities[lastCity]);
    
    let nextCity;
    for (let j = 0; j < numCities; j++) {
      if (j !== lastCity && (mask & (1 << j)) !== 0 && dp[mask][lastCity] === dp[mask ^ (1 << lastCity)][j] + calculateDistance(cities[j], cities[lastCity])) {
        nextCity = j;
        break;
      }
    }
    
    mask ^= 1 << lastCity;
    lastCity = nextCity;
  }
  path.unshift(cities[lastCity]);
  
  // Return the optimal path and total distance
  return { path, distance: minDistance };
}

// Usage example:
const cities = [
  new City("A", 0, 0),
  new City("B", 1, 2),
  new City("C", 3, 1),
  new City("D", 5, 4),
  new City("E", 2, 3)
];

const result = solveTSP(cities);
console.log("Optimal Path:", result.path.map(city => city.name).join(" -> "));
console.log("Total Distance:", result.distance);