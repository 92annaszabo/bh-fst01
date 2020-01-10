const assert = require("chai").assert;
const Hero = require("./solution/hero");

// ./node_modules/mocha/bin/mocha

describe("Hero", () => {
  describe("constructor", () => {
    it("should throw error if name is missing", () => {
      assert.throws(() => new Hero(undefined, 100, 1100));
    });
    it("should throw error if powerLevel is missing", () => {
      assert.throws(() => new Hero("Hello", null, 1100));
    });
    it("should throw error if powerLevel < 10", () => {
      assert.throws(() => new Hero("Hello", 9, 1100));
    });
    it("should throw error if life is missing", () => {
      assert.throws(() => new Hero("Hello", 100, null));
    });
    it("should throw error if life < 100", () => {
      assert.throws(() => new Hero("Hello", 100, 90));
    });
  });

  describe("details", () => {
    it("should return the hero details", () => {
      const n = 'goku'
      const pl = 110
      const l = 1000
      const hero = new Hero(n, pl, l)
      const details = hero.getHeroDetails()
      assert.strictEqual(details.name, n);
      assert.strictEqual(details.powerLevel, pl);
      assert.strictEqual(details.life, l);
    });
  });

  describe("attact", () => {
    it("should return the powerLevel", () => {
      const n = 'krilin'
      const pl = 143
      const l = 1000
      const hero = new Hero(n, pl, l)
      assert.strictEqual(pl, hero.attack());
    });
  });

  describe("getHit", () => {
    it("should argument must be a number", () => {
      const hero = new Hero('x', 100, 1000)
      assert.throws(() => hero.getHit('not a number'));
    });
    it("should decrease the life", () => {
      const hit = 32
      const n = 'freezia'
      const pl = 200
      const l = 1300
      const hero = new Hero(n, pl, l)
      assert.strictEqual(l, hero._life);
      hero.getHit(hit)
      assert.strictEqual(hero._life, l - hit);
    });
  });

  describe("fury", () => {
    it("should increase the hero powerlevel w 10%", () => {
      const n = 'vegeta'
      const pl = 100
      const l = 1000
      const hero = new Hero(n, pl, l)
      assert.strictEqual(pl, hero._powerLevel);
      hero.fury()
      assert.strictEqual(hero._powerLevel, pl * 1.1);
    });
  });

  describe("FIGHT", () => {
    const hn = 'vegeta'
    const hpl = 120
    const hl = 1000
    const hero = new Hero(hn, hpl, hl)

    const vn = 'freezia'
    const vpl = 150
    const vl = 1000
    const villain = new Hero(vn, vpl, vl)

    it("should be two heros with life and powerlevel", () => {
      assert.strictEqual(hero.getHeroDetails().powerLevel, hpl);
      assert.strictEqual(villain.getHeroDetails().powerLevel, vpl);
    });
    it("should decrease life after hit", () => {
      assert.strictEqual(villain.getHeroDetails().life, vl);
      villain.getHit(hero.attack())
      assert.strictEqual(villain.getHeroDetails().life, vl - hpl);
    });
  });
});
