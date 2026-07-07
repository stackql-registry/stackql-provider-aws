--- 
title: directories
hide_title: false
hide_table_of_contents: false
keywords:
  - directories
  - clouddirectory
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

Creates, updates, deletes, gets or lists a <code>directories</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="directories" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.clouddirectory.directories" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_directory"
    values={[
        { label: 'get_directory', value: 'get_directory' },
        { label: 'list_directories', value: 'list_directories' }
    ]}
>
<TabItem value="get_directory">

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
    <td><CopyableCode code="CreationDateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the directory was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DirectoryArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that is associated with the directory. For more information, see arns.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the directory. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9._-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The state of the directory. Can be either Enabled, Disabled, or Deleted. (ENABLED, DISABLED, DELETED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_directories">

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
    <td><CopyableCode code="CreationDateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the directory was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DirectoryArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that is associated with the directory. For more information, see arns.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the directory. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9._-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The state of the directory. Can be either Enabled, Disabled, or Deleted. (ENABLED, DISABLED, DELETED)</td>
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
    <td><a href="#get_directory"><CopyableCode code="get_directory" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-x-amz-data-partition"><code>x-amz-data-partition</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves metadata about a directory.</td>
</tr>
<tr>
    <td><a href="#list_directories"><CopyableCode code="list_directories" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists directories created within an account.</td>
</tr>
<tr>
    <td><a href="#create_directory"><CopyableCode code="create_directory" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-x-amz-data-partition"><code>x-amz-data-partition</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a Directory by copying the published schema into the directory. A directory cannot be created without a schema. You can also quickly create a directory using a managed schema, called the QuickStartSchema. For more information, see Managed Schema in the Amazon Cloud Directory Developer Guide.</td>
</tr>
<tr>
    <td><a href="#delete_directory"><CopyableCode code="delete_directory" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-x-amz-data-partition"><code>x-amz-data-partition</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a directory. Only disabled directories can be deleted. A deleted directory cannot be undone. Exercise extreme caution when deleting directories.</td>
</tr>
<tr>
    <td><a href="#upgrade_applied_schema"><CopyableCode code="upgrade_applied_schema" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-PublishedSchemaArn"><code>PublishedSchemaArn</code></a>, <a href="#parameter-DirectoryArn"><code>DirectoryArn</code></a></td>
    <td></td>
    <td>Upgrades a single directory in-place using the PublishedSchemaArn with schema updates found in MinorVersion. Backwards-compatible minor version upgrades are instantaneously available for readers on all objects in the directory. Note: This is a synchronous API call and upgrades only one schema on a given directory per call. To upgrade multiple directories from one schema, you would need to call this API on each directory.</td>
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
<tr id="parameter-x-amz-data-partition">
    <td><CopyableCode code="x-amz-data-partition" /></td>
    <td><code>string</code></td>
    <td>The ARN of the directory to delete.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_directory"
    values={[
        { label: 'get_directory', value: 'get_directory' },
        { label: 'list_directories', value: 'list_directories' }
    ]}
>
<TabItem value="get_directory">

Retrieves metadata about a directory.

```sql
SELECT
CreationDateTime,
DirectoryArn,
Name,
State
FROM aws.clouddirectory.directories
WHERE `x-amz-data-partition` = '{{ x-amz-data-partition }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_directories">

Lists directories created within an account.

```sql
SELECT
CreationDateTime,
DirectoryArn,
Name,
State
FROM aws.clouddirectory.directories
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_directory"
    values={[
        { label: 'create_directory', value: 'create_directory' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_directory">

Creates a Directory by copying the published schema into the directory. A directory cannot be created without a schema. You can also quickly create a directory using a managed schema, called the QuickStartSchema. For more information, see Managed Schema in the Amazon Cloud Directory Developer Guide.

```sql
INSERT INTO aws.clouddirectory.directories (
Name,
`x-amz-data-partition`,
region
)
SELECT 
'{{ Name }}',
'{{ x-amz-data-partition }}',
'{{ region }}'
RETURNING
AppliedSchemaArn,
DirectoryArn,
Name,
ObjectIdentifier
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: directories
  props:
    - name: x-amz-data-partition
      value: "{{ x-amz-data-partition }}"
      description: Required parameter for the directories resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the directories resource.
    - name: Name
      value: "{{ Name }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_directory"
    values={[
        { label: 'delete_directory', value: 'delete_directory' }
    ]}
>
<TabItem value="delete_directory">

Deletes a directory. Only disabled directories can be deleted. A deleted directory cannot be undone. Exercise extreme caution when deleting directories.

```sql
DELETE FROM aws.clouddirectory.directories
WHERE `x-amz-data-partition` = '{{ x-amz-data-partition }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="upgrade_applied_schema"
    values={[
        { label: 'upgrade_applied_schema', value: 'upgrade_applied_schema' }
    ]}
>
<TabItem value="upgrade_applied_schema">

Upgrades a single directory in-place using the PublishedSchemaArn with schema updates found in MinorVersion. Backwards-compatible minor version upgrades are instantaneously available for readers on all objects in the directory. Note: This is a synchronous API call and upgrades only one schema on a given directory per call. To upgrade multiple directories from one schema, you would need to call this API on each directory.

```sql
EXEC aws.clouddirectory.directories.upgrade_applied_schema 
@region='{{ region }}' --required 
@@json=
'{
"PublishedSchemaArn": "{{ PublishedSchemaArn }}", 
"DirectoryArn": "{{ DirectoryArn }}", 
"DryRun": {{ DryRun }}
}'
;
```
</TabItem>
</Tabs>
