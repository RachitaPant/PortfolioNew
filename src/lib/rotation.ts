/**
 * Deterministic stand-in for `Math.random()` when it is used during render.
 *
 * The scattered "pinned to a corkboard" rotations were previously computed with
 * `Math.random()` inline in JSX. That runs once on the server and again with a
 * different result on the client, so every affected node was a hydration
 * mismatch: React throws away the server markup, re-renders, and the cards
 * visibly snap to new angles a moment after load.
 *
 * This is a plain integer hash, so the same seed always yields the same angle
 * on both sides of the render while keeping the hand-scattered look.
 */
export function seededRotation(seed: number, spread: number): number {
  let h = Math.imul(seed + 1, 2654435761);
  h ^= h >>> 15;
  h = Math.imul(h, 2246822507);
  h ^= h >>> 13;

  const unit = ((h >>> 0) % 10000) / 10000; // [0, 1)
  return Math.round((unit * spread * 2 - spread) * 100) / 100;
}
