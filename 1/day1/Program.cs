// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!!!!!");

var sr = new StreamReader(@"C:\git\AdventOfCode2023\1\input-small.txt");

var line = sr.ReadLine();

Console.WriteLine(line?.First(charachter => int.TryParse(charachter.ToString(), out _)));
Console.WriteLine(line?.Last(charachter => int.TryParse(charachter.ToString(), out _)));