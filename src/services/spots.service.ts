import axios from "axios";
import { SpotsResponse, TypesResponse } from "@/types/spots";

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

export const handleApiError = (error: any): string => {
  if (axios.isAxiosError(error)) {
    if (error.response) {
      return `API Error: ${error.response.status} - ${
        error.response.data?.message || "Unknown error"
      }`;
    } else if (error.request) {
      return "Network Error: Unable to reach the server. Make sure Django is running on localhost:8000";
    }
  }
  return "Unexpected error occurred";
};
