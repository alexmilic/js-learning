'use strict';

function calcAge(birthYear) {
    const age = 2037 - birthYear;

    function printAge() {
        const output = `${firstName}, you are the ${age}, born in ${birthYear}`;

        console.log(output);

        if(birthYear >= 1981 && birthYear <= 1996) {
            var milenial = true;
            const str = `Oh, you are the milenial, ${firstName}`;
            console.log(str);
        
            function add(a, b) {
                return a + b;
            }
        }

        add(2, 3);

        console.log(milenial);
        console.log(str);
    }

    printAge();

    return age;
}

const firstName = 'Alex';
calcAge(1993);
