import { PubSub } from "@google-cloud/pubsub";

const pubSubClient = new PubSub({
  apiEndpoint: "http://0.0.0.0:8085",
  projectId: "test-project", // プロジェクトIDを指定
});

const publishMessage = async (topicName: string, message: string) => {
  const dataBuffer = Buffer.from(message);

  try {
    const messageId = await pubSubClient.topic(topicName).publishMessage({ data: dataBuffer });
    console.log(`Message ${messageId} published to topic ${topicName}`);
  } catch (error: any) {
    console.error(`Error publishing message: ${error.message}`);
  }
}

const topicName = process.env.TOPIC_NAME || "test-topic";
const message = "Hello, Pub/Sub!";
publishMessage(topicName, message).catch(console.error);
