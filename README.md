# Randomized Math Problems #
This set of locally run web pages lets you generate pages of basic Math questions, which can then be printed or saved to .pdf format through your browser.
+ Currently supports Addition, Subtraction, Multiplication, and Division problems.
( * Subtraction questions are designed to prevent negative answers. Division questions will have positive, whole number, quotients. ) 

# Use #
There are separate .html files for each Math Question type: 
+ Addition_Problems.html
+ Division_Problems.html
+ Multiplication_Problems.html
+ Subtraction_Problems.html

There are also a few 'mix' .html files with multiple Math Question types:
+ mix_All_Types.html
+ mix_Add_Sub.html
+ mix_Mult_Div.html


# QueryString Modifiers # 
These querystring modifiers can be used with any of the above pages to override some of the default values.

+ Set a mandatory number to be used in all of the problems with `?n=N` where N is any positive integer 
ex: If you want your student(s) to practice multiplying by 5s, you could use `?n=5` 

+ Set a minimum value for the number range with `?min=N` where N is any positive integer 

+ Set a maximum value for the number range with `?max=N` where N is any positive integer 

+ Set the number of questions to be asked with `?qty=N` where N is any positive integer 

! If the number of questions is not evenly divisible by 4 columns, the final row will have some empty spots. I've updated the CSS to hide the unused cells

+ Chain multiple querystrings together with the `&` character
ex: ?n=5&min=0&max=20&qty=30
