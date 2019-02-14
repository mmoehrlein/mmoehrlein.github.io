# AHK

http://autohotkey.org/
## General
- use `` `n`` for a linebreak
- use `` `t`` for a tab

## auto insert snippet/ hotstrings
### Basic Syntax
The following will automatically expand "test" as soon a you typed it to "This is a test"
```autohotkey
:*o:test::This is a test.
```
### Usage Examples
- email addresses
```autohotkey
:*o:mmgm::max.mustermann@gmail.com
```

- letter/email signatures
```autohotkey
:*o:mfg::Mit freundlichen Grüßen`nMax Mustermann
```