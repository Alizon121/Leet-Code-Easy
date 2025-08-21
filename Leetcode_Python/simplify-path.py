class Solution(object):
    def simplifyPath(self, path):
        """
        :type path: str
        :rtype: str
        """
        
        # "." -> current dir
        #  ".." -> prev dir
        #  "//" or. "///" -> "/"
        # "..." -> dir

        # MUST START WITH "/" 
        # MUST BE SEPARATED BY "/"
        # CANNOT END WITH "/" except for root
        # CANNOT HAVE "." or ".."

        stack = list()
        dir = path.split("/")

        for el in dir:
            if el == "." or not el:
                continue
            elif el == "..":
                if stack:
                    stack.pop()
            else:
                stack.append(el)
        return "/" + "/".join(stack)