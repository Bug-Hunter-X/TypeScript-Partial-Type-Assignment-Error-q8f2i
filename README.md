# TypeScript Partial Type Assignment Bug

This repository demonstrates a common TypeScript error related to partial type assignments.  The `printCoord` function expects a complete `Point` object, but the code calling it only provides a partial object, resulting in a type error.

The solution shows how to correctly type the function argument or use type assertion to fix the error.