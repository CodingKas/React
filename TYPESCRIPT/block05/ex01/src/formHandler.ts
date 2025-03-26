export function processInput(input: string | number | null): string {
  if (input === null) {
    console.log("No input provided");
    return "No input provided";
  }

  if (typeof input === "string") {
    const result = input.toUpperCase();
    console.log(result);
    return result;
  }

  if (typeof input === "number") {
    const result = input + 10;
    console.log(result);
    return result.toString();
  }

  return "";
}

export type InputField =
  | { type: "text"; value: string }
  | { type: "number"; value: number };

export function handleInput(field: InputField): string {
  if (field.type === "text") {
    console.log("Text input:", field.value);
    return `Submitted: ${field.value}`;
  }

  if (field.type === "number") {
    console.log("Number input:", field.value + 10);
    return `Submitted: ${field.value + 10}`;
  }

  return "";
}
