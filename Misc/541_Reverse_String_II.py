# Given a string and an integer k, you need to reverse the first
# k characters for every 2k characters counting from the start
# of the string. If there are less than k characters left, reverse
# all of them. If there are less than 2k but greater than or equal
# to k characters, then reverse the first k characters and left
# the other as original.

# https: // leetcode.com/problems/reverse-string-ii/


def reverseStr(s, m):
    subs = []
    i = 0
    double = False

    while i <= len(s) - 1:
        if double == True:
            subs.append(s[i:i + m])
            double = False
        else:
            subs.append(reverse(s[i:i + m]))
            double = True
        i += m

    if i <= len(s) - 1:
        subs.append(s[i:])

    # print(subs)
    return "".join(subs)


def reverse(string):
    split = list(string)
    i = 0
    j = len(string) - 1

    while i < j:
        temp = split[i]
        split[i] = split[j]
        split[j] = temp
        i += 1
        j -= 1

    return "".join(split)


print(reverseStr('abcdefg', 2))


# Input: s = "abcdefg", k = 2
# Output: "bacdfeg"
