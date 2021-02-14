import { loadStripe } from '@stripe/stripe-js';

import { Experience, Order } from './models';

const apiEndpoint = 'http://localhost:3001/api';

export const getExperiences = async (userId: string): Promise<Array<Experience>> => {
  const response = await window.fetch(`${apiEndpoint}/experiencies`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userId }),
  });

  const experiences = await response.json();

  return experiences.map((apiExperience) => apiExperience);
};

export const createOrder = async (userId: string, experience: Experience): Promise<Order> => {
  const createOrderResponse = await window.fetch(`${apiEndpoint}/start-buy`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userId, id: experience.id }),
  });

  const apiOrder = await createOrderResponse.json();

  return {
    sessionId: apiOrder.id,
  };
};

export const placeOrder = async (order: Order): Promise<void> => {
  // @ts-ignore
  const apiKey = import.meta.env.VITE_STRIPE_API_KEY;
  const stripe = await loadStripe(apiKey);
  const placeOrderResult = await stripe.redirectToCheckout({ sessionId: order.sessionId });
  console.log(placeOrderResult);
};
