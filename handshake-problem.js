// Help Johnny by writing a function, that takes the amount of handshakes and returns the minimal amount of people needed to perform these handshakes(a pair of farmers handshake only once).



function getParticipants(handshakes) {
    let result = 0;
    let adder = 1;

    while (result < handshakes) {
        result += adder;
        adder += 1;
    }

    return adder;
}



console.log(getParticipants(0));
console.log(getParticipants(1));
console.log(getParticipants(3));
console.log(getParticipants(6));
console.log(getParticipants(7));

