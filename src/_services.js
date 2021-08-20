import { Subject } from 'rxjs';
import { filter } from "rxjs/operators";

const subject = new Subject();
const subjectReceive = new Subject();

export const messageService = {
    sendMessage: message => subject.next(message),
    RelayMessage: message => subjectReceive.next( message ),
    // clearMessages: () => subject.next(),
    onMessage: () => subject.asObservable(),
    onMessageReceive: (id) => subjectReceive.pipe(filter(e => e.id === id))
};