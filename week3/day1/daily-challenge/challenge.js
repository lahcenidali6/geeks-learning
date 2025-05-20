var sentence ="notbad"
var wordNot=sentence.substring(0,3)
var wordBad=sentence.substring(3,6)

if(sentence.substring(0,3)=="not" && sentence.substring(3,6)=="bad"){
    sentence="good"
}
else console.log(sentence)