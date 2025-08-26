import {
  Client,
  Account,
  ID,
  Databases,
  OAuthProvider,
  Avatars,
  Query,
  Storage,
} from "react-native-appwrite";
import * as Linking from "expo-linking";
import { openAuthSessionAsync } from "expo-web-browser";

export const config = {
    plateform: 'com.jsm.restate',
    endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
    projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID
}

export const client = new Client();

client
    .setEndpoint(config.endpoint!)
    .setProject(config.projectId!)
    .setPlatform(config.plateform!)

export const avatar = new Avatars(client);
export const account  = new Account(client);

export async function login() {
    try {
        // redirect link
        const redirectUrl = Linking.createURL("/");

        // requsting oAuth token
        const response = await account.createOAuth2Token(
            OAuthProvider.Google,
            redirectUrl
        );

        // failed to login
        if(!response) throw new Error("Failed to login")

        // open the web browser to login
        const browserResult = await openAuthSessionAsync(
            response.toString(),
            redirectUrl
        )

        // result to seccuss
        if(browserResult.type !== "success") throw new Error("failed to login")

        const url = new URL(browserResult.url);

        const secret = url.searchParams.get('secret')?.toString();
        const userId = url.searchParams.get('userId')?.toString();

        if(!secret || !userId) throw new Error("Failed to login")

        const session = await account.createSession(userId, secret)

        if(!session) throw new Error(" failed to create new session");

        return true;
    } catch (error) {
        console.error(error);
        return false
    }
}

export async function logout() {
  try {
    const result = await account.deleteSession("current");
    return result;
  } catch (error) {
    console.error(error);
    return false;
  }
}


export async function getCurrentUser() {
  try {
    const result = await account.get();
    if (result.$id) {
      const userAvatar = avatar.getInitials(result.name);

      return {
        ...result,
        avatar: userAvatar.toString(),
      };
    }

    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
}