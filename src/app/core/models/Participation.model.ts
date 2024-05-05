export class Participation {
    id!: number;
    year!: number;
    city!: string;
    medalsCount!: number;
    athleteCount!: number;
}

/***
    Example of Participation, get from ./assets/mock/olympic.json

    {
        "id": 1,
        "year": 2012,
        "city": "Londres",
        "medalsCount": 28,
        "athleteCount": 372
    }

***/