--- 
title: findings_trends_v2s
hide_title: false
hide_table_of_contents: false
keywords:
  - findings_trends_v2s
  - securityhub
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

Creates, updates, deletes, gets or lists a <code>findings_trends_v2s</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="findings_trends_v2s" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.securityhub.findings_trends_v2s" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_findings_trends_v2"
    values={[
        { label: 'get_findings_trends_v2', value: 'get_findings_trends_v2' }
    ]}
>
<TabItem value="get_findings_trends_v2">

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
    <td><CopyableCode code="Timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp for this data point in the findings trend metrics.</td>
</tr>
<tr>
    <td><CopyableCode code="TrendsValues" /></td>
    <td><code>object</code></td>
    <td>The finding trend metric values associated with this timestamp, including severity counts.</td>
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
    <td><a href="#get_findings_trends_v2"><CopyableCode code="get_findings_trends_v2" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns findings trend data based on the specified criteria. This operation helps you analyze patterns and changes in findings over time.</td>
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
    defaultValue="get_findings_trends_v2"
    values={[
        { label: 'get_findings_trends_v2', value: 'get_findings_trends_v2' }
    ]}
>
<TabItem value="get_findings_trends_v2">

Returns findings trend data based on the specified criteria. This operation helps you analyze patterns and changes in findings over time.

```sql
SELECT
Timestamp,
TrendsValues
FROM aws.securityhub.findings_trends_v2s
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
