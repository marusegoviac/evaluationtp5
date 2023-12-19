export class ActiviteService{

    objectifs = ["une tache", "deux taches"];

    removeItem(index: number){
        this.objectifs.splice(index, 1);
    }
    editItem(index: number,  nouvelDescription: string){
        this.objectifs[index] = nouvelDescription;
      }
}
