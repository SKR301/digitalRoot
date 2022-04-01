/*  
    num[int] : input number
    return[int] : digital root on `num`    
*/
function digitalRoot(num){
    if ((num % 1 !== 0) || (num < 0) || (typeof(num) !== 'number')) {
        return 'Invalid input. Input must be a whole number.';
    }

    if(num == 0){
        return 0;
    }

    return (num % 9 == 0) ? 9 : (num % 9);
}

module.exports = digitalRoot;