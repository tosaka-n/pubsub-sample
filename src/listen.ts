import { PubSub } from "@google-cloud/pubsub";

const pubSubClient = new PubSub({
  apiEndpoint: "http://localhost:8085", // ローカルのDockerで起動しているモックのエンドポイント
  projectId: "test-project", // プロジェクトIDを指定
});

const listenForMessages = async (topicName: string, subscriptionName: string) => {
  const subscription = pubSubClient
    .topic(topicName)
    .subscription(subscriptionName);

  const messageHandler = (message: any) => {
    console.log(`Received message: ${message.data}`);
    message.ack();
  };

  subscription.on("message", messageHandler);
  console.log(
    `Listening for messages on subscription ${subscriptionName} of topic ${topicName}`,
  );
}

const topicName = process.env.TOPIC_NAME || "test-topic";
const subscriptionName = process.env.SUBSCRIPTION_NAME || "test-subscription";
listenForMessages(topicName, subscriptionName).catch(console.error);
