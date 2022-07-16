import { User, Credential , Note} from "@prisma/client";
export type CreateUserData = Omit<User, "id" | "createdAt">
export type CreateCredentialData = Omit<Credential,"id">
export type CreateNoteData = Omit<Note,"id">