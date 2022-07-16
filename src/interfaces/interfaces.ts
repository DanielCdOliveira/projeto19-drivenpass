import { User, Credential , Note, Card,Wifi} from "@prisma/client";
export type CreateUserData = Omit<User, "id" | "createdAt">
export type CreateCredentialData = Omit<Credential,"id">
export type CreateNoteData = Omit<Note,"id">
export type CreateCardData = Omit<Card,"id">
export type CreateWifiData = Omit<Wifi,"id">