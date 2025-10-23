const WEBHOOK_URL = "https://deborah-calamitean-nonpalliatively.ngrok-free.dev/webhook/b948b535-15bd-443a-bbdd-f3ade2db3d5b";

export interface WebhookResponse {
  output: string;
}

export const sendToWebhook = async (message: string): Promise<string> => {
  try {
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      throw new Error('Webhook not reachable');
    }

    const data: WebhookResponse[] = await response.json();
    
    if (!data || !Array.isArray(data) || data.length === 0 || !data[0].output) {
      throw new Error('Invalid JSON response');
    }

    return data[0].output;
  } catch (error) {
    console.error('Webhook error:', error);
    throw new Error('Webhook not reachable or returned invalid JSON');
  }
};
