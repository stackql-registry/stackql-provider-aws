--- 
title: settlement_records
hide_title: false
hide_table_of_contents: false
keywords:
  - settlement_records
  - wafv2
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

Creates, updates, deletes, gets or lists a <code>settlement_records</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="settlement_records" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.wafv2.settlement_records" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_settlement_records"
    values={[
        { label: 'list_settlement_records', value: 'list_settlement_records' }
    ]}
>
<TabItem value="list_settlement_records">

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
    <td><CopyableCode code="next_marker" /></td>
    <td><code>string</code></td>
    <td>When you get a paginated response, this marker indicates that additional results are available. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="settlements" /></td>
    <td><code>array</code></td>
    <td>The list of settlement records.</td>
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
    <td><a href="#list_settlement_records"><CopyableCode code="list_settlement_records" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves individual settlement transaction records for monetization. Each record represents a single payment transaction between a client and your protected resource. This operation is only available for CLOUDFRONT scope. The maximum supported time window is 90 days. When no CurrencyMode filter is provided, results default to REAL. To retrieve test data, include a CurrencyMode filter with the value TEST.</td>
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
    defaultValue="list_settlement_records"
    values={[
        { label: 'list_settlement_records', value: 'list_settlement_records' }
    ]}
>
<TabItem value="list_settlement_records">

Retrieves individual settlement transaction records for monetization. Each record represents a single payment transaction between a client and your protected resource. This operation is only available for CLOUDFRONT scope. The maximum supported time window is 90 days. When no CurrencyMode filter is provided, results default to REAL. To retrieve test data, include a CurrencyMode filter with the value TEST.

```sql
SELECT
next_marker,
settlements
FROM aws.wafv2.settlement_records
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
