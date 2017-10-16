import * as util from 'util';

export function error(s: string, ...rest: any[]) {
  const args = rest.map((a: any) => inspect(a));
  args.unshift(`[error] ${s}`);
  console.log.apply(null, args);
}

export function info(s: string, ...rest: any[]) {
  const args = rest.map((a: any) => inspect(a));
  args.unshift(`[info] ${s}`);
  console.log.apply(null, args);
}

export function debug(s: string, ...rest: any[]) {
  if (process.env.DEBUG === 'true') {
    const args = rest.map((a: any) => inspect(a));
    args.unshift(`[debug] ${s}`);
    console.log.apply(null, args);
  }
}

export function inspect(a: (string | any)) {
  return (typeof a === 'string') ? a : util.inspect(a, {depth: 99});
}
