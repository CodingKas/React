// Define the UserRole union type
export type UserRole = "admin" | "editor" | "viewer";

// Define the User interface
export interface User {
  id: number;
  name: string;
  email: string;
  role: UserRole;
}

// Utility types
// PartialUser: Makes all User properties optional
export type PartialUser = Partial<User>;

// RequiredUser: Ensures all User properties are required
export type RequiredUser = Required<User>;

// ReadonlyUser: Makes all User properties read-only
export type ReadonlyUser = Readonly<User>;
