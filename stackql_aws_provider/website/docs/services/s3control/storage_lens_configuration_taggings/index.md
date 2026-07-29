--- 
title: storage_lens_configuration_taggings
hide_title: false
hide_table_of_contents: false
keywords:
  - storage_lens_configuration_taggings
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

Creates, updates, deletes, gets or lists a <code>storage_lens_configuration_taggings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="storage_lens_configuration_taggings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3control.storage_lens_configuration_taggings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_storage_lens_configuration_tagging"
    values={[
        { label: 'get_storage_lens_configuration_tagging', value: 'get_storage_lens_configuration_tagging' }
    ]}
>
<TabItem value="get_storage_lens_configuration_tagging">

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
    <td><CopyableCode code="tags" /></td>
    <td><code>string</code></td>
    <td>The tags of S3 Storage Lens configuration requested.</td>
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
    <td><a href="#get_storage_lens_configuration_tagging"><CopyableCode code="get_storage_lens_configuration_tagging" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-storagelensid"><code>storagelensid</code></a>, <a href="#parameter-x-amz-account-id"><code>x-amz-account-id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation is not supported by directory buckets. Gets the tags of Amazon S3 Storage Lens configuration. For more information about S3 Storage Lens, see Assessing your storage activity and usage with Amazon S3 Storage Lens in the Amazon S3 User Guide. To use this action, you must have permission to perform the s3:GetStorageLensConfigurationTagging action. For more information, see Setting permissions to use Amazon S3 Storage Lens in the Amazon S3 User Guide.</td>
</tr>
<tr>
    <td><a href="#put_storage_lens_configuration_tagging"><CopyableCode code="put_storage_lens_configuration_tagging" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-storagelensid"><code>storagelensid</code></a>, <a href="#parameter-x-amz-account-id"><code>x-amz-account-id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation is not supported by directory buckets. Put or replace tags on an existing Amazon S3 Storage Lens configuration. For more information about S3 Storage Lens, see Assessing your storage activity and usage with Amazon S3 Storage Lens in the Amazon S3 User Guide. To use this action, you must have permission to perform the s3:PutStorageLensConfigurationTagging action. For more information, see Setting permissions to use Amazon S3 Storage Lens in the Amazon S3 User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_storage_lens_configuration_tagging"><CopyableCode code="delete_storage_lens_configuration_tagging" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-storagelensid"><code>storagelensid</code></a>, <a href="#parameter-x-amz-account-id"><code>x-amz-account-id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation is not supported by directory buckets. Deletes the Amazon S3 Storage Lens configuration tags. For more information about S3 Storage Lens, see Assessing your storage activity and usage with Amazon S3 Storage Lens in the Amazon S3 User Guide. To use this action, you must have permission to perform the s3:DeleteStorageLensConfigurationTagging action. For more information, see Setting permissions to use Amazon S3 Storage Lens in the Amazon S3 User Guide.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_storage_lens_configuration_tagging"
    values={[
        { label: 'get_storage_lens_configuration_tagging', value: 'get_storage_lens_configuration_tagging' }
    ]}
>
<TabItem value="get_storage_lens_configuration_tagging">

This operation is not supported by directory buckets. Gets the tags of Amazon S3 Storage Lens configuration. For more information about S3 Storage Lens, see Assessing your storage activity and usage with Amazon S3 Storage Lens in the Amazon S3 User Guide. To use this action, you must have permission to perform the s3:GetStorageLensConfigurationTagging action. For more information, see Setting permissions to use Amazon S3 Storage Lens in the Amazon S3 User Guide.

```sql
SELECT
tags
FROM aws.s3control.storage_lens_configuration_taggings
WHERE storagelensid = '{{ storagelensid }}' -- required
AND `x-amz-account-id` = '{{ x-amz-account-id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_storage_lens_configuration_tagging"
    values={[
        { label: 'put_storage_lens_configuration_tagging', value: 'put_storage_lens_configuration_tagging' }
    ]}
>
<TabItem value="put_storage_lens_configuration_tagging">

This operation is not supported by directory buckets. Put or replace tags on an existing Amazon S3 Storage Lens configuration. For more information about S3 Storage Lens, see Assessing your storage activity and usage with Amazon S3 Storage Lens in the Amazon S3 User Guide. To use this action, you must have permission to perform the s3:PutStorageLensConfigurationTagging action. For more information, see Setting permissions to use Amazon S3 Storage Lens in the Amazon S3 User Guide.

```sql
REPLACE aws.s3control.storage_lens_configuration_taggings
SET 
Tags = '{{ Tags }}'
WHERE 
storagelensid = '{{ storagelensid }}' --required
AND `x-amz-account-id` = '{{ x-amz-account-id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_storage_lens_configuration_tagging"
    values={[
        { label: 'delete_storage_lens_configuration_tagging', value: 'delete_storage_lens_configuration_tagging' }
    ]}
>
<TabItem value="delete_storage_lens_configuration_tagging">

This operation is not supported by directory buckets. Deletes the Amazon S3 Storage Lens configuration tags. For more information about S3 Storage Lens, see Assessing your storage activity and usage with Amazon S3 Storage Lens in the Amazon S3 User Guide. To use this action, you must have permission to perform the s3:DeleteStorageLensConfigurationTagging action. For more information, see Setting permissions to use Amazon S3 Storage Lens in the Amazon S3 User Guide.

```sql
DELETE FROM aws.s3control.storage_lens_configuration_taggings
WHERE storagelensid = '{{ storagelensid }}' --required
AND `x-amz-account-id` = '{{ x-amz-account-id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
