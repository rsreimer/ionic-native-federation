import { initFederation } from '@softarc/native-federation-orchestrator';
import {
  useShimImportMap,
  consoleLogger,
  globalThisStorageEntry,
} from '@softarc/native-federation-orchestrator/options';

async function main() {
  await initFederation(
    {},
    {
      ...useShimImportMap({ shimMode: true }),
      logger: consoleLogger,
      storage: globalThisStorageEntry,
      hostRemoteEntry: './remoteEntry.json',
      logLevel: 'debug',
      profile: {
        latestSharedExternal: false,
        overrideCachedRemotesIfURLMatches: true,
      },
    },
  );

  await import('./bootstrap');
}

main();
