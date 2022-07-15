import { User, Credential } from "@prisma/client";
export type CreateUserData = Omit<User, "id" | "createdAt">
export type CreateCredentialData = Omit<Credential,"id">