import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.file.*;
import java.util.Scanner;
import java.util.stream.*;

public class Hello {
    public static void main(String[] args) {
        try {
            Path path = Paths.get("C:\\git\\AdventOfCode2023\\1\\input-small.txt");
            var lines = Files.lines(path);
            // iterate over lines and return a sum of the result
            int sum = lines.map(line -> {
                var firstNumber = line.chars().filter(x -> Character.isDigit((char) x)).findFirst().getAsInt();
                var lastNumber = line.chars().filter(x -> Character.isDigit((char) x)).reduce((first, second) -> second).getAsInt();
                // convert first and last number to string
                String firstString = Character.toString(firstNumber);
                String lastString = Character.toString(lastNumber);
                // combine the strings
                String combined = firstString + lastString;
                // print
                return Integer.parseInt(combined);
            }).mapToInt(Integer::valueOf).sum();
            
            System.out.println(sum);
            
        } catch (IOException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
        }
    }
}