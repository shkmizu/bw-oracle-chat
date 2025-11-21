const WEBHOOK_URL = "https://webhook-test.com/665879a7d11b22b2564777c72ece161f";

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
