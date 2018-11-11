# InfiniteScroll and Drag&Drop

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Instalation

First of all install Angular CDK packages and import ScrollingModulec and DragDropModule in the application module.
<pre>npm install @angular/cdk@latest</pre>
<pre>import { ScrollingModule } from '@angular/cdk/scrolling';</pre>
<pre>import { DragDropModule } from '@angular/cdk/drag-drop';</pre>
Note! Drag&Drop doesn't work inside Infinite scroll. You can track the opened <a href="https://github.com/angular/material2/issues/10122" target="_blank">issue</a> on gitHub
