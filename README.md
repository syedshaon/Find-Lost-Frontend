# A Photo Tagging App, where you need to find given characters on given image.

# Requirements: https://www.theodinproject.com/lessons/nodejs-where-s-waldo-a-photo-tagging-app

## Specialities

- User can click on the character and there will be a pop-up window to choose the proper character.
- Once all 3 of the character is correctly selected another pop-up with "spent time" will show up.
- Once the user give his name on the pop-up window he can store the score by submittin it.

## Difficulties or Learnings

- Showing Pop-up window according to the position where user clicks.
- Calculate appropriate position of the character when user checks from different devices.
- Find Lost Animals and Find Lost Character, uses some condition so it asks to find different character every time.

## Shortcomings

- The site is intended for large screen only. <:
- The live site is hosted on free hosting of render.com. Because of that, the site may act slow.

## Tools used in Backend(https://github.com/syedshaon/Find-Lost-backend)

- Express
- mongoose
- cors
- dotenv

## Tools used in Front-End(https://github.com/syedshaon/Find-Lost-Frontend)

- react
- react-router
- tailwindcss

## APIs

- https://find-the-lost.onrender.com/scores, method: POST, to insert score
- https://find-the-lost.onrender.com/scores, method: GET, to retreive score
- Only accept requests from

## Live Sites

- https://find-lost.onrender.com/
