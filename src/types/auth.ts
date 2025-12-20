export interface AuthRequest {
    email: string;
    password: string;
}

export interface AuthResponse {
    status: string;
    data: {
        accessToken: string;
    };
}
