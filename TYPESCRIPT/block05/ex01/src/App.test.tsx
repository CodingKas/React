import { describe, it, expect, vi } from 'vitest';
import { processInput, handleInput, InputField } from './formHandler';

describe('processInput', () => {
  it('logs "No input provided" for null', () => {
    const consoleSpy = vi.spyOn(console, 'log');
    processInput(null);
    expect(consoleSpy).toHaveBeenCalledWith("No input provided");
    consoleSpy.mockRestore();
  });

  it('logs the uppercase string for string input', () => {
    const consoleSpy = vi.spyOn(console, 'log');
    processInput("hello");
    expect(consoleSpy).toHaveBeenCalledWith("HELLO");
    consoleSpy.mockRestore();
  });

  it('logs the number plus 10 for number input', () => {
    const consoleSpy = vi.spyOn(console, 'log');
    processInput(5);
    expect(consoleSpy).toHaveBeenCalledWith(15);
    consoleSpy.mockRestore();
  });
});

describe('handleInput', () => {
  it('logs "Text input: <value>" for text input', () => {
    const consoleSpy = vi.spyOn(console, 'log');
    const textField: InputField = { type: "text", value: "Hello" };
    handleInput(textField);
    expect(consoleSpy).toHaveBeenCalledWith("Text input: Hello");
    consoleSpy.mockRestore();
  });

  it('logs "Number input: <value>" for number input', () => {
    const consoleSpy = vi.spyOn(console, 'log');
    const numberField: InputField = { type: "number", value: 42 };
    handleInput(numberField);
    expect(consoleSpy).toHaveBeenCalledWith("Number input: 42");
    consoleSpy.mockRestore();
  });
});
