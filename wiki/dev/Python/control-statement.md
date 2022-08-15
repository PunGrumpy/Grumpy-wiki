---
id: Control-Statement
title: Control Statement
sidebar_position: 3
data: August 15, 2022
---

## Conditions

How do we make decisions with code and have different outcomes??

### If Statement

```py
if condition:
    statement
```

### Else-If Statement

If not the first thing, maybe try instead?

```py
if condition:
    statement
elif other_conditions:
    statement
elif other_conditions:
    statement
else:
    statement
```

### Else Statement

If none of the above were True, do this...

```py
if condition:
    statement
else:
    statement
```

In Python, to construct a branch structure you can use `if`, `elif` and `else` keywords.

```py
username = input('Please enter username => ')
password = input('Please enter the password => ')

# If the username is admin and the password is 123456, the authentication is successful,
# otherwise the authentication fails

if username == 'admin' and password == '123456':
    print('Authentication successful!')
else:
    print('Authentication failed!')
```

## Loop

### For Loop

Python's for statement is different from C or Pascal. Python's for statement does not iterate over arithmetically incrementing values ​​(like Pascal), or give the user the ability to define iteration steps and pause conditions (like C), but iterates over arbitrary sequences such as lists or strings, with elements in the same order as they are in the sequence. appear in the same order.

```py
"""
for item in iterable:
    statement
"""

sum = 0
for x in range(101):
    sum += x
print(sum)
```

#### `range()`

Can be used to construct a range from 1 to 100. When we put such a range into a `for-in` loop, we can take out the range from 1 to 100 in turn through the previous loop variable `x` the integer. Of course, the usage of `range` is very flexible, an example is given below:

```py
for num in range(start, stop, Step):
    # _1 : Start
    # _2 : Stop
    # _3 : Step (default is 1)
    print(num)
```

-   `range(101)`
    > It can be used to generate integers in the range of 0 to 100. It should be noted that 101 cannot be obtained.
-   `range(1, 101)`
    > It can be used to generate integers in the range of 1 to 100, which is equivalent to a closed interval followed by an open interval.
-   `range(1, 101, 2)`
    > It can be used to generate odd numbers from 1 to 100, where 2 is the step size, that is, the value by which the value is incremented each time.
-   `range(100, 0, -2)`
    > It can be used to generate even numbers from 100 to 1, where -2 is the step size, the value by which each number is decremented.

### While Loop

If you want to construct a loop structure without knowing the exact number of loops, use a `while` loop to control the loop with an expression that produces or converts a `bool` value, and the value of the expression is `True` to continue the loop; the expression is `False` to end the loop.

```py
import random

answer = random.randint(1, 100)
counter = 0
while True:
    counter += 1
    number = int(input('Please input: '))
    if number < answer:
        print('bigger')
    elif number > answer:
        print('smaller')
    else:
        print('Congratulations on your guess!')

print('You guessed %d times in total' % counter)
if counter > 7:
    print('Your IQ balance is obviously insufficient')
```

### Break

We can use the **break** keyword to prematurely exit a loop. Usually this is done inside of a conditional

```py
for item in iterable:
    statement
    break # Stop running the loop
```

### Continue

The **continue** keyword end the current iteration of the loop, but does not break out of the loop

```py
for item in iterable:
    statement
    continue # Skip the item the loop
```
