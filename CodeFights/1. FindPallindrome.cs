//Given the string, check if it is a palindrome.

bool checkPalindrome(string inputString)
         {
                for(int i = 0; i<inputString.Length/2; i++)
                {
                    if (inputString[i] != inputString[inputString.Length - 1 - i])
                        return false;
                }
            return true;
        }
