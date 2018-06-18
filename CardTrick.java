import java.util.Scanner;
/**
 * This is the class where the magic actually happens
 * 
 * @author Salmane Tamo
 */
public class CardTrick {
    public static void main(String[] args)
    {
        // We need a deck to perform this trick.
        // Make sure that you've finished the constructor in the Deck class
        Deck magicDeck = new Deck();
        
        // It's boring if we don't shuffle the deck.
        magicDeck.shuffle();
        
        // Get 9 cards from the deck to perform the trick with
        // You will have to implement the deal method in the Deck clasd
        Card[] trickCards = magicDeck.deal(9);
        
        // From now on, there is no code, just comments to guide you.
        
        // TODO: Show the user the cards, ask the user to remember one.
        System.out.println("I am going to show you 9 cards, and you should remember one of them but don't tell me!");
        System.out.println("Here you go! :");
        for(int i = 0; i < trickCards.length; i++)
        {
            System.out.println(trickCards[i]);
        }
        
        // TODO: 
        //Show the cards again in 3 distinct groups. 
        System.out.println("Keep your card in mind. Now, I am going to group them into 3 piles");
            //Initialises the three groups of arrays
        Card[] groupA = new Card[3];
        Card[] groupB = new Card[3];
        Card[] groupC = new Card[3];
            //Declaring the elements of each array by picking them in the trickCards array
        updateArray(groupA,trickCards,0,1,2);
        updateArray(groupB,trickCards,3,4,5);
        updateArray(groupC,trickCards,6,7,8);
            //Printing out the three groups
        printCardsInGroup("A",groupA);
        printCardsInGroup("B",groupB);
        printCardsInGroup("C",groupC);
        
        //Ask the user to pick which group has the card
        System.out.println("Alright! Now, tell me which pile A,B, or C contains your card!");
        Scanner scanner = new Scanner (System.in);
        String chosenGroup1 = scanner.nextLine();
        // TODO: 
        //Set up 3 new groups based on the trick we've discussed
        
        if(chosenGroup1.equals("A"))
        {
           updateArray(groupA,trickCards,3,0,6); 
           updateArray(groupB,trickCards,4,1,7);
           updateArray(groupC,trickCards,5,2,8);
        }
        else if(chosenGroup1.equals("B"))
        {
           updateArray(groupA,trickCards,0,3,6); 
           updateArray(groupB,trickCards,1,4,7);
           updateArray(groupC,trickCards,2,5,8);   
        }
        else
        {
           updateArray(groupA,trickCards,0,6,3); 
           updateArray(groupB,trickCards,1,7,4);
           updateArray(groupC,trickCards,2,8,5);  
        }
        //Ask the user to pick which group has the card now.
        System.out.println("I have now reschuffled the cards, choose one more time the pile that has your card!");
        printCardsInGroup("A",groupA);
        printCardsInGroup("B",groupB);
        printCardsInGroup("C",groupC);
        String chosenGroup2 = scanner.nextLine();
        
        // TODO: Reveal the card.
        if(chosenGroup2.equals("A"))
        {
           if(chosenGroup1.equals("A"))
           {System.out.println("Abracadabra!!! Your card was: The " + trickCards[0]);}
           else if(chosenGroup1.equals("B"))
           {System.out.println("Abracadabra!!! Your card was: The " + trickCards[3]);}
           else
           {System.out.println("Abracadabra!!! Your card was: The " + trickCards[6]);}
        }
        else if(chosenGroup2.equals("B"))
        {
           if(chosenGroup1.equals("A"))
           {System.out.println("Abracadabra!!! Your card was: The " + trickCards[1]);}
           else if(chosenGroup1.equals("B"))
           {System.out.println("Abracadabra!!! Your card was: The " + trickCards[4]);}
           else
           {System.out.println("Abracadabra!!! Your card was: The " + trickCards[7]);}    
        }
        else
        {
           if(chosenGroup1.equals("A"))
           {System.out.println("Abracadabra!!! Your card was: The " + trickCards[2]);}
           else if(chosenGroup1.equals("B"))
           {System.out.println("Abracadabra!!! Your card was: The " + trickCards[5]);}
           else
           {System.out.println("Abracadabra!!! Your card was: The " + trickCards[8]);}
        }
    }
    
    //This method allows to do the trick and change the cards in the groups
    public static void updateArray(Card[] arrayToBeCreated, Card[]arrayToPickFrom, int index1,int index2,int index3)
    {
       arrayToBeCreated[0] = arrayToPickFrom[index1]; 
       arrayToBeCreated[1] = arrayToPickFrom[index2]; 
       arrayToBeCreated[2] = arrayToPickFrom[index3]; 
    }
    
    //This method enables to show the user the cards in the groups
    public static void printCardsInGroup(String groupLetter, Card[] groupArray)
    {
        System.out.println("     "+ groupLetter);
        for(int i = 0; i < groupArray.length; i++)
        {
            System.out.println(groupArray[i]);
        }
    }
}
