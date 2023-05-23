// This function prioritizes the use of 3-person tents. It divides the number of people
// by 3 to allocate the maximum number of 3-person tents, and then assigns the remaining
// people to 2-person tents. If numPeople is 1, one 2-person tent will be assigned.
// Hope this works

export default function CalculateTents(numPeople) {
  let num3PersonTents = Math.floor(numPeople / 3); // Number of 3-person tents
  let num2PersonTents = 0; // Number of 2-person tents

  // If numPeople is 1, assign 1 to num2PersonTents and return the result
  if (numPeople === 1) {
    return { num3PersonTents: 0, num2PersonTents: 1 };
  }

  // Loop while there are still possible allocations of 3-person tents
  while (num3PersonTents >= 0) {
    const remainingPeople = numPeople - num3PersonTents * 3; // Calculate remaining people after allocating 3-person tents

    // Check if the remaining people can be evenly divided into 2-person tents
    if (remainingPeople % 2 === 0) {
      num2PersonTents = remainingPeople / 2; // Assign remaining people to 2-person tents
      return { num3PersonTents, num2PersonTents };
    }

    num3PersonTents--; // Decrement num3PersonTents and try again with fewer 3-person tents
  }

  // If no valid allocation is found, return 0 for both num3PersonTents and num2PersonTents
  return { num3PersonTents: 0, num2PersonTents: 0 };
}
