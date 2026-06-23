// @ts-check
import {
  withNativeFederation,
  share,
} from "@angular-architects/native-federation/config";

export default withNativeFederation({
  name: "shell",
  features: {
    denseChunking: true,
  },
  shared: {
    ...share(
      {
        "@ionic/core": {
          singleton: true,
          requiredVersion: "auto",
          build: "package",
          chunks: false,
          includeSecondaries: {
            resolveGlob: true,
          },
        },
      },
      "",
      [/^@ionic\/core\/dist/, /^@ionic\/core\/hydrate/],
    ),
  },
});
