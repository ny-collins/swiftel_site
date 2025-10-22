<script>
  let name = '';
  let email = '';
  let message = '';
  let status = 'idle'; // 'idle', 'submitting', 'success', 'error'

  async function handleSubmit() {
    status = 'submitting';
    console.log("Form submitted with:", { name, email, message });

    await new Promise(resolve => setTimeout(resolve, 1500));

    status = 'success';

    setTimeout(() => {
      name = '';
      email = '';
      message = '';
      status = 'idle';
    }, 3000);
  }
</script>

<form on:submit|preventDefault={handleSubmit} class="space-y-6">
  <div>
    <label for="name" class="block text-sm font-medium text-muted mb-1">Full Name</label>
    <input
      bind:value={name}
      type="text"
      id="name"
      required
      class="form-input"
      placeholder="Your Name"
    />
  </div>

  <div>
    <label for="email" class="block text-sm font-medium text-muted mb-1">Email Address</label>
    <input
      bind:value={email}
      type="email"
      id="email"
      required
      class="form-input"
      placeholder="you@example.com"
    />
  </div>

  <div>
    <label for="message" class="block text-sm font-medium text-muted mb-1">Message</label>
    <textarea
      bind:value={message}
      id="message"
      rows="4"
      required
      class="form-input"
      placeholder="How can we help?"
    ></textarea>
  </div>

  <div>
    {#if status === 'idle' || status === 'submitting'}
      <button
        type="submit"
        class="submit-button"
        disabled={status === 'submitting'}
      >
        {#if status === 'submitting'}
          <span>Sending...</span>
        {:else}
          <span>Send Message</span>
        {/if}
      </button>
    {:else if status === 'success'}
      <div class="success-message">
        Thank you! Your message has been sent.
      </div>
    {/if}
  </div>
</form>