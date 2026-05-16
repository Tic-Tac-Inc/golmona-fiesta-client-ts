import type { SpaceId } from "./SpaceId";

/**
 * Class to represent a space
 */
export class Space {
    constructor(
        // The Space before this one
        private previous : SpaceId,
        // The Space(s) after this one
        private nexts : SpaceId[]
    ) {}
}