/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

// TypeScript Version: 4.1

/* eslint-disable max-lines */

import array2dtype = require( '@stdlib/wasm-base-array2dtype' );
import arrays2ptrs = require( '@stdlib/wasm-base-arrays2ptrs' );
import dtype2wasm = require( '@stdlib/wasm-base-dtype2wasm' );
import strided2object = require( '@stdlib/wasm-base-strided2object' );

/**
* Interface describing the `base` namespace.
*/
interface Namespace {
	/**
	* Returns the WebAssembly data type for a provided array.
	*
	* ## Notes
	*
	* -   If provided an argument having an unknown or unsupported type, the function assumes that the values can be stored as double-precision floating-point numbers and returns `'float64'`.
	*
	* @param array - input value
	* @returns data type
	*
	* @example
	* var dt = ns.array2dtype( [ 1, 2, 3 ] );
	* // returns 'float64'
	*
	* var dt = ns.array2dtype( 'beep' );
	* // returns 'float64'
	*/
	array2dtype: typeof array2dtype;

	/**
	* Converts a list of arrays to "pointers" (i.e., byte offsets) in WebAssembly module memory.
	*
	* ## Notes
	*
	* -   Beware that this function may reallocate module memory, resulting in `ArrayBuffer` detachment and the invalidation of any typed array views which were views of the previously allocated memory. Additionally, this function may write to module memory and does so without regard for any existing memory content. Users are thus encouraged to take suitable precautions (e.g., copying results out of module memory prior to subsequent invocation) in order to avoid unexpected results.
	* -   If an array's data is copied to module memory, the data is copied to a contiguous segment of module memory, and the respective array object in the returned array will have unit stride and an offset of zero.
	*
	* @param ctx - module context
	* @param list - list of array objects
	* @returns list of pointers
	*
	* @example
	* var setReadOnlyAccessor = require( '@stdlib/utils-define-configurable-read-only-accessor' );
	* var ArrayBuffer = require( '@stdlib/array-buffer' );
	* var DataView = require( '@stdlib/array-dataview' );
	* var Float64Array = require( '@stdlib/array-float64' );
	* var dtype2wasm = require( '@stdlib/wasm-base-dtype2wasm' );
	*
	* function Context() {
	*     this._buffer = new ArrayBuffer( 100 );
	*     return this;
	* }
	*
	* Context.prototype.isView = function isView( arr ) {
	*     return ( arr.buffer ) ? ( arr.buffer === this._buffer ) : false;
	* };
	*
	* Context.prototype.realloc = function realloc( nbytes ) {
	*     this._buffer = new ArrayBuffer( nbytes );
	* };
	*
	* setReadOnlyAccessor( Context.prototype, 'view', function getter() {
	*     return new DataView( this._buffer );
	* });
	*
	* // ...
	*
	* var ctx = new Context();
	*
	* // ...
	*
	* var x = new Float64Array( 4 );
	* var y = new Float64Array( 4 );
	*
	* // ...
	*
	* var xobj = {
	*     'dtype': 'float64',
	*     'wdtype': dtype2wasm( 'float64' ),
	*     'length': x.length,
	*     'data': x,
	*     'stride': 1,
	*     'offset': 0
	* };
	*
	* var yobj = {
	*     'dtype': 'float64',
	*     'wdtype': dtype2wasm( 'float64' ),
	*     'length': y.length,
	*     'data': y,
	*     'stride': 1,
	*     'offset': 0
	* };
	*
	* var out = ns.arrays2ptrs( ctx, [ xobj, yobj ] );
	* // returns [...]
	*/
	arrays2ptrs: typeof arrays2ptrs;

	/**
	* Returns the WebAssembly data type associated with a provided array data type value.
	*
	* ## Notes
	*
	* -   If provided a "generic" or unknown array data type, the function assumes that the values can be stored as double-precision floating-point numbers.
	*
	* @param dtype - array data type
	* @returns WebAssembly data type
	*
	* @example
	* var out = ns.dtype2wasm( 'float64' );
	* // returns 'float64'
	*
	* out = ns.dtype2wasm( 'generic' );
	* // returns 'float64'
	*/
	dtype2wasm: typeof dtype2wasm;

	/**
	* Converts a strided array and associated metadata to an object likely to have the same "shape".
	*
	* ## Notes
	*
	* -   This function is intended as a potential performance optimization. In V8, for example, even if two objects share common properties, if those properties were added in different orders or if one object has additional properties not shared by the other object, then those objects will have different "hidden" classes. If a function is provided many objects having different "shapes", some JavaScript VMs (e.g., V8) will consider the function "megamorphic" and fail to perform various runtime optimizations. Accordingly, the intent of this function is to standardize the "shape" of the object holding strided array metadata to ensure that internal functions operating on strided arrays are provided consistent argument "shapes".
	*
	* -   The returned object has the following properties:
	*
	*     -   **data**: reference to the input array.
	*     -   **dtype**: array data type.
	*     -   **wdtype**: WebAssembly data type.
	*     -   **length**: number of indexed elements.
	*     -   **stride**: index increment.
	*     -   **offset**: starting index.
	*     -   **accessorProtocol**: boolean indicating whether the input array uses accessors for getting and setting elements.
	*     -   **accessors**: a two-element array whose first element is an accessor for retrieving an array element and whose second element is an accessor for setting an array element.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param stride - index increment
	* @param offset - index offset
	* @returns object containing strided array data
	*
	* @example
	* var x = {
	*     '0': 1,
	*     '1': 2,
	*     '2': 3,
	*     '4': 4,
	*     'length': 4
	* };
	* var obj = ns.strided2object( 4, x, 1, 0 );
	* // returns {...}
	*
	* var bool = obj.accessorProtocol;
	* // returns false
	*
	* var fcns = obj.accessors;
	* // returns [ <Function>, <Function> ]
	*
	* var v = fcns[ 0 ]( x.data, 2 );
	* // returns 3
	*/
	strided2object: typeof strided2object;
}

/**
* Base (i.e., lower-level) WebAssembly utilities.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
