# AtomService
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://travis-ci.org/kobanyan/AtomService.svg?branch=master)](https://travis-ci.org/kobanyan/AtomService)
[![Coverage Status](https://coveralls.io/repos/github/kobanyan/AtomService/badge.svg?branch=master)](https://coveralls.io/github/kobanyan/AtomService?branch=master)
[![codebeat badge](https://codebeat.co/badges/8b45e2ed-559a-46e0-ba37-ef4bec99dd36)](https://codebeat.co/projects/github-com-kobanyan-atomservice-master)



A Google Apps Script library to marshal the Atom Feed object to an Atom xml string.

## API ID

`MuOceWm5hEHRyN-rW66jK0WxlxRXaDxkn`

## Methods

### marshal

`AtomService#marshal(feedObject: object): string`

Marshal the Atom Feed object to an Atom xml string.

### isMarshalable

`AtomService#isMarshalable(feedObject: object): void`

Check if the argument is possible to marshal to an Atom xml.
If validation is failed then throw an error.

## Atom Feed Object Shape

See [AtomService.d.ts](./AtomService.d.ts).

## License

MIT
