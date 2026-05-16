import type { SpaceId } from "../space/SpaceId";

/**
 * Class to represent a player 
 */
export class Player {
    constructor(
        // The player's name
        private name: string,
        // The player's current space
        private crntSpace: SpaceId | null = null,
    ) {}
}