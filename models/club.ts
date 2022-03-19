export interface ClubInterface {
    clubname: string;
    clubshort: string;
    numberofteams: number;
}

export interface ClubGet {
    clubs: ClubInterface[];
    error: boolean;
    message: string;
}

export class Club {
    name: string;
    shortName: string;
    numberOfTeams: number;

    constructor(club: ClubInterface) {
        this.name = club.clubname;
        this.shortName = club.clubshort;
        this.numberOfTeams = club.numberofteams;
    }
}

export const ClubNotFound: Club = new Club({
    clubname: 'Not Found',
    clubshort: 'xxx',
    numberofteams: 0,
});