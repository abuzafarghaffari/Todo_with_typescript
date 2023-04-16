export type TodoType = {
  id: number;
  text: string;
};
//Discriminated Unions
export type ActionType =
  | { type: "add"; payload: TodoType }
  | { type: "delete"; payload: number }
  | { type: "edit"; payload: TodoType };
