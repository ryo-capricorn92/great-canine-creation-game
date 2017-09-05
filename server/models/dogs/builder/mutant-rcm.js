module.exports = {
  _generateRandomRCM() {
    this.rcm = [];
    let rcmCount = 1;
    if (Math.round(Math.random())) {
      rcmCount += 1;
    }
    for (let i = 0; i < rcmCount; i++) {
      const randomRcm = Math.ceil(Math.random() * 160);
      if (!this.rcm.includes(randomRcm)) {
        this.rcm.push(randomRcm);
      } else {
        i -= 1;
      }
    }
  },
};
