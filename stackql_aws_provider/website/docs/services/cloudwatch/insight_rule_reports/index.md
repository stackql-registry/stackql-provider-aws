--- 
title: insight_rule_reports
hide_title: false
hide_table_of_contents: false
keywords:
  - insight_rule_reports
  - cloudwatch
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

Creates, updates, deletes, gets or lists an <code>insight_rule_reports</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="insight_rule_reports" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudwatch.insight_rule_reports" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_insight_rule_report"
    values={[
        { label: 'get_insight_rule_report', value: 'get_insight_rule_report' }
    ]}
>
<TabItem value="get_insight_rule_report">

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
    <td><CopyableCode code="aggregate_value" /></td>
    <td><code>number (double)</code></td>
    <td>The sum of the values from all individual contributors that match the rule.</td>
</tr>
<tr>
    <td><CopyableCode code="aggregation_statistic" /></td>
    <td><code>string</code></td>
    <td>Specifies whether this rule aggregates contributor data by COUNT or SUM.</td>
</tr>
<tr>
    <td><CopyableCode code="approximate_unique_count" /></td>
    <td><code>integer (int64)</code></td>
    <td>An approximate count of the unique contributors found by this rule in this time period.</td>
</tr>
<tr>
    <td><CopyableCode code="contributors" /></td>
    <td><code>array</code></td>
    <td>An array of the unique contributors found by this rule in this time period. If the rule contains multiple keys, each combination of values for the keys counts as a unique contributor.</td>
</tr>
<tr>
    <td><CopyableCode code="key_labels" /></td>
    <td><code>array</code></td>
    <td>An array of the strings used as the keys for this rule. The keys are the dimensions used to classify contributors. If the rule contains more than one key, then each unique combination of values for the keys is counted as a unique contributor.</td>
</tr>
<tr>
    <td><CopyableCode code="metric_datapoints" /></td>
    <td><code>array</code></td>
    <td>A time series of metric data points that matches the time period in the rule request.</td>
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
    <td><a href="#get_insight_rule_report"><CopyableCode code="get_insight_rule_report" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation returns the time series data collected by a Contributor Insights rule. The data includes the identity and number of contributors to the log group. You can also optionally return one or more statistics about each data point in the time series. These statistics can include the following: UniqueContributors -- the number of unique contributors for each data point. MaxContributorValue -- the value of the top contributor for each data point. The identity of the contributor might change for each data point in the graph. If this rule aggregates by COUNT, the top contributor for each data point is the contributor with the most occurrences in that period. If the rule aggregates by SUM, the top contributor is the contributor with the highest sum in the log field specified by the rule's Value, during that period. SampleCount -- the number of data points matched by the rule. Sum -- the sum of the values from all contributors during the time period represented by that data point. Minimum -- the minimum value from a single observation during the time period represented by that data point. Maximum -- the maximum value from a single observation during the time period represented by that data point. Average -- the average value from all contributors during the time period represented by that data point.</td>
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
    defaultValue="get_insight_rule_report"
    values={[
        { label: 'get_insight_rule_report', value: 'get_insight_rule_report' }
    ]}
>
<TabItem value="get_insight_rule_report">

This operation returns the time series data collected by a Contributor Insights rule. The data includes the identity and number of contributors to the log group. You can also optionally return one or more statistics about each data point in the time series. These statistics can include the following: UniqueContributors -- the number of unique contributors for each data point. MaxContributorValue -- the value of the top contributor for each data point. The identity of the contributor might change for each data point in the graph. If this rule aggregates by COUNT, the top contributor for each data point is the contributor with the most occurrences in that period. If the rule aggregates by SUM, the top contributor is the contributor with the highest sum in the log field specified by the rule's Value, during that period. SampleCount -- the number of data points matched by the rule. Sum -- the sum of the values from all contributors during the time period represented by that data point. Minimum -- the minimum value from a single observation during the time period represented by that data point. Maximum -- the maximum value from a single observation during the time period represented by that data point. Average -- the average value from all contributors during the time period represented by that data point.

```sql
SELECT
aggregate_value,
aggregation_statistic,
approximate_unique_count,
contributors,
key_labels,
metric_datapoints
FROM aws.cloudwatch.insight_rule_reports
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
