# AtomService

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
