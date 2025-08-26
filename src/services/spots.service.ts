import { SpotsResponse, TypesResponse } from "@/types/spots";
import axios from "axios";

const baseUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/spots/`;

export const getAllSpots = async (): Promise<SpotsResponse> => {
  return axios
    .get<SpotsResponse>(baseUrl)
    .then((response) => response.data);
};

export const getSpotTypes = async (): Promise<TypesResponse> => {
  return axios
    .get<TypesResponse>(`${baseUrl}/types/`)
    .then((response) => response.data);
};

export const searchSpots = async (query: string): Promise<SpotsResponse> => {
  return axios
    .get<SpotsResponse>(`${baseUrl}/search/`, { params: { query } })
    .then((response) => response.data);
};

export const handleApiError = (error: unknown): string => {
  if (axios.isAxiosError(error)) {
    if (error.response) {
      const message =
        error.response.data && error.response.data.message
          ? String(error.response.data.message)
          : "Unknown error";
      return `API Error: ${error.response.status} - ${message}`;
    } else if (error.request) {
      return "Network Error: Unable to reach the server.";
    }
  }

  if (error instanceof Error) {
    return `Unexpected error: ${error.message}`;
  }

  return "An unknown error occurred.";
};
