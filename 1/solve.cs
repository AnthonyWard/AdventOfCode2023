var answer = File
    .ReadAllLines(@"C:\git\AdventOfCode2023\1\input.txt")
    .Select(line =>
    {
        var firstNumber = line?.FirstOrDefault(character => int.TryParse(character.ToString(), out _));
        var lastNumber = line?.LastOrDefault(character => int.TryParse(character.ToString(), out _));
        // combine numbers to make a two-digit number and convert to int so that it can be summed
        return int.Parse(firstNumber.ToString() + lastNumber.ToString());
    })
    .Sum();

Console.WriteLine(answer);