import { produce } from 'immer';

export const immer =
  (config: any) =>
    (set: (arg0: (state: any) => any) => any, get: any, api: any) => {
      return config(
        (fn: any) => set(produce(fn) as (state: any) => any),
        get,
        api
      );
    };
