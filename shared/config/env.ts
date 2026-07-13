import "dotenv/config";

export const env = {
  nodeEnv: process.env.NODE_ENV ?? "development",

  logLevel: process.env.LOG_LEVEL ?? "info",

  awsRegion: process.env.AWS_REGION ?? "ap-south-1",

  s3BucketName: process.env.S3_BUCKET_NAME ?? "",

  sqsQueueUrl: process.env.SQS_QUEUE_URL ?? "",

  dynamoTableName: process.env.DYNAMODB_TABLE_NAME ?? "",
};