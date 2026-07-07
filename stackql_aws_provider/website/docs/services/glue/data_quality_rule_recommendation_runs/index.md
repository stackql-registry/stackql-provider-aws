--- 
title: data_quality_rule_recommendation_runs
hide_title: false
hide_table_of_contents: false
keywords:
  - data_quality_rule_recommendation_runs
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

Creates, updates, deletes, gets or lists a <code>data_quality_rule_recommendation_runs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_quality_rule_recommendation_runs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.glue.data_quality_rule_recommendation_runs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_data_quality_rule_recommendation_run"
    values={[
        { label: 'get_data_quality_rule_recommendation_run', value: 'get_data_quality_rule_recommendation_run' },
        { label: 'list_data_quality_rule_recommendation_runs', value: 'list_data_quality_rule_recommendation_runs' }
    ]}
>
<TabItem value="get_data_quality_rule_recommendation_run">

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
    <td><CopyableCode code="CompletedOn" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when this run was completed.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedRulesetName" /></td>
    <td><code>string</code></td>
    <td>The name of the ruleset that was created by the run. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="DataQualitySecurityConfiguration" /></td>
    <td><code>string</code></td>
    <td>The name of the security configuration created with the data quality encryption option. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="DataSource" /></td>
    <td><code>object</code></td>
    <td>The data source (an Glue table) associated with this run.</td>
</tr>
<tr>
    <td><CopyableCode code="ErrorString" /></td>
    <td><code>string</code></td>
    <td>The error strings that are associated with the run.</td>
</tr>
<tr>
    <td><CopyableCode code="ExecutionTime" /></td>
    <td><code>integer</code></td>
    <td>The amount of time (in seconds) that the run consumed resources.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedOn" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp. The last point in time when this data quality rule recommendation run was modified.</td>
</tr>
<tr>
    <td><CopyableCode code="NumberOfWorkers" /></td>
    <td><code>integer</code></td>
    <td>The number of G.1X workers to be used in the run. The default is 5.</td>
</tr>
<tr>
    <td><CopyableCode code="RecommendedRuleset" /></td>
    <td><code>string</code></td>
    <td>When a start rule recommendation run completes, it creates a recommended ruleset (a set of rules). This member has those rules in Data Quality Definition Language (DQDL) format.</td>
</tr>
<tr>
    <td><CopyableCode code="Role" /></td>
    <td><code>string</code></td>
    <td>An IAM role supplied to encrypt the results of the run.</td>
</tr>
<tr>
    <td><CopyableCode code="RunId" /></td>
    <td><code>string</code></td>
    <td>The unique run identifier associated with this run. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="StartedOn" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when this run started.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status for this run. (STARTING, RUNNING, STOPPING, STOPPED, SUCCEEDED, FAILED, TIMEOUT)</td>
</tr>
<tr>
    <td><CopyableCode code="Timeout" /></td>
    <td><code>integer</code></td>
    <td>The timeout for a run in minutes. This is the maximum time that a run can consume resources before it is terminated and enters TIMEOUT status. The default is 2,880 minutes (48 hours).</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_data_quality_rule_recommendation_runs">

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
    <td><CopyableCode code="Runs" /></td>
    <td><code>array</code></td>
    <td>A list of DataQualityRuleRecommendationRunDescription objects.</td>
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
    <td><a href="#get_data_quality_rule_recommendation_run"><CopyableCode code="get_data_quality_rule_recommendation_run" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the specified recommendation run that was used to generate rules.</td>
</tr>
<tr>
    <td><a href="#list_data_quality_rule_recommendation_runs"><CopyableCode code="list_data_quality_rule_recommendation_runs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the recommendation runs meeting the filter criteria.</td>
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
    defaultValue="get_data_quality_rule_recommendation_run"
    values={[
        { label: 'get_data_quality_rule_recommendation_run', value: 'get_data_quality_rule_recommendation_run' },
        { label: 'list_data_quality_rule_recommendation_runs', value: 'list_data_quality_rule_recommendation_runs' }
    ]}
>
<TabItem value="get_data_quality_rule_recommendation_run">

Gets the specified recommendation run that was used to generate rules.

```sql
SELECT
CompletedOn,
CreatedRulesetName,
DataQualitySecurityConfiguration,
DataSource,
ErrorString,
ExecutionTime,
LastModifiedOn,
NumberOfWorkers,
RecommendedRuleset,
Role,
RunId,
StartedOn,
Status,
Timeout
FROM aws.glue.data_quality_rule_recommendation_runs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_data_quality_rule_recommendation_runs">

Lists the recommendation runs meeting the filter criteria.

```sql
SELECT
NextToken,
Runs
FROM aws.glue.data_quality_rule_recommendation_runs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
