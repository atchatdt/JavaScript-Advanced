import java.util.Scanner;

/**
 * index
 */
public class Main {

   public static void main(String[] args){
       index abc = new index(1, 2);
       abc.printF();
       Scanner  inputScanner = new Scanner(System.in);

       System.out.println("Input number: ");
       int b = inputScanner.nextInt();
       System.out.println(b);
   }
    
}