# PNPM deploy with `node-linker` set to `hoisted`

This is a minimal reproduction of an issue when deploying monorepo workspaces with `pnpm deploy` and `node-linker` option set to `hoisted`.

## Steps to reproduce
- Clone this repo
- Run `pnpm install`
- Run `pnpm --filter test deploy --node-linker hoisted build`

## Expected behavior
`packages/test/build/node_modules` should contain necessary dependencies for `test/src/index.js` to run.

## Actual behavior
- `build/node_modules` contains a single `.pnpm` directory with a `.lock.yaml` file inside.

## Test environment
- Linux 6.3.2
- pnpm 8.5.1
- NodeJS 20.2.0