import { User } from './types';

// A function that returns a summary of a user's name and role
export function getUserSummary<T extends User>(user: T): string {
  return `${user.name} is an ${user.role}`;
}
