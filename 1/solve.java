import java.io.IOException;
import java.nio.file.*;
import java.util.stream.*;

public class Solve {
    public static void main(String[] args) {
        try {
            Path path = Paths.get("C:\\git\\AdventOfCode2023\\1\\input.txt");
            var answer = Files
                .lines(path)
                .map(line ->
                {
                    var firstNumber = line.chars().filter(x -> Character.isDigit((char) x)).findFirst().getAsInt();
                    var lastNumber = line.chars().filter(x -> Character.isDigit((char) x)).reduce((first, second) -> second).getAsInt();
                    // combine numbers to make a two-digit number and convert to int so that it can be summed
                    return Character.toString(firstNumber) + Character.toString(lastNumber);
                })
                .mapToInt(Integer::valueOf)
                .sum();
            
            System.out.println(answer);
            
        } catch (IOException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
        }
    }
}