<script>
  import { onMount } from 'svelte';
  import { cart, cartTotal } from '../stores/cart.js';
  import { toasts } from '../lib/toast.js';

  onMount(async () => {
    try {
      await cart.load();
    } catch (error) {
      toasts.push(error.message, 'error');
    }
  });

  async function remove(item) {
    try {
      await cart.remove(item.productId._id);
      toasts.push(`${item.productId.nombre} eliminado del carrito`, 'success');
    } catch (error) {
      toasts.push(error.message, 'error');
    }
  }
</script>

<section class="section-head">
  <div>
    <p class="eyebrow">Carrito</p>
    <h1>Tus productos seleccionados</h1>
  </div>
  <div class="panel compact total-box">
    <span>Total</span>
    <strong>{$cartTotal.toFixed(2)} €</strong>
  </div>
</section>

{#if $cart.loading}
  <div class="panel">Cargando carrito...</div>
{:else if !$cart.items.length}
  <div class="panel empty-state">
    <h2>El carrito está vacío</h2>
    <p>Vuelve al catálogo y añade algún producto para probar la API.</p>
  </div>
{:else}
  <section class="stack">
    {#each $cart.items as item (item.productId._id)}
      <article class="panel cart-row">
        <div>
          <p class="eyebrow">Cantidad {item.quantity}</p>
          <h3>{item.productId.nombre}</h3>
        </div>
        <strong>{(item.productId.precio * item.quantity).toFixed(2)} €</strong>
        <button class="danger" type="button" onclick={() => remove(item)}>Quitar</button>
      </article>
    {/each}
  </section>
{/if}
