const MAX_RCM = 160;

module.exports = { generateRandomRCM };

function generateRandomRCM() {
  const rcm = [genRCM()];
  const hasTwo = !!Math.round(Math.random());

  if (hasTwo) {
    let exclude = rcm[0];
    rcm.push(genRCM(exclude));
  }

  return rcm;

  function genRCM(exclude) {
    let rcm = Math.ceil(Math.random() * MAX_RCM);

    while (rcm === exclude) {
      rcm = Math.ceil(Math.random() * MAX_RCM);
    }

    return rcm;
  }
}
