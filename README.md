## Pig Dice Game
-This is a two-player die game

-18th december 2018

-By swanapole shilla

## Description
This is a two-player die game where each player is given a chance to roll the die and gain scores from the number on the die. A player is allowed to hold their chance and pass it on to the next player or continue rolling the die.

## Installation Requirements
To start using this project use the following commands:

-git clone https://github.com/swanapole/p-dice.git 
-cd pig-dice 
-atom . 
-code .

## Behavior Driven Development
The program should hide the introductory part and show the game when the START button is clicked:

Input Example: Click START button

Output Example: Hide Introductory part, Show Game

The program should return any number between 1-6 when ROLL DIE button is clicked:

Input Example: Click ROLL DIE button

Output Example: 6

The program should return sum score when HOLD button is clicked:

Input Example: Click HOLD button

Output Example: score += roundScore

The program should reload game when NEW GAME button is clicked:

Input Example: Click NEW GAME button

Output Example: Initialize game with init() function

The program should shift to next player when a 1 is returned:

Input Example: 1 is returned

Output Example: Shift to next player with nextPlayer() function

## Link to Live Website
http://swanapole.github.io/p-dice/

## License
MIT License

Copyright (c) 2018 shilla celinedion swanapole

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
