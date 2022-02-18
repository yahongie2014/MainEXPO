import {
  createNavigationContainerRef,
  StackActions,
  DrawerActions,
} from "@react-navigation/native";

export const navigationRef = createNavigationContainerRef();

export function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}
export function push(...args) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.push(...args));
  }
}

export function goBack() {
  return navigationRef.current?.goBack();
}

export function rest(name, params) {
  navigationRef.dispatch(StackActions.push(...args));
}

export function openDrawer() {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(DrawerActions.openDrawer());
  }
}

export function closeDrawer() {
  navigationRef.dispatch(DrawerActions.closeDrawer());
}
