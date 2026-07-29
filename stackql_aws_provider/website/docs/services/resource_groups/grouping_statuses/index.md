--- 
title: grouping_statuses
hide_title: false
hide_table_of_contents: false
keywords:
  - grouping_statuses
  - resource_groups
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

Creates, updates, deletes, gets or lists a <code>grouping_statuses</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="grouping_statuses" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.resource_groups.grouping_statuses" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_grouping_statuses"
    values={[
        { label: 'list_grouping_statuses', value: 'list_grouping_statuses' }
    ]}
>
<TabItem value="list_grouping_statuses">

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
    <td><CopyableCode code="action" /></td>
    <td><code>string</code></td>
    <td>Describes the resource grouping action with values of GROUP or UNGROUP. (GROUP, UNGROUP)</td>
</tr>
<tr>
    <td><CopyableCode code="error_code" /></td>
    <td><code>string</code></td>
    <td>Specifies the error code that was raised.</td>
</tr>
<tr>
    <td><CopyableCode code="error_message" /></td>
    <td><code>string</code></td>
    <td>A message that explains the ErrorCode.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon resource name (ARN) of a resource. (pattern: &lt;code&gt;arn:aws(-&#91;a-z&#93;+)*:&#91;a-z0-9\-&#93;*:(&#91;a-z&#93;&#123;2&#125;(-&#91;a-z&#93;+)+-\d&#123;1&#125;)?:(&#91;0-9&#93;&#123;12&#125;)?:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Describes the resource grouping status with values of SUCCESS, FAILED, IN_PROGRESS, or SKIPPED. (SUCCESS, FAILED, IN_PROGRESS, SKIPPED)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp of when the status was last updated.</td>
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
    <td><a href="#list_grouping_statuses"><CopyableCode code="list_grouping_statuses" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the status of the last grouping or ungrouping action for each resource in the specified application group.</td>
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
    defaultValue="list_grouping_statuses"
    values={[
        { label: 'list_grouping_statuses', value: 'list_grouping_statuses' }
    ]}
>
<TabItem value="list_grouping_statuses">

Returns the status of the last grouping or ungrouping action for each resource in the specified application group.

```sql
SELECT
action,
error_code,
error_message,
resource_arn,
status,
updated_at
FROM aws.resource_groups.grouping_statuses
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
