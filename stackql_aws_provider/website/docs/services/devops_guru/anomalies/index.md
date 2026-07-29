--- 
title: anomalies
hide_title: false
hide_table_of_contents: false
keywords:
  - anomalies
  - devops_guru
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

Creates, updates, deletes, gets or lists an <code>anomalies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="anomalies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.devops_guru.anomalies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_anomaly"
    values={[
        { label: 'describe_anomaly', value: 'describe_anomaly' }
    ]}
>
<TabItem value="describe_anomaly">

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
    <td><CopyableCode code="proactive_anomaly" /></td>
    <td><code>object</code></td>
    <td>A ProactiveAnomaly object that represents the requested anomaly.</td>
</tr>
<tr>
    <td><CopyableCode code="reactive_anomaly" /></td>
    <td><code>object</code></td>
    <td>A ReactiveAnomaly object that represents the requested anomaly.</td>
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
    <td><a href="#describe_anomaly"><CopyableCode code="describe_anomaly" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-AccountId"><code>AccountId</code></a></td>
    <td>Returns details about an anomaly that you specify using its ID.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the anomaly.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-AccountId">
    <td><CopyableCode code="AccountId" /></td>
    <td><code>string</code></td>
    <td>The ID of the member account.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_anomaly"
    values={[
        { label: 'describe_anomaly', value: 'describe_anomaly' }
    ]}
>
<TabItem value="describe_anomaly">

Returns details about an anomaly that you specify using its ID.

```sql
SELECT
proactive_anomaly,
reactive_anomaly
FROM aws.devops_guru.anomalies
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
AND AccountId = '{{ AccountId }}'
;
```
</TabItem>
</Tabs>
