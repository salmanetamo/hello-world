
/**
 * Display all prime numbers less than 100.
 * 
 * @author Salmane Tamo 
 * @version 1
 */
public class PrimeNumbers
{
   public static void main (String args [])
  {
     int firstNumber = 2;
     while ( firstNumber < 100)
     {
         if (isPrime(firstNumber) == true)
         {
             System.out.println (firstNumber);
         }
         firstNumber++;
     }
  }  
  public static boolean isPrime (int testNumber)
  {
      int divisor = 2;
      boolean isPrime = true;
     while ((divisor < testNumber) && ((testNumber%divisor ==0)||(testNumber%divisor !=0)))
     {
        if (testNumber%divisor ==0)
        {
            isPrime = !isPrime;
            break; 
        }
        else if (testNumber%divisor !=0) 
        {
            divisor ++;
        } 
        else {isPrime = isPrime;}
     }
     return isPrime;
  }
}
