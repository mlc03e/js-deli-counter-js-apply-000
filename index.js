function takeANumber(place, name) {
  place.push(name);
  return ("Welcome," + " " + name + ". You are number" +" " + place.length +" " +  "in line.")
  i++
}

function nowServing(line){
  var t = 0
  
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else  {
    return "Currently serving " + line.shift() + "."
    t++;
  }
}

function currentLine(array) {
  if (array.length === 0) {
    return "The line is currently empty.";
  }
  else {
    return `The line is currently: 1. ${array[0]}, 2. ${array[1]}, 3. ${array[2]}`
  }
}