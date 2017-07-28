# Example code for NodeJS Using S3/CloudFront Signed URLs/Cookies

### Prereqs
Set the following environment variables:

| Environment Variable Name | Example Setting | Description |
| ------------------------- | --------------- | ----------- |
| CLOUDFRONT_BASE_URL | images.pdxnerdery.com | The location you'll be serving content from |
| CLOUDFRONT_KEY | -----BEGIN RSA PRIVATE KEY ----- | Your CloudFront private key |
| CLOUDFRONT_KEY_PAIRID | ADJFADKJFLKERWRAQ | The Key Pair ID generated for CloudFront |
| COOKIE_BASE_URL | pdxnerdery.com | The root at which to create cookies (typically your base domain) |

