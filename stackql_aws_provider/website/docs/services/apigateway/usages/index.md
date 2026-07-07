--- 
title: usages
hide_title: false
hide_table_of_contents: false
keywords:
  - usages
  - apigateway
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

Creates, updates, deletes, gets or lists a <code>usages</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="usages" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.apigateway.usages" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_usage"
    values={[
        { label: 'get_usage', value: 'get_usage' }
    ]}
>
<TabItem value="get_usage">

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
    <td><CopyableCode code="endDate" /></td>
    <td><code>string</code></td>
    <td>The ending date of the usage data.</td>
</tr>
<tr>
    <td><CopyableCode code="items_" /></td>
    <td><code>object</code></td>
    <td>The usage data, as daily logs of used and remaining quotas, over the specified time interval indexed over the API keys in a usage plan. For example, &#123;..., "values" : &#123; "&#123;api_key&#125;" : &#91; &#91;0, 100&#93;, &#91;10, 90&#93;, &#91;100, 10&#93;&#93;&#125;, where &#123;api_key&#125; stands for an API key value and the daily log entry is of the format &#91;used quota, remaining quota&#93;.</td>
</tr>
<tr>
    <td><CopyableCode code="position" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="startDate" /></td>
    <td><code>string</code></td>
    <td>The starting date of the usage data.</td>
</tr>
<tr>
    <td><CopyableCode code="usagePlanId" /></td>
    <td><code>string</code></td>
    <td>The plan Id associated with this usage data.</td>
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
    <td><a href="#get_usage"><CopyableCode code="get_usage" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-usageplan_id"><code>usageplan_id</code></a>, <a href="#parameter-startDate"><code>startDate</code></a>, <a href="#parameter-endDate"><code>endDate</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-keyId"><code>keyId</code></a>, <a href="#parameter-position"><code>position</code></a>, <a href="#parameter-limit"><code>limit</code></a></td>
    <td>Gets the usage data of a usage plan in a specified time interval.</td>
</tr>
<tr>
    <td><a href="#update_usage"><CopyableCode code="update_usage" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-usageplan_id"><code>usageplan_id</code></a>, <a href="#parameter-key_id"><code>key_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Grants a temporary extension to the remaining quota of a usage plan associated with a specified API key.</td>
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
<tr id="parameter-endDate">
    <td><CopyableCode code="endDate" /></td>
    <td><code>string</code></td>
    <td>The ending date (e.g., 2016-12-31) of the usage data.</td>
</tr>
<tr id="parameter-key_id">
    <td><CopyableCode code="key_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the API key associated with the usage plan in which a temporary extension is granted to the remaining quota.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-startDate">
    <td><CopyableCode code="startDate" /></td>
    <td><code>string</code></td>
    <td>The starting date (e.g., 2016-01-01) of the usage data.</td>
</tr>
<tr id="parameter-usageplan_id">
    <td><CopyableCode code="usageplan_id" /></td>
    <td><code>string</code></td>
    <td>The Id of the usage plan associated with the usage data.</td>
</tr>
<tr id="parameter-keyId">
    <td><CopyableCode code="keyId" /></td>
    <td><code>string</code></td>
    <td>The Id of the API key associated with the resultant usage data.</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</td>
</tr>
<tr id="parameter-position">
    <td><CopyableCode code="position" /></td>
    <td><code>string</code></td>
    <td>The current pagination position in the paged result set.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_usage"
    values={[
        { label: 'get_usage', value: 'get_usage' }
    ]}
>
<TabItem value="get_usage">

Gets the usage data of a usage plan in a specified time interval.

```sql
SELECT
endDate,
items_,
position,
startDate,
usagePlanId
FROM aws.apigateway.usages
WHERE usageplan_id = '{{ usageplan_id }}' -- required
AND startDate = '{{ startDate }}' -- required
AND endDate = '{{ endDate }}' -- required
AND region = '{{ region }}' -- required
AND keyId = '{{ keyId }}'
AND position = '{{ position }}'
AND limit = '{{ limit }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_usage"
    values={[
        { label: 'update_usage', value: 'update_usage' }
    ]}
>
<TabItem value="update_usage">

Grants a temporary extension to the remaining quota of a usage plan associated with a specified API key.

```sql
UPDATE aws.apigateway.usages
SET 
patchOperations = '{{ patchOperations }}'
WHERE 
usageplan_id = '{{ usageplan_id }}' --required
AND key_id = '{{ key_id }}' --required
AND region = '{{ region }}' --required
RETURNING
endDate,
items_,
position,
startDate,
usagePlanId;
```
</TabItem>
</Tabs>
