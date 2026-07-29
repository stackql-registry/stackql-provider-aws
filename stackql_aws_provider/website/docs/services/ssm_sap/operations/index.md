--- 
title: operations
hide_title: false
hide_table_of_contents: false
keywords:
  - operations
  - ssm_sap
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

Creates, updates, deletes, gets or lists an <code>operations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="operations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm_sap.operations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_operation"
    values={[
        { label: 'get_operation', value: 'get_operation' },
        { label: 'list_operations', value: 'list_operations' }
    ]}
>
<TabItem value="get_operation">

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
    <td><CopyableCode code="end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The end time of the operation.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the operation. (pattern: &lt;code&gt;&#91;&#123;&#93;?&#91;0-9a-fA-F&#93;&#123;8&#125;-(&#91;0-9a-fA-F&#93;&#123;4&#125;-)&#123;3&#125;&#91;0-9a-fA-F&#93;&#123;12&#125;&#91;&#125;&#93;?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the operation was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="properties" /></td>
    <td><code>object</code></td>
    <td>The properties of the operation.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the operation. (pattern: &lt;code&gt;arn:(.+:)&#123;2,4&#125;.+$|^arn:(.+:)&#123;1,3&#125;.+\/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_id" /></td>
    <td><code>string</code></td>
    <td>The resource ID of the operation.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The resource type of the operation.</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start time of the operation.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the operation. (INPROGRESS, SUCCESS, ERROR)</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>The status message of the operation.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the operation.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_operations">

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
    <td><CopyableCode code="end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The end time of the operation.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the operation. (pattern: &lt;code&gt;&#91;&#123;&#93;?&#91;0-9a-fA-F&#93;&#123;8&#125;-(&#91;0-9a-fA-F&#93;&#123;4&#125;-)&#123;3&#125;&#91;0-9a-fA-F&#93;&#123;12&#125;&#91;&#125;&#93;?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the operation was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="properties" /></td>
    <td><code>object</code></td>
    <td>The properties of the operation.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the operation. (pattern: &lt;code&gt;arn:(.+:)&#123;2,4&#125;.+$|^arn:(.+:)&#123;1,3&#125;.+\/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_id" /></td>
    <td><code>string</code></td>
    <td>The resource ID of the operation.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The resource type of the operation.</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start time of the operation.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the operation. (INPROGRESS, SUCCESS, ERROR)</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>The status message of the operation.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the operation.</td>
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
    <td><a href="#get_operation"><CopyableCode code="get_operation" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the details of an operation by specifying the operation ID.</td>
</tr>
<tr>
    <td><a href="#list_operations"><CopyableCode code="list_operations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the operations performed by AWS Systems Manager for SAP.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_operation"
    values={[
        { label: 'get_operation', value: 'get_operation' },
        { label: 'list_operations', value: 'list_operations' }
    ]}
>
<TabItem value="get_operation">

Gets the details of an operation by specifying the operation ID.

```sql
SELECT
end_time,
id,
last_updated_time,
properties,
resource_arn,
resource_id,
resource_type,
start_time,
status,
status_message,
type
FROM aws.ssm_sap.operations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_operations">

Lists the operations performed by AWS Systems Manager for SAP.

```sql
SELECT
end_time,
id,
last_updated_time,
properties,
resource_arn,
resource_id,
resource_type,
start_time,
status,
status_message,
type
FROM aws.ssm_sap.operations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
