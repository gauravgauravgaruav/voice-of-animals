
function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/5XQbdF6Nj/model.json',modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

