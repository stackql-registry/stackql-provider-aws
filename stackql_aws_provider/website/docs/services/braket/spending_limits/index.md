--- 
title: spending_limits
hide_title: false
hide_table_of_contents: false
keywords:
  - spending_limits
  - braket
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

Creates, updates, deletes, gets or lists a <code>spending_limits</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="spending_limits" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.braket.spending_limits" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="search_spending_limits"
    values={[
        { label: 'search_spending_limits', value: 'search_spending_limits' }
    ]}
>
<TabItem value="search_spending_limits">

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
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the spending limit was created, in epoch seconds.</td>
</tr>
<tr>
    <td><CopyableCode code="deviceArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the quantum device associated with this spending limit.</td>
</tr>
<tr>
    <td><CopyableCode code="queuedSpend" /></td>
    <td><code>string</code></td>
    <td>The amount currently queued for spending on the device, in USD.</td>
</tr>
<tr>
    <td><CopyableCode code="spendingLimit" /></td>
    <td><code>string</code></td>
    <td>The maximum spending amount allowed for the device during the specified time period, in USD.</td>
</tr>
<tr>
    <td><CopyableCode code="spendingLimitArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that uniquely identifies the spending limit. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:braket:&#91;a-z0-9\-&#93;+:&#91;0-9&#93;&#123;12&#125;:spending-limit/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags associated with the spending limit. Each tag consists of a key and an optional value.</td>
</tr>
<tr>
    <td><CopyableCode code="timePeriod" /></td>
    <td><code>object</code></td>
    <td>Defines a time range for spending limits, specifying when the limit is active.</td>
</tr>
<tr>
    <td><CopyableCode code="totalSpend" /></td>
    <td><code>string</code></td>
    <td>The total amount spent on the device so far during the current time period, in USD.</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the spending limit was last modified, in epoch seconds.</td>
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
    <td><a href="#search_spending_limits"><CopyableCode code="search_spending_limits" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Searches and lists spending limits based on specified filters. This operation supports pagination and allows filtering by various criteria to find specific spending limits. We recommend using pagination to ensure that the operation returns quickly and successfully.</td>
</tr>
<tr>
    <td><a href="#create_spending_limit"><CopyableCode code="create_spending_limit" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-clientToken"><code>clientToken</code></a>, <a href="#parameter-deviceArn"><code>deviceArn</code></a>, <a href="#parameter-spendingLimit"><code>spendingLimit</code></a></td>
    <td></td>
    <td>Creates a spending limit for a specified quantum device. Spending limits help you control costs by setting maximum amounts that can be spent on quantum computing tasks within a specified time period. Simulators do not support spending limits.</td>
</tr>
<tr>
    <td><a href="#update_spending_limit"><CopyableCode code="update_spending_limit" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-spending_limit_arn"><code>spending_limit_arn</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td></td>
    <td>Updates an existing spending limit. You can modify the spending amount or time period. Changes take effect immediately.</td>
</tr>
<tr>
    <td><a href="#delete_spending_limit"><CopyableCode code="delete_spending_limit" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-spending_limit_arn"><code>spending_limit_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an existing spending limit. This operation permanently removes the spending limit and cannot be undone. After deletion, the associated device becomes unrestricted for spending.</td>
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
<tr id="parameter-spending_limit_arn">
    <td><CopyableCode code="spending_limit_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the spending limit to delete.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="search_spending_limits"
    values={[
        { label: 'search_spending_limits', value: 'search_spending_limits' }
    ]}
>
<TabItem value="search_spending_limits">

Searches and lists spending limits based on specified filters. This operation supports pagination and allows filtering by various criteria to find specific spending limits. We recommend using pagination to ensure that the operation returns quickly and successfully.

```sql
SELECT
createdAt,
deviceArn,
queuedSpend,
spendingLimit,
spendingLimitArn,
tags,
timePeriod,
totalSpend,
updatedAt
FROM aws.braket.spending_limits
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_spending_limit"
    values={[
        { label: 'create_spending_limit', value: 'create_spending_limit' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_spending_limit">

Creates a spending limit for a specified quantum device. Spending limits help you control costs by setting maximum amounts that can be spent on quantum computing tasks within a specified time period. Simulators do not support spending limits.

```sql
INSERT INTO aws.braket.spending_limits (
clientToken,
deviceArn,
spendingLimit,
timePeriod,
tags,
region
)
SELECT 
'{{ clientToken }}' /* required */,
'{{ deviceArn }}' /* required */,
'{{ spendingLimit }}' /* required */,
'{{ timePeriod }}',
'{{ tags }}',
'{{ region }}'
RETURNING
spendingLimitArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: spending_limits
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the spending_limits resource.
    - name: clientToken
      value: "{{ clientToken }}"
    - name: deviceArn
      value: "{{ deviceArn }}"
    - name: spendingLimit
      value: "{{ spendingLimit }}"
    - name: timePeriod
      description: |
        Defines a time range for spending limits, specifying when the limit is active.
      value:
        startAt: "{{ startAt }}"
        endAt: "{{ endAt }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_spending_limit"
    values={[
        { label: 'update_spending_limit', value: 'update_spending_limit' }
    ]}
>
<TabItem value="update_spending_limit">

Updates an existing spending limit. You can modify the spending amount or time period. Changes take effect immediately.

```sql
UPDATE aws.braket.spending_limits
SET 
clientToken = '{{ clientToken }}',
spendingLimit = '{{ spendingLimit }}',
timePeriod = '{{ timePeriod }}'
WHERE 
spending_limit_arn = '{{ spending_limit_arn }}' --required
AND region = '{{ region }}' --required
AND clientToken = '{{ clientToken }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_spending_limit"
    values={[
        { label: 'delete_spending_limit', value: 'delete_spending_limit' }
    ]}
>
<TabItem value="delete_spending_limit">

Deletes an existing spending limit. This operation permanently removes the spending limit and cannot be undone. After deletion, the associated device becomes unrestricted for spending.

```sql
DELETE FROM aws.braket.spending_limits
WHERE spending_limit_arn = '{{ spending_limit_arn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
