import * as util from 'util';


  export function error(s: string, ...rest: Array<any>) {
    let args = rest.map((a: any) => { return inspect(a) });
    // let args = Array.from(arguments, (a: any) => { return inspect(a) });
    console.error.apply(null, args);
  }

  export function info(s: string, ...rest: Array<any>) {
    let args = rest.map((a: any) => { return inspect(a) });
    console.info.apply(null, args);
  }

  export function debug(s: string, ...rest: Array<any>) {
    if (process.env.DEBUG == 'true') {      
      let args = rest.map((a: any) => { return inspect(a) });
      console.log.apply(null, args);
    }
  }

  export function inspect(a: (string | any)) {
    return (typeof a == 'string') ? a : util.inspect(a, {depth: 99});
  }
