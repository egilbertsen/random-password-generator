# random-password-generator
JavaScript based random password generator

This is a JS application that uses user-selected criteria to generate a strong, random password. 

To use this app, the user must click the generate passoword button, then answer a series of prompts to outline their desired criteria. Increased length yeilds greater security.


This application has several validation loops. The first ensures that the chosen length is between 8 and 128 characters. The second checks that the user has selected at least one set of characters from which their password will be generated.

This application builds an array of characters that meet the user-selected criteria, then randomly selects from this array to build a strong password.
