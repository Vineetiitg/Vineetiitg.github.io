# AWS S3 + CloudFront Deployment Script (PowerShell for Windows)
# Usage:
#   .\deploy-aws.ps1 -BucketName "your-s3-bucket-name" -DistributionId "YOUR_CLOUDFRONT_DIST_ID"

param(
    [Parameter(Mandatory=$true)]
    [string]$BucketName,

    [Parameter(Mandatory=$false)]
    [string]$DistributionId = ""
)

Write-Host "🚀 Starting deployment to AWS S3 bucket: $BucketName..." -ForegroundColor Cyan

# 1. Sync files to S3 bucket (excluding git and deployment scripts)
aws s3 sync . "s3://$BucketName" `
    --delete `
    --exclude ".git/*" `
    --exclude "deploy-aws.ps1" `
    --exclude "deploy-aws.sh" `
    --exclude "commits.md" `
    --exclude "README.md"

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ S3 sync failed. Ensure your AWS CLI credentials are configured (run 'aws configure')." -ForegroundColor Red
    exit 1
}

Write-Host "✅ S3 sync completed successfully!" -ForegroundColor Green

# 2. Invalidate CloudFront cache if Distribution ID is provided
if ($DistributionId -ne "") {
    Write-Host "⚡ Invalidating CloudFront distribution: $DistributionId..." -ForegroundColor Yellow
    aws cloudfront create-invalidation --distribution-id $DistributionId --paths "/*"
    Write-Host "✅ CloudFront cache invalidation initiated!" -ForegroundColor Green
} else {
    Write-Host "ℹ️ No CloudFront Distribution ID specified. Skipping cache invalidation." -ForegroundColor Gray
}

Write-Host "🎉 Deployment finished! Your portfolio is live." -ForegroundColor Green

