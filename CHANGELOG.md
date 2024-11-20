# CHANGELOG

> Package changelog.

<section class="release" id="unreleased">

## Unreleased (2024-11-20)

<section class="packages">

### Packages

<section class="package" id="wasm-base-unreleased">

#### [@stdlib/wasm/base](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/wasm/base)

<details>

<section class="features">

##### Features

-   [`8b1548f`](https://github.com/stdlib-js/stdlib/commit/8b1548fb45c1ff131f5edac20cb984344a2d28ec) - update namespace TypeScript declarations [(#3190)](https://github.com/stdlib-js/stdlib/pull/3190)
-   [`db91373`](https://github.com/stdlib-js/stdlib/commit/db91373ac57c11965c341e4d802aed5ee3e470bd) - add `strided2object` to namespace
-   [`0d49560`](https://github.com/stdlib-js/stdlib/commit/0d49560dc69e5baa1e154ef5246ced6689d8fbff) - add `wasm/base` namespace

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`8b1548f`](https://github.com/stdlib-js/stdlib/commit/8b1548fb45c1ff131f5edac20cb984344a2d28ec): update namespace declarations

    -   To migrate, users should consult the corresponding packages containing the respective implementations to determine what is breaking. The primary breakages come from the `blas/*` namespace, where we recently refactored how top-level BLAS APIs operate on input arguments.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="wasm-base-array2dtype-unreleased">

#### [@stdlib/wasm/base/array2dtype](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/wasm/base/array2dtype)

<details>

<section class="features">

##### Features

-   [`e799140`](https://github.com/stdlib-js/stdlib/commit/e799140f66eee9b9bd4508c7215f49d2e58c0e78) - add `wasm/base/array2dtype`

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`6065197`](https://github.com/stdlib-js/stdlib/commit/6065197c84ea621bd2c0fe0028d6349275e8d044) - update package name

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="wasm-base-arrays2ptrs-unreleased">

#### [@stdlib/wasm/base/arrays2ptrs](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/wasm/base/arrays2ptrs)

<details>

<section class="features">

##### Features

-   [`be28c74`](https://github.com/stdlib-js/stdlib/commit/be28c74db2fee7929fbaa01487d615f860be645b) - add `wasm/base/arrays2ptrs`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="wasm-base-dtype2wasm-unreleased">

#### [@stdlib/wasm/base/dtype2wasm](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/wasm/base/dtype2wasm)

<details>

<section class="features">

##### Features

-   [`f57bee2`](https://github.com/stdlib-js/stdlib/commit/f57bee2b4155d60bd0f3a8f0ca5103f30d34d842) - add `wasm/base/dtype2wasm`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="wasm-base-strided2object-unreleased">

#### [@stdlib/wasm/base/strided2object](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/wasm/base/strided2object)

<details>

<section class="features">

##### Features

-   [`ca7b037`](https://github.com/stdlib-js/stdlib/commit/ca7b0375bac4ab292d93081e94e8e51a637ba64d) - add `wasm/base/strided2object`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

</section>

<!-- /.packages -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`8b1548f`](https://github.com/stdlib-js/stdlib/commit/8b1548fb45c1ff131f5edac20cb984344a2d28ec): update namespace declarations

    -   To migrate, users should consult the corresponding packages containing the respective implementations to determine what is breaking. The primary breakages come from the `blas/*` namespace, where we recently refactored how top-level BLAS APIs operate on input arguments.

</section>

<!-- /.breaking-changes -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

<section class="commits">

### Commits

<details>

-   [`8b1548f`](https://github.com/stdlib-js/stdlib/commit/8b1548fb45c1ff131f5edac20cb984344a2d28ec) - **feat:** update namespace TypeScript declarations [(#3190)](https://github.com/stdlib-js/stdlib/pull/3190) _(by stdlib-bot, Philipp Burckhardt)_
-   [`2c4e5d8`](https://github.com/stdlib-js/stdlib/commit/2c4e5d824e0c5dc8fd536bf79ff565cee100ce46) - **build:** disable additional lint rule in TS tests _(by Philipp Burckhardt)_
-   [`abf0407`](https://github.com/stdlib-js/stdlib/commit/abf040787f6598438b0100a729a8331b7f80f62f) - **chore:** resolve lint errors in TS files _(by Philipp Burckhardt)_
-   [`ff9fa81`](https://github.com/stdlib-js/stdlib/commit/ff9fa81f917d539f1a11fba5580e1744991a8a11) - **docs:** fix TSDoc lint errors _(by Philipp Burckhardt)_
-   [`9f848ed`](https://github.com/stdlib-js/stdlib/commit/9f848eddcab5807198387a9a9b8ca0c122e2cfb7) - **docs:** rename parameter _(by Athan Reines)_
-   [`799e2b9`](https://github.com/stdlib-js/stdlib/commit/799e2b9de0b7c054c2c9a96a5040aa5ab30c2c21) - **style:** remove empty line _(by Athan Reines)_
-   [`7d73b4c`](https://github.com/stdlib-js/stdlib/commit/7d73b4cd92b702acdd4aeaf015a8e4a687133f54) - **test:** fix index _(by Athan Reines)_
-   [`bc12e55`](https://github.com/stdlib-js/stdlib/commit/bc12e55ff4733e9816a2d50e3106ae75de0075f2) - **docs:** fix copy and extraneous newline _(by Athan Reines)_
-   [`db91373`](https://github.com/stdlib-js/stdlib/commit/db91373ac57c11965c341e4d802aed5ee3e470bd) - **feat:** add `strided2object` to namespace _(by Athan Reines)_
-   [`ca7b037`](https://github.com/stdlib-js/stdlib/commit/ca7b0375bac4ab292d93081e94e8e51a637ba64d) - **feat:** add `wasm/base/strided2object` _(by Athan Reines)_
-   [`33c18e1`](https://github.com/stdlib-js/stdlib/commit/33c18e1e7db1d1031acb9d3a5d085238d7f8c4ca) - **docs:** fix examples _(by Athan Reines)_
-   [`0d49560`](https://github.com/stdlib-js/stdlib/commit/0d49560dc69e5baa1e154ef5246ced6689d8fbff) - **feat:** add `wasm/base` namespace _(by Athan Reines)_
-   [`be28c74`](https://github.com/stdlib-js/stdlib/commit/be28c74db2fee7929fbaa01487d615f860be645b) - **feat:** add `wasm/base/arrays2ptrs` _(by Athan Reines)_
-   [`6065197`](https://github.com/stdlib-js/stdlib/commit/6065197c84ea621bd2c0fe0028d6349275e8d044) - **fix:** update package name _(by Athan Reines)_
-   [`e799140`](https://github.com/stdlib-js/stdlib/commit/e799140f66eee9b9bd4508c7215f49d2e58c0e78) - **feat:** add `wasm/base/array2dtype` _(by Athan Reines)_
-   [`f57bee2`](https://github.com/stdlib-js/stdlib/commit/f57bee2b4155d60bd0f3a8f0ca5103f30d34d842) - **feat:** add `wasm/base/dtype2wasm` _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

</section>

<!-- /.release -->

