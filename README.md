# React-chess

Created with CodeSandbox implemented in TypeScript

## Fernando Gómez Graciani

Taking this project further would mean implementing the next steps:

- Apply the logic of the game to the pieces, i.e. :

  1. Create the application store in the flux architecture with the Redux library
  2. Create action types and action creators needed
  3. Create an array of arrays (a matrix) containing the position of each piece on the board
  4. For each type of piece, implement an onclick / on drag to show the possible positions where the piece could go

- Implement the rest of the game logic, i.e:

  1. Turns of each player.
  2. Capture pieces when they overlap (except with the king)
  3. Check
  4. Checkmate
  5. Castling
  6. Array of movement history of each player
  7. Pieces each player has captured

Obviously for each new logic, functionality or component their respective tests would be implemented.
  
  
I have been able to dedicate between one and two hours each day to the project, it will have taken me in total about 8 hours.
