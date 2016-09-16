# vue-migration-helper <sup>`BETA`</sup>

> CLI tool to aid in migration from Vue 1.x to 2.0. It scans files for Vue-specific code and provides detailed warnings when deprecated patterns are found.

![Screenshot](http://i.imgur.com/aHh5TfR.png)

## Usage

``` sh
# install
npm install --global git://github.com/vuejs/vue-migration-helper.git

# navigate to a Vue 1.x project directory
cd path/to/my-vue-project

# scan all files in the current directory
vue-migration-helper
# scan all files in specific sub-directories
vue-migration-helper src folder-a folder-b
```

When you want to update, just run the install again:

``` sh
npm install --global git://github.com/vuejs/vue-migration-helper.git
```

## Contributing

While the binary supports Node v4+, tests are written to take advantage of v6+, so you'll need that installed.

``` sh
# clone the project
git clone https://github.com/vuejs/vue-migration-helper.git

# navigate to directory
cd vue-migration-helper
```

Then write a failing test for a rule you'd like to improve. Confirm that it fails with:

``` sh
# run all tests
npm run test -s
```

If your regex skills aren't strong enough to fix the problem yourself, just submit a pull request with the failing test and we'll take it from there. Before you do though, make sure to lint the project for typos and style violations:

``` sh
# lint all files
npm run lint -s
```
