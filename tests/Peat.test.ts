import Peat from '../Peat';
import { Land } from '@civ-clone/core-terrain/Types';
import RuleRegistry from '@civ-clone/core-rule/RuleRegistry';
import TerrainFeature from '@civ-clone/core-terrain-feature/TerrainFeature';
import { expect } from 'chai';

class Ground extends Land {}

describe('Peat', (): void => {
  it('should be a terrain feature of its terrain', (): void => {
    const terrain = new Ground(new RuleRegistry()),
      feature = new Peat(terrain);

    expect(feature).to.be.instanceOf(TerrainFeature);
    expect(feature.terrain()).to.equal(terrain);
    expect(feature.clone()).to.be.instanceOf(Peat);
  });
});
