export interface User {
  id: number;
  email: string;
  status: Status;
}

export enum Status {
  DISABLED,
  ENABLED,
}
