/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

import snakecase = require( './index' );


// TESTS //

// The function returns a string...
{
	snakecase( 'Hello World!' ); // $ExpectType string
}

// The function does not compile if provided a value other than a string...
{
	snakecase( true ); // $ExpectError
	snakecase( false ); // $ExpectError
	snakecase( null ); // $ExpectError
	snakecase( undefined ); // $ExpectError
	snakecase( 5 ); // $ExpectError
	snakecase( [] ); // $ExpectError
	snakecase( {} ); // $ExpectError
	snakecase( ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	snakecase(); // $ExpectError
}
