---
id: Basic-Grammar
title: Basic Grammar
sidebar_position: 2
data: August 24, 2022
---

## Data Types

```java
int myNum = 5;               // Integer (whole number)
float myFloatNum = 5.99f;    // Floating point number
char myLetter = 'D';         // Character
boolean myBool = true;       // Boolean
String myText = "Hello";     // String
```

Data types are divided into two groups:

-   Primitive data types - includes `byte`, `short`, `int`, `long`, `float`, `double`, `boolean` and `char`
-   Non-primitive data types - such as `String`, Arrays and Classes (you will learn more about these in a later chapter)

### Primitive

A primitive data type specifies the size and type of variable values, and it has no additional methods

| Data Type | Size   | Description                                                                       |
| --------- | ------ | --------------------------------------------------------------------------------- |
| `byte`    | 1 byte | Stores whole numbers from -128 to 127                                             |
| `short`   | 2 byte | Stores whole numbers from -32,768 to 32,767                                       |
| `int`     | 4 byte | Stores whole numbers from -2,147,483,648 to 2,147,483,647                         |
| `long`    | 8 byte | Stores whole numbers from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 |
| `float`   | 4 byte | Stores fractional numbers. Sufficient for storing 6 to 7 decimal digits           |
| `double`  | 8 byte | Stores fractional numbers. Sufficient for storing 15 decimal digits               |
| `boolean` | 1 bit  | Stores true or false values                                                       |
| `char`    | 2 byte | Stores a single character/letter or ASCII values                                  |

### Non-Primitive Data Types

Non-primitive data types are called **reference types** because they refer to objects.

The main difference between **primitive** and **non-primitive** data types are:

-   Primitive types are predefined (already defined) in Java. Non-primitive types are created by the programmer and is not defined by Java (except for `String`)
-   Non-primitive types can be used to call methods to perform certain operations, while primitive types cannot
-   A primitive type has always a value, while non-primitive types can be `null`
-   A primitive type starts with a lowercase letter, while non-primitive types starts with an uppercase letter
-   The size of a primitive type depends on the data type, while non-primitive types have all the same size

## Operators

### Assignment Operator

| Operator | Description                                                                                                                         | Example                                                                |
| :------- | :---------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------- |
| =        | Simple assignment operator that assigns the value of the right operand to the left operand                                          | C = A + B will assign the value of A + B to C                          |
| + =      | The addition and assignment operator, which adds and assigns the left operand and the right operand to the left operand             | C + = A is equivalent to C = C + A                                     |
| - =      | Subtract and assignment operator, which subtracts the left operand and the right operand and assigns it to the left operand         | C - = A is equivalent to C = C - A                                     |
| \* =     | Multiply and assignment operator, which multiplies the left operand and the right operand and assigns it to the left operand        | C _ = A is equivalent to C = C _ A                                     |
| / =      | Division and assignment operator, which divides the left operand and the right operand and assigns it to the left operand           | C / = A, which is equivalent to C = C / A when C is the same type as A |
| (%)=     | Modulo and assignment operator, which takes the modulo of the left operand and the right operand and assigns it to the left operand | C%=A is equivalent to C=C%A                                            |
| << =     | Left shift assignment operator                                                                                                      | C << = 2 is equivalent to C = C << 2                                   |
| >> =     | right shift assignment operator                                                                                                     | C >>= 2 is equivalent to C = C >> 2                                    |
| &=       | bitwise AND assignment operator                                                                                                     | C &= 2 is equivalent to C = C & 2                                      |
| ^ =      | bitwise XOR assignment operator                                                                                                     | C ^ = 2 is equivalent to C = C ^ 2                                     |
| \| =     | Bitwise OR assignment operator                                                                                                      | C \| = 2 is equivalent to C = C \| 2                                   |

### Arithmetic Operator

| Operator | Name           | Description                            | Example    |
| -------- | -------------- | -------------------------------------- | ---------- |
| +        | Addition       | Adds together two values               | x + y      |
| -        | Subtraction    | Subtracts one value from another       | x - y      |
| \*       | Multiplication | Multiplies two values                  | x \* y     |
| /        | Division       | Divides one value by another           | x / y      |
| %        | Modulus        | Returns the division remainder         | x % y      |
| ++       | Increment      | Increases the value of a variable by 1 | x++ or ++x |
| --       | Decrement      | Decreases the value of a variable by 1 | x-- or --x |

Arithmetic operators need to pay attention to the **priority issue**. When there are multiple operators in the expression, the priority order of ** operators determines the calculation order**, such as multiplication and division followed by addition and subtraction, ** ()** has the highest priority.

### Comparison Operator

| Operator | Name                     | Example |
| -------- | ------------------------ | ------- |
| ==       | Equal to                 | x == y  |
| !=       | Not equal                | x != y  |
| >        | Greater than             | x > y   |
| <        | Less than                | x < y   |
| >=       | Greater than or equal to | x >= y  |
| <=       | Less than or equal to    | x <= y  |

The operation result of the comparison operator is a boolean type. When the operation result is established, the operation result is true, otherwise it is false.

### Logical Operator

| Operator | Name        | Description                                             | Example            |
| -------- | ----------- | ------------------------------------------------------- | ------------------ |
| &&       | Logical and | Returns true if both statements are true                | x < 5 && x < 10    |
| \|\|     | Logical or  | Returns true if one of the statements is true           | x < 5 \|\| x < 4   |
| !        | Logical not | Reverse the result, returns false if the result is true | !(x < 5 && x < 10) |

### Bitwise Operator

Bitwise operators are used to operate on each **bit** of the integer primitive type. Bitwise operators perform a **Boolean algebraic operation** on the corresponding bits in the two parameters and finally produce a result. Assuming integer variable A has the value 60 and variable B has the value 13

| operator | description                                                                                                                                                                                        | example                                 |
| :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------- |
| &        | If the corresponding bits are all 1, the result is 1, otherwise 0                                                                                                                                  | (A & B), you get 12, which is 0000 1100 |
| \|       | If the corresponding bits are all 0, the result is 0, otherwise 1                                                                                                                                  | (A \| B) gets 61, which is 0011 1101    |
| ^        | If the corresponding bit values ​​are the same, the result is 0, otherwise 1                                                                                                                       | (A^B) gives 49, which is 0011 0001      |
| ~        | bitwise negation operator flips each bit of the operand, i.e. 0 becomes 1 and 1 becomes 0.                                                                                                         | (~A) gets -61, which is 1100 0011       |
| <<       | Bitwise left shift operator. The left operand is shifted to the left by the number of bits specified by the right operand.                                                                         | A << 2 gets 240, which is 1111 0000     |
| >>       | Bitwise right shift operator. Shifts the left operand to the right by the number of bits specified by the right operand.                                                                           | A >> 2 gets 15 which is 1111            |
| >>>      | Bitwise right shift zero padding operator. The value of the left operand is shifted right by the number of bits specified by the right operand, and the resulting vacancies are filled with zeros. | A>>>2 gets 15 which is 0000 1111        |

### Ternary Operator

The syntax is **`conditional expression? expression1: expression2`**, if the conditional expression result is true, then execute expression1, otherwise execute expression2.

```java
variable x = (expression) ? value if true : value if false
```

## keywords

| Category                             |          |            |          |              |            |           |        |
| ------------------------------------ | -------- | ---------- | -------- | ------------ | ---------- | --------- | ------ |
| access control                       | private  | protected  | public   |              |            |           |        |
| class, method and variable modifiers | abstract | class      | extends  | final        | implements | interface | native |
|                                      | new      | static     | strictfp | synchronized | transient  | volatile  |        |
| Program Control                      | break    | continue   | return   | do           | while      | if        | else   |
|                                      | for      | instanceof | switch   | case         | default    |           |        |
| Error Handling                       | try      | catch      | throw    | throws       | finally    |           |        |
| package related                      | import   | package    |          |              |            |           |        |
| primitive types                      | boolean  | byte       | char     | double       | float      | int       | long   |
|                                      | short    | null       | true     | false        |            |           |        |
| variable reference                   | super    | this       | void     |              |            |           |        |
| reserved words                       | goto     | const      |          |              |            |           |        |

## comments

```java
public class HelloWorld {
   /*
    * This is the first Java program
    * it will print Hello World
    * This is an example of a multi-line comment
    *
    */
    public static void main(String[] args){
       // This is an example of a single line comment
       /* This is also an example of a single line comment */
       System.out.println("Hello World");
    }
}
```
