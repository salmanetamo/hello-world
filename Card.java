/**
 * Describe a single card from a regular deck
 * 
 * @author Salmane Tamo
 * @version 1
 */
public class Card
{
    public String suit;
    public String value;
    
    // Our only constructor, expects two strings inputs: 
    // One for the suit of the card.
    // The other for the value of the card.
    // Example usage: Card bestCard = new Card("Spades", "Ace");
    public Card(String inputSuit, String inputValue){
        suit = inputSuit;
        value = inputValue;
    }
    
    /* Gives us a string representation of the card.
     * 
     * Card bestCard = new Card("Spades", "Ace");
     * String myCard = bestCard.toString(); // The value of myCard is "Ace of Spades"
     * There is some Java magic at play here: 
     * System.out.println(bestCard); // This will display: Ace of Spades
     * Your toString() method will be automatically called whenever 
     * you use your object as a String.
    */
  
    public String toString(){
        return(value + " of " + suit);
    }
}
