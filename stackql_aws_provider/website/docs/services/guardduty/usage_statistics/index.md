--- 
title: usage_statistics
hide_title: false
hide_table_of_contents: false
keywords:
  - usage_statistics
  - guardduty
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

Creates, updates, deletes, gets or lists a <code>usage_statistics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="usage_statistics" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.guardduty.usage_statistics" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_usage_statistics"
    values={[
        { label: 'get_usage_statistics', value: 'get_usage_statistics' }
    ]}
>
<TabItem value="get_usage_statistics">

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
    <td><CopyableCode code="sum_by_account" /></td>
    <td><code>array</code></td>
    <td>The usage statistic sum organized by account ID.</td>
</tr>
<tr>
    <td><CopyableCode code="sum_by_data_source" /></td>
    <td><code>array</code></td>
    <td>The usage statistic sum organized by on data source.</td>
</tr>
<tr>
    <td><CopyableCode code="sum_by_feature" /></td>
    <td><code>array</code></td>
    <td>The usage statistic sum organized by feature.</td>
</tr>
<tr>
    <td><CopyableCode code="sum_by_resource" /></td>
    <td><code>array</code></td>
    <td>The usage statistic sum organized by resource.</td>
</tr>
<tr>
    <td><CopyableCode code="top_accounts_by_feature" /></td>
    <td><code>array</code></td>
    <td>Lists the top 50 accounts by feature that have generated the most GuardDuty usage, in the order from most to least expensive. Currently, this doesn't support RDS_LOGIN_EVENTS.</td>
</tr>
<tr>
    <td><CopyableCode code="top_resources" /></td>
    <td><code>array</code></td>
    <td>Lists the top 50 resources that have generated the most GuardDuty usage, in order from most to least expensive.</td>
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
    <td><a href="#get_usage_statistics"><CopyableCode code="get_usage_statistics" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-detector_id"><code>detector_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists Amazon GuardDuty usage statistics over the last 30 days for the specified detector ID. For newly enabled detectors or data sources, the cost returned will include only the usage so far under 30 days. This may differ from the cost metrics in the console, which project usage over 30 days to provide a monthly cost estimate. For more information, see Understanding How Usage Costs are Calculated.</td>
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
<tr id="parameter-detector_id">
    <td><CopyableCode code="detector_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the detector that specifies the GuardDuty service whose usage statistics you want to retrieve. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_usage_statistics"
    values={[
        { label: 'get_usage_statistics', value: 'get_usage_statistics' }
    ]}
>
<TabItem value="get_usage_statistics">

Lists Amazon GuardDuty usage statistics over the last 30 days for the specified detector ID. For newly enabled detectors or data sources, the cost returned will include only the usage so far under 30 days. This may differ from the cost metrics in the console, which project usage over 30 days to provide a monthly cost estimate. For more information, see Understanding How Usage Costs are Calculated.

```sql
SELECT
sum_by_account,
sum_by_data_source,
sum_by_feature,
sum_by_resource,
top_accounts_by_feature,
top_resources
FROM aws.guardduty.usage_statistics
WHERE detector_id = '{{ detector_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
