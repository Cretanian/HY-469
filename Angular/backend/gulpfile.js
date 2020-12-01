const del = require('del');
const _ = require('lodash');
const nodemon = require('nodemon');
const lazypipe = require('lazypipe');
const plugins = require('gulp-load-plugins')();
const { src, dest, watch, series, parallel } = require('gulp');


//---------------------------------------------------------
// #region Paths

const serverPath = 'src';
const paths = {
  server: {
    scripts: [`${serverPath}/**/!(*.spec|*.integration).ts`],
    assets: [`${serverPath}/**/!(*.ts)`],
    ts_config: `tsconfig.json`
  },
  dist: 'dist'
};

// #endregion Paths
//---------------------------------------------------------

//---------------------------------------------------------
// #region Helper functions

async function clean() {
  await del([`.tmp/**/*`, `${paths.dist}/**/*`], { dot: true });
}

// #endregion Helper functions
//---------------------------------------------------------

//---------------------------------------------------------
// #region Linting Tasks

const lintScripts = lazypipe()
  .pipe(plugins.tslint, { formatter: "stylish" }, require(`./tslint.json`))
  .pipe(plugins.tslint.report, { emitError: false });

async function lintServer() {
  return src(paths.server.scripts)
    .pipe(lintScripts());
}

// #endregion Linting Tasks
//---------------------------------------------------------

//---------------------------------------------------------
// #region Server

async function watchChanges() {
  // watch typescript
  watch(
    `${serverPath}/**/*.ts`,
    { interval: 2000, usePolling: true },
    parallel(compileServer, lintServer)
  );
  // watch assets
  watch(
    `${serverPath}/**/!(*.ts)`,
    { interval: 2000, usePolling: true },
    copyAssets
  );
}

const tsProject = plugins.typescript.createProject(paths.server.ts_config);
function compileServer() {
  const tsResult = tsProject.src()
    .pipe(tsProject());

  return tsResult.js
    .pipe(dest(`${paths.dist}`));
}

function copyAssets() {
  return src(paths.server.assets)
    .pipe(dest(`${paths.dist}`));
}

async function startServer() {
  nodemon(`${paths.dist}`);
}

// #endregion Server
//---------------------------------------------------------

//---------------------------------------------------------
// #region Main Tasks

exports.build_dist = series(
  clean,
  parallel(compileServer, copyAssets)
);

exports.serve_dist = series(
  clean,
  parallel(compileServer, copyAssets),
  startServer
);

exports.serve = series(
  clean,
  lintServer,
  parallel(compileServer, copyAssets),
  startServer,
  watchChanges
);

// #endregion Main Tasks
//---------------------------------------------------------
