import { PubSub } from "@google-cloud/pubsub";

const pubSubClient = new PubSub({
  apiEndpoint: "http://localhost:8085",
  projectId: "test-project",
});

const createTopic = async (topicName: string) => {
  await pubSubClient.createTopic(topicName);
  console.log(`Topic ${topicName} created.`);
}

const topicName = process.env.TOPIC_NAME || "test-topic";
const createSubscription = async (topicName: string, subscriptionName: string) => {
  await pubSubClient.topic(topicName).createSubscription(subscriptionName);
  console.log(
    `Subscription ${subscriptionName} created for topic ${topicName}.`,
  );
}

const subscriptionName = process.env.SUBSCRIPTION_NAME || "test-subscription";

(async () => {
  await createTopic(topicName).catch(console.error);
  await createSubscription(topicName, subscriptionName).catch(console.error);
})();
