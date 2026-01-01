type Status = 'fail' | 'success';

export interface AuthRequest {
    email: string;
    password: string;
}

export interface AuthResponse {
    status: Status;
    data: {
        accessToken: string;
    };
}

export interface RegisterRequest {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone?: string;
}

export interface RegisterResponse {
    status: Status;
    message: string;
}
