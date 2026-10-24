#!/usr/bin/env bash
# AWS S3 + CloudFront Deployment Script (Bash)
# Usage:
#   ./deploy-aws.sh your-s3-bucket-name [optional-cloudfront-dist-id]

set -e

BUCKET_NAME="$1"
DISTRIBUTION_ID="$2"

if [ -z "$BUCKET_NAME" ]; then
  echo "Usage: ./deploy-aws.sh <bucket-name> [cloudfront-distribution-id]"
  exit 1
fi

echo "🚀 Deploying portfolio to s3://$BUCKET_NAME..."

aws s3 sync . "s3://$BUCKET_NAME" \
  --delete \
  --exclude ".git/*" \
  --exclude "deploy-aws.ps1" \
  --exclude "deploy-aws.sh" \
  --exclude "commits.md" \
  --exclude "README.md"

echo "✅ Files successfully uploaded to S3!"

if [ -n "$DISTRIBUTION_ID" ]; then
  echo "⚡ Invalidating CloudFront cache for distribution: $DISTRIBUTION_ID..."
  aws cloudfront create-invalidation --distribution-id "$DISTRIBUTION_ID" --paths "/*"
  echo "✅ Invalidation initiated!"
fi

echo "🎉 Deployment complete!"

