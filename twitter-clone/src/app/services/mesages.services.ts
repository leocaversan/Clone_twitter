import { Injectable } from "@angular/core"; 

@Injectable({
    providedIn: 'root',
})

export class MessagesService {
    private messages : string[] = [];

    constructor(){ }

    addMessage(message: string){
        this.messages.push(message);
    }
    getMessages():string[]{
        return this.messages;
    }
    clearMessages():void{
        this.messages = [];
    }
    removeMessage(index:number){
        this.messages.splice(index, 1);
    }
}
