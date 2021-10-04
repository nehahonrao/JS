/* becode/javascript
 *
 * /05-arrays/01-get-element/script.js - 5.1: élément de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var fruits = [
        "apple",
        "pear",
        "raspberry",
        "tomatos",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peache",
        "grap",
        "cherry",
    ];

    // your code here
    document.getElementById("run").addEventListener("click", () => {

         var N=fruits.length;
        for(var i = 0; i < N; i++)
        {
              
            // If currIndex stores even index
            // or odd position
            if (i % 2 == 0)
            {
                console.log(fruits[i] + " ");
            }
        }
        // printAlter(fruits, N);
 
    });
    
    
    
    
    })();