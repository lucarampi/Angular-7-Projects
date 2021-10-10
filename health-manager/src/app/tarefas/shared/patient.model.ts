export class Patient {
    constructor(
        public id?: number,
        public name?: string,
        public status?: string,
        public first_status?: string,
        public done: boolean = false) {     
    }
}