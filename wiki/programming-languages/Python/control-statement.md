---
id: Control-Statement
title: Control Statement
sidebar_position: 3
data: August 15, 2022
---

In Python, Loops are used to iterate repeatedly over a block of code. In order to change the way a loop is executed from its usual behavior, control statements are used. Control statements are used to control the flow of the execution of the loop based on a condition.

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

### Pass

The **pass** keyword to skip the execution, it simply passes to the next iteration, It can be used when a statement is syntactically required, but the program does not actually perform any action

```py
for item in iterable:
    if letter == 'x':
        pass
    print(item)
```

## Exceptions

Python has many built-in exceptions that are raised when your program encounters an error (something in the program goes wrong).

### Try , Except and Finally

1. The `except` statement is not necessary, and the `finally` statement is not necessary, but there must be one of the two, otherwise there is no meaning of `try`.
2. There can be multiple `except` statements. Python will match the exception you specify in the order of the `except` statement. If the exception has been handled, it will not enter the following `except` statement.
3. The `except` statement can specify multiple exceptions at the same time in the form of a tuple, see the example code.
4. If the exception type is not specified after the `except` statement, all exceptions are caught by default. You can obtain the current exception through logging or the sys module.
5. If you want to catch an exception and then throw it repeatedly, use `raise` without any arguments or information.
6. Catching and throwing the same exception is not recommended, please consider refactoring your code.
7. It is not recommended to catch all exceptions when the logic is unclear. It is possible that you are hiding a serious problem.
8. Try to replace `try/except` statements with built-in exception handling statements, such as `with` statement, `getattr()` method.

```py
def div(a, b):
    try:
        print(a / b)
    except ZeroDivisionError:
        print("Error: b should not be 0 !!")
    except Exception as e:
        print("Unexpected Error: {}".format(e))
    else:
        print('Run into else only when everything goes well')
    finally:
        print('Always run into finally block.')

# tests
div(2, 0)
div(2, 'bad type')
div(1, 2)

# Multiple exception in one line
try:
    print(a / b)
except (ZeroDivisionError, TypeError) as e:
    print(e)

# Except block is optional when there is finally
try:
    open(database)
finally:
    close(database)

# catch all errors and log it
try:
    do_work()
except:
    # get detail from logging module
    logging.exception('Exception caught!')

    # get detail from sys.exc_info() method
    error_type, error_value, trace_back = sys.exc_info()
    print(error_value)
    raise
```

### raise

The `raise` statement supports forcing the specified exception to be raised. E.g:

```python
raise NameError('HiThere')

Traceback (most recent call last):
  File "<stdin>", line 1, in <module>

NameError: HiThere
```

## Other

### Of

The deletion of the target list will recursively delete each target from left to right

```python
of the
del b []
```

### Return

return leaves the current function call with a list of expressions (or None) as the return value.

### Yield

generate iterator

```python
def foo(number):
    print("starting...")
    while num<10:
        num=num+1
        yield num
for n in foo(0):
    print(n)

# output
starting...
1
2
3
4
5
6
7
8
9
10
```

### Import

A basic import statement (without a from clause) is executed in two steps:

1. Find a module, and load and initialize the module if necessary.

2. Define one or more names in the local namespace for the scope where the import statement occurs.

```python
import foo                 # foo imported and bound locally
import foo.bar.baz         # foo.bar.baz imported, foo bound locally
import foo.bar.baz as fbb # foo.bar.baz imported and bound as fbb
from foo.bar import baz    # foo.bar.baz imported and bound as baz
from foo import attr       # foo imported and foo.attr bound as attr
```

The process of using the from form is slightly more complicated:

1. Find the module specified in the from clause, and load and initialize the module if necessary;

2. For each identifier specified in the import clause:
    1. Check if the imported module has an attribute of that name
    2. If not, try to import a submodule with that name, and check again if the imported module has the attribute
    3. Raises ImportError if the property is not found.
    4. Otherwise, store a reference to the value in the local namespace, using its specified name if there is an as clause, otherwise using the property's name

### Global

A global statement is a statement that acts on the entire current block of code. It means that the listed identifiers will be interpreted as global variables.

### Non-local

The nonlocal statement causes the listed names to refer to variables other than global variables previously bound in the nearest containing scope.
