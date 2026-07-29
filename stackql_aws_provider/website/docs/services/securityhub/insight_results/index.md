--- 
title: insight_results
hide_title: false
hide_table_of_contents: false
keywords:
  - insight_results
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

Creates, updates, deletes, gets or lists an <code>insight_results</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="insight_results" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.securityhub.insight_results" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_insight_results"
    values={[
        { label: 'get_insight_results', value: 'get_insight_results' }
    ]}
>
<TabItem value="get_insight_results">

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
    <td><CopyableCode code="group_by_attribute" /></td>
    <td><code>string</code></td>
    <td>The attribute that the findings are grouped by for the insight whose results are returned by the GetInsightResults operation. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="insight_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the insight whose results are returned by the GetInsightResults operation. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="result_values" /></td>
    <td><code>array</code></td>
    <td>The list of insight result values returned by the GetInsightResults operation.</td>
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
    <td><a href="#get_insight_results"><CopyableCode code="get_insight_results" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-insight_arn"><code>insight_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the results of the Security Hub CSPM insight specified by the insight ARN.</td>
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
<tr id="parameter-insight_arn">
    <td><CopyableCode code="insight_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the insight for which to return results.</td>
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
    defaultValue="get_insight_results"
    values={[
        { label: 'get_insight_results', value: 'get_insight_results' }
    ]}
>
<TabItem value="get_insight_results">

Lists the results of the Security Hub CSPM insight specified by the insight ARN.

```sql
SELECT
group_by_attribute,
insight_arn,
result_values
FROM aws.securityhub.insight_results
WHERE insight_arn = '{{ insight_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
