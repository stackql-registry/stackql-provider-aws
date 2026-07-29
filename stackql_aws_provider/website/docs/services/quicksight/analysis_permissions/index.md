--- 
title: analysis_permissions
hide_title: false
hide_table_of_contents: false
keywords:
  - analysis_permissions
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

Creates, updates, deletes, gets or lists an <code>analysis_permissions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="analysis_permissions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.quicksight.analysis_permissions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_analysis_permissions"
    values={[
        { label: 'describe_analysis_permissions', value: 'describe_analysis_permissions' }
    ]}
>
<TabItem value="describe_analysis_permissions">

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
    <td><CopyableCode code="analysis_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the analysis whose permissions you're describing.</td>
</tr>
<tr>
    <td><CopyableCode code="analysis_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the analysis whose permissions you're describing. (pattern: &lt;code&gt;&#91;\w\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="permissions" /></td>
    <td><code>array</code></td>
    <td>A structure that describes the principals and the resource-level permissions on an analysis.</td>
</tr>
<tr>
    <td><CopyableCode code="request_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services request ID for this operation.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
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
    <td><a href="#describe_analysis_permissions"><CopyableCode code="describe_analysis_permissions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-analysis_id"><code>analysis_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides the read and write permissions for an analysis.</td>
</tr>
<tr>
    <td><a href="#update_analysis_permissions"><CopyableCode code="update_analysis_permissions" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-analysis_id"><code>analysis_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the read and write permissions for an analysis.</td>
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
<tr id="parameter-analysis_id">
    <td><CopyableCode code="analysis_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the analysis whose permissions you're updating. The ID is part of the analysis URL.</td>
</tr>
<tr id="parameter-aws_account_id">
    <td><CopyableCode code="aws_account_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that contains the analysis whose permissions you're updating. You must be using the Amazon Web Services account that the analysis is in.</td>
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
    defaultValue="describe_analysis_permissions"
    values={[
        { label: 'describe_analysis_permissions', value: 'describe_analysis_permissions' }
    ]}
>
<TabItem value="describe_analysis_permissions">

Provides the read and write permissions for an analysis.

```sql
SELECT
analysis_arn,
analysis_id,
permissions,
request_id,
status
FROM aws.quicksight.analysis_permissions
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND analysis_id = '{{ analysis_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_analysis_permissions"
    values={[
        { label: 'update_analysis_permissions', value: 'update_analysis_permissions' }
    ]}
>
<TabItem value="update_analysis_permissions">

Updates the read and write permissions for an analysis.

```sql
UPDATE aws.quicksight.analysis_permissions
SET 
GrantPermissions = '{{ GrantPermissions }}',
RevokePermissions = '{{ RevokePermissions }}'
WHERE 
aws_account_id = '{{ aws_account_id }}' --required
AND analysis_id = '{{ analysis_id }}' --required
AND region = '{{ region }}' --required
RETURNING
analysis_arn,
analysis_id,
permissions,
request_id,
status;
```
</TabItem>
</Tabs>
