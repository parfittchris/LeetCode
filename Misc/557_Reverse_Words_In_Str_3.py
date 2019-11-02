# https: // leetcode.com/problems/reverse-words-in-a-string-iii/
# Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.


def reverseWords(s):
    new_words = []
    split = s.split()

    for word in split:
        new_words.append(reverse(word))

    return " ".join(new_words)


def reverse(string):
    i = 0
    j = len(string) - 1
    split = list(string)

    while (i < j):
        temp = split[i]
        split[i] = split[j]
        split[j] = temp
        i += 1
        j -= 1

    return "".join(split)


input = "Let's take LeetCode contest"
# Output: "s'teL ekat edoCteeL tsetnoc"

word = 'cat dog'

print(reverseWords(input))
