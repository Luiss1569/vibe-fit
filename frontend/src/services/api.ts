import CustomerFeedback from "@/interfaces/customerFeedback";
import About from "@/interfaces/about";
import Product from "@interfaces/product";
import axios from "axios";

const STRAPI_URI = process.env.STRAPI_URI;
const STRAPI_TOKEN = process.env.STRAPI_TOKEN;

const BASE_URL = STRAPI_URI + "/api" || "http://127.0.0.1:1337/api";

const headers = new Headers({
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: `Bearer ${STRAPI_TOKEN}`,
});

export async function getApiSpecialties(): Promise<Product[]> {
  const response = await fetch(
    `${BASE_URL}/produtos?filters[Emphasis]=true&populate=*&pagination[limit]=3`,
    {
      method: "GET",
      headers,
    }
  ).then((res) => res.json());

  return response.data;
}

export async function getApiRecentProducts(): Promise<Product[]> {
  const response = await fetch(
    `${BASE_URL}/produtos?populate=*&pagination[limit]=4&sort=createdAt:desc`,
    {
      method: "GET",
      headers,
    }
  ).then((res) => res.json());

  return response.data;
}

export async function getApiTopSellingProducts(): Promise<Product[]> {
  const response = await fetch(
    `${BASE_URL}/produtos?populate=*&pagination[limit]=4&sort=Price:desc`,
    {
      method: "GET",
      headers,
    }
  ).then((res) => res.json());

  return response.data;
}

export async function getApiCustomersFeedbacks(): Promise<CustomerFeedback[]> {
  const response = await fetch(
    `${BASE_URL}/customer-feedbacks?populate=*&pagination[limit]=4&sort`,
    {
      method: "GET",
      headers,
    }
  ).then((res) => res.json());

  return response.data;
}

export async function getApiProducts(): Promise<Product[]> {
  const response = await fetch(
    `${BASE_URL}/produtos?populate=*`,
    {
      method: "GET",
      headers,
    }
  ).then((res) => res.json());
  
  return response.data;
}

export async function getApiProductBySlug(slug: string): Promise<Product> {
  const response = await fetch(
    `${BASE_URL}/produtos/?filters[slug]=${slug}&populate=*`,
    {
      method: "GET",
      headers,
    }
  ).then((res) => res.json());

  return response.data.at(0);
}

export async function getApiAboutPage(): Promise<About> {
  const response = await fetch(`${BASE_URL}/page-about`, {
    method: "GET",
    headers,
  }).then((res) => res.json());

  console.log(response.data)
  return response.data;
}

export async function saveApiSupport(data: any): Promise<any> {
  const response = await axios
    .post(
      `${BASE_URL}/clients-requests`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${STRAPI_TOKEN}`,
        },
      }
    )
    .then((res) => {
      if (res?.data?.error) throw new Error(res.data.error);
      return res;
    })
    .catch((err) => {
      console.error("Error during POST request STRAPI");
      throw err;
    });

  console.log(response);

  return response;
}
