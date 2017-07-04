 abstract class RoomObject {

    name: string
    protected description: string;

    constructor(name: string, description: string) {
        this.name = name;
        this.description = description;
    }

    abstract use(game: Game) : void
    
    //abstract is needed for using a RoomObject. Otherwise you can't do  roomObject.use(this);
}