
/**
 * When will Mehdi's account have more money than Stephen's.
 * 
 * @author Salmane Tamo 
 * @version 1
 */
public class InterestRace
{
    public static void main (String args [])
    {
        double accountMehdi = 1.0;
        double intRateMehdi = 1.05;
        double currentMehdi = accountMehdi * intRateMehdi;
        
        double accountStephen = 1000000.0;
        double intRateStephen = 1.04;
        double currentStephen = accountStephen * intRateStephen;
        
        int numberYears = 0;
        boolean loopContinues = true;
        
        while (loopContinues)
        {
            if(currentMehdi != currentStephen)
            {
                currentMehdi = accountMehdi * intRateMehdi;
                accountMehdi = currentMehdi;
                
                currentStephen = accountStephen * intRateStephen;
                accountStephen = currentStephen;
                
                numberYears++;
            }
            else
            {
                loopContinues = false;
                System.out.println("The two accounts will have the same amount of money in exactly "+ numberYears+ " years.");
            }
        }
        int TheYear = 2017 + numberYears + 1;
        System.out.println("So, in the year "+ TheYear + ", there will be more money in Mehdi's account than in Stephen's!");
    } 
    
}
