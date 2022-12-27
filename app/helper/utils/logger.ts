/* eslint-disable no-console */

export class Logger {
  static group(title: string, ...logArgs: any[]) {
    console.groupCollapsed(`%c ${title}`, ...logArgs);
  }

  static log(title: string, ...logArgs: any[]) {
    console.log(title, ...logArgs);
  }

  static groupEnd() {
    console.groupEnd();
  }
}

