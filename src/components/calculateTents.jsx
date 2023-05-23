//this function prioritize the 3tent people. so it first divide the tickets with
//3tents and after the remaining with two
export default function CalculateTents(numPeople) {
  const num3PersonTents = Math.floor(numPeople / 3);
  const remainingPeople = numPeople % 3;
  if (remainingPeople === 0) {
    return { num3PersonTents, num2PersonTents: 0 };
  } else if (remainingPeople === 1 && num3PersonTents > 0) {
    return { num3PersonTents: num3PersonTents - 1, num2PersonTents: 2 };
  } else if (remainingPeople === 2) {
    const num2PersonTents = Math.min(5, numPeople - num3PersonTents * 3);
    return { num3PersonTents, num2PersonTents };
  }

  return { num3PersonTents: 0, num2PersonTents: 0 };
}
