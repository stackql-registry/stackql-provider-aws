--- 
title: space_resources
hide_title: false
hide_table_of_contents: false
keywords:
  - space_resources
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

Creates, updates, deletes, gets or lists a <code>space_resources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="space_resources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.quicksight.space_resources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_space_resources"
    values={[
        { label: 'list_space_resources', value: 'list_space_resources' }
    ]}
>
<TabItem value="list_space_resources">

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
    <td><CopyableCode code="request_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services request ID for this operation.</td>
</tr>
<tr>
    <td><CopyableCode code="space_resources" /></td>
    <td><code>array</code></td>
    <td>A list of resource summaries in the space.</td>
</tr>
<tr>
    <td><CopyableCode code="space_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the space. (pattern: &lt;code&gt;arn:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;^/&#93;.&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="space_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the space. (pattern: &lt;code&gt;&#91;0-9a-zA-Z-_=.+&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#list_space_resources"><CopyableCode code="list_space_resources" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-space_id"><code>space_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the resources in an Amazon QuickSight space.</td>
</tr>
<tr>
    <td><a href="#update_space_resources"><CopyableCode code="update_space_resources" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-space_id"><code>space_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Adds or removes resources from an Amazon QuickSight space.</td>
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
    <td>The ID of the Amazon Web Services account that contains the space.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-space_id">
    <td><CopyableCode code="space_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the space that you want to update resources for.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_space_resources"
    values={[
        { label: 'list_space_resources', value: 'list_space_resources' }
    ]}
>
<TabItem value="list_space_resources">

Lists the resources in an Amazon QuickSight space.

```sql
SELECT
request_id,
space_resources,
space_arn,
space_id
FROM aws.quicksight.space_resources
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND space_id = '{{ space_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_space_resources"
    values={[
        { label: 'update_space_resources', value: 'update_space_resources' }
    ]}
>
<TabItem value="update_space_resources">

Adds or removes resources from an Amazon QuickSight space.

```sql
UPDATE aws.quicksight.space_resources
SET 
AddResources = '{{ AddResources }}',
RemoveResources = '{{ RemoveResources }}'
WHERE 
aws_account_id = '{{ aws_account_id }}' --required
AND space_id = '{{ space_id }}' --required
AND region = '{{ region }}' --required
RETURNING
failed_resource_operations,
request_id,
space_arn,
space_id;
```
</TabItem>
</Tabs>
