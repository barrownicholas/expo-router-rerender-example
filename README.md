# Expo Router Re-Rendering Bug

This is a minimal reproducable example of a `_layout.tsx` re-rendering bug in Expo.

## Steps

1. Start expo: `npm run start`
2. Open web browser (+ console)
3. Notice that the function `superExpensiveLoadingFunction` (in `/app/_layout.tsx`) is called once
4. Press the `Login` button (notice that `superExpensiveLoadingFunction` is **not** re-called, as expected)
5. Toggle back and forth between the "Dashboard" and "Settings" buttons. Notice that the function `expensiveInitdLoadingTask` **is erroneously/unexpectedly** being recalled on each and every click