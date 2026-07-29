--- 
title: capacity_manager_monitored_tag_keys
hide_title: false
hide_table_of_contents: false
keywords:
  - capacity_manager_monitored_tag_keys
  - ec2
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

Creates, updates, deletes, gets or lists a <code>capacity_manager_monitored_tag_keys</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="capacity_manager_monitored_tag_keys" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.capacity_manager_monitored_tag_keys" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_capacity_manager_monitored_tag_keys"
    values={[
        { label: 'get_capacity_manager_monitored_tag_keys', value: 'get_capacity_manager_monitored_tag_keys' }
    ]}
>
<TabItem value="get_capacity_manager_monitored_tag_keys">

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
    <td><CopyableCode code="capacity_manager_provided" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether this tag key is provided by Capacity Manager by default, rather than being user-activated.</td>
</tr>
<tr>
    <td><CopyableCode code="earliest_datapoint_timestamp" /></td>
    <td><code>string</code></td>
    <td>The earliest timestamp from which tag data is available for queries, in UTC ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the monitored tag key. Valid values are activating, activated, deactivating, and suspended.</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>A message providing additional details about the current status of the monitored tag key.</td>
</tr>
<tr>
    <td><CopyableCode code="tag_key" /></td>
    <td><code>string</code></td>
    <td>The tag key being monitored.</td>
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
    <td><a href="#get_capacity_manager_monitored_tag_keys"><CopyableCode code="get_capacity_manager_monitored_tag_keys" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Retrieves the tag keys that are currently being monitored by EC2 Capacity Manager. Monitored tag keys are included as dimensions in capacity metric data, enabling you to group and filter metrics by tag values.</td>
</tr>
<tr>
    <td><a href="#update_capacity_manager_monitored_tag_keys"><CopyableCode code="update_capacity_manager_monitored_tag_keys" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ActivateTagKey"><code>ActivateTagKey</code></a>, <a href="#parameter-DeactivateTagKey"><code>DeactivateTagKey</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a></td>
    <td>Activates or deactivates tag keys for monitoring by EC2 Capacity Manager. Activated tag keys are included as dimensions in capacity metric data, enabling you to group and filter metrics by tag values.</td>
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
<tr id="parameter-ActivateTagKey">
    <td><CopyableCode code="ActivateTagKey" /></td>
    <td><code>array</code></td>
    <td>The tag keys to activate for monitoring. Once activated, these tag keys will be included as dimensions in capacity metric data.</td>
</tr>
<tr id="parameter-ClientToken">
    <td><CopyableCode code="ClientToken" /></td>
    <td><code>string</code></td>
    <td>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</td>
</tr>
<tr id="parameter-DeactivateTagKey">
    <td><CopyableCode code="DeactivateTagKey" /></td>
    <td><code>array</code></td>
    <td>The tag keys to deactivate. Deactivated tag keys will no longer be included as dimensions in capacity metric data.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in a single call. To retrieve the remaining results, make another call with the returned NextToken value. If not specified, up to 1000 results are returned.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results. Use the value returned from a previous call to retrieve additional results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_capacity_manager_monitored_tag_keys"
    values={[
        { label: 'get_capacity_manager_monitored_tag_keys', value: 'get_capacity_manager_monitored_tag_keys' }
    ]}
>
<TabItem value="get_capacity_manager_monitored_tag_keys">

Retrieves the tag keys that are currently being monitored by EC2 Capacity Manager. Monitored tag keys are included as dimensions in capacity metric data, enabling you to group and filter metrics by tag values.

```sql
SELECT
capacity_manager_provided,
earliest_datapoint_timestamp,
status,
status_message,
tag_key
FROM aws.ec2.capacity_manager_monitored_tag_keys
WHERE region = '{{ region }}' -- required
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_capacity_manager_monitored_tag_keys"
    values={[
        { label: 'update_capacity_manager_monitored_tag_keys', value: 'update_capacity_manager_monitored_tag_keys' }
    ]}
>
<TabItem value="update_capacity_manager_monitored_tag_keys">

Activates or deactivates tag keys for monitoring by EC2 Capacity Manager. Activated tag keys are included as dimensions in capacity metric data, enabling you to group and filter metrics by tag values.

```sql
UPDATE aws.ec2.capacity_manager_monitored_tag_keys
SET 
-- No updatable properties
WHERE 
region = '{{ region }}' --required
AND ActivateTagKey = '{{ ActivateTagKey}}'
AND DeactivateTagKey = '{{ DeactivateTagKey}}'
AND DryRun = {{ DryRun}}
AND ClientToken = '{{ ClientToken}}'
RETURNING
capacity_manager_tag_keys;
```
</TabItem>
</Tabs>
