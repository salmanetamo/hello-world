
/**
 * Write a description of class AlgorithmTester here.
 * 
 * Salmane Tamo
 * Tuesday, 7 March 2017
 */
public class AlgorithmTester
{
   public double calculateGasBill(int current,int previous){
       int unitsUsed;
       double bill; 
       
       unitsUsed = current - previous;
       
       if(unitsUsed <= 40){
           bill = unitsUsed * 30.52;
       } else {
           bill = (40*30.52) + ((unitsUsed-40)*14.76);
       }
       return bill;
   }
   
   public int calculateFactorial(int number){
       int factorial = 1;
       
       for(int i = 1; i <= number; i++){
           factorial *= i;
       }
       return factorial;
   }
   
   public int[] reverseArray(int[] array){
       int temp = 0;
       int last = array.length - 1;
       
       for (int i = 0; i <= array.length/2;i++){
           temp = array[i];
           array[i] = array[last - i];
           array[last - i] = temp;
       }
       return array;
   }
   
   public double calculateCostWithShipping(double itemCost, boolean reducedShipping){
       double totalCost;
       
       if(itemCost > 100){
           totalCost = itemCost;
       } else {
           if(reducedShipping == true){
               totalCost = itemCost + itemCost * 0.03;
           } else {
               totalCost = itemCost + 5;
           }
       }
       return totalCost;
   }
}
