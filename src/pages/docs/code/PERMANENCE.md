## Permanence
There are different types of `permanence` that are recognized in this documentation with the `$permanenceType` notation.

### `$switch`
Like an on an off switch.  If an `actor` never changes the switch position, it might remain in that state `$permanently`.

### `$lasting`
An `actor` can have a `$lasting` impression.

### `$interval`
A specific amount of time passing.  Most `$single` `actions` also have `<interval>` `permanence`, because it is known how much time passed before the pervious `action` and the next `action`.

### `$repeating`
A repeated `$interval` that is `$semi-permanent`.

### `$wave`
A back and forth variation that is usually just `$lasting>` and rarely `$semi-permanent`.

### `$single`
`Permanence` that lasts within the time period of a single line of communication.  This is the default `permanence` unless otherwise specified.

### `$block`
`Permanence` that lasts within the time period of a groups single line communication.  This might be denoted with a `[]` to mark the block.

### `$iteration`
If a conversation feels completed, and a new conversation is started... that could be considered an `$iteration`.

### `$permanent`
`Permanent` is rare as everything changes.