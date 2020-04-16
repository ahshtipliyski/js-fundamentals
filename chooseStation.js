/*
const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];



const chooseStations = function (stations) {
  let goodStations = []
  for (const station of stations) {
    const capacity = station[1]

    if (capacity >= 20) {
      console.log(station[0])

      const type = station[2]
      if (type === "school" || type === "community centre") {
        goodStations.push(station[0])
      }
    }
  }
  return goodStations;
}

console.log(chooseStations(stations))
*/

//X Marks the Perfect Shot

const finalPosition = (moves) => {
  const movement = [0, 0]; // x, y
  
  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === 'north') {
      movement[1]++;
    } else if (moves[i] === 'south') {
      movement[1]--;
    } else if (moves[i] === 'east') {
      movement[0]++;
    } else if (moves[i] === 'west') {
      movement[0]--;
    }
  }
  return movement;
}