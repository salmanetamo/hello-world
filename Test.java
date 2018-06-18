import java.io.BufferedReader;
import java.io.FileReader;
/**
 * Write a description of class Test here.
 *
 * @author Salmane Tamo
 * @version (a version number or a date)
 */
public class Test
{
    public static void main (String args[]){
        String filename = "transactions.txt";
        BufferedReader br = null;
        try {
            br = new BufferedReader(new FileReader(filename));  // TO DO: make filename a constant
            String line = null;
            int i = 0;

            while ((line = br.readLine()) != null && i < 3) {
                String[] values = line.split(",");
                System.out.println("Value "+i+": "+values[i]);
                i++;
            }
            br.close();

        }
        catch (Exception ex) {
           System.out.println("A file error occurred");
        }
        
        
    }
}
