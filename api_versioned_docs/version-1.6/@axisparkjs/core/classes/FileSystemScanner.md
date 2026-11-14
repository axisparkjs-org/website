# Class: FileSystemScanner

A scanner implementation that scans the file system for JavaScript and TypeScript files. The `FileSystemScanner` class implements the `Scanner` interface and provides functionality to scan the file system starting from a specified root directory. It uses the `fast-glob` library to perform file matching based on specified patterns, allowing for efficient scanning of files while ignoring certain directories and file types.

The `FileSystemScanner` class has a constructor that accepts four optional parameters: `root`, which specifies the root directory to start scanning from (defaulting to the current working directory), `importer`, which is a function used to import the discovered files (defaulting to dynamic import), `options`, which configures the `include` and `exclude` glob patterns, and `logger`, which logs the loaded files at `debug` and `trace` levels. The `scan` method initiates the scanning process, retrieves the matching files, and imports them using the provided importer function.

## Implements

- [`Scanner`](../interfaces/Scanner.md)

## Constructors

### Constructor

> **new FileSystemScanner**(`root?`, `importer?`, `options?`, `logger?`): `FileSystemScanner`

#### Parameters

##### root?

`string` = `...`

##### importer?

(`file`) => `Promise`\<`unknown`\>

##### options?

[`ScannerOptions`](../interfaces/ScannerOptions.md) = `{}`

##### logger?

`Logger`

#### Returns

`FileSystemScanner`

## Methods

### scan()

> **scan**(): `Promise`\<`void`\>

Scans the file system for the files that match the `include` patterns and none of the exclusions, starting from the specified root directory, and imports them.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Scanner`](../interfaces/Scanner.md).[`scan`](../interfaces/Scanner.md#scan)
