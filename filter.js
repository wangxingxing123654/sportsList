      angular.module('filters', [])
          .filter('unique', function() {
              return function(data, propertyName) {
                  if (angular.isArray(data) && angular.isString(propertyName)) {
                      var results = [];
                      var keys = {};
                      for (var i = 0; i < data.length; i++) {
                          var val = data[i][propertyName];
                          //   keys[val]开始都是undefined，都能进去，如果有相同的，keys[val]就有值了。进不去了。达到过滤作用，
                          // 其实质是用到对象属性的唯一性。
                          if (angular.isUndefined(keys[val])) {
                              keys[val] = true;
                              results.push(val);
                          }
                      }
                      return results;
                  } else {
                      return data;
                  }
              }
          })