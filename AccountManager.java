
/**
 * Write a description of class AccountManager here.
 * 
 * @author Salmane Tamo 
 * @version (a version number or a date)
 */
public class AccountManager
{
    public static void main(String args[]){
        Customer ourCustomer = new Customer("Fernando","Alonso");
        Account ourAccount = new Account(ourCustomer,"12345");
        ourAccount.displayTransactions();
    }
}
