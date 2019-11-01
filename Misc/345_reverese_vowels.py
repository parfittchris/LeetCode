# https: // leetcode.com/problems/reverse-vowels-of-a-string/
# Write a function that takes a string as input and reverse only the vowels of a string.


def reverseVowels(s):
    vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    split = list(s)
    i = 0
    j = len(s) - 1

    while i < j:
        if split[i] not in vowels:
            i += 1

        if split[j] not in vowels:
            j -= 1

        if split[i] in vowels and split[j] in vowels:
            temp = s[i]
            split[i] = s[j]
            split[j] = temp
            i += 1
            j -= 1

    return "".join(split)


string = 'leetcode'
print(reverseVowels(string))
