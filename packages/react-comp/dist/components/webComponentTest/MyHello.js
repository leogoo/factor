import { useEffect } from 'react';
import { jsxs as _jsxs } from "react/jsx-runtime";
var MyHello = function MyHello(_ref) {
  var name = _ref.name;
  useEffect(function () {
    console.log("Hello ".concat(name));
  }, []);
  return /*#__PURE__*/_jsxs("div", {
    children: ["hello ", name]
  });
};
export default MyHello;