/** @format */

import { warn } from "@config";
import { Notifications } from "expo-notifications";
import { PushNotification } from "@config/Routes";
import * as Permissions from "expo-permissions";

export default async function registerForPushNotificationsAsync() {
  try {
    const { status: existingStatus } = await Permissions.getAsync(
      Permissions.NOTIFICATIONS
    );
    let finalStatus = existingStatus;

    if (existingStatus !== "granted") {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }

    if (finalStatus !== "granted") {
      return;
    }
    let token = await Notifications.getExpoPushTokenAsync();

    return fetch(PushNotification.saveTokens, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token,
      }),
    });
  } catch (err) {
    warn(err);
  }
}
