// Function that takes 2 arguments and returns the smallest of them

function min(x, y)
{
    if(y<x)
        return y;
    else
        return x;
}

// Function that decides if the argument is even, but whithout modulo (%)

function isEven(number)
{
    if(number<0)
        number = -number;
    
   if(number == 0)
       return true;
    else if(number == 1)
        return false
    else
        return isEven(number - 2);
}

    
// Function that counts the number of a char that is a argument in a string
    
function CountCs(ourString, givenChar)
{
    var counter = 0;
    for(var i = 0; i< ourString.length; i++)
        {
            if(ourString[i] == givenChar)
                counter++;
        }
    return counter;
}
