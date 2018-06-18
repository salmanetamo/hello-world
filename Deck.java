 import java.util.Random;

/**
 * Write a description of class Deck here.
 * 
 * @author Salmane Tamo
 */
public class Deck
{    
    public Card[] cards;
    
    public Deck()
    {
        String[] LEGAL_SUITS = {"Clubs", "Diamonds", "Hearts", "Spades"}; 
        String[] LEGAL_VALUES = {"2", "3", "4", "5", "6", "7", "8", "9", "10",
        "Jack", "Queen", "King", "Ace"};
        
        cards = new Card[52];
        int counter = 0;
        // You figure out how to initialize the cards array. You will need to use
        // The two arrays provided above, don't type out all 52 possible cards!
        for(int i = 0;  i < LEGAL_SUITS.length; i++)
        {
            for(int j = 0; j < LEGAL_VALUES.length; j++)
            {
              cards [counter] = new Card(LEGAL_SUITS[i],LEGAL_VALUES[j]);  
              //System.out.println(cards [counter]);
              counter++;
            }
        }
    }
    // Hint: You will have to loop over both arrays above.
    
    // The shuffling strategy is lifted from here: https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
    // Here we change the order of the cards in the deck.

    public void shuffle()
    {
        for (int i = cards.length - 1; i > 0; i--)
        {
            // Pick a random card between 0 and i inclusive
            Random generator = new Random();
            int randomIndex = generator.nextInt(i+1);
            
            // Swap the two cards.
            Card temp = cards[i];
            cards[i] = cards[randomIndex];
            cards[randomIndex] = temp;
        }
    }
    
    // Return the first n cards of the deck.
    // Make sure that n is a valid number.
    public Card[] deal(int n)
    {
        // return an array of cards
        Card[] cardsToBeReturned = new Card[n];
        for(int i= 0; ((i < n)&&(n < 52)); i++)
        {
            cardsToBeReturned[i] = cards[i];
        }
        return cardsToBeReturned;
    }
}
