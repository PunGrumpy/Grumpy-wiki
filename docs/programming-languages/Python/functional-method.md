---
id: Functional-method
title: Functional Method
sidebar_position: 4
data: August 15, 2022
---

Functions are reusable actions that have a name

```py
func_name()
```

## Why Use Them?

-   We can use function to prevent code duplication. Keep code **DRY**
-   Functions help us abstract away code, breaking a complex program down into small pieces

## Define & Execute

```py
# Define A Function
def laugh():
    print("HA" * 20)

# Execute A Function
laugh()
```

### Define

Before we can use a function, we must define it and give it a name

### Execute

Once Python **"KNOWS"** about our function, we can call it anytime

## Arguments & Parameters

### Arguments

An argument is a value that is passed to a function when it is called. It might be a variable, value or object passed to a function or method as input. They are written when we are calling the function

```py
len("Hello")
# len : Function name
# Hello : Argument
# () : Parentheses
```

### Default Parameters

To give a parameter a default value if no argument is provided, simply add the default using this

Format: `parameter = value`

```py
def laugh(intensity = 1):
    print("HA" * intensity)

laugh() # HA
laugh(10) # HAHAHAHAHAHAHAHAHAHA
```

### Return

Outputs whatever value comes after return keyword **Ends the execution of a function**

```py
def divide(x, y):
    return x/y
```
