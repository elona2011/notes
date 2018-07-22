# How is compiler will load .java file and .class file from secondary memory to primary memory?

if (class information is available within the method) using
else if (checking within the class scope) using
else if (available in .java file) using
else if (checking in CurrentWorkingDirectory) {
    if(.class file existed and .java not existed) using .class file
    if(.class file not existed and .java existed) compile .java file
    if(.class file not existed and .java not existed) get error: cannot find symbol
    if(.class file existed and .java existed) {
        if(.java edit time is newer than .class file) compile .java file
        else using .class file
    }
}

https://www.youtube.com/watch?v=e8IE74nm2GY

# How many ways can we load .class file in java?

* By using java development tool
* By calling static variables and methods
* By using object creation

https://www.youtube.com/watch?v=9-PZwyQap2M&t=915s