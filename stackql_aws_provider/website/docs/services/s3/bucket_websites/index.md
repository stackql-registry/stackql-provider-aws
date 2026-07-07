--- 
title: bucket_websites
hide_title: false
hide_table_of_contents: false
keywords:
  - bucket_websites
  - s3
  - aws
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage aws resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>bucket_websites</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="bucket_websites" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3.bucket_websites" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_bucket_website"
    values={[
        { label: 'get_bucket_website', value: 'get_bucket_website' }
    ]}
>
<TabItem value="get_bucket_website">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="line_items" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#get_bucket_website"><CopyableCode code="get_bucket_website" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-x-amz-expected-bucket-owner"><code>x-amz-expected-bucket-owner</code></a></td>
    <td>This operation is not supported for directory buckets. Returns the website configuration for a bucket. To host website on Amazon S3, you can configure a bucket as website by adding a website configuration. For more information about hosting websites, see Hosting Websites on Amazon S3. This GET action requires the S3:GetBucketWebsite permission. By default, only the bucket owner can read the bucket website configuration. However, bucket owners can allow other users to read the website configuration by writing a bucket policy granting them the S3:GetBucketWebsite permission. The following operations are related to GetBucketWebsite: DeleteBucketWebsite PutBucketWebsite You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.</td>
</tr>
<tr>
    <td><a href="#put_bucket_website"><CopyableCode code="put_bucket_website" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-WebsiteConfiguration"><code>WebsiteConfiguration</code></a></td>
    <td><a href="#parameter-Content-MD5"><code>Content-MD5</code></a>, <a href="#parameter-x-amz-sdk-checksum-algorithm"><code>x-amz-sdk-checksum-algorithm</code></a>, <a href="#parameter-x-amz-expected-bucket-owner"><code>x-amz-expected-bucket-owner</code></a></td>
    <td>This operation is not supported for directory buckets. Sets the configuration of the website that is specified in the website subresource. To configure a bucket as a website, you can add this subresource on the bucket with website configuration information such as the file name of the index document and any redirect rules. For more information, see Hosting Websites on Amazon S3. This PUT action requires the S3:PutBucketWebsite permission. By default, only the bucket owner can configure the website attached to a bucket; however, bucket owners can allow other users to set the website configuration by writing a bucket policy that grants them the S3:PutBucketWebsite permission. To redirect all website requests sent to the bucket's website endpoint, you add a website configuration with the following elements. Because all requests are sent to another website, you don't need to provide index document name for the bucket. WebsiteConfiguration RedirectAllRequestsTo HostName Protocol If you want granular control over redirects, you can use the following elements to add routing rules that describe conditions for redirecting requests and information about the redirect destination. In this case, the website configuration must provide an index document for the bucket, because some requests might not be redirected. WebsiteConfiguration IndexDocument Suffix ErrorDocument Key RoutingRules RoutingRule Condition HttpErrorCodeReturnedEquals KeyPrefixEquals Redirect Protocol HostName ReplaceKeyPrefixWith ReplaceKeyWith HttpRedirectCode Amazon S3 has a limitation of 50 routing rules per website configuration. If you require more than 50 routing rules, you can use object redirect. For more information, see Configuring an Object Redirect in the Amazon S3 User Guide. The maximum request length is limited to 128 KB. You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.</td>
</tr>
<tr>
    <td><a href="#delete_bucket_website"><CopyableCode code="delete_bucket_website" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-x-amz-expected-bucket-owner"><code>x-amz-expected-bucket-owner</code></a></td>
    <td>This operation is not supported for directory buckets. This action removes the website configuration for a bucket. Amazon S3 returns a 200 OK response upon successfully deleting a website configuration on the specified bucket. You will get a 200 OK response if the website configuration you are trying to delete does not exist on the bucket. Amazon S3 returns a 404 response if the bucket specified in the request does not exist. This DELETE action requires the S3:DeleteBucketWebsite permission. By default, only the bucket owner can delete the website configuration attached to a bucket. However, bucket owners can grant other users permission to delete the website configuration by writing a bucket policy granting them the S3:DeleteBucketWebsite permission. For more information about hosting websites, see Hosting Websites on Amazon S3. The following operations are related to DeleteBucketWebsite: GetBucketWebsite PutBucketWebsite You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-bucket">
    <td><CopyableCode code="bucket" /></td>
    <td><code>string</code></td>
    <td>The bucket name for which you want to remove the website configuration.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Content-MD5">
    <td><CopyableCode code="Content-MD5" /></td>
    <td><code>string</code></td>
    <td>The Base64 encoded 128-bit MD5 digest of the data. You must use this header as a message integrity check to verify that the request body was not corrupted in transit. For more information, see RFC 1864. For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.</td>
</tr>
<tr id="parameter-x-amz-expected-bucket-owner">
    <td><CopyableCode code="x-amz-expected-bucket-owner" /></td>
    <td><code>string</code></td>
    <td>The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied).</td>
</tr>
<tr id="parameter-x-amz-sdk-checksum-algorithm">
    <td><CopyableCode code="x-amz-sdk-checksum-algorithm" /></td>
    <td><code>string</code></td>
    <td>Indicates the algorithm used to create the checksum for the request when you use the SDK. This header will not provide any additional functionality if you don't use the SDK. When you send this header, there must be a corresponding x-amz-checksum or x-amz-trailer header sent. Otherwise, Amazon S3 fails the request with the HTTP status code 400 Bad Request. For more information, see Checking object integrity in the Amazon S3 User Guide. If you provide an individual checksum, Amazon S3 ignores any provided ChecksumAlgorithm parameter.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_bucket_website"
    values={[
        { label: 'get_bucket_website', value: 'get_bucket_website' }
    ]}
>
<TabItem value="get_bucket_website">

This operation is not supported for directory buckets. Returns the website configuration for a bucket. To host website on Amazon S3, you can configure a bucket as website by adding a website configuration. For more information about hosting websites, see Hosting Websites on Amazon S3. This GET action requires the S3:GetBucketWebsite permission. By default, only the bucket owner can read the bucket website configuration. However, bucket owners can allow other users to read the website configuration by writing a bucket policy granting them the S3:GetBucketWebsite permission. The following operations are related to GetBucketWebsite: DeleteBucketWebsite PutBucketWebsite You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.

```sql
SELECT
line_items
FROM aws.s3.bucket_websites
WHERE bucket = '{{ bucket }}' -- required
AND region = '{{ region }}' -- required
AND `x-amz-expected-bucket-owner` = '{{ x-amz-expected-bucket-owner }}'
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_bucket_website"
    values={[
        { label: 'put_bucket_website', value: 'put_bucket_website' }
    ]}
>
<TabItem value="put_bucket_website">

This operation is not supported for directory buckets. Sets the configuration of the website that is specified in the website subresource. To configure a bucket as a website, you can add this subresource on the bucket with website configuration information such as the file name of the index document and any redirect rules. For more information, see Hosting Websites on Amazon S3. This PUT action requires the S3:PutBucketWebsite permission. By default, only the bucket owner can configure the website attached to a bucket; however, bucket owners can allow other users to set the website configuration by writing a bucket policy that grants them the S3:PutBucketWebsite permission. To redirect all website requests sent to the bucket's website endpoint, you add a website configuration with the following elements. Because all requests are sent to another website, you don't need to provide index document name for the bucket. WebsiteConfiguration RedirectAllRequestsTo HostName Protocol If you want granular control over redirects, you can use the following elements to add routing rules that describe conditions for redirecting requests and information about the redirect destination. In this case, the website configuration must provide an index document for the bucket, because some requests might not be redirected. WebsiteConfiguration IndexDocument Suffix ErrorDocument Key RoutingRules RoutingRule Condition HttpErrorCodeReturnedEquals KeyPrefixEquals Redirect Protocol HostName ReplaceKeyPrefixWith ReplaceKeyWith HttpRedirectCode Amazon S3 has a limitation of 50 routing rules per website configuration. If you require more than 50 routing rules, you can use object redirect. For more information, see Configuring an Object Redirect in the Amazon S3 User Guide. The maximum request length is limited to 128 KB. You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.

```sql
REPLACE aws.s3.bucket_websites
SET 
WebsiteConfiguration = '{{ WebsiteConfiguration }}'
WHERE 
bucket = '{{ bucket }}' --required
AND region = '{{ region }}' --required
AND WebsiteConfiguration = '{{ WebsiteConfiguration }}' --required
AND `Content-MD5` = '{{ Content-MD5}}'
AND `x-amz-sdk-checksum-algorithm` = '{{ x-amz-sdk-checksum-algorithm}}'
AND `x-amz-expected-bucket-owner` = '{{ x-amz-expected-bucket-owner}}';
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_bucket_website"
    values={[
        { label: 'delete_bucket_website', value: 'delete_bucket_website' }
    ]}
>
<TabItem value="delete_bucket_website">

This operation is not supported for directory buckets. This action removes the website configuration for a bucket. Amazon S3 returns a 200 OK response upon successfully deleting a website configuration on the specified bucket. You will get a 200 OK response if the website configuration you are trying to delete does not exist on the bucket. Amazon S3 returns a 404 response if the bucket specified in the request does not exist. This DELETE action requires the S3:DeleteBucketWebsite permission. By default, only the bucket owner can delete the website configuration attached to a bucket. However, bucket owners can grant other users permission to delete the website configuration by writing a bucket policy granting them the S3:DeleteBucketWebsite permission. For more information about hosting websites, see Hosting Websites on Amazon S3. The following operations are related to DeleteBucketWebsite: GetBucketWebsite PutBucketWebsite You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.

```sql
DELETE FROM aws.s3.bucket_websites
WHERE bucket = '{{ bucket }}' --required
AND region = '{{ region }}' --required
AND `x-amz-expected-bucket-owner` = '{{ x-amz-expected-bucket-owner }}'
;
```
</TabItem>
</Tabs>
