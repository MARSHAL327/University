using System;
using System.Collections.Generic;
using System.IO;
using NUnit.Framework;

namespace Lab5_TPO
{
    class Program
    {
        static void Main()
        {
            
        }
    }

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


    [TestFixture]
    public class Test
    {

        [Test]
        public void AddTest()
        {
            Word word = new Word();

            string actualVal = word.MaxWord("Российская социал-демократическая рабочая партия (РСДРП) — основана в Российской империи 1 марта 1898 года на съезде в Минске");
            string expected = "социал-демократическая";
            Assert.AreEqual(expected, actualVal);
        }
    }
}
