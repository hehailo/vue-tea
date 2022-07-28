// module.exports = {
// plugins: {
//   "postcss-px-to-viewport": {
//     viewportWidth: 375,
//   },
// },
// };
const path = require('path')
module.exports = ({ file }) => {
  console.log("file",file);
  const designWidth = file.dirname.includes(path.join("node_modules", "vant"))
    ? 375
    : 750;
  return {
    plugins: {
      "postcss-px-to-viewport": {
        viewportWidth: designWidth,
      },
    },
  };
};
