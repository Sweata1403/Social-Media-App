import { ID } from "appwrite";
import { account } from "./config";
import { INewUser } from "@/types";

export async function createUserAccount(user: INewUser) {
  try {
    const newAccount = await account.create(
      ID.unique(),
      user.email,
      user.password,
      user.name
    );
    console.log("New account created successfully:", newAccount);
    return newAccount;
  } catch (error) {
    console.error("Error creating user account:", error);
    throw new Error("Failed to create user account. Please try again.");
  }
}
