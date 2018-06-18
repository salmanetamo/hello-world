import java.util.Scanner;
/**
 * Wanna play the toothpick game.
 * @author Salmane Tamo
 * @version 1
 */
public class ToothpicsGame
{
    public static void main (String args [])
    {
        Scanner scanner = new Scanner (System.in);
        Scanner reader = new Scanner (System.in);
        //Players enter their names
        System.out.println("Player 1, enter your name: ");
        String namePlayer1 = scanner.nextLine();
        System.out.println("Player 2, enter your name: ");
        String namePlayer2 = scanner.nextLine();
        
        System.out.println("Here are our three piles: ");
        //The number of toothpicks in each pile
        int numbtoothpicksA = 3;
        int numbtoothpicksB = 3;
        int numbtoothpicksC = 3;
        //Identifying the three piles
        String pile1 = "A";
        String pile2 = "B";
        String pile3 = "C";
        int turns = 0; //Number of turs the players have taken in playing the game
        while(gameContinues(numbtoothpicksA, numbtoothpicksB, numbtoothpicksC ))
        {System.out.println(pile1 + ": " + numbtoothpicksA);
         System.out.println(pile2 +": " + numbtoothpicksB);
         System.out.println(pile3 +": " + numbtoothpicksC);
         //The first player gets to choose which pile he will pick from
         System.out.println(namePlayer1 + ", choose a pile: ");
         String chosenPilePlayer1 = reader.nextLine();//Player 1 chooses the pile
         
         System.out.println("How many toothpicks to remove from pile "+ chosenPilePlayer1 + "?");
         int numberPickedPlayer1 = scanner.nextInt();//The number of toothpicks that the player 1 would like to take in his chosen pile
         
         //The following if statements ensure the number of toothpicks change in the piles as the players pick them
         if (chosenPilePlayer1.equals(pile1))
         {
             numbtoothpicksA = numbtoothpicksA - numberPickedPlayer1; //The number of toothpicks remaining in the toothpicks
             System.out.println (numbtoothpicksA);
         }
         else if (chosenPilePlayer1.equals(pile2))
         {
             numbtoothpicksB = numbtoothpicksB - numberPickedPlayer1;
         }
         else if (chosenPilePlayer1.equals(pile3))
         {
             numbtoothpicksC = numbtoothpicksC - numberPickedPlayer1;
         }
         System.out.println("Taking " + numberPickedPlayer1 + " from pile " + chosenPilePlayer1);
         //The second player gets to choose which pile he will pick from
         System.out.println("A: " + numbtoothpicksA);
         System.out.println("B: " + numbtoothpicksB);
         System.out.println("C: " + numbtoothpicksC);
         if (!gameContinues(numbtoothpicksA, numbtoothpicksB, numbtoothpicksC )){break;}
         System.out.println(namePlayer2 + ", choose a pile: ");
         //Player 2 chooses the pile
         
         String chosenPilePlayer2 = reader.nextLine();
         
         System.out.println("How many toothpicks to remove from pile "+ chosenPilePlayer2 + "?");
         int numberPickedPlayer2 = scanner.nextInt();//The number of toothpicks that the player 2 would like to take in his chosen pile
         
         if (chosenPilePlayer2.equals(pile1))
         {
             numbtoothpicksA = numbtoothpicksA - numberPickedPlayer2; //The number of toothpicks remaining in the toothpicks
         }
         else if (chosenPilePlayer2.equals(pile2))
         {
             numbtoothpicksB = numbtoothpicksB - numberPickedPlayer2;
         }
         else if (chosenPilePlayer2.equals(pile3))
         {
             numbtoothpicksC = numbtoothpicksC - numberPickedPlayer2;
         }
         System.out.println("Taking " + numberPickedPlayer2 + " from pile " + chosenPilePlayer2);
         if (!gameContinues(numbtoothpicksA, numbtoothpicksB, numbtoothpicksC )){break;}
         turns++;
        }
        
        if (turns%2==0){System.out.println ("The game is over and, " +namePlayer2+ "has won !");}
        else{{System.out.println ("The game is over and, " +namePlayer1+ "has won !");}}
    }
    
    public static boolean gameContinues (int x, int y, int z)
    {
        boolean gameContinues;
        if ((x ==1)&&(y==0)&&(z==0)){
          gameContinues = (x ==1)&&(y==0)&&(z==0);
          gameContinues = false;}
        else if ((x ==0)&&(y==1)&&(z==0)){
            gameContinues = (x ==0)&&(y==1)&&(z==0);
             gameContinues = false;}
        else if ((x ==0)&&(y==0)&&(z==1)){
            gameContinues = (x ==0)&&(y==0)&&(z==1);
            gameContinues = false;}
        else{gameContinues = true;}
        
        return gameContinues;
    }
}
