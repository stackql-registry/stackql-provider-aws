--- 
title: data_source_permissions
hide_title: false
hide_table_of_contents: false
keywords:
  - data_source_permissions
  - quicksight
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

Creates, updates, deletes, gets or lists a <code>data_source_permissions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_source_permissions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.quicksight.data_source_permissions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_data_source_permissions"
    values={[
        { label: 'describe_data_source_permissions', value: 'describe_data_source_permissions' }
    ]}
>
<TabItem value="describe_data_source_permissions">

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
    <td><CopyableCode code="DataSourceArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the data source.</td>
</tr>
<tr>
    <td><CopyableCode code="DataSourceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the data source. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</td>
</tr>
<tr>
    <td><CopyableCode code="Permissions" /></td>
    <td><code>array</code></td>
    <td>A list of resource permissions on the data source.</td>
</tr>
<tr>
    <td><CopyableCode code="RequestId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services request ID for this operation.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>integer</code></td>
    <td>The HTTP status of the request.</td>
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
    <td><a href="#describe_data_source_permissions"><CopyableCode code="describe_data_source_permissions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-data_source_id"><code>data_source_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the resource permissions for a data source.</td>
</tr>
<tr>
    <td><a href="#update_data_source_permissions"><CopyableCode code="update_data_source_permissions" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-data_source_id"><code>data_source_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the permissions to a data source.</td>
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
<tr id="parameter-aws_account_id">
    <td><CopyableCode code="aws_account_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID.</td>
</tr>
<tr id="parameter-data_source_id">
    <td><CopyableCode code="data_source_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the data source. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</td>
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
    defaultValue="describe_data_source_permissions"
    values={[
        { label: 'describe_data_source_permissions', value: 'describe_data_source_permissions' }
    ]}
>
<TabItem value="describe_data_source_permissions">

Describes the resource permissions for a data source.

```sql
SELECT
DataSourceArn,
DataSourceId,
Permissions,
RequestId,
Status
FROM aws.quicksight.data_source_permissions
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND data_source_id = '{{ data_source_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_data_source_permissions"
    values={[
        { label: 'update_data_source_permissions', value: 'update_data_source_permissions' }
    ]}
>
<TabItem value="update_data_source_permissions">

Updates the permissions to a data source.

```sql
UPDATE aws.quicksight.data_source_permissions
SET 
GrantPermissions = '{{ GrantPermissions }}',
RevokePermissions = '{{ RevokePermissions }}'
WHERE 
aws_account_id = '{{ aws_account_id }}' --required
AND data_source_id = '{{ data_source_id }}' --required
AND region = '{{ region }}' --required
RETURNING
DataSourceArn,
DataSourceId,
RequestId,
Status;
```
</TabItem>
</Tabs>
