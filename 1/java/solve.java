import java.io.File;  // Import the File class
import java.io.FileNotFoundException;  // Import this class to handle errors
import java.util.Scanner; // Import the Scanner class to read text files
import java.util.stream.*;

public class Hello {
    public static void main(String[] args) {
        try {
            File myObj = new File("C:\\git\\AdventOfCode2023\\1\\input-small.txt");
            Scanner myReader = new Scanner(myObj);
            while (myReader.hasNextLine()) {
                String data = myReader.nextLine();
                System.out.println(data);
                System.out.println(Arrays.stream(data.toCharArray()).findFirst());
            }
            myReader.close();
        } catch (FileNotFoundException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
        }
    }
}