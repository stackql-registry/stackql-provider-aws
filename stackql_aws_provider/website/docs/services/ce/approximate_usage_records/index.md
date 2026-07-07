--- 
title: approximate_usage_records
hide_title: false
hide_table_of_contents: false
keywords:
  - approximate_usage_records
  - ce
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

Creates, updates, deletes, gets or lists an <code>approximate_usage_records</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="approximate_usage_records" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ce.approximate_usage_records" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_approximate_usage_records"
    values={[
        { label: 'get_approximate_usage_records', value: 'get_approximate_usage_records' }
    ]}
>
<TabItem value="get_approximate_usage_records">

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
    <td><CopyableCode code="LookbackPeriod" /></td>
    <td><code>object</code></td>
    <td>The lookback period that's used for the estimation.</td>
</tr>
<tr>
    <td><CopyableCode code="Services" /></td>
    <td><code>object</code></td>
    <td>The service metadata for the service or services in the response.</td>
</tr>
<tr>
    <td><CopyableCode code="TotalRecords" /></td>
    <td><code>integer (int64)</code></td>
    <td>The total number of usage records for all services in the services list.</td>
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
    <td><a href="#get_approximate_usage_records"><CopyableCode code="get_approximate_usage_records" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves estimated usage records for hourly granularity or resource-level data at daily granularity.</td>
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
    defaultValue="get_approximate_usage_records"
    values={[
        { label: 'get_approximate_usage_records', value: 'get_approximate_usage_records' }
    ]}
>
<TabItem value="get_approximate_usage_records">

Retrieves estimated usage records for hourly granularity or resource-level data at daily granularity.

```sql
SELECT
LookbackPeriod,
Services,
TotalRecords
FROM aws.ce.approximate_usage_records
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
