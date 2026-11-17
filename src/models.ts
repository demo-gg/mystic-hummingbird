export interface User {
  id: number;
  name: string;
  email: string;
  createdAt?: Date;
}

export interface CreateUserInput {
  name: string;
  email: string;
}

export interface UpdateUserInput {
  name?: string;
  email?: string;
}

export interface QueryOptions {
  limit?: number;
  offset?: number;
  orderBy?: "name" | "email" | "createdAt";
  ascending?: boolean;
}
