import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;
import java.util.stream.*;

public class Hello {
    public static void main(String[] args) {
        try {
            File myObj = new File("C:\\git\\AdventOfCode2023\\1\\input.txt");
            Scanner myReader = new Scanner(myObj);
            while (myReader.hasNextLine()) {
                String line = myReader.nextLine();
                // convert to a char array and then find first number
                char[] charArray = line.toCharArray();
                int[] intArray = IntStream.range(0, charArray.length)
                    .map(i -> Character.getNumericValue(charArray[i]))
                    .toArray();
                int first = intArray[0];
                int last = intArray[intArray.length - 1];
                // combine first and last to make a string
                String firstString = Integer.toString(first);
                String lastString = Integer.toString(last);
                String combined = firstString + lastString;
                // print
                System.out.println(combined);

            }
            myReader.close();
        } catch (FileNotFoundException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
        }
    }
}