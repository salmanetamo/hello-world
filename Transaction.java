//TO DO: import library classes
import java.util.Date;
import java.text.SimpleDateFormat;
/**
 * represents a transaction
 * 
 * @author Salmane Tamo
 * @version (a version number or a date)
 */
public class Transaction
{
    // TO DO: instance variables
    double amount;
    String type;
    String reference;
    Date date;
    // TO DO: constructor
    public Transaction(double amount, String type, String reference,Date date){
        this.amount = amount;
        this.type = type;
        this.reference = reference;
        this.date = date;
    }
    // TO DO: getters for instance variables
    
    public double getAmount(){
        return this.amount;
    }
    
    public String getReference(){
        return this.reference;
    }
    
    public String getType(){
        return this.type;
    }
    
    public Date getDate(){
        return this.date;
    }
    // TO DO: getDateString method
    
    public String getDateString(){
        SimpleDateFormat formatter = new SimpleDateFormat("EEE, MMM d,yyy ");
        String dateString = formatter.format(date);
        return dateString;
    }
}
