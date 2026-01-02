type Status = 'fail' | 'success';

interface News {
    id: number;
    title: string;
    text: string;
    img: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface NewsResponse {
    status: Status;
    data: [News];
}

export interface SingleNewsResponse {
    status: Status;
    data: News;
}
