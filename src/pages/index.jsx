import Anchor from "@/components/Anchor";

export default function Home() {
  function calculateTents(numPeople) {
    const num3PersonTents = Math.floor(numPeople / 3);
    const remainingPeople = numPeople % 3;

    if (remainingPeople === 0) {
      return { num3PersonTents, num2PersonTents: 0 };
    } else if (remainingPeople === 1 && num3PersonTents > 0) {
      return { num3PersonTents: num3PersonTents - 1, num2PersonTents: 2 };
    } else if (remainingPeople === 2) {
      return { num3PersonTents, num2PersonTents: 1 };
    }

    console.log(
      "There is no valid arrangement to accommodate all people without empty spaces."
    );
    console.log(
      "You may need to adjust the number of people or consider an alternative solution."
    );
    return null;
  }

  // Example usage
  const totalPeople = 7;
  const tents = calculateTents(totalPeople);
  if (tents) {
    const { num3PersonTents, num2PersonTents } = tents;
    console.log(`Number of 3-person tents: ${num3PersonTents}`);
    console.log(`Number of 2-person tents: ${num2PersonTents}`);
  }

  return (
    <>
      <h1 className="text-4xl font-bold text-center text-black-500 py-4">
        FooFest Extravaganza
      </h1>
      <Anchor href="/campingsite/">CAMPING SITE</Anchor>
      <Anchor href="/schedule/">SCHEDULE</Anchor>
    </>
  );
}
