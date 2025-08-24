# Changelog
All changes are documented in this file
## dev/feature/product-page
### Node.js information
- Node.js v20.17.0 tested version, any v16-v17 should work but untested
### Added
- CHANGELOG.md
### Changed
- index.html page populated
- index.css page populated
#### App.js
- Fetchs data from /product
- Sort the products by price (low to high by default), THEN
- Renders grid to page 
- Simple error handling using try catch
- messyFunction renamed to sort and optimized style, modularity, readability, es6 .sort() used for readability
- Real time case sensitive search implimented
- More error handling added in fetching incase data is null
### Fixed
- cart.svg appeared to be damaged, fixed using a svg tag from a known working .svg file
### Notes
- px breakpoint for styles is currently at 700 for ease of testing on desktop
### Time Spent
- ~4 Hours