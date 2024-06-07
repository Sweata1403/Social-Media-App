import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteConfig = {
  url: import.meta.env.VITE_APPWRITE_URL,
  projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
  storageId: import.meta.env.VITE_APPWRITE_STORAGE_ID,
  userCollectionId: import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID,
  postCollectionId: import.meta.env.VITE_APPWRITE_POST_COLLECTION_ID,
  savesCollectionId: import.meta.env.VITE_APPWRITE_SAVES_COLLECTION_ID,
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
