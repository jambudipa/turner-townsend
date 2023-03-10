# Turner & Townsend Angular Coding Challenge

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.2.

## Introduction

Thanks for giving me the opportunity to complete this coding challenge. I really enjoyed
building it and got a bit carried away. I do hope you don't think it's totally
over-engineered, but I wanted to demonstrate a few different techniques, implementing 
standard practices that you find in scalable Angular application architectures.

## How this code could be improved

I am cognisant that, although there are lots of unit tests, there are no end-to-end tests.
I haven't done much e2e testing in the past so didn't want to spend loads of time
learning how to do it and detract from producing the best coding challenge I could. End-to-end testing
is something I really want to learn about &mdash; in particular writing BDD tests using
Cucumber which was used extensively in a previous placement I was at.

I didn't use much forms stuff in this app, and I am aware this is something you wanted to see. The only
place I could see this might be appropriate to implement was the filter field, so I 
wrote some template-drive forms stuff there. I was going to implement the `ControlValueAccessor` interface on
the filter, but in the end I thought that would make the interactions too complex and opted instead
to implement an `@Output()` to emit an event when the filter value changed.

There are a few areas in the unit tests where I ran into problems; notably 
`app/core/store/selectors/featured-playlists.selectors.spec.ts`. I could not work out how
to mock the routing selectors generated by the NgRx router store. I had a good read of the 
docs and had a good Google, but couldn't find a solution. I posted a note on
stackoverflow and am keeping an eye on it. Testing of selectors has vastly improved over
the course of Angular framework releases, and this problem with mocking the selectors produced
by `@ngrx/router-store` is a small piece of the puzzle still missing.

The structure of the state could do with a little reworking. You could argue that properties
such as `pageSize` and `filterText` should exist in a separate slice of the store dealing with UI, but 
you could argue that since they pertain to the Featured Playlists, they belong where they currently
exist on `FeaturedPlaylistsState`.

## Testing coverage
```
=============================== Coverage summary ===============================  
Statements   : 96.46% ( 109/113 )  
Branches     : 50% ( 2/4 )  
Functions    : 90% ( 36/40 )  
Lines        : 96.94% ( 95/98 )  
================================================================================
```
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
