const { generate } = require('./generate');
///////////////////////////////////////////////////////////////////////////////
// SCRIPT MAIN
////////////////////////////////////////////////////////////////////////////////

(async () => {
  await generate(false, 'packages/website/src/showcases');
})();