//https://teachablemachine.withgoogle.com/models/r49sBfzlV/

function startclassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/r49sBfzlV/model.json',modelready);
}
function modelready(){
    classifier.classify(gotresults);
}
function gotresults(error,results){
    if(error){
        console.error(error);
}