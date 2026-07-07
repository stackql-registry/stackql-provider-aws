--- 
title: file_system_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - file_system_policies
  - s3files
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

Creates, updates, deletes, gets or lists a <code>file_system_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="file_system_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3files.file_system_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_file_system_policy"
    values={[
        { label: 'get_file_system_policy', value: 'get_file_system_policy' }
    ]}
>
<TabItem value="get_file_system_policy">

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
    <td><CopyableCode code="fileSystemId" /></td>
    <td><code>string</code></td>
    <td>The ID of the file system. (pattern: &lt;code&gt;(arn:aws&#91;-a-z&#93;*:s3files:&#91;0-9a-z-:&#93;+:file-system/fs-&#91;0-9a-f&#93;&#123;17,40&#125;|fs-&#91;0-9a-f&#93;&#123;17,40&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="policy" /></td>
    <td><code>string</code></td>
    <td>The JSON-formatted resource policy for the file system.</td>
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
    <td><a href="#get_file_system_policy"><CopyableCode code="get_file_system_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-file_system_id"><code>file_system_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the IAM resource policy of an S3 File System.</td>
</tr>
<tr>
    <td><a href="#put_file_system_policy"><CopyableCode code="put_file_system_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-file_system_id"><code>file_system_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-policy"><code>policy</code></a></td>
    <td></td>
    <td>Creates or replaces the IAM resource policy for an S3 File System to control access permissions.</td>
</tr>
<tr>
    <td><a href="#delete_file_system_policy"><CopyableCode code="delete_file_system_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-file_system_id"><code>file_system_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the IAM resource policy of an S3 File System.</td>
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
<tr id="parameter-file_system_id">
    <td><CopyableCode code="file_system_id" /></td>
    <td><code>string</code></td>
    <td>The ID or Amazon Resource Name (ARN) of the S3 File System whose resource policy to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_file_system_policy"
    values={[
        { label: 'get_file_system_policy', value: 'get_file_system_policy' }
    ]}
>
<TabItem value="get_file_system_policy">

Returns the IAM resource policy of an S3 File System.

```sql
SELECT
fileSystemId,
policy
FROM aws.s3files.file_system_policies
WHERE file_system_id = '{{ file_system_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_file_system_policy"
    values={[
        { label: 'put_file_system_policy', value: 'put_file_system_policy' }
    ]}
>
<TabItem value="put_file_system_policy">

Creates or replaces the IAM resource policy for an S3 File System to control access permissions.

```sql
REPLACE aws.s3files.file_system_policies
SET 
policy = '{{ policy }}'
WHERE 
file_system_id = '{{ file_system_id }}' --required
AND region = '{{ region }}' --required
AND policy = '{{ policy }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_file_system_policy"
    values={[
        { label: 'delete_file_system_policy', value: 'delete_file_system_policy' }
    ]}
>
<TabItem value="delete_file_system_policy">

Deletes the IAM resource policy of an S3 File System.

```sql
DELETE FROM aws.s3files.file_system_policies
WHERE file_system_id = '{{ file_system_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
