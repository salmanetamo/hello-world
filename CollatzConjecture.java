import java.util.Scanner;
/**
 * Let's test the Collatz' conjecture.
 * 
 * @author Salmane Tamo
 * @version 1
 */
public class CollatzConjecture
{
    public static void main (String args [])
    {
        Scanner reader = new Scanner (System.in);
        System.out.print ("Please give me a positive integer: ");
        int ourInteger = reader.nextInt();
        int numbsteps = 0;
        
        while(ourInteger !=1)
        {
            if (ourInteger%2 == 0)
            {
               ourInteger = ourInteger / 2;
               if (numbsteps%10 == 0){System.out.println (ourInteger + " ");}
               else{System.out.print (ourInteger + " ");}
            }
            else
            {
               ourInteger = ourInteger * 3 + 1;
               if (numbsteps%10 == 0){System.out.println (ourInteger + " ");}
               else{System.out.print (ourInteger + " ");}
            }
            numbsteps++;
            
        }
        System.out.println ("We have reached 1 after "+ numbsteps + " steps. ");
    }
}
