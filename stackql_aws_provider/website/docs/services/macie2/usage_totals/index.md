--- 
title: usage_totals
hide_title: false
hide_table_of_contents: false
keywords:
  - usage_totals
  - macie2
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

Creates, updates, deletes, gets or lists a <code>usage_totals</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="usage_totals" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.macie2.usage_totals" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_usage_totals"
    values={[
        { label: 'get_usage_totals', value: 'get_usage_totals' }
    ]}
>
<TabItem value="get_usage_totals">

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
    <td><CopyableCode code="timeRange" /></td>
    <td><code>string</code></td>
    <td>An inclusive time period that Amazon Macie usage data applies to. Possible values are: (MONTH_TO_DATE, PAST_30_DAYS)</td>
</tr>
<tr>
    <td><CopyableCode code="usageTotals" /></td>
    <td><code>array</code></td>
    <td>An array of objects that contains the results of the query. Each object contains the data for a specific usage metric.</td>
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
    <td><a href="#get_usage_totals"><CopyableCode code="get_usage_totals" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-timeRange"><code>timeRange</code></a></td>
    <td>Retrieves (queries) aggregated usage data for an account.</td>
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
<tr id="parameter-timeRange">
    <td><CopyableCode code="timeRange" /></td>
    <td><code>string</code></td>
    <td>The inclusive time period to retrieve the data for. Valid values are: MONTH_TO_DATE, for the current calendar month to date; and, PAST_30_DAYS, for the preceding 30 days. If you don't specify a value for this parameter, Amazon Macie provides aggregated usage data for the preceding 30 days.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_usage_totals"
    values={[
        { label: 'get_usage_totals', value: 'get_usage_totals' }
    ]}
>
<TabItem value="get_usage_totals">

Retrieves (queries) aggregated usage data for an account.

```sql
SELECT
timeRange,
usageTotals
FROM aws.macie2.usage_totals
WHERE region = '{{ region }}' -- required
AND timeRange = '{{ timeRange }}'
;
```
</TabItem>
</Tabs>
