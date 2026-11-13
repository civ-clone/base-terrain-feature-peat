# base-terrain-feature-peat

The `Peat` terrain feature: a special resource a square can hold.

For example: Civ2's Peat, found on Swamp.

This package only declares the class: it has no `main` and registers nothing, so installing it changes no game.
A game's rules register it and give it its yields.

```ts
import Peat from '@civ-clone/base-terrain-feature-peat/Peat';
import { instance as availableTerrainFeatureRegistryInstance } from '@civ-clone/core-terrain-feature/AvailableTerrainFeatureRegistry';

availableTerrainFeatureRegistryInstance.register(Peat);
```

Part of the Civ2 work (civ-clone/web-renderer#1008).
