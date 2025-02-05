# pubsub-sample
## Usage
### 1. Run PubSub emulator
```bash
$ docker run \
  -p 8085:8085 \
  gcr.io/google.com/cloudsdktool/google-cloud-cli:489.0.0-emulators \
  gcloud beta emulators pubsub start --project=test-project --host-port=0.0.0.0:8085
```
### 2. Create a topic and a subscription
```bash
$ npm run create-topic
```

### 3. Listen to the subscription(terminal 1)
```bash
$ npm run listen
```

### 4. Publish a message(terminal 2)
```bash
$ npm run publish
```