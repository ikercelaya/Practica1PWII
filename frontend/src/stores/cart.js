import { derived, writable } from 'svelte/store';
import { api } from '../lib/api.js';

function createCartStore() {
  const { subscribe, set, update } = writable({
    items: [],
    loading: false
  });

  return {
    subscribe,
    clear() {
      set({ items: [], loading: false });
    },
    async load() {
      update(state => ({ ...state, loading: true }));
      try {
        const items = await api.getCart();
        set({ items, loading: false });
      } catch (error) {
        update(state => ({ ...state, loading: false }));
        throw error;
      }
    },
    async add(productId) {
      update(state => ({ ...state, loading: true }));
      try {
        const items = await api.addToCart(productId);
        set({ items, loading: false });
      } catch (error) {
        update(state => ({ ...state, loading: false }));
        throw error;
      }
    },
    async remove(productId) {
      update(state => ({ ...state, loading: true }));
      try {
        const items = await api.removeFromCart(productId);
        set({ items, loading: false });
      } catch (error) {
        update(state => ({ ...state, loading: false }));
        throw error;
      }
    }
  };
}

export const cart = createCartStore();
export const cartCount = derived(cart, $cart =>
  $cart.items.reduce((total, item) => total + item.quantity, 0)
);
export const cartTotal = derived(cart, $cart =>
  $cart.items.reduce((total, item) => total + item.quantity * (item.productId?.precio || 0), 0)
);
