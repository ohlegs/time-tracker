/* eslint-disable no-shadow */
import SQLite, { SQLiteDatabase } from 'react-native-sqlite-storage';
import { Logger } from '../utils/logger';

export const ID = 'id';
export const MAIN_INPUT = 'main_input';
export const DESCRIPTION = 'description';
export const PRIORITY = 'priority';
export const COLOR = 'color';
// ################################//
export const table_name = 'task_list';

class DBController {
  db: Promise<SQLiteDatabase> = SQLite.openDatabase(
    'db.db',
    (e) => {
      Logger.log(e);
    },
    (e) => {
      Logger.log(e);
    },
  );

  public async checkDB(setData) {
    (await this.db).transaction((txn) => {
      txn.executeSql(
        `SELECT * FROM sqlite_master WHERE type='table' AND name='${table_name}';`,
        [],
        (tx, res) => {
          if (res.rows.length === 0) {
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS task_list(id INTEGER PRIMARY KEY AUTOINCREMENT, main_input TEXT, description TEXT, priority INTEGER, color TEXT)',
              [],
            );
          }
          this.getDB(setData);
        },
      );
    });
  }

  public async insertDB(
    columns: ['main_input', 'description', 'priority', 'color'],
    data: [string, string, number, string],
  ): Promise<void> {
    (await this.db).transaction((tx) => {
      tx.executeSql(
        `INSERT INTO ${table_name} (${columns}) VALUES (${[...Array(columns.length).keys()]
          .fill('?')
          .join()})`,
        data,
        (tx, results) => {
          Logger.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Logger.log('Data Inserted Successfully....');
          } else {
            Logger.log('Failed....');
          }
        },
      );
    });
  }

  public getDB(setData) {
    this.db.transaction((tx) => {
      tx.executeSql(`SELECT * FROM ${table_name}`, [], (tx, results) => {
        const temp = [];
        for (let i = 0; i < results.rows.length; ++i) {
          temp.push(results.rows.item(i));
        }
        setData(temp);
      });
    });
  }

  // public async getByIdDB(setMainInput, setDescription, setPriority, id: number) {
  //   try {
  //     const temp = [];

  //     (await this.db).transaction((tx) => {
  //       tx.executeSql(`SELECT * FROM task_list WHERE id=${id + 1}`, [], (tx, results) => {
  //         for (let i = 0; i < results.rows.length; ++i) {
  //           temp.push(results.rows.item(i));
  //         }
  //         if (temp[0].main_input && temp[0].description && temp[0].priority) {
  //           setMainInput(temp[0].main_input);
  //           setDescription(temp[0].description);
  //           setPriority(temp[0].priority);
  //         }
  //       });
  //       return temp;
  //     });
  //   } catch (e) {}
  // }

  public updateByIdDB(
    columns: [string],
    data: [string],
    id: number,
  ) {
    this.db.transaction((tx) => {
      tx.executeSql(`UPDATE task_list SET (${columns})=(${data}) WHERE id=${id}`, [], (tx, results) => {
        const temp = [];
        for (let i = 0; i < results.rows.length; ++i) {
          temp.push(results.rows.item(i));
        }
      });
    }, (e:string) => {
      Logger.log(e);
    });
  }
}
export default new DBController();
