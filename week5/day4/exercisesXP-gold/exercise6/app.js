import inquirer from "inquirer";

function isValidFullName(fullName) {
  const nameRegex = /^[A-Z][a-z]*\s[A-Z][a-z]*$/;

  if (!nameRegex.test(fullName)) {
    console.log(
      "  Validation failed: Name must contain only letters and exactly one space, with the first letter of each word capitalized."
    );
    return false;
  }
  const names = fullName.split(" ");
  if (names.length !== 2) {
    console.log(
      "  Validation failed: Name must contain exactly one space ."
    );
    return false;
  }

  for (const namePart of names) {
    if (namePart.length === 0) {
      console.log("  Validation failed: Name parts cannot be empty.");
      return false;
    }
    if (!/^[A-Z][a-z]*$/.test(namePart)) {
      console.log(
        `  Validation failed: '${namePart}' does not start with an uppercase letter or contains non-lowercase characters after the first.`
      );
      return false;
    }
  }

  return true;
}

async function askForAndValidateFullName() {
  let isValid = false;
  let fullName = "";

  while (!isValid) {
    const answers = await inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: 'Please enter your full name (e.g., "John Doe"): ',
      },
    ]);

    fullName = answers.name.trim();

    console.log(`\nAttempting to validate: "${fullName}"`);
    if (isValidFullName(fullName)) {
      isValid = true;
      console.log(`Success! Valid name entered: "${fullName}"`);
    } else {
      console.log("Invalid name. Please try again.");
    }
  }

  return fullName;
}

async function main() {
  console.log("Hello! Let's validate your full name.");
  const userName = await askForAndValidateFullName();
  console.log(`\nThank you, ${userName}!`);
}

main();
