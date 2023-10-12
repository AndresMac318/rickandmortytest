
export interface APIResponse<T> {
    results: T;
}

export interface DataResponse {
    characters: APIResponse<Character[]>;
    locations: APIResponse<Location[]>;
    episodes: APIResponse<Episode[]>;
}

export interface Character {
    id: string;
    name: string;
    status: string;
    type: string;
    gender: string;
    created: string;
    species: string;
    image: string;
}

export interface Location {
    id: string;
    name: string;
    type: string;
    dimension?: string;
    created?: string;
}

export interface Episode {
    id: string;
    name: string;
    episode: string;
    created: string;
}


