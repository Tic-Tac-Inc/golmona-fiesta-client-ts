/**
 * Class to represent the world used for the game
 */
import type { Players } from "./player/Players";
import type { Spaces } from "./space/Spaces";

export class World {
    constructor(
        // Every Players of this World
        private players : Players,
        // Every Spaces of this World
        private spaces : Spaces
    ) {}
}