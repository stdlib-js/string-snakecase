<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# snakecase

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Convert a string to snake case.

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
snakecase = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/string-snakecase@v0.2.1-umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var snakecase = require( 'path/to/vendor/umd/string-snakecase/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/string-snakecase@v0.2.1-umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.snakecase;
})();
</script>
```

#### snakecase( str )

Converts a string to snake case.

```javascript
var str = snakecase( 'Foo Bar' );
// returns 'foo_bar'

str = snakecase( 'I am a tiny little house' );
// returns 'i_am_a_tiny_little_house'

str = snakecase( 'Hello World!' );
// returns 'hello_world'
```

</section>

<!-- /.usage -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/string-snakecase@v0.2.1-umd/browser.js"></script>
<script type="text/javascript">
(function () {

var str = 'foo bar baz';
var out = snakecase( str );
// returns 'foo_bar_baz'

str = 'foo_baz';
out = snakecase( str );
// returns 'foo_baz'

str = 'foo_bar_baz!';
out = snakecase( str );
// returns 'foo_bar_baz'

str = 'beep    boop!';
out = snakecase( str );
// returns 'beep_boop'

str = 'foo-baz';
out = snakecase( str );
// returns 'foo_baz'

str = 'Welcome! 😀';
out = snakecase( str );
// returns 'welcome_😀'

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/string-camelcase`][@stdlib/string/camelcase]</span><span class="delimiter">: </span><span class="description">convert a string to camel case.</span>
-   <span class="package-name">[`@stdlib/string-constantcase`][@stdlib/string/constantcase]</span><span class="delimiter">: </span><span class="description">convert a string to constant case.</span>
-   <span class="package-name">[`@stdlib/string-kebabcase`][@stdlib/string/kebabcase]</span><span class="delimiter">: </span><span class="description">convert a string to kebab case.</span>
-   <span class="package-name">[`@stdlib/string-pascalcase`][@stdlib/string/pascalcase]</span><span class="delimiter">: </span><span class="description">convert a string to Pascal case.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/string-snakecase.svg
[npm-url]: https://npmjs.org/package/@stdlib/string-snakecase

[test-image]: https://github.com/stdlib-js/string-snakecase/actions/workflows/test.yml/badge.svg?branch=v0.2.1
[test-url]: https://github.com/stdlib-js/string-snakecase/actions/workflows/test.yml?query=branch:v0.2.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/string-snakecase/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/string-snakecase?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/string-snakecase.svg
[dependencies-url]: https://david-dm.org/stdlib-js/string-snakecase/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[cli-section]: https://github.com/stdlib-js/string-snakecase#cli
[cli-url]: https://github.com/stdlib-js/string-snakecase/tree/cli
[@stdlib/string-snakecase]: https://github.com/stdlib-js/string-snakecase/tree/main

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/string-snakecase/tree/deno
[deno-readme]: https://github.com/stdlib-js/string-snakecase/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/string-snakecase/tree/umd
[umd-readme]: https://github.com/stdlib-js/string-snakecase/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/string-snakecase/tree/esm
[esm-readme]: https://github.com/stdlib-js/string-snakecase/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/string-snakecase/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/string-snakecase/main/LICENSE

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

<!-- <related-links> -->

[@stdlib/string/camelcase]: https://github.com/stdlib-js/string-camelcase/tree/umd

[@stdlib/string/constantcase]: https://github.com/stdlib-js/string-constantcase/tree/umd

[@stdlib/string/kebabcase]: https://github.com/stdlib-js/string-kebabcase/tree/umd

[@stdlib/string/pascalcase]: https://github.com/stdlib-js/string-pascalcase/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
