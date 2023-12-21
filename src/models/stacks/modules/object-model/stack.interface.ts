import { StackMethodsArray } from '../array-model/stack.interface';

export interface StackMethodsObject extends StackMethodsArray {
  toString(): string;
}

export interface StackItems {
  [key: number]: number;
}

export interface StackItemsString {
  [key: number]: string;
}
