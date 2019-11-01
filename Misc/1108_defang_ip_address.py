# https: // leetcode.com/problems/defanging-an-ip-address/
# Given a valid(IPv4) IP address, return a defanged version of that IP address.

# A defanged IP address replaces every period "." with "[.]".


def defangIPaddr(address):
    return_str = ""

    for letter in address:
        if letter == '.':
            return_str += "[.]"
        else:
            return_str += letter

    return return_str


address = "1.1.1.1"
print(defangIPaddr(address))
