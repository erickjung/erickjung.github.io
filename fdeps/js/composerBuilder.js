var buildMatrixFromDependencies = function(deps) {

  var packages = deps.packages;
  var indexByName = {};
  var packageNames = {};
  var matrix = [];
  var n = 0;
  var replaces = {};

  // List the replacements
  packages.forEach(function(p) {
    if (!p.replace) return;
    for (replaced in p.replace) {
      replaces[replaced] = p.name;
    }
  });
  
  // update required packages with replacements
  packages.forEach(function(p) {
    for (packageName in p.require) {
      if (packageName in replaces) {
        p.require[replaces[packageName]] = p.require[packageName];
        delete p.require[packageName];
      }
    }
  });

  // Compute a unique index for each package name.
  packages.forEach(function(p) {
    packageName = p.name;
    if (!(packageName in indexByName)) {
      packageNames[n] = packageName;
      indexByName[packageName] = n++;
    }
  });

  // Construct a square matrix counting package requires.
  packages.forEach(function(p) {
    var source = indexByName[p.name];
    var row = matrix[source];
    if (!row) {
     row = matrix[source] = [];
     for (var i = -1; ++i < n;) row[i] = 0;
    }
    for (packageName in p.require) {
      row[indexByName[packageName]]++; 
    }
  });

  // add small increment to equally weighted dependencies to force order
  matrix.forEach(function(row, index) {
    var increment = 0.001;
    for (var i = -1; ++i < n;) {
      var ii = (i + index) % n;
      if (row[ii] == 1) {
        row[ii] += increment;
        increment += 0.001;
      }
    }
  });

  return {
    matrix: matrix,
    packageNames: packageNames
  }
};
