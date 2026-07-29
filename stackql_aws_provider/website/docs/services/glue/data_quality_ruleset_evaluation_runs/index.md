--- 
title: data_quality_ruleset_evaluation_runs
hide_title: false
hide_table_of_contents: false
keywords:
  - data_quality_ruleset_evaluation_runs
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

Creates, updates, deletes, gets or lists a <code>data_quality_ruleset_evaluation_runs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_quality_ruleset_evaluation_runs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.glue.data_quality_ruleset_evaluation_runs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_data_quality_ruleset_evaluation_run"
    values={[
        { label: 'get_data_quality_ruleset_evaluation_run', value: 'get_data_quality_ruleset_evaluation_run' },
        { label: 'list_data_quality_ruleset_evaluation_runs', value: 'list_data_quality_ruleset_evaluation_runs' }
    ]}
>
<TabItem value="get_data_quality_ruleset_evaluation_run">

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
    <td><CopyableCode code="additional_data_sources" /></td>
    <td><code>object</code></td>
    <td>A map of reference strings to additional data sources you can specify for an evaluation run.</td>
</tr>
<tr>
    <td><CopyableCode code="additional_run_options" /></td>
    <td><code>object</code></td>
    <td>Additional run options you can specify for an evaluation run.</td>
</tr>
<tr>
    <td><CopyableCode code="completed_on" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when this run was completed.</td>
</tr>
<tr>
    <td><CopyableCode code="data_source" /></td>
    <td><code>object</code></td>
    <td>The data source (an Glue table) associated with this evaluation run.</td>
</tr>
<tr>
    <td><CopyableCode code="error_string" /></td>
    <td><code>string</code></td>
    <td>The error strings that are associated with the run.</td>
</tr>
<tr>
    <td><CopyableCode code="execution_time" /></td>
    <td><code>integer</code></td>
    <td>The amount of time (in seconds) that the run consumed resources.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_on" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp. The last point in time when this data quality rule recommendation run was modified.</td>
</tr>
<tr>
    <td><CopyableCode code="number_of_workers" /></td>
    <td><code>integer</code></td>
    <td>The number of G.1X workers to be used in the run. The default is 5.</td>
</tr>
<tr>
    <td><CopyableCode code="result_ids" /></td>
    <td><code>array</code></td>
    <td>A list of result IDs for the data quality results for the run.</td>
</tr>
<tr>
    <td><CopyableCode code="role" /></td>
    <td><code>string</code></td>
    <td>An IAM role supplied to encrypt the results of the run.</td>
</tr>
<tr>
    <td><CopyableCode code="ruleset_names" /></td>
    <td><code>array</code></td>
    <td>A list of ruleset names for the run. Currently, this parameter takes only one Ruleset name.</td>
</tr>
<tr>
    <td><CopyableCode code="run_id" /></td>
    <td><code>string</code></td>
    <td>The unique run identifier associated with this run. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="started_on" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when this run started.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status for this run. (STARTING, RUNNING, STOPPING, STOPPED, SUCCEEDED, FAILED, TIMEOUT)</td>
</tr>
<tr>
    <td><CopyableCode code="timeout" /></td>
    <td><code>integer</code></td>
    <td>The timeout for a run in minutes. This is the maximum time that a run can consume resources before it is terminated and enters TIMEOUT status. The default is 2,880 minutes (48 hours).</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_data_quality_ruleset_evaluation_runs">

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
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>A pagination token, if more results are available.</td>
</tr>
<tr>
    <td><CopyableCode code="runs" /></td>
    <td><code>array</code></td>
    <td>A list of DataQualityRulesetEvaluationRunDescription objects representing data quality ruleset runs.</td>
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
    <td><a href="#get_data_quality_ruleset_evaluation_run"><CopyableCode code="get_data_quality_ruleset_evaluation_run" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a specific run where a ruleset is evaluated against a data source.</td>
</tr>
<tr>
    <td><a href="#list_data_quality_ruleset_evaluation_runs"><CopyableCode code="list_data_quality_ruleset_evaluation_runs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all the runs meeting the filter criteria, where a ruleset is evaluated against a data source.</td>
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
    defaultValue="get_data_quality_ruleset_evaluation_run"
    values={[
        { label: 'get_data_quality_ruleset_evaluation_run', value: 'get_data_quality_ruleset_evaluation_run' },
        { label: 'list_data_quality_ruleset_evaluation_runs', value: 'list_data_quality_ruleset_evaluation_runs' }
    ]}
>
<TabItem value="get_data_quality_ruleset_evaluation_run">

Retrieves a specific run where a ruleset is evaluated against a data source.

```sql
SELECT
additional_data_sources,
additional_run_options,
completed_on,
data_source,
error_string,
execution_time,
last_modified_on,
number_of_workers,
result_ids,
role,
ruleset_names,
run_id,
started_on,
status,
timeout
FROM aws.glue.data_quality_ruleset_evaluation_runs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_data_quality_ruleset_evaluation_runs">

Lists all the runs meeting the filter criteria, where a ruleset is evaluated against a data source.

```sql
SELECT
next_token,
runs
FROM aws.glue.data_quality_ruleset_evaluation_runs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
