import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteConfig = {
  url: import.meta.env.VITE_APPWRITE_URL as string,
  projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID as string,
};

console.log("Appwrite URL:", appwriteConfig.url);
console.log("Appwrite Project ID:", appwriteConfig.projectId);

if (!appwriteConfig.url || !appwriteConfig.projectId) {
  console.error("Appwrite configuration is incomplete:", appwriteConfig);
  throw new Error("Missing Appwrite configuration. Please check your environment variables.");
}

const client = new Client();

try {
  client
    .setEndpoint(appwriteConfig.url)
    .setProject(appwriteConfig.projectId);
  if (import.meta.env.MODE !== 'production') {
    console.log("Appwrite client configured successfully with URL:", appwriteConfig.url, "and Project ID:", appwriteConfig.projectId);
  }
} catch (error) {
  console.error("Failed to set Appwrite client configuration:", error);
  throw error;
}

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
export { client };
