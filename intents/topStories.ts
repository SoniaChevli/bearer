import { FetchData, TapiKeyContext, TFetchDataCallback } from "@bearer/intents";
// Uncomment this line if you need to use Client
import Client from "./client";

export default class TopStoriesIntent {
  static intentName: string = "topStories";
  static intentType: any = FetchData;

  static action(
    context: TapiKeyContext,
    params: any,
    body: any,
    callback: TFetchDataCallback
  ) {
    // ... your code goes here
    // use the client defined in client.ts to fetch real object like that:
    Client(context.authAccess.apiKey)
      .get(`svc/topstories/v2/home.json?api-key=${context.authAccess.apiKey}`)
      .then(({ data }) => {
        console.log("DATA", data);
        callback({ data });
      })
      .catch(error => {
        console.log("ERROR", error);
        callback({ error: error.toString() });
      });
    //  callback({ data: [] });
  }
}
