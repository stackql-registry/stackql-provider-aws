--- 
title: bucket_metadata_table_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - bucket_metadata_table_configurations
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

Creates, updates, deletes, gets or lists a <code>bucket_metadata_table_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="bucket_metadata_table_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3.bucket_metadata_table_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_bucket_metadata_table_configuration"
    values={[
        { label: 'get_bucket_metadata_table_configuration', value: 'get_bucket_metadata_table_configuration' }
    ]}
>
<TabItem value="get_bucket_metadata_table_configuration">

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
    <td><CopyableCode code="error" /></td>
    <td><code>string</code></td>
    <td>If the CreateBucketMetadataTableConfiguration request succeeds, but S3 Metadata was unable to create the table, this structure contains the error code and error message.</td>
</tr>
<tr>
    <td><CopyableCode code="metadata_table_configuration_result" /></td>
    <td><code>string</code></td>
    <td>The V1 S3 Metadata configuration for a general purpose bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the metadata table. The status values are: CREATING - The metadata table is in the process of being created in the specified table bucket. ACTIVE - The metadata table has been created successfully, and records are being delivered to the table. FAILED - Amazon S3 is unable to create the metadata table, or Amazon S3 is unable to deliver records. See ErrorDetails for details.</td>
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
    <td><a href="#get_bucket_metadata_table_configuration"><CopyableCode code="get_bucket_metadata_table_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-x-amz-expected-bucket-owner"><code>x-amz-expected-bucket-owner</code></a></td>
    <td>We recommend that you retrieve your S3 Metadata configurations by using the V2 GetBucketMetadataTableConfiguration API operation. We no longer recommend using the V1 GetBucketMetadataTableConfiguration API operation. If you created your S3 Metadata configuration before July 15, 2025, we recommend that you delete and re-create your configuration by using CreateBucketMetadataConfiguration so that you can expire journal table records and create a live inventory table. Retrieves the V1 S3 Metadata configuration for a general purpose bucket. For more information, see Accelerating data discovery with S3 Metadata in the Amazon S3 User Guide. You can use the V2 GetBucketMetadataConfiguration API operation with V1 or V2 metadata table configurations. However, if you try to use the V1 GetBucketMetadataTableConfiguration API operation with V2 configurations, you will receive an HTTP 405 Method Not Allowed error. Make sure that you update your processes to use the new V2 API operations (CreateBucketMetadataConfiguration, GetBucketMetadataConfiguration, and DeleteBucketMetadataConfiguration) instead of the V1 API operations. Permissions To use this operation, you must have the s3:GetBucketMetadataTableConfiguration permission. For more information, see Setting up permissions for configuring metadata tables in the Amazon S3 User Guide. The following operations are related to GetBucketMetadataTableConfiguration: CreateBucketMetadataTableConfiguration DeleteBucketMetadataTableConfiguration You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.</td>
</tr>
<tr>
    <td><a href="#create_bucket_metadata_table_configuration"><CopyableCode code="create_bucket_metadata_table_configuration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-MetadataTableConfiguration"><code>MetadataTableConfiguration</code></a></td>
    <td><a href="#parameter-Content-MD5"><code>Content-MD5</code></a>, <a href="#parameter-x-amz-sdk-checksum-algorithm"><code>x-amz-sdk-checksum-algorithm</code></a>, <a href="#parameter-x-amz-expected-bucket-owner"><code>x-amz-expected-bucket-owner</code></a></td>
    <td>We recommend that you create your S3 Metadata configurations by using the V2 CreateBucketMetadataConfiguration API operation. We no longer recommend using the V1 CreateBucketMetadataTableConfiguration API operation. If you created your S3 Metadata configuration before July 15, 2025, we recommend that you delete and re-create your configuration by using CreateBucketMetadataConfiguration so that you can expire journal table records and create a live inventory table. Creates a V1 S3 Metadata configuration for a general purpose bucket. For more information, see Accelerating data discovery with S3 Metadata in the Amazon S3 User Guide. Permissions To use this operation, you must have the following permissions. For more information, see Setting up permissions for configuring metadata tables in the Amazon S3 User Guide. If you want to encrypt your metadata tables with server-side encryption with Key Management Service (KMS) keys (SSE-KMS), you need additional permissions. For more information, see Setting up permissions for configuring metadata tables in the Amazon S3 User Guide. If you also want to integrate your table bucket with Amazon Web Services analytics services so that you can query your metadata table, you need additional permissions. For more information, see Integrating Amazon S3 Tables with Amazon Web Services analytics services in the Amazon S3 User Guide. s3:CreateBucketMetadataTableConfiguration s3tables:CreateNamespace s3tables:GetTable s3tables:CreateTable s3tables:PutTablePolicy The following operations are related to CreateBucketMetadataTableConfiguration: DeleteBucketMetadataTableConfiguration GetBucketMetadataTableConfiguration You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.</td>
</tr>
<tr>
    <td><a href="#delete_bucket_metadata_table_configuration"><CopyableCode code="delete_bucket_metadata_table_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-x-amz-expected-bucket-owner"><code>x-amz-expected-bucket-owner</code></a></td>
    <td>We recommend that you delete your S3 Metadata configurations by using the V2 DeleteBucketMetadataTableConfiguration API operation. We no longer recommend using the V1 DeleteBucketMetadataTableConfiguration API operation. If you created your S3 Metadata configuration before July 15, 2025, we recommend that you delete and re-create your configuration by using CreateBucketMetadataConfiguration so that you can expire journal table records and create a live inventory table. Deletes a V1 S3 Metadata configuration from a general purpose bucket. For more information, see Accelerating data discovery with S3 Metadata in the Amazon S3 User Guide. You can use the V2 DeleteBucketMetadataConfiguration API operation with V1 or V2 metadata table configurations. However, if you try to use the V1 DeleteBucketMetadataTableConfiguration API operation with V2 configurations, you will receive an HTTP 405 Method Not Allowed error. Make sure that you update your processes to use the new V2 API operations (CreateBucketMetadataConfiguration, GetBucketMetadataConfiguration, and DeleteBucketMetadataConfiguration) instead of the V1 API operations. Permissions To use this operation, you must have the s3:DeleteBucketMetadataTableConfiguration permission. For more information, see Setting up permissions for configuring metadata tables in the Amazon S3 User Guide. The following operations are related to DeleteBucketMetadataTableConfiguration: CreateBucketMetadataTableConfiguration GetBucketMetadataTableConfiguration You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.</td>
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
    <td>The general purpose bucket that you want to remove the metadata table configuration from.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Content-MD5">
    <td><CopyableCode code="Content-MD5" /></td>
    <td><code>string</code></td>
    <td>The Content-MD5 header for the metadata table configuration.</td>
</tr>
<tr id="parameter-x-amz-expected-bucket-owner">
    <td><CopyableCode code="x-amz-expected-bucket-owner" /></td>
    <td><code>string</code></td>
    <td>The expected bucket owner of the general purpose bucket that you want to remove the metadata table configuration from.</td>
</tr>
<tr id="parameter-x-amz-sdk-checksum-algorithm">
    <td><CopyableCode code="x-amz-sdk-checksum-algorithm" /></td>
    <td><code>string</code></td>
    <td>The checksum algorithm to use with your metadata table configuration.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_bucket_metadata_table_configuration"
    values={[
        { label: 'get_bucket_metadata_table_configuration', value: 'get_bucket_metadata_table_configuration' }
    ]}
>
<TabItem value="get_bucket_metadata_table_configuration">

We recommend that you retrieve your S3 Metadata configurations by using the V2 GetBucketMetadataTableConfiguration API operation. We no longer recommend using the V1 GetBucketMetadataTableConfiguration API operation. If you created your S3 Metadata configuration before July 15, 2025, we recommend that you delete and re-create your configuration by using CreateBucketMetadataConfiguration so that you can expire journal table records and create a live inventory table. Retrieves the V1 S3 Metadata configuration for a general purpose bucket. For more information, see Accelerating data discovery with S3 Metadata in the Amazon S3 User Guide. You can use the V2 GetBucketMetadataConfiguration API operation with V1 or V2 metadata table configurations. However, if you try to use the V1 GetBucketMetadataTableConfiguration API operation with V2 configurations, you will receive an HTTP 405 Method Not Allowed error. Make sure that you update your processes to use the new V2 API operations (CreateBucketMetadataConfiguration, GetBucketMetadataConfiguration, and DeleteBucketMetadataConfiguration) instead of the V1 API operations. Permissions To use this operation, you must have the s3:GetBucketMetadataTableConfiguration permission. For more information, see Setting up permissions for configuring metadata tables in the Amazon S3 User Guide. The following operations are related to GetBucketMetadataTableConfiguration: CreateBucketMetadataTableConfiguration DeleteBucketMetadataTableConfiguration You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.

```sql
SELECT
error,
metadata_table_configuration_result,
status
FROM aws.s3.bucket_metadata_table_configurations
WHERE bucket = '{{ bucket }}' -- required
AND region = '{{ region }}' -- required
AND `x-amz-expected-bucket-owner` = '{{ x-amz-expected-bucket-owner }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_bucket_metadata_table_configuration"
    values={[
        { label: 'create_bucket_metadata_table_configuration', value: 'create_bucket_metadata_table_configuration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_bucket_metadata_table_configuration">

We recommend that you create your S3 Metadata configurations by using the V2 CreateBucketMetadataConfiguration API operation. We no longer recommend using the V1 CreateBucketMetadataTableConfiguration API operation. If you created your S3 Metadata configuration before July 15, 2025, we recommend that you delete and re-create your configuration by using CreateBucketMetadataConfiguration so that you can expire journal table records and create a live inventory table. Creates a V1 S3 Metadata configuration for a general purpose bucket. For more information, see Accelerating data discovery with S3 Metadata in the Amazon S3 User Guide. Permissions To use this operation, you must have the following permissions. For more information, see Setting up permissions for configuring metadata tables in the Amazon S3 User Guide. If you want to encrypt your metadata tables with server-side encryption with Key Management Service (KMS) keys (SSE-KMS), you need additional permissions. For more information, see Setting up permissions for configuring metadata tables in the Amazon S3 User Guide. If you also want to integrate your table bucket with Amazon Web Services analytics services so that you can query your metadata table, you need additional permissions. For more information, see Integrating Amazon S3 Tables with Amazon Web Services analytics services in the Amazon S3 User Guide. s3:CreateBucketMetadataTableConfiguration s3tables:CreateNamespace s3tables:GetTable s3tables:CreateTable s3tables:PutTablePolicy The following operations are related to CreateBucketMetadataTableConfiguration: DeleteBucketMetadataTableConfiguration GetBucketMetadataTableConfiguration You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.

```sql
INSERT INTO aws.s3.bucket_metadata_table_configurations (
MetadataTableConfiguration,
bucket,
region,
`Content-MD5`,
`x-amz-sdk-checksum-algorithm`,
`x-amz-expected-bucket-owner`
)
SELECT 
'{{ MetadataTableConfiguration }}' /* required */,
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
- name: bucket_metadata_table_configurations
  props:
    - name: bucket
      value: "{{ bucket }}"
      description: Required parameter for the bucket_metadata_table_configurations resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the bucket_metadata_table_configurations resource.
    - name: MetadataTableConfiguration
      description: |
        The V1 S3 Metadata configuration for a general purpose bucket. If you created your S3 Metadata configuration before July 15, 2025, we recommend that you delete and re-create your configuration by using CreateBucketMetadataConfiguration so that you can expire journal table records and create a live inventory table.
      value:
        S3TablesDestination:
          TableBucketArn: "{{ TableBucketArn }}"
          TableName: "{{ TableName }}"
    - name: Content-MD5
      value: "{{ Content-MD5 }}"
      description: The Content-MD5 header for the metadata table configuration.
      description: The Content-MD5 header for the metadata table configuration.
    - name: x-amz-sdk-checksum-algorithm
      value: "{{ x-amz-sdk-checksum-algorithm }}"
      description: The checksum algorithm to use with your metadata table configuration.
      description: The checksum algorithm to use with your metadata table configuration.
    - name: x-amz-expected-bucket-owner
      value: "{{ x-amz-expected-bucket-owner }}"
      description: The expected owner of the general purpose bucket that corresponds to your metadata table configuration.
      description: The expected owner of the general purpose bucket that corresponds to your metadata table configuration.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_bucket_metadata_table_configuration"
    values={[
        { label: 'delete_bucket_metadata_table_configuration', value: 'delete_bucket_metadata_table_configuration' }
    ]}
>
<TabItem value="delete_bucket_metadata_table_configuration">

We recommend that you delete your S3 Metadata configurations by using the V2 DeleteBucketMetadataTableConfiguration API operation. We no longer recommend using the V1 DeleteBucketMetadataTableConfiguration API operation. If you created your S3 Metadata configuration before July 15, 2025, we recommend that you delete and re-create your configuration by using CreateBucketMetadataConfiguration so that you can expire journal table records and create a live inventory table. Deletes a V1 S3 Metadata configuration from a general purpose bucket. For more information, see Accelerating data discovery with S3 Metadata in the Amazon S3 User Guide. You can use the V2 DeleteBucketMetadataConfiguration API operation with V1 or V2 metadata table configurations. However, if you try to use the V1 DeleteBucketMetadataTableConfiguration API operation with V2 configurations, you will receive an HTTP 405 Method Not Allowed error. Make sure that you update your processes to use the new V2 API operations (CreateBucketMetadataConfiguration, GetBucketMetadataConfiguration, and DeleteBucketMetadataConfiguration) instead of the V1 API operations. Permissions To use this operation, you must have the s3:DeleteBucketMetadataTableConfiguration permission. For more information, see Setting up permissions for configuring metadata tables in the Amazon S3 User Guide. The following operations are related to DeleteBucketMetadataTableConfiguration: CreateBucketMetadataTableConfiguration GetBucketMetadataTableConfiguration You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.

```sql
DELETE FROM aws.s3.bucket_metadata_table_configurations
WHERE bucket = '{{ bucket }}' --required
AND region = '{{ region }}' --required
AND `x-amz-expected-bucket-owner` = '{{ x-amz-expected-bucket-owner }}'
;
```
</TabItem>
</Tabs>
