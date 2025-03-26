import { describe, it, expect } from "vitest";
import { getUserSummary } from "./getUserSummary";
import { User } from "./types";

describe("getUserSummary", () => {
  it("should return a summary string with the user name and role", () => {
    const user: User = {
      id: 1,
      name: "Kaz",
      email: "Kaz@example.com",
      role: "developer",
    };

    const result = getUserSummary(user);

    expect(result).toBe("Alice is an admin");
  });

  it("should work for other roles", () => {
    const user: User = {
      id: 2,
      name: "Bob",
      email: "bob@example.com",
      role: "editor",
    };

    const result = getUserSummary(user);

    expect(result).toBe("Bob is an editor");
  });
});
