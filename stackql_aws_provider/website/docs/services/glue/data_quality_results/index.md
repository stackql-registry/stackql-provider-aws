--- 
title: data_quality_results
hide_title: false
hide_table_of_contents: false
keywords:
  - data_quality_results
  - glue
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

Creates, updates, deletes, gets or lists a <code>data_quality_results</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_quality_results" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.glue.data_quality_results" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_data_quality_result"
    values={[
        { label: 'batch_get_data_quality_result', value: 'batch_get_data_quality_result' },
        { label: 'get_data_quality_result', value: 'get_data_quality_result' },
        { label: 'list_data_quality_results', value: 'list_data_quality_results' }
    ]}
>
<TabItem value="batch_get_data_quality_result">

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
    <td><CopyableCode code="Results" /></td>
    <td><code>array</code></td>
    <td>A list of DataQualityResult objects representing the data quality results.</td>
</tr>
<tr>
    <td><CopyableCode code="ResultsNotFound" /></td>
    <td><code>array</code></td>
    <td>A list of result IDs for which results were not found.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_data_quality_result">

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
    <td><CopyableCode code="AggregatedMetrics" /></td>
    <td><code>object</code></td>
    <td>A summary of DataQualityAggregatedMetrics objects showing the total counts of processed rows and rules, including their pass/fail statistics based on row-level results.</td>
</tr>
<tr>
    <td><CopyableCode code="AnalyzerResults" /></td>
    <td><code>array</code></td>
    <td>A list of DataQualityAnalyzerResult objects representing the results for each analyzer.</td>
</tr>
<tr>
    <td><CopyableCode code="CompletedOn" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the run for this data quality result was completed.</td>
</tr>
<tr>
    <td><CopyableCode code="DataSource" /></td>
    <td><code>object</code></td>
    <td>The table associated with the data quality result, if any.</td>
</tr>
<tr>
    <td><CopyableCode code="EvaluationContext" /></td>
    <td><code>string</code></td>
    <td>In the context of a job in Glue Studio, each node in the canvas is typically assigned some sort of name and data quality nodes will have names. In the case of multiple nodes, the evaluationContext can differentiate the nodes.</td>
</tr>
<tr>
    <td><CopyableCode code="JobName" /></td>
    <td><code>string</code></td>
    <td>The job name associated with the data quality result, if any. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="JobRunId" /></td>
    <td><code>string</code></td>
    <td>The job run ID associated with the data quality result, if any. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Observations" /></td>
    <td><code>array</code></td>
    <td>A list of DataQualityObservation objects representing the observations generated after evaluating the rules and analyzers.</td>
</tr>
<tr>
    <td><CopyableCode code="ProfileId" /></td>
    <td><code>string</code></td>
    <td>The Profile ID for the data quality result. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ResultId" /></td>
    <td><code>string</code></td>
    <td>A unique result ID for the data quality result. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="RuleResults" /></td>
    <td><code>array</code></td>
    <td>A list of DataQualityRuleResult objects representing the results for each rule.</td>
</tr>
<tr>
    <td><CopyableCode code="RulesetEvaluationRunId" /></td>
    <td><code>string</code></td>
    <td>The unique run ID associated with the ruleset evaluation. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="RulesetName" /></td>
    <td><code>string</code></td>
    <td>The name of the ruleset associated with the data quality result. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Score" /></td>
    <td><code>number (double)</code></td>
    <td>An aggregate data quality score. Represents the ratio of rules that passed to the total number of rules.</td>
</tr>
<tr>
    <td><CopyableCode code="StartedOn" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the run for this data quality result started.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_data_quality_results">

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
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>A pagination token, if more results are available.</td>
</tr>
<tr>
    <td><CopyableCode code="Results" /></td>
    <td><code>array</code></td>
    <td>A list of DataQualityResultDescription objects.</td>
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
    <td><a href="#batch_get_data_quality_result"><CopyableCode code="batch_get_data_quality_result" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list of data quality results for the specified result IDs.</td>
</tr>
<tr>
    <td><a href="#get_data_quality_result"><CopyableCode code="get_data_quality_result" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the result of a data quality rule evaluation.</td>
</tr>
<tr>
    <td><a href="#list_data_quality_results"><CopyableCode code="list_data_quality_results" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns all data quality execution results for your account.</td>
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
    defaultValue="batch_get_data_quality_result"
    values={[
        { label: 'batch_get_data_quality_result', value: 'batch_get_data_quality_result' },
        { label: 'get_data_quality_result', value: 'get_data_quality_result' },
        { label: 'list_data_quality_results', value: 'list_data_quality_results' }
    ]}
>
<TabItem value="batch_get_data_quality_result">

Retrieves a list of data quality results for the specified result IDs.

```sql
SELECT
Results,
ResultsNotFound
FROM aws.glue.data_quality_results
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_data_quality_result">

Retrieves the result of a data quality rule evaluation.

```sql
SELECT
AggregatedMetrics,
AnalyzerResults,
CompletedOn,
DataSource,
EvaluationContext,
JobName,
JobRunId,
Observations,
ProfileId,
ResultId,
RuleResults,
RulesetEvaluationRunId,
RulesetName,
Score,
StartedOn
FROM aws.glue.data_quality_results
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_data_quality_results">

Returns all data quality execution results for your account.

```sql
SELECT
NextToken,
Results
FROM aws.glue.data_quality_results
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
