import { Player } from "./Player";
import { PlayerId } from "./PlayerId";

/**
 * Class to represent the map that associate a Player id to a player
 */
export class Players {
    // The map value
    private inner : Map<PlayerId,Player>;

    constructor() {
        this.inner = new Map();
    }

    // Add a new player with the given name and id to the map and return the id
    public add(name: string, id: number) : PlayerId {
        const playerId = new PlayerId(id);
        this.inner.set(playerId, new Player(name,null));
        return playerId;
    }

    // Remove from the map the player with the given id 
    public remove(playerId : PlayerId) : Player | undefined {
        if (this.inner.has(playerId)) {
            const player : Player = this.inner.get(playerId)!;
            this.inner.delete(playerId);
            return player;
        }
        return;
    }
}