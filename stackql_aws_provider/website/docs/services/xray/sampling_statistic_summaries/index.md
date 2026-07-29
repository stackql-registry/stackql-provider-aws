--- 
title: sampling_statistic_summaries
hide_title: false
hide_table_of_contents: false
keywords:
  - sampling_statistic_summaries
  - xray
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

Creates, updates, deletes, gets or lists a <code>sampling_statistic_summaries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sampling_statistic_summaries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.xray.sampling_statistic_summaries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_sampling_statistic_summaries"
    values={[
        { label: 'get_sampling_statistic_summaries', value: 'get_sampling_statistic_summaries' }
    ]}
>
<TabItem value="get_sampling_statistic_summaries">

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
    <td><CopyableCode code="borrow_count" /></td>
    <td><code>integer</code></td>
    <td>The number of requests recorded with borrowed reservoir quota.</td>
</tr>
<tr>
    <td><CopyableCode code="request_count" /></td>
    <td><code>integer</code></td>
    <td>The number of requests that matched the rule.</td>
</tr>
<tr>
    <td><CopyableCode code="rule_name" /></td>
    <td><code>string</code></td>
    <td>The name of the sampling rule.</td>
</tr>
<tr>
    <td><CopyableCode code="sampled_count" /></td>
    <td><code>integer</code></td>
    <td>The number of requests recorded.</td>
</tr>
<tr>
    <td><CopyableCode code="timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start time of the reporting window.</td>
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
    <td><a href="#get_sampling_statistic_summaries"><CopyableCode code="get_sampling_statistic_summaries" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about recent sampling results for all sampling rules.</td>
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
    defaultValue="get_sampling_statistic_summaries"
    values={[
        { label: 'get_sampling_statistic_summaries', value: 'get_sampling_statistic_summaries' }
    ]}
>
<TabItem value="get_sampling_statistic_summaries">

Retrieves information about recent sampling results for all sampling rules.

```sql
SELECT
borrow_count,
request_count,
rule_name,
sampled_count,
timestamp
FROM aws.xray.sampling_statistic_summaries
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
