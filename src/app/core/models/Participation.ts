// TODO: create here a typescript interface for a participation
/*
example of participation:
{
    id: 1,
    year: 2012,
    city: "Londres",
    medalsCount: 28,
    athleteCount: 372
}
*/

export class Participation {
    id!: number;
    year!: number;
    city!: string;
    medalsCount!: number;
    athleteCount!: number;
}