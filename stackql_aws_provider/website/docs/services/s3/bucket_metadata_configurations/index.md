--- 
title: bucket_metadata_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - bucket_metadata_configurations
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

Creates, updates, deletes, gets or lists a <code>bucket_metadata_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="bucket_metadata_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3.bucket_metadata_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_bucket_metadata_configuration"
    values={[
        { label: 'get_bucket_metadata_configuration', value: 'get_bucket_metadata_configuration' }
    ]}
>
<TabItem value="get_bucket_metadata_configuration">

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
    <td><CopyableCode code="metadata_configuration_result" /></td>
    <td><code>string</code></td>
    <td>The metadata configuration for a general purpose bucket.</td>
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
    <td><a href="#get_bucket_metadata_configuration"><CopyableCode code="get_bucket_metadata_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-x-amz-expected-bucket-owner"><code>x-amz-expected-bucket-owner</code></a></td>
    <td>Retrieves the S3 Metadata configuration for a general purpose bucket. For more information, see Accelerating data discovery with S3 Metadata in the Amazon S3 User Guide. You can use the V2 GetBucketMetadataConfiguration API operation with V1 or V2 metadata configurations. However, if you try to use the V1 GetBucketMetadataTableConfiguration API operation with V2 configurations, you will receive an HTTP 405 Method Not Allowed error. Permissions To use this operation, you must have the s3:GetBucketMetadataTableConfiguration permission. For more information, see Setting up permissions for configuring metadata tables in the Amazon S3 User Guide. The IAM policy action name is the same for the V1 and V2 API operations. The following operations are related to GetBucketMetadataConfiguration: CreateBucketMetadataConfiguration DeleteBucketMetadataConfiguration UpdateBucketMetadataInventoryTableConfiguration UpdateBucketMetadataJournalTableConfiguration You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.</td>
</tr>
<tr>
    <td><a href="#create_bucket_metadata_configuration"><CopyableCode code="create_bucket_metadata_configuration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-MetadataConfiguration"><code>MetadataConfiguration</code></a></td>
    <td><a href="#parameter-Content-MD5"><code>Content-MD5</code></a>, <a href="#parameter-x-amz-sdk-checksum-algorithm"><code>x-amz-sdk-checksum-algorithm</code></a>, <a href="#parameter-x-amz-expected-bucket-owner"><code>x-amz-expected-bucket-owner</code></a></td>
    <td>Creates an S3 Metadata V2 metadata configuration for a general purpose bucket. For more information, see Accelerating data discovery with S3 Metadata in the Amazon S3 User Guide. Permissions To use this operation, you must have the following permissions. For more information, see Setting up permissions for configuring metadata tables in the Amazon S3 User Guide. If you want to encrypt your metadata tables with server-side encryption with Key Management Service (KMS) keys (SSE-KMS), you need additional permissions in your KMS key policy. For more information, see Setting up permissions for configuring metadata tables in the Amazon S3 User Guide. If you also want to integrate your table bucket with Amazon Web Services analytics services so that you can query your metadata table, you need additional permissions. For more information, see Integrating Amazon S3 Tables with Amazon Web Services analytics services in the Amazon S3 User Guide. To query your metadata tables, you need additional permissions. For more information, see Permissions for querying metadata tables in the Amazon S3 User Guide. s3:CreateBucketMetadataTableConfiguration The IAM policy action name is the same for the V1 and V2 API operations. s3tables:CreateTableBucket s3tables:CreateNamespace s3tables:GetTable s3tables:CreateTable s3tables:PutTablePolicy s3tables:PutTableEncryption kms:DescribeKey The following operations are related to CreateBucketMetadataConfiguration: DeleteBucketMetadataConfiguration GetBucketMetadataConfiguration UpdateBucketMetadataInventoryTableConfiguration UpdateBucketMetadataJournalTableConfiguration You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.</td>
</tr>
<tr>
    <td><a href="#delete_bucket_metadata_configuration"><CopyableCode code="delete_bucket_metadata_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-x-amz-expected-bucket-owner"><code>x-amz-expected-bucket-owner</code></a></td>
    <td>Deletes an S3 Metadata configuration from a general purpose bucket. For more information, see Accelerating data discovery with S3 Metadata in the Amazon S3 User Guide. You can use the V2 DeleteBucketMetadataConfiguration API operation with V1 or V2 metadata configurations. However, if you try to use the V1 DeleteBucketMetadataTableConfiguration API operation with V2 configurations, you will receive an HTTP 405 Method Not Allowed error. Permissions To use this operation, you must have the s3:DeleteBucketMetadataTableConfiguration permission. For more information, see Setting up permissions for configuring metadata tables in the Amazon S3 User Guide. The IAM policy action name is the same for the V1 and V2 API operations. The following operations are related to DeleteBucketMetadataConfiguration: CreateBucketMetadataConfiguration GetBucketMetadataConfiguration UpdateBucketMetadataInventoryTableConfiguration UpdateBucketMetadataJournalTableConfiguration You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.</td>
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
    <td>The general purpose bucket that you want to remove the metadata configuration from.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Content-MD5">
    <td><CopyableCode code="Content-MD5" /></td>
    <td><code>string</code></td>
    <td>The Content-MD5 header for the metadata configuration.</td>
</tr>
<tr id="parameter-x-amz-expected-bucket-owner">
    <td><CopyableCode code="x-amz-expected-bucket-owner" /></td>
    <td><code>string</code></td>
    <td>The expected bucket owner of the general purpose bucket that you want to remove the metadata table configuration from.</td>
</tr>
<tr id="parameter-x-amz-sdk-checksum-algorithm">
    <td><CopyableCode code="x-amz-sdk-checksum-algorithm" /></td>
    <td><code>string</code></td>
    <td>The checksum algorithm to use with your metadata configuration.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_bucket_metadata_configuration"
    values={[
        { label: 'get_bucket_metadata_configuration', value: 'get_bucket_metadata_configuration' }
    ]}
>
<TabItem value="get_bucket_metadata_configuration">

Retrieves the S3 Metadata configuration for a general purpose bucket. For more information, see Accelerating data discovery with S3 Metadata in the Amazon S3 User Guide. You can use the V2 GetBucketMetadataConfiguration API operation with V1 or V2 metadata configurations. However, if you try to use the V1 GetBucketMetadataTableConfiguration API operation with V2 configurations, you will receive an HTTP 405 Method Not Allowed error. Permissions To use this operation, you must have the s3:GetBucketMetadataTableConfiguration permission. For more information, see Setting up permissions for configuring metadata tables in the Amazon S3 User Guide. The IAM policy action name is the same for the V1 and V2 API operations. The following operations are related to GetBucketMetadataConfiguration: CreateBucketMetadataConfiguration DeleteBucketMetadataConfiguration UpdateBucketMetadataInventoryTableConfiguration UpdateBucketMetadataJournalTableConfiguration You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.

```sql
SELECT
metadata_configuration_result
FROM aws.s3.bucket_metadata_configurations
WHERE bucket = '{{ bucket }}' -- required
AND region = '{{ region }}' -- required
AND `x-amz-expected-bucket-owner` = '{{ x-amz-expected-bucket-owner }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_bucket_metadata_configuration"
    values={[
        { label: 'create_bucket_metadata_configuration', value: 'create_bucket_metadata_configuration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_bucket_metadata_configuration">

Creates an S3 Metadata V2 metadata configuration for a general purpose bucket. For more information, see Accelerating data discovery with S3 Metadata in the Amazon S3 User Guide. Permissions To use this operation, you must have the following permissions. For more information, see Setting up permissions for configuring metadata tables in the Amazon S3 User Guide. If you want to encrypt your metadata tables with server-side encryption with Key Management Service (KMS) keys (SSE-KMS), you need additional permissions in your KMS key policy. For more information, see Setting up permissions for configuring metadata tables in the Amazon S3 User Guide. If you also want to integrate your table bucket with Amazon Web Services analytics services so that you can query your metadata table, you need additional permissions. For more information, see Integrating Amazon S3 Tables with Amazon Web Services analytics services in the Amazon S3 User Guide. To query your metadata tables, you need additional permissions. For more information, see Permissions for querying metadata tables in the Amazon S3 User Guide. s3:CreateBucketMetadataTableConfiguration The IAM policy action name is the same for the V1 and V2 API operations. s3tables:CreateTableBucket s3tables:CreateNamespace s3tables:GetTable s3tables:CreateTable s3tables:PutTablePolicy s3tables:PutTableEncryption kms:DescribeKey The following operations are related to CreateBucketMetadataConfiguration: DeleteBucketMetadataConfiguration GetBucketMetadataConfiguration UpdateBucketMetadataInventoryTableConfiguration UpdateBucketMetadataJournalTableConfiguration You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.

```sql
INSERT INTO aws.s3.bucket_metadata_configurations (
MetadataConfiguration,
bucket,
region,
`Content-MD5`,
`x-amz-sdk-checksum-algorithm`,
`x-amz-expected-bucket-owner`
)
SELECT 
'{{ MetadataConfiguration }}' /* required */,
'{{ bucket }}',
'{{ region }}',
'{{ Content-MD5 }}',
'{{ x-amz-sdk-checksum-algorithm }}',
'{{ x-amz-expected-bucket-owner }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: bucket_metadata_configurations
  props:
    - name: bucket
      value: "{{ bucket }}"
      description: Required parameter for the bucket_metadata_configurations resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the bucket_metadata_configurations resource.
    - name: MetadataConfiguration
      description: |
        The S3 Metadata configuration for a general purpose bucket.
      value:
        JournalTableConfiguration:
          RecordExpiration:
            Expiration: "{{ Expiration }}"
            Days: {{ Days }}
          EncryptionConfiguration:
            SseAlgorithm: "{{ SseAlgorithm }}"
            KmsKeyArn: "{{ KmsKeyArn }}"
        InventoryTableConfiguration:
          ConfigurationState: "{{ ConfigurationState }}"
          EncryptionConfiguration:
            SseAlgorithm: "{{ SseAlgorithm }}"
            KmsKeyArn: "{{ KmsKeyArn }}"
    - name: Content-MD5
      value: "{{ Content-MD5 }}"
      description: The Content-MD5 header for the metadata configuration.
      description: The Content-MD5 header for the metadata configuration.
    - name: x-amz-sdk-checksum-algorithm
      value: "{{ x-amz-sdk-checksum-algorithm }}"
      description: The checksum algorithm to use with your metadata configuration.
      description: The checksum algorithm to use with your metadata configuration.
    - name: x-amz-expected-bucket-owner
      value: "{{ x-amz-expected-bucket-owner }}"
      description: The expected owner of the general purpose bucket that corresponds to your metadata configuration.
      description: The expected owner of the general purpose bucket that corresponds to your metadata configuration.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_bucket_metadata_configuration"
    values={[
        { label: 'delete_bucket_metadata_configuration', value: 'delete_bucket_metadata_configuration' }
    ]}
>
<TabItem value="delete_bucket_metadata_configuration">

Deletes an S3 Metadata configuration from a general purpose bucket. For more information, see Accelerating data discovery with S3 Metadata in the Amazon S3 User Guide. You can use the V2 DeleteBucketMetadataConfiguration API operation with V1 or V2 metadata configurations. However, if you try to use the V1 DeleteBucketMetadataTableConfiguration API operation with V2 configurations, you will receive an HTTP 405 Method Not Allowed error. Permissions To use this operation, you must have the s3:DeleteBucketMetadataTableConfiguration permission. For more information, see Setting up permissions for configuring metadata tables in the Amazon S3 User Guide. The IAM policy action name is the same for the V1 and V2 API operations. The following operations are related to DeleteBucketMetadataConfiguration: CreateBucketMetadataConfiguration GetBucketMetadataConfiguration UpdateBucketMetadataInventoryTableConfiguration UpdateBucketMetadataJournalTableConfiguration You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.

```sql
DELETE FROM aws.s3.bucket_metadata_configurations
WHERE bucket = '{{ bucket }}' --required
AND region = '{{ region }}' --required
AND `x-amz-expected-bucket-owner` = '{{ x-amz-expected-bucket-owner }}'
;
```
</TabItem>
</Tabs>
