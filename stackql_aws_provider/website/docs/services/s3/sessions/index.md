--- 
title: sessions
hide_title: false
hide_table_of_contents: false
keywords:
  - sessions
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

Creates, updates, deletes, gets or lists a <code>sessions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sessions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3.sessions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#create_session"><CopyableCode code="create_session" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-x-amz-create-session-mode"><code>x-amz-create-session-mode</code></a>, <a href="#parameter-x-amz-server-side-encryption"><code>x-amz-server-side-encryption</code></a>, <a href="#parameter-x-amz-server-side-encryption-aws-kms-key-id"><code>x-amz-server-side-encryption-aws-kms-key-id</code></a>, <a href="#parameter-x-amz-server-side-encryption-context"><code>x-amz-server-side-encryption-context</code></a>, <a href="#parameter-x-amz-server-side-encryption-bucket-key-enabled"><code>x-amz-server-side-encryption-bucket-key-enabled</code></a></td>
    <td>Creates a session that establishes temporary security credentials to support fast authentication and authorization for the Zonal endpoint API operations on directory buckets. For more information about Zonal endpoint API operations that include the Availability Zone in the request endpoint, see S3 Express One Zone APIs in the Amazon S3 User Guide. To make Zonal endpoint API requests on a directory bucket, use the CreateSession API operation. Specifically, you grant s3express:CreateSession permission to a bucket in a bucket policy or an IAM identity-based policy. Then, you use IAM credentials to make the CreateSession API request on the bucket, which returns temporary security credentials that include the access key ID, secret access key, session token, and expiration. These credentials have associated permissions to access the Zonal endpoint API operations. After the session is created, you don’t need to use other policies to grant permissions to each Zonal endpoint API individually. Instead, in your Zonal endpoint API requests, you sign your requests by applying the temporary security credentials of the session to the request headers and following the SigV4 protocol for authentication. You also apply the session token to the x-amz-s3session-token request header for authorization. Temporary security credentials are scoped to the bucket and expire after 5 minutes. After the expiration time, any calls that you make with those credentials will fail. You must use IAM credentials again to make a CreateSession API request that generates a new set of temporary credentials for use. Temporary credentials cannot be extended or refreshed beyond the original specified interval. If you use Amazon Web Services SDKs, SDKs handle the session token refreshes automatically to avoid service interruptions when a session expires. We recommend that you use the Amazon Web Services SDKs to initiate and manage requests to the CreateSession API. For more information, see Performance guidelines and design patterns in the Amazon S3 User Guide. You must make requests for this API operation to the Zonal endpoint. These endpoints support virtual-hosted-style requests in the format https:​//bucket-name.s3express-zone-id.region-code.amazonaws.com. Path-style requests are not supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Concepts for directory buckets in Local Zones in the Amazon S3 User Guide. CopyObject API operation - Unlike other Zonal endpoint API operations, the CopyObject API operation doesn't use the temporary security credentials returned from the CreateSession API operation for authentication and authorization. For information about authentication and authorization of the CopyObject API operation on directory buckets, see CopyObject. HeadBucket API operation - Unlike other Zonal endpoint API operations, the HeadBucket API operation doesn't use the temporary security credentials returned from the CreateSession API operation for authentication and authorization. For information about authentication and authorization of the HeadBucket API operation on directory buckets, see HeadBucket. Permissions To obtain temporary security credentials, you must create a bucket policy or an IAM identity-based policy that grants s3express:CreateSession permission to the bucket. In a policy, you can have the s3express:SessionMode condition key to control who can create a ReadWrite or ReadOnly session. For more information about ReadWrite or ReadOnly sessions, see x-amz-create-session-mode . For example policies, see Example bucket policies for S3 Express One Zone and Amazon Web Services Identity and Access Management (IAM) identity-based policies for S3 Express One Zone in the Amazon S3 User Guide. To grant cross-account access to Zonal endpoint API operations, the bucket policy should also grant both accounts the s3express:CreateSession permission. If you want to encrypt objects with SSE-KMS, you must also have the kms:GenerateDataKey and the kms:Decrypt permissions in IAM identity-based policies and KMS key policies for the target KMS key. Encryption For directory buckets, there are only two supported options for server-side encryption: server-side encryption with Amazon S3 managed keys (SSE-S3) (AES256) and server-side encryption with KMS keys (SSE-KMS) (aws:kms). We recommend that the bucket's default encryption uses the desired encryption configuration and you don't override the bucket default encryption in your CreateSession requests or PUT object requests. Then, new objects are automatically encrypted with the desired encryption settings. For more information, see Protecting data with server-side encryption in the Amazon S3 User Guide. For more information about the encryption overriding behaviors in directory buckets, see Specifying server-side encryption with KMS for new object uploads. For Zonal endpoint (object-level) API operations except CopyObject and UploadPartCopy, you authenticate and authorize requests through CreateSession for low latency. To encrypt new objects in a directory bucket with SSE-KMS, you must specify SSE-KMS as the directory bucket's default encryption configuration with a KMS key (specifically, a customer managed key). Then, when a session is created for Zonal endpoint API operations, new objects are automatically encrypted and decrypted with SSE-KMS and S3 Bucket Keys during the session. Only 1 customer managed key is supported per directory bucket for the lifetime of the bucket. The Amazon Web Services managed key (aws/s3) isn't supported. After you specify SSE-KMS as your bucket's default encryption configuration with a customer managed key, you can't change the customer managed key for the bucket's SSE-KMS configuration. In the Zonal endpoint API calls (except CopyObject and UploadPartCopy) using the REST API, you can't override the values of the encryption settings (x-amz-server-side-encryption, x-amz-server-side-encryption-aws-kms-key-id, x-amz-server-side-encryption-context, and x-amz-server-side-encryption-bucket-key-enabled) from the CreateSession request. You don't need to explicitly specify these encryption settings values in Zonal endpoint API calls, and Amazon S3 will use the encryption settings values from the CreateSession request to protect new objects in the directory bucket. When you use the CLI or the Amazon Web Services SDKs, for CreateSession, the session token refreshes automatically to avoid service interruptions when a session expires. The CLI or the Amazon Web Services SDKs use the bucket's default encryption configuration for the CreateSession request. It's not supported to override the encryption settings values in the CreateSession request. Also, in the Zonal endpoint API calls (except CopyObject and UploadPartCopy), it's not supported to override the values of the encryption settings from the CreateSession request. HTTP Host header syntax Directory buckets - The HTTP Host header syntax is Bucket-name.s3express-zone-id.region-code.amazonaws.com. You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.</td>
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
    <td>The name of the bucket that you create a session for.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-x-amz-create-session-mode">
    <td><CopyableCode code="x-amz-create-session-mode" /></td>
    <td><code>string</code></td>
    <td>Specifies the mode of the session that will be created, either ReadWrite or ReadOnly. If no session mode is specified, the default behavior attempts to create a session with the maximum allowable privilege. It will first attempt to create a ReadWrite session, and if that is not allowed by permissions, it will attempt to create a ReadOnly session. If neither session type is allowed, the request will return an Access Denied error. A ReadWrite session is capable of executing all the Zonal endpoint API operations on a directory bucket. A ReadOnly session is constrained to execute the following Zonal endpoint API operations: GetObject, HeadObject, ListObjectsV2, GetObjectAttributes, ListParts, and ListMultipartUploads.</td>
</tr>
<tr id="parameter-x-amz-server-side-encryption">
    <td><CopyableCode code="x-amz-server-side-encryption" /></td>
    <td><code>string</code></td>
    <td>The server-side encryption algorithm to use when you store objects in the directory bucket. For directory buckets, there are only two supported options for server-side encryption: server-side encryption with Amazon S3 managed keys (SSE-S3) (AES256) and server-side encryption with KMS keys (SSE-KMS) (aws:kms). By default, Amazon S3 encrypts data with SSE-S3. For more information, see Protecting data with server-side encryption in the Amazon S3 User Guide. S3 access points for Amazon FSx - When accessing data stored in Amazon FSx file systems using S3 access points, the only valid server side encryption option is aws:fsx. All Amazon FSx file systems have encryption configured by default and are encrypted at rest. Data is automatically encrypted before being written to the file system, and automatically decrypted as it is read. These processes are handled transparently by Amazon FSx.</td>
</tr>
<tr id="parameter-x-amz-server-side-encryption-aws-kms-key-id">
    <td><CopyableCode code="x-amz-server-side-encryption-aws-kms-key-id" /></td>
    <td><code>string</code></td>
    <td>If you specify x-amz-server-side-encryption with aws:kms, you must specify the x-amz-server-side-encryption-aws-kms-key-id header with the ID (Key ID or Key ARN) of the KMS symmetric encryption customer managed key to use. Otherwise, you get an HTTP 400 Bad Request error. Only use the key ID or key ARN. The key alias format of the KMS key isn't supported. Also, if the KMS key doesn't exist in the same account that't issuing the command, you must use the full Key ARN not the Key ID. Your SSE-KMS configuration can only support 1 customer managed key per directory bucket's lifetime. The Amazon Web Services managed key (aws/s3) isn't supported.</td>
</tr>
<tr id="parameter-x-amz-server-side-encryption-bucket-key-enabled">
    <td><CopyableCode code="x-amz-server-side-encryption-bucket-key-enabled" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether Amazon S3 should use an S3 Bucket Key for object encryption with server-side encryption using KMS keys (SSE-KMS). S3 Bucket Keys are always enabled for GET and PUT operations in a directory bucket and can’t be disabled. S3 Bucket Keys aren't supported, when you copy SSE-KMS encrypted objects from general purpose buckets to directory buckets, from directory buckets to general purpose buckets, or between directory buckets, through CopyObject, UploadPartCopy, the Copy operation in Batch Operations, or the import jobs. In this case, Amazon S3 makes a call to KMS every time a copy request is made for a KMS-encrypted object.</td>
</tr>
<tr id="parameter-x-amz-server-side-encryption-context">
    <td><CopyableCode code="x-amz-server-side-encryption-context" /></td>
    <td><code>string</code></td>
    <td>Specifies the Amazon Web Services KMS Encryption Context as an additional encryption context to use for object encryption. The value of this header is a Base64 encoded string of a UTF-8 encoded JSON, which contains the encryption context as key-value pairs. This value is stored as object metadata and automatically gets passed on to Amazon Web Services KMS for future GetObject operations on this object. General purpose buckets - This value must be explicitly added during CopyObject operations if you want an additional encryption context for your object. For more information, see Encryption context in the Amazon S3 User Guide. Directory buckets - You can optionally provide an explicit encryption context value. The value must match the default encryption context - the bucket Amazon Resource Name (ARN). An additional encryption context value is not supported.</td>
</tr>
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="create_session"
    values={[
        { label: 'create_session', value: 'create_session' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_session">

Creates a session that establishes temporary security credentials to support fast authentication and authorization for the Zonal endpoint API operations on directory buckets. For more information about Zonal endpoint API operations that include the Availability Zone in the request endpoint, see S3 Express One Zone APIs in the Amazon S3 User Guide. To make Zonal endpoint API requests on a directory bucket, use the CreateSession API operation. Specifically, you grant s3express:CreateSession permission to a bucket in a bucket policy or an IAM identity-based policy. Then, you use IAM credentials to make the CreateSession API request on the bucket, which returns temporary security credentials that include the access key ID, secret access key, session token, and expiration. These credentials have associated permissions to access the Zonal endpoint API operations. After the session is created, you don’t need to use other policies to grant permissions to each Zonal endpoint API individually. Instead, in your Zonal endpoint API requests, you sign your requests by applying the temporary security credentials of the session to the request headers and following the SigV4 protocol for authentication. You also apply the session token to the x-amz-s3session-token request header for authorization. Temporary security credentials are scoped to the bucket and expire after 5 minutes. After the expiration time, any calls that you make with those credentials will fail. You must use IAM credentials again to make a CreateSession API request that generates a new set of temporary credentials for use. Temporary credentials cannot be extended or refreshed beyond the original specified interval. If you use Amazon Web Services SDKs, SDKs handle the session token refreshes automatically to avoid service interruptions when a session expires. We recommend that you use the Amazon Web Services SDKs to initiate and manage requests to the CreateSession API. For more information, see Performance guidelines and design patterns in the Amazon S3 User Guide. You must make requests for this API operation to the Zonal endpoint. These endpoints support virtual-hosted-style requests in the format https://bucket-name.s3express-zone-id.region-code.amazonaws.com. Path-style requests are not supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Concepts for directory buckets in Local Zones in the Amazon S3 User Guide. CopyObject API operation - Unlike other Zonal endpoint API operations, the CopyObject API operation doesn't use the temporary security credentials returned from the CreateSession API operation for authentication and authorization. For information about authentication and authorization of the CopyObject API operation on directory buckets, see CopyObject. HeadBucket API operation - Unlike other Zonal endpoint API operations, the HeadBucket API operation doesn't use the temporary security credentials returned from the CreateSession API operation for authentication and authorization. For information about authentication and authorization of the HeadBucket API operation on directory buckets, see HeadBucket. Permissions To obtain temporary security credentials, you must create a bucket policy or an IAM identity-based policy that grants s3express:CreateSession permission to the bucket. In a policy, you can have the s3express:SessionMode condition key to control who can create a ReadWrite or ReadOnly session. For more information about ReadWrite or ReadOnly sessions, see x-amz-create-session-mode . For example policies, see Example bucket policies for S3 Express One Zone and Amazon Web Services Identity and Access Management (IAM) identity-based policies for S3 Express One Zone in the Amazon S3 User Guide. To grant cross-account access to Zonal endpoint API operations, the bucket policy should also grant both accounts the s3express:CreateSession permission. If you want to encrypt objects with SSE-KMS, you must also have the kms:GenerateDataKey and the kms:Decrypt permissions in IAM identity-based policies and KMS key policies for the target KMS key. Encryption For directory buckets, there are only two supported options for server-side encryption: server-side encryption with Amazon S3 managed keys (SSE-S3) (AES256) and server-side encryption with KMS keys (SSE-KMS) (aws:kms). We recommend that the bucket's default encryption uses the desired encryption configuration and you don't override the bucket default encryption in your CreateSession requests or PUT object requests. Then, new objects are automatically encrypted with the desired encryption settings. For more information, see Protecting data with server-side encryption in the Amazon S3 User Guide. For more information about the encryption overriding behaviors in directory buckets, see Specifying server-side encryption with KMS for new object uploads. For Zonal endpoint (object-level) API operations except CopyObject and UploadPartCopy, you authenticate and authorize requests through CreateSession for low latency. To encrypt new objects in a directory bucket with SSE-KMS, you must specify SSE-KMS as the directory bucket's default encryption configuration with a KMS key (specifically, a customer managed key). Then, when a session is created for Zonal endpoint API operations, new objects are automatically encrypted and decrypted with SSE-KMS and S3 Bucket Keys during the session. Only 1 customer managed key is supported per directory bucket for the lifetime of the bucket. The Amazon Web Services managed key (aws/s3) isn't supported. After you specify SSE-KMS as your bucket's default encryption configuration with a customer managed key, you can't change the customer managed key for the bucket's SSE-KMS configuration. In the Zonal endpoint API calls (except CopyObject and UploadPartCopy) using the REST API, you can't override the values of the encryption settings (x-amz-server-side-encryption, x-amz-server-side-encryption-aws-kms-key-id, x-amz-server-side-encryption-context, and x-amz-server-side-encryption-bucket-key-enabled) from the CreateSession request. You don't need to explicitly specify these encryption settings values in Zonal endpoint API calls, and Amazon S3 will use the encryption settings values from the CreateSession request to protect new objects in the directory bucket. When you use the CLI or the Amazon Web Services SDKs, for CreateSession, the session token refreshes automatically to avoid service interruptions when a session expires. The CLI or the Amazon Web Services SDKs use the bucket's default encryption configuration for the CreateSession request. It's not supported to override the encryption settings values in the CreateSession request. Also, in the Zonal endpoint API calls (except CopyObject and UploadPartCopy), it's not supported to override the values of the encryption settings from the CreateSession request. HTTP Host header syntax Directory buckets - The HTTP Host header syntax is Bucket-name.s3express-zone-id.region-code.amazonaws.com. You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.

```sql
INSERT INTO aws.s3.sessions (
bucket,
region,
`x-amz-create-session-mode`,
`x-amz-server-side-encryption`,
`x-amz-server-side-encryption-aws-kms-key-id`,
`x-amz-server-side-encryption-context`,
`x-amz-server-side-encryption-bucket-key-enabled`
)
SELECT 
'{{ bucket }}',
'{{ region }}',
'{{ x-amz-create-session-mode }}',
'{{ x-amz-server-side-encryption }}',
'{{ x-amz-server-side-encryption-aws-kms-key-id }}',
'{{ x-amz-server-side-encryption-context }}',
'{{ x-amz-server-side-encryption-bucket-key-enabled }}'
RETURNING
line_items
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: sessions
  props:
    - name: bucket
      value: "{{ bucket }}"
      description: Required parameter for the sessions resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the sessions resource.
    - name: x-amz-create-session-mode
      value: "{{ x-amz-create-session-mode }}"
      description: Specifies the mode of the session that will be created, either ReadWrite or ReadOnly. If no session mode is specified, the default behavior attempts to create a session with the maximum allowable privilege. It will first attempt to create a ReadWrite session, and if that is not allowed by permissions, it will attempt to create a ReadOnly session. If neither session type is allowed, the request will return an Access Denied error. A ReadWrite session is capable of executing all the Zonal endpoint API operations on a directory bucket. A ReadOnly session is constrained to execute the following Zonal endpoint API operations: GetObject, HeadObject, ListObjectsV2, GetObjectAttributes, ListParts, and ListMultipartUploads.
      description: Specifies the mode of the session that will be created, either ReadWrite or ReadOnly. If no session mode is specified, the default behavior attempts to create a session with the maximum allowable privilege. It will first attempt to create a ReadWrite session, and if that is not allowed by permissions, it will attempt to create a ReadOnly session. If neither session type is allowed, the request will return an Access Denied error. A ReadWrite session is capable of executing all the Zonal endpoint API operations on a directory bucket. A ReadOnly session is constrained to execute the following Zonal endpoint API operations: GetObject, HeadObject, ListObjectsV2, GetObjectAttributes, ListParts, and ListMultipartUploads.
    - name: x-amz-server-side-encryption
      value: "{{ x-amz-server-side-encryption }}"
      description: The server-side encryption algorithm to use when you store objects in the directory bucket. For directory buckets, there are only two supported options for server-side encryption: server-side encryption with Amazon S3 managed keys (SSE-S3) (AES256) and server-side encryption with KMS keys (SSE-KMS) (aws:kms). By default, Amazon S3 encrypts data with SSE-S3. For more information, see Protecting data with server-side encryption in the Amazon S3 User Guide. S3 access points for Amazon FSx - When accessing data stored in Amazon FSx file systems using S3 access points, the only valid server side encryption option is aws:fsx. All Amazon FSx file systems have encryption configured by default and are encrypted at rest. Data is automatically encrypted before being written to the file system, and automatically decrypted as it is read. These processes are handled transparently by Amazon FSx.
      description: The server-side encryption algorithm to use when you store objects in the directory bucket. For directory buckets, there are only two supported options for server-side encryption: server-side encryption with Amazon S3 managed keys (SSE-S3) (AES256) and server-side encryption with KMS keys (SSE-KMS) (aws:kms). By default, Amazon S3 encrypts data with SSE-S3. For more information, see Protecting data with server-side encryption in the Amazon S3 User Guide. S3 access points for Amazon FSx - When accessing data stored in Amazon FSx file systems using S3 access points, the only valid server side encryption option is aws:fsx. All Amazon FSx file systems have encryption configured by default and are encrypted at rest. Data is automatically encrypted before being written to the file system, and automatically decrypted as it is read. These processes are handled transparently by Amazon FSx.
    - name: x-amz-server-side-encryption-aws-kms-key-id
      value: "{{ x-amz-server-side-encryption-aws-kms-key-id }}"
      description: If you specify x-amz-server-side-encryption with aws:kms, you must specify the x-amz-server-side-encryption-aws-kms-key-id header with the ID (Key ID or Key ARN) of the KMS symmetric encryption customer managed key to use. Otherwise, you get an HTTP 400 Bad Request error. Only use the key ID or key ARN. The key alias format of the KMS key isn't supported. Also, if the KMS key doesn't exist in the same account that't issuing the command, you must use the full Key ARN not the Key ID. Your SSE-KMS configuration can only support 1 customer managed key per directory bucket's lifetime. The Amazon Web Services managed key (aws/s3) isn't supported.
      description: If you specify x-amz-server-side-encryption with aws:kms, you must specify the x-amz-server-side-encryption-aws-kms-key-id header with the ID (Key ID or Key ARN) of the KMS symmetric encryption customer managed key to use. Otherwise, you get an HTTP 400 Bad Request error. Only use the key ID or key ARN. The key alias format of the KMS key isn't supported. Also, if the KMS key doesn't exist in the same account that't issuing the command, you must use the full Key ARN not the Key ID. Your SSE-KMS configuration can only support 1 customer managed key per directory bucket's lifetime. The Amazon Web Services managed key (aws/s3) isn't supported.
    - name: x-amz-server-side-encryption-context
      value: "{{ x-amz-server-side-encryption-context }}"
      description: Specifies the Amazon Web Services KMS Encryption Context as an additional encryption context to use for object encryption. The value of this header is a Base64 encoded string of a UTF-8 encoded JSON, which contains the encryption context as key-value pairs. This value is stored as object metadata and automatically gets passed on to Amazon Web Services KMS for future GetObject operations on this object. General purpose buckets - This value must be explicitly added during CopyObject operations if you want an additional encryption context for your object. For more information, see Encryption context in the Amazon S3 User Guide. Directory buckets - You can optionally provide an explicit encryption context value. The value must match the default encryption context - the bucket Amazon Resource Name (ARN). An additional encryption context value is not supported.
      description: Specifies the Amazon Web Services KMS Encryption Context as an additional encryption context to use for object encryption. The value of this header is a Base64 encoded string of a UTF-8 encoded JSON, which contains the encryption context as key-value pairs. This value is stored as object metadata and automatically gets passed on to Amazon Web Services KMS for future GetObject operations on this object. General purpose buckets - This value must be explicitly added during CopyObject operations if you want an additional encryption context for your object. For more information, see Encryption context in the Amazon S3 User Guide. Directory buckets - You can optionally provide an explicit encryption context value. The value must match the default encryption context - the bucket Amazon Resource Name (ARN). An additional encryption context value is not supported.
    - name: x-amz-server-side-encryption-bucket-key-enabled
      value: {{ x-amz-server-side-encryption-bucket-key-enabled }}
      description: Specifies whether Amazon S3 should use an S3 Bucket Key for object encryption with server-side encryption using KMS keys (SSE-KMS). S3 Bucket Keys are always enabled for GET and PUT operations in a directory bucket and can’t be disabled. S3 Bucket Keys aren't supported, when you copy SSE-KMS encrypted objects from general purpose buckets to directory buckets, from directory buckets to general purpose buckets, or between directory buckets, through CopyObject, UploadPartCopy, the Copy operation in Batch Operations, or the import jobs. In this case, Amazon S3 makes a call to KMS every time a copy request is made for a KMS-encrypted object.
      description: Specifies whether Amazon S3 should use an S3 Bucket Key for object encryption with server-side encryption using KMS keys (SSE-KMS). S3 Bucket Keys are always enabled for GET and PUT operations in a directory bucket and can’t be disabled. S3 Bucket Keys aren't supported, when you copy SSE-KMS encrypted objects from general purpose buckets to directory buckets, from directory buckets to general purpose buckets, or between directory buckets, through CopyObject, UploadPartCopy, the Copy operation in Batch Operations, or the import jobs. In this case, Amazon S3 makes a call to KMS every time a copy request is made for a KMS-encrypted object.
`}</CodeBlock>

</TabItem>
</Tabs>
