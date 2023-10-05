// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');


/* nodelist is an array like in which we can perform forEach()

some methods of array are not applicable in the nodelist
*/
console.log(btns);

/* rather than selecting the individual buttons using selectors we could directly use forEach() method 

each button element will have common class name which we can select via document.querySelectorAll()
*/
btns.forEach((btn) => {

    /* 
    here we are using the e as event to know which button we clicked upon 

    e.currentTarget will display the button element that has been clicked upon

    e.currentTarget.classList will display the class associated with the particular clicked element

    */
    btn.addEventListener('click', function(e) {
        const styles = e.currentTarget.classList;

        /* styles.contains() methods check whether the particular class is associated with the HTML element or not */
        if(styles.contains('decrease')){
            count--;
        }else if(styles.contains('increase')){
            count++;
        }else{
            count = 0;
        }

        if(count > 0){
            value.style.color = "green";
        }

        if(count < 0){
            value.style.color = "red";
        }

        if(count === 0){
            value.style.color = "#222";
        }

        value.textContent = count;
    });

});
