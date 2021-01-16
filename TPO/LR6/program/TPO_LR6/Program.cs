using System;

namespace TPO_LR6
{
    public class Word
    {
        public string MaxWord(string input)
        {
            string[] str = input.Trim().Split(new char[] { ' ', ',', '.', ':', '!', '?', ';' }, StringSplitOptions.RemoveEmptyEntries);
            int maxlen = 0, index = 0;

            if (input == "") return "ERROR 404";

            for (int i = 0; i < str.Length; i++)
            {
                if (str[i].Length > maxlen)
                {
                    maxlen = str[i].Length;
                    index = i;
                }
            }

            return str[index];
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            Word word = new Word();
            string resWord = word.MaxWord("Российская социал-демократическая рабочая партия (РСДРП) — основана в Российской империи 1 марта 1898 года на съезде в Минске");

            Console.WriteLine(resWord);
        }
    }
}
