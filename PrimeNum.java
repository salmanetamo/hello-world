import java.util.Scanner;
/**
 * A program that gives us prime numbers less than 100
 * 
 * @author Class 
 * @version1
 */
public class PrimeNum
{
    public static void main (String args[]){
        int number = 2;
        Scanner reader = new Scanner(System.in);
        System.out.println("Hi, Please provide a maximum value for prime number test");
        int userMax = reader.nextInt(); 
        
        while(number < userMax){
            if (isPrime(number)){
                System.out.println(number);
            }
            number++;
        }
    }
    
    public static boolean isPrime(int testNumber){
   
    
        for (int i=2; i<=testNumber/2; i++){
            if (testNumber % i == 0){ 
                return false;
            }
        }
        return true;
    }
        
    /*public static boolean isPrime(int testNumber)
    {
        if((testNumber==2)||(testNumber==3)||(testNumber==5)||(testNumber==7))
        {return true;}
        else {     
        
      if ((testNumber % 2 == 0) || (testNumber % 3 == 0) || (testNumber % 5 == 0) || (testNumber % 7 == 0)) {
        return false;}
        else return true;
    }
    } */
}
