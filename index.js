function takeANumber(place, name) {
  place.push(name);
  return "Welcome, "+ name + ". You are number" +" " + place.length +" " +  "in line."
}
var humzah = "humzah"
function takeANumberAlternate(line){//line is an array
  var t = 0 
  console.log(humzah)
  t++
  line.push(t)
  return `You are number ${t}`
}

function nowServing(line){
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else  {
    return "Currently serving " + line.shift() + ".";
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