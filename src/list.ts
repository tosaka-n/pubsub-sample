import { PubSub } from "@google-cloud/pubsub";

const pubSubClient = new PubSub({
  apiEndpoint: "http://0.0.0.0:8085", // ローカルのDockerで起動しているモックのエンドポイント
  projectId: "test-project", // プロジェクトIDを指定
});

async function listTopics() {
  const [topics] = await pubSubClient.getTopics();
  console.log("Topics:");
  topics.forEach((topic) => console.log(topic.name));
}

listTopics().catch(console.error);
