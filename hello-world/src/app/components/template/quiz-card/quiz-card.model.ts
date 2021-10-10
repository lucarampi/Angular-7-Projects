export class Quiz {
    public id: number
    public question: string
    public options: Options

    constructor(id: number, question: string, options?:Options) {

        this.id = id
        this.question = question
        this.options=options
    }


}

export class Options {
    public q1: {
        text: string
        isAnswer: boolean
    }
    public q2: {
        text: string
        isAnswer: boolean
    }
    public q3: {
        text: string
        isAnswer: boolean
    }
    public q4: {
        text: string
        isAnswer: boolean
    }
    public q5: {
        text: string
        isAnswer: boolean
    }
    constructor(
        q1?: { text: string, isAnswer: boolean },
        q2?: { text: string, isAnswer: boolean },
        q3?: { text: string, isAnswer: boolean },
        q4?: { text: string, isAnswer: boolean },
        q5?: { text: string, isAnswer: boolean }) {

        this.q1 = q1
        this.q2 = q2
        this.q3 = q3
        this.q4 = q4
        this.q5 = q5
    }
}