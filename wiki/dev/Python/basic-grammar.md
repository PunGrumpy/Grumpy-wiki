---
id: Basic-Grammar
title: Basic Grammar
sidebar_position: 2
data: August 15, 2022
---

## Type Of Data

-   **Integer**

    > Python can handle integers of any size (there are two types of integers in Python 2.x `int`, `long` but this distinction has little meaning for Python, so in Python 3.x integers are only int.), and supports binary (eg. `0b100`, 4 in decimal), octal (eg. `0o100`, 64 in decimal), decimal (`100`), and hexadecimal (`0x100`, 256 in decimal).

-   **Floating point**

    > Floating point numbers are also decimals. The reason why they are called floating point numbers is because the decimal point position of a floating point number is variable when expressed in scientific notation, except for mathematical notation (such as `123.456`) Also supports scientific notation (eg `1.23456e2`).

-   **String**

    > A string is any text enclosed in single or double quotes, such as `'hello'` and `"hello"`, strings also have raw string representation, byte string representation, Unicode string representation, and can be written on multiple lines (starting with three single or three double quotes and ending with three single or three double quotes).

-   **Boolean**

    > Boolean values ​​have only two values, `True` and `False`, either `True` or `False`. In Python, you can directly use `True` and `False` to represent boolean values ​​(please note case), can also be computed by boolean operations (e.g. `3 < 5` yields a boolean `True`, while `2 == 1` yields a boolean `False`).

### Variable Naming

**Hard rules**

-   The variable name consists of letters (generalized Unicode characters, excluding special characters), numbers and underscores. Numbers cannot start.
-   Pythonic lowercase `a` and use `_` (eg. `variable_name`, `count_name`)
-   Do not conflict with keywords (words with special meanings, which will be described later) and system reserved words (such as the names of functions, modules, etc.).

**PEP 8 requirements**

-   Spell in lowercase letters, and connect multiple words with underscores.
-   Protected instance properties start with a single underscore (more on this later).
-   Private instance properties start with two underscores (more on this later).

Use type() to check the type of a variable

**The built-in function in Python converts the variable type**

-   `int()`: Convert a number or string to an integer, you can specify the base.
-   `float()`: Converts a string to a float.
-   `str()`: Convert the specified object into a string, and you can specify the encoding.
-   `chr()`: Convert an integer to a string (one character) corresponding to the encoding.
-   `ord()`: Convert a string (a character) to the corresponding encoding (integer).

## Operators

Operators are special characters in Python that perform operation on value(s)

| Operator                                      | Description                                                        |
| --------------------------------------------- | ------------------------------------------------------------------ |
| `[]` `[:]`                                    | Subscript, slice                                                   |
| `**`                                          | Exponentiation                                                     |
| `~` `+` `-`                                   | Bitwise negation, sign                                             |
| `*` `/` `%` `//`                              | Multiply, divide, modulo, divide                                   |
| `+` `-`                                       | Addition, Subtraction                                              |
| `<=` `<` `>` `>=`                             | Less than or equal, less than, greater than, greater than or equal |
| `==` `!=`                                     | Equal, not equal                                                   |
| `is` `is not`                                 | Identity operator                                                  |
| `in` `not in`                                 | Member operator                                                    |
| `not` `or` `and`                              | Logical operators                                                  |
| `=` `+=` `-=` `*=` `/=` `%=` `//=` `**=` `&=` | Augmented assignment                                               |

### Order of operations

-   Parentheses : `()`
-   Multiplication and Division : `* / //`
-   Addition and Subtraction : `+ -`

## Keywords

| Keyword  | Description                                                                             |
| :------- | :-------------------------------------------------------------------------------------- |
| and      | logical operators.                                                                      |
| as       | Create an alias.                                                                        |
| assert   | for debugging.                                                                          |
| break    | Break out of the loop.                                                                  |
| class    | Defines the class.                                                                      |
| continue | Continue the next iteration of the loop.                                                |
| def      | Defines a function.                                                                     |
| del      | Deletes an object.                                                                      |
| elif     | Used in conditional statements, equivalent to else if.                                  |
| else     | is used for conditional statements.                                                     |
| except   | Handle exceptions, what to do when exceptions occur.                                    |
| False    | Boolean, the result of the comparison operation.                                        |
| finally  | Handles an exception and executes a piece of code whether or not there is an exception. |
| for      | Creates a for loop.                                                                     |
| from     | Import a specific part of a module.                                                     |
| global   | Declare global variables.                                                               |
| if       | Write a conditional statement.                                                          |
| import   | Import a module.                                                                        |
| in       | Checks if a value exists in a list, tuple, etc. collection.                             |
| is       | Tests whether two variables are equal.                                                  |
| lambda   | Creates an anonymous function.                                                          |
| None     | Indicates a null value.                                                                 |
| nonlocal | Declare non-local variables.                                                            |
| not      | Logical operator.                                                                       |
| or       | Logical operator.                                                                       |
| pass     | null statement, a statement that does nothing.                                          |
| raise    | Raise an exception.                                                                     |
| return   | Exit the function and return the value.                                                 |
| True     | Boolean, the result of the comparison operation.                                        |
| try      | Write a try...except statement.                                                         |
| while    | Creates a while loop.                                                                   |
| with     | is used to simplify exception handling.                                                 |
| yield    | End function, return generator.                                                         |

## Comments

-   Single-line comments: sections starting with # and a space

-   Multi-line comments: start with three quotes, end with three quotes

```python
"""
First Python program - hello, world!
Tribute to the great Mr. Dennis M. Ritchie
Version: 0.1
Author: Luo Hao
"""
# hello world!
print('hello, world!')
print("Hello, world!")
```
