# https: // leetcode.com/problems/reverse-string/
# Write a function that reverses a string. The input string is given as an array of characters char[].

# Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

# You may assume all the characters consist of printable ascii characters.


def reverseString(s):
    i = 0
    j = len(s) - 1

    while i < j:
        temp = s[i]
        s[i] = s[j]
        s[j] = temp
        i += 1
        j -= 1

    return s


array = ['s', 't', 'o', 'p', 'l', 'i', 'g', 'h', 't', 'y']

reverseString(array)
