# AHK

http://autohotkey.org/
## General
- use `` `n`` for a linebreak
- use `` `t`` for a tab

## binding shortcuts
### Basic Syntax
```autohotkey
<keycombination>::
<do something>
Return
```
### Usage Example
remapping keyboard for programming using alt and "right hand keys"
```autohotkey
!j::
send, (
Return

!k::
send , )
Return

!l::
send, {{}
Return

!ö::
send, {}}
Return

!u::
send, {[}
Return

!i::
send, {]}
Return

!o::
send, "
Return

!n::
send, $
Return

!m::
send, /
Return

+!m::
send, \
Return

!.::
send, ->
Return

+!.::
send, =>
Return

!,::
send, {End};
Return

!#::
send, {Enter 10}
Return
```
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

## userinput
AHK allows you to easily get userinput with popup windows
### Basic Syntax
```autohotkey
InputBox, OutputVar[, Title, Prompt, HIDE, Width, Height, X, Y, Font, Timeout, Default]
```

### Usage Example
Generate Email skeleton copy it to clipboard and paste it
```autohotkey
forderung(){
InputBox, name, Name, name of the recipient, , , 130, , , , , Sir or Madam
InputBox, goodbye, Goodbyes, What to use for goodbyes, , , 130, , , , , Sincerely

clipboard = 
(
Dear %name%,

<your text comes here>

%goodbye%
Max Mustermann
)
send, ^v
}
```
> function can be called with shortcut
