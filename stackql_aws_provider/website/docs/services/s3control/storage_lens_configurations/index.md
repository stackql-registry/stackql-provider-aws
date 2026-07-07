--- 
title: storage_lens_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - storage_lens_configurations
  - s3control
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

Creates, updates, deletes, gets or lists a <code>storage_lens_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="storage_lens_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3control.storage_lens_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_storage_lens_configuration"
    values={[
        { label: 'get_storage_lens_configuration', value: 'get_storage_lens_configuration' },
        { label: 'list_storage_lens_configurations', value: 'list_storage_lens_configurations' }
    ]}
>
<TabItem value="get_storage_lens_configuration">

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
    <td><CopyableCode code="AccountLevel" /></td>
    <td><code>string</code></td>
    <td>A container for all the account-level configurations of your S3 Storage Lens configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="AwsOrg" /></td>
    <td><code>string</code></td>
    <td>A container for the Amazon Web Services organization for this S3 Storage Lens configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="DataExport" /></td>
    <td><code>string</code></td>
    <td>A container to specify the properties of your S3 Storage Lens metrics export including, the destination, schema and format.</td>
</tr>
<tr>
    <td><CopyableCode code="Exclude" /></td>
    <td><code>string</code></td>
    <td>A container for what is excluded in this configuration. This container can only be valid if there is no Include container submitted, and it's not empty.</td>
</tr>
<tr>
    <td><CopyableCode code="ExpandedPrefixesDataExport" /></td>
    <td><code>string</code></td>
    <td>A container that configures your S3 Storage Lens expanded prefixes metrics report.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>A container for the Amazon S3 Storage Lens configuration ID.</td>
</tr>
<tr>
    <td><CopyableCode code="Include" /></td>
    <td><code>string</code></td>
    <td>A container for what is included in this configuration. This container can only be valid if there is no Exclude container submitted, and it's not empty.</td>
</tr>
<tr>
    <td><CopyableCode code="IsEnabled" /></td>
    <td><code>boolean</code></td>
    <td>A container for whether the S3 Storage Lens configuration is enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="PrefixDelimiter" /></td>
    <td><code>string</code></td>
    <td>A container for all prefix delimiters that are used for object keys in this S3 Storage Lens configuration. The prefix delimiters determine how S3 Storage Lens counts prefix depth, by separating the hierarchical levels in object keys. If either a prefix delimiter or existing delimiter is undefined, Amazon S3 uses the delimiter that’s defined. If both the prefix delimiter and existing delimiter are undefined, S3 uses / as the default delimiter. When custom delimiters are used, both the prefix delimiter and existing delimiter must specify the same special character. Otherwise, your request results in an error.</td>
</tr>
<tr>
    <td><CopyableCode code="StorageLensArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the S3 Storage Lens configuration. This property is read-only and follows the following format: arn:aws:s3:us-east-1:example-account-id:storage-lens/your-dashboard-name</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_storage_lens_configurations">

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
    <td><CopyableCode code="HomeRegion" /></td>
    <td><code>string</code></td>
    <td>A container for the S3 Storage Lens home Region. Your metrics data is stored and retained in your designated S3 Storage Lens home Region.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>A container for the S3 Storage Lens configuration ID.</td>
</tr>
<tr>
    <td><CopyableCode code="IsEnabled" /></td>
    <td><code>boolean</code></td>
    <td>A container for whether the S3 Storage Lens configuration is enabled. This property is required.</td>
</tr>
<tr>
    <td><CopyableCode code="StorageLensArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the S3 Storage Lens configuration. This property is read-only.</td>
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
    <td><a href="#get_storage_lens_configuration"><CopyableCode code="get_storage_lens_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-storagelensid"><code>storagelensid</code></a>, <a href="#parameter-x-amz-account-id"><code>x-amz-account-id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation is not supported by directory buckets. Gets the Amazon S3 Storage Lens configuration. For more information, see Assessing your storage activity and usage with Amazon S3 Storage Lens in the Amazon S3 User Guide. For a complete list of S3 Storage Lens metrics, see S3 Storage Lens metrics glossary in the Amazon S3 User Guide. To use this action, you must have permission to perform the s3:GetStorageLensConfiguration action. For more information, see Setting permissions to use Amazon S3 Storage Lens in the Amazon S3 User Guide.</td>
</tr>
<tr>
    <td><a href="#list_storage_lens_configurations"><CopyableCode code="list_storage_lens_configurations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-x-amz-account-id"><code>x-amz-account-id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>This operation is not supported by directory buckets. Gets a list of Amazon S3 Storage Lens configurations. For more information about S3 Storage Lens, see Assessing your storage activity and usage with Amazon S3 Storage Lens in the Amazon S3 User Guide. To use this action, you must have permission to perform the s3:ListStorageLensConfigurations action. For more information, see Setting permissions to use Amazon S3 Storage Lens in the Amazon S3 User Guide.</td>
</tr>
<tr>
    <td><a href="#put_storage_lens_configuration"><CopyableCode code="put_storage_lens_configuration" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-storagelensid"><code>storagelensid</code></a>, <a href="#parameter-x-amz-account-id"><code>x-amz-account-id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-StorageLensConfiguration"><code>StorageLensConfiguration</code></a></td>
    <td></td>
    <td>This operation is not supported by directory buckets. Puts an Amazon S3 Storage Lens configuration. For more information about S3 Storage Lens, see Working with Amazon S3 Storage Lens in the Amazon S3 User Guide. For a complete list of S3 Storage Lens metrics, see S3 Storage Lens metrics glossary in the Amazon S3 User Guide. To use this action, you must have permission to perform the s3:PutStorageLensConfiguration action. For more information, see Setting permissions to use Amazon S3 Storage Lens in the Amazon S3 User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_storage_lens_configuration"><CopyableCode code="delete_storage_lens_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-storagelensid"><code>storagelensid</code></a>, <a href="#parameter-x-amz-account-id"><code>x-amz-account-id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation is not supported by directory buckets. Deletes the Amazon S3 Storage Lens configuration. For more information about S3 Storage Lens, see Assessing your storage activity and usage with Amazon S3 Storage Lens in the Amazon S3 User Guide. To use this action, you must have permission to perform the s3:DeleteStorageLensConfiguration action. For more information, see Setting permissions to use Amazon S3 Storage Lens in the Amazon S3 User Guide.</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-storagelensid">
    <td><CopyableCode code="storagelensid" /></td>
    <td><code>string</code></td>
    <td>The ID of the S3 Storage Lens configuration.</td>
</tr>
<tr id="parameter-x-amz-account-id">
    <td><CopyableCode code="x-amz-account-id" /></td>
    <td><code>string</code></td>
    <td>The account ID of the requester.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A pagination token to request the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_storage_lens_configuration"
    values={[
        { label: 'get_storage_lens_configuration', value: 'get_storage_lens_configuration' },
        { label: 'list_storage_lens_configurations', value: 'list_storage_lens_configurations' }
    ]}
>
<TabItem value="get_storage_lens_configuration">

This operation is not supported by directory buckets. Gets the Amazon S3 Storage Lens configuration. For more information, see Assessing your storage activity and usage with Amazon S3 Storage Lens in the Amazon S3 User Guide. For a complete list of S3 Storage Lens metrics, see S3 Storage Lens metrics glossary in the Amazon S3 User Guide. To use this action, you must have permission to perform the s3:GetStorageLensConfiguration action. For more information, see Setting permissions to use Amazon S3 Storage Lens in the Amazon S3 User Guide.

```sql
SELECT
AccountLevel,
AwsOrg,
DataExport,
Exclude,
ExpandedPrefixesDataExport,
Id,
Include,
IsEnabled,
PrefixDelimiter,
StorageLensArn
FROM aws.s3control.storage_lens_configurations
WHERE storagelensid = '{{ storagelensid }}' -- required
AND `x-amz-account-id` = '{{ x-amz-account-id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_storage_lens_configurations">

This operation is not supported by directory buckets. Gets a list of Amazon S3 Storage Lens configurations. For more information about S3 Storage Lens, see Assessing your storage activity and usage with Amazon S3 Storage Lens in the Amazon S3 User Guide. To use this action, you must have permission to perform the s3:ListStorageLensConfigurations action. For more information, see Setting permissions to use Amazon S3 Storage Lens in the Amazon S3 User Guide.

```sql
SELECT
HomeRegion,
Id,
IsEnabled,
StorageLensArn
FROM aws.s3control.storage_lens_configurations
WHERE `x-amz-account-id` = '{{ x-amz-account-id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_storage_lens_configuration"
    values={[
        { label: 'put_storage_lens_configuration', value: 'put_storage_lens_configuration' }
    ]}
>
<TabItem value="put_storage_lens_configuration">

This operation is not supported by directory buckets. Puts an Amazon S3 Storage Lens configuration. For more information about S3 Storage Lens, see Working with Amazon S3 Storage Lens in the Amazon S3 User Guide. For a complete list of S3 Storage Lens metrics, see S3 Storage Lens metrics glossary in the Amazon S3 User Guide. To use this action, you must have permission to perform the s3:PutStorageLensConfiguration action. For more information, see Setting permissions to use Amazon S3 Storage Lens in the Amazon S3 User Guide.

```sql
REPLACE aws.s3control.storage_lens_configurations
SET 
StorageLensConfiguration = '{{ StorageLensConfiguration }}',
Tags = '{{ Tags }}'
WHERE 
storagelensid = '{{ storagelensid }}' --required
AND `x-amz-account-id` = '{{ x-amz-account-id }}' --required
AND region = '{{ region }}' --required
AND StorageLensConfiguration = '{{ StorageLensConfiguration }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_storage_lens_configuration"
    values={[
        { label: 'delete_storage_lens_configuration', value: 'delete_storage_lens_configuration' }
    ]}
>
<TabItem value="delete_storage_lens_configuration">

This operation is not supported by directory buckets. Deletes the Amazon S3 Storage Lens configuration. For more information about S3 Storage Lens, see Assessing your storage activity and usage with Amazon S3 Storage Lens in the Amazon S3 User Guide. To use this action, you must have permission to perform the s3:DeleteStorageLensConfiguration action. For more information, see Setting permissions to use Amazon S3 Storage Lens in the Amazon S3 User Guide.

```sql
DELETE FROM aws.s3control.storage_lens_configurations
WHERE storagelensid = '{{ storagelensid }}' --required
AND `x-amz-account-id` = '{{ x-amz-account-id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
