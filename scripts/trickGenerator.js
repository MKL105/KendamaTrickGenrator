/* Copyright (C) [2024] [Markus Luethje <mklgamesapps@gmail.com>]

  This program is free software; you can redistribute it and/or modify it under
  the terms of the GNU General Public License as published by the Free Software
  Foundation; either version 3 of the License, or (at your option) any later
  version.

  This program is distributed in the hope that it will be useful, but WITHOUT
  ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
  FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

  You should have received a copy of the GNU General Public License along with
  this program; if not, see <https://www.gnu.org/licenses>.
 */

/**
 * Generates a random trick, based on the transitions in {@link data.js}.
 *
 * @return {[string]} An array with the final trick.
 */
function generateTrick() {
  const finalTrick = [];
  const minTrickLength = 5;
  const startPos = starts[Math.floor(Math.random() * starts.length)];
  finalTrick.push(startPos);
  let currentState = startPos;
  console.log('Starting position: ' + currentState);

  while ((finalTrick.length < minTrickLength) ||
  ((finalTrick.length >= minTrickLength) && (!ends.includes(currentState)))) {
    const possibilities = transitions.filter((transition) =>
      transition.from === currentState);
    if (possibilities.length === 0) {
      console.error('No possibilities from this position.');
      break;
    }
    console.log('Possibilities from ' + currentState + ':');
    console.log(possibilities);
    let possibilitiesCount = 0;
    for (possibility of possibilities) {
      possibility.via.length === 0 ? ++possibilitiesCount :
        possibilitiesCount += possibility.via.length;
    }
    console.log('Possibilities count: ' + possibilitiesCount);

    const nextTransitionIndex =
      Math.floor(Math.random() * possibilitiesCount) + 1;
    console.log('Transition index: ' + nextTransitionIndex);

    let currentCount = 0; // Index of the vias.
    for (let i = 0; i < possibilities.length; ++i) {
      const add = possibilities[i].via.length === 0 ?
        1 : possibilities[i].via.length;
      if (currentCount + add >= nextTransitionIndex) {
        if (possibilities[i].via.length === 0) {
          finalTrick.push(possibilities[i].to);
          if (possibilities[i].alias != null) {
            currentState = possibilities[i].alias;
          } else {
            currentState = possibilities[i].to;
          }
          break;
        } else {
          finalTrick.push(
              possibilities[i].via[(nextTransitionIndex - currentCount) - 1]);
          finalTrick.push(possibilities[i].to);
          if (possibilities[i].alias != null) {
            currentState = possibilities[i].alias;
          } else {
            currentState = possibilities[i].to;
          }
          break;
        }
      } else {
        currentCount += add;
      }
    }
    console.log(finalTrick);
  }
  console.log(finalTrick);
  return finalTrick;
}
