import java.io.BufferedReader;
import java.io.FileReader;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * represents an account
 *
 */
public class Account
{
    // the customer
    // TODO: declare customer
    Customer customer;
    // the account number
    private String accountNumber;

    // the account balance
    private double balance;

    // the account transactions
    // TO DO: declare array of transactions
    Transaction[] transactions;
    // the number of account transactions
    private int numberOfTransactions;

    // constants
    private static final int MAX_TRANSACTIONS = 10;
    // TO DO: define constant for filename
    static final String FILENAME = "transactions.txt";

    public Account(Customer customer, String accountNumber)
    {
        // TO DO: set customer
        this.customer = customer;
        this.accountNumber = accountNumber;
        balance = 0.0f;
        // TO DO: create new array for transactions
        numberOfTransactions = 0;
        this.transactions = new Transaction[MAX_TRANSACTIONS];
    }

    public String getAccountNumber()
    {
        return accountNumber;
    }


    public String getCustomerName()
    {
        return (customer.getFirstName() + " " + customer.getLastName());
    }

    public double getBalance()
    {
        return balance;
    }

    /**
     * reads a list of transactions from a file on disk
     */
        public void readTransactions()
    {
        BufferedReader br = null;
        try {
            br = new BufferedReader(new FileReader(FILENAME));  // TO DO: make filename a constant
            String line = null;
            int count=0;

            while ((line = br.readLine()) != null && count < MAX_TRANSACTIONS) {
                String[] values = line.split(",");

                double amount = Double.parseDouble(values[0]);  // amount will be used in constructor of new Transaction
                String type = values[1];    // type will be used in constructor of new Transaction
                String reference = values[2];   // reference will be used in constructor of new Transaction

                String inputDate = "12/9/2003";
                SimpleDateFormat formatter = new SimpleDateFormat("d/M/yyyy");
                Date date = null;
                try {
                    date = formatter.parse(values[3]);  // date will be used in constructor of new Transaction
                }
                catch (ParseException exc)
                {
                    System.out.println("A date format error occurred");
                }

                // TO DO: create new transaction and store in array
                Transaction transaction = new Transaction(amount,type,reference,date);
                transactions[count] = transaction;
                count++;
            }
            br.close();

            // TO DO: update number of transactions
            this.numberOfTransactions = count;
            System.out.println("Transactions read from file successfully");
        }
        catch (Exception ex) {
           System.out.println("A file error occurred");
        }
    }

    public void displayTransactions()
    {
        System.out.format("Account: %s\nCustomer: %s\n",
            accountNumber, this.getCustomerName());

        // TO DO: loop through transactions and display
        for(int i = 0; i < this.numberOfTransactions;i++){
            Transaction trans = transactions[i];
            System.out.format("£%4.2f    %s    %s    %s\n",
            trans.getAmount(),
            trans.getType(),
            trans.getReference(),
            trans.getDateString());
        }
    }

}
