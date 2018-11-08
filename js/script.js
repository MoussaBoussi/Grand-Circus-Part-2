window.onload = function () {
    var eventType = prompt("what is the event type? (Casual, Semi-formal, or Formal)");
    var tempFahr = prompt("What is the temperature in Farenheit?");

    var whatToWear;
    var whatToWear2;

    if (eventType === 'casual') {
        whatToWear = 'something comfy';
    } else if (eventType === 'semi-formal') {
        whatToWear = 'a polo';
    } else if (eventType === 'formal') {
        whatToWear = 'a suit';
    }

    if (tempFahr < 54){
        whatToWear2 = 'a coat';
    } else if (tempFahr > 53 && tempFahr < 71){
        whatToWear2 = 'a jacket';
    } else if (tempFahr > 70){
        whatToWear2 = 'no jacket';
    }

    var result = "Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event, you should wear " + whatToWear + " and " + whatToWear2;

    console.log(result);
}