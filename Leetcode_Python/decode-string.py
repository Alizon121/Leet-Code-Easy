class Solution(object):
    def decodeString(self, s):
        """
        :type s: str
        :rtype: str
        """
        stack = []
        curr_str = ""
        num = 0

        for char in s:
            if char.isdigit():
                num = num * 10 + int(char)  # Handle multi-digit numbers
            elif char == "[":
                stack.append(curr_str)
                stack.append(num)
                curr_str = ""
                num = 0
            elif char == "]":
                repeat_count = stack.pop()
                prev_str = stack.pop()
                curr_str = prev_str + (curr_str * repeat_count)
            else:
                curr_str += char

        return curr_str