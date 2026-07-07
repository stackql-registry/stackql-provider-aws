--- 
title: attacks
hide_title: false
hide_table_of_contents: false
keywords:
  - attacks
  - shield
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

Creates, updates, deletes, gets or lists an <code>attacks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="attacks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.shield.attacks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_attack"
    values={[
        { label: 'describe_attack', value: 'describe_attack' },
        { label: 'list_attacks', value: 'list_attacks' }
    ]}
>
<TabItem value="describe_attack">

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
    <td><CopyableCode code="AttackCounters" /></td>
    <td><code>array</code></td>
    <td>List of counters that describe the attack for the specified time period.</td>
</tr>
<tr>
    <td><CopyableCode code="AttackId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier (ID) of the attack. (pattern: &lt;code&gt;&#91;a-zA-Z0-9\\-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="AttackProperties" /></td>
    <td><code>array</code></td>
    <td>The array of objects that provide details of the Shield event. For infrastructure layer events (L3 and L4 events), you can view metrics for top contributors in Amazon CloudWatch metrics. For more information, see Shield metrics and alarms in the WAF Developer Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="EndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the attack ended, in Unix time in seconds.</td>
</tr>
<tr>
    <td><CopyableCode code="Mitigations" /></td>
    <td><code>array</code></td>
    <td>List of mitigation actions taken for the attack.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceArn" /></td>
    <td><code>string</code></td>
    <td>The ARN (Amazon Resource Name) of the resource that was attacked. (pattern: &lt;code&gt;^arn:aws.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="StartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the attack started, in Unix time in seconds.</td>
</tr>
<tr>
    <td><CopyableCode code="SubResources" /></td>
    <td><code>array</code></td>
    <td>If applicable, additional detail about the resource being attacked, for example, IP address or URL.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_attacks">

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
    <td><CopyableCode code="AttackId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier (ID) of the attack.</td>
</tr>
<tr>
    <td><CopyableCode code="AttackVectors" /></td>
    <td><code>array</code></td>
    <td>The list of attacks for a specified time period.</td>
</tr>
<tr>
    <td><CopyableCode code="EndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The end time of the attack, in Unix time in seconds.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceArn" /></td>
    <td><code>string</code></td>
    <td>The ARN (Amazon Resource Name) of the resource that was attacked.</td>
</tr>
<tr>
    <td><CopyableCode code="StartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start time of the attack, in Unix time in seconds.</td>
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
    <td><a href="#describe_attack"><CopyableCode code="describe_attack" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the details of a DDoS attack.</td>
</tr>
<tr>
    <td><a href="#list_attacks"><CopyableCode code="list_attacks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns all ongoing DDoS attacks or all DDoS attacks during a specified time period.</td>
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
    defaultValue="describe_attack"
    values={[
        { label: 'describe_attack', value: 'describe_attack' },
        { label: 'list_attacks', value: 'list_attacks' }
    ]}
>
<TabItem value="describe_attack">

Describes the details of a DDoS attack.

```sql
SELECT
AttackCounters,
AttackId,
AttackProperties,
EndTime,
Mitigations,
ResourceArn,
StartTime,
SubResources
FROM aws.shield.attacks
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_attacks">

Returns all ongoing DDoS attacks or all DDoS attacks during a specified time period.

```sql
SELECT
AttackId,
AttackVectors,
EndTime,
ResourceArn,
StartTime
FROM aws.shield.attacks
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
