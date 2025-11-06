function simplifyPath(path: string): string {
    let stack: string[] = []
    let splitPath = path.split("/")

    for (let i = 0; i < splitPath.length; i++) {
        if (!splitPath[i] || splitPath[i] == ".") continue

        else if (splitPath[i] == "..") stack.pop()

        else {
            stack.push(splitPath[i])
        }
    }

    return "/" + stack.join("/")

    
};