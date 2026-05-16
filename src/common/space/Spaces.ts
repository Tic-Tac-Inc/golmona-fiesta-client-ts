import type { Space } from "./Space";
import type { SpaceId } from "./SpaceId";

/**
 * Class to represent the map that associate an id to a Space
 */
export class Spaces {
    constructor(
        // The map value
        private inner : Map<SpaceId,Space>
    ) {}
}