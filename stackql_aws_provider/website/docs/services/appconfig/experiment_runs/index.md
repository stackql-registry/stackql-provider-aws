--- 
title: experiment_runs
hide_title: false
hide_table_of_contents: false
keywords:
  - experiment_runs
  - appconfig
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

Creates, updates, deletes, gets or lists an <code>experiment_runs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="experiment_runs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.appconfig.experiment_runs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_experiment_run"
    values={[
        { label: 'get_experiment_run', value: 'get_experiment_run' },
        { label: 'list_experiment_runs', value: 'list_experiment_runs' }
    ]}
>
<TabItem value="get_experiment_run">

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
    <td><CopyableCode code="application_id" /></td>
    <td><code>string</code></td>
    <td>The application ID. (pattern: &lt;code&gt;&#91;a-z0-9&#93;&#123;4,7&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the experiment run.</td>
</tr>
<tr>
    <td><CopyableCode code="ended_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the experiment run ended, in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="experiment_definition_id" /></td>
    <td><code>string</code></td>
    <td>The experiment definition ID. (pattern: &lt;code&gt;&#91;a-z0-9&#93;&#123;4,7&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="experiment_definition_snapshot" /></td>
    <td><code>object</code></td>
    <td>A snapshot of the experiment definition at the time the run was started.</td>
</tr>
<tr>
    <td><CopyableCode code="exposure_percentage" /></td>
    <td><code>number (float)</code></td>
    <td>The percentage of the target audience exposed to treatments.</td>
</tr>
<tr>
    <td><CopyableCode code="result" /></td>
    <td><code>object</code></td>
    <td>The result of the experiment run, including the executive summary and launch decision rationale.</td>
</tr>
<tr>
    <td><CopyableCode code="run" /></td>
    <td><code>integer</code></td>
    <td>The experiment run number.</td>
</tr>
<tr>
    <td><CopyableCode code="started_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the experiment run started, in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the experiment run. Valid values: RUNNING, DONE. (RUNNING, DONE)</td>
</tr>
<tr>
    <td><CopyableCode code="treatment_overrides" /></td>
    <td><code>object</code></td>
    <td>Treatment assignment overrides that assign specific entity IDs to treatments.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the experiment run was last updated, in ISO 8601 format.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_experiment_runs">

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
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the experiment run.</td>
</tr>
<tr>
    <td><CopyableCode code="ended_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the experiment run ended, in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="experiment_definition_id" /></td>
    <td><code>string</code></td>
    <td>The experiment definition ID. (pattern: &lt;code&gt;&#91;a-z0-9&#93;&#123;4,7&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="run" /></td>
    <td><code>integer</code></td>
    <td>The experiment run number.</td>
</tr>
<tr>
    <td><CopyableCode code="started_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the experiment run started, in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the experiment run. (RUNNING, DONE)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the experiment run was last updated, in ISO 8601 format.</td>
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
    <td><a href="#get_experiment_run"><CopyableCode code="get_experiment_run" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application_identifier"><code>application_identifier</code></a>, <a href="#parameter-experiment_definition_identifier"><code>experiment_definition_identifier</code></a>, <a href="#parameter-run"><code>run</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about an experiment run, including its status, start time, and exposure settings.</td>
</tr>
<tr>
    <td><a href="#list_experiment_runs"><CopyableCode code="list_experiment_runs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application_identifier"><code>application_identifier</code></a>, <a href="#parameter-experiment_definition_identifier"><code>experiment_definition_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-max_results"><code>max_results</code></a>, <a href="#parameter-next_token"><code>next_token</code></a>, <a href="#parameter-status"><code>status</code></a></td>
    <td>Lists the experiment runs for a specified experiment definition. You can filter by status.</td>
</tr>
<tr>
    <td><a href="#update_experiment_run"><CopyableCode code="update_experiment_run" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-application_identifier"><code>application_identifier</code></a>, <a href="#parameter-experiment_definition_identifier"><code>experiment_definition_identifier</code></a>, <a href="#parameter-run"><code>run</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a running experiment. Use this operation to increase audience exposure, modify treatment assignment overrides, or update the description of an active experiment run. Audience exposure can only be increased, not decreased.</td>
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
<tr id="parameter-application_identifier">
    <td><CopyableCode code="application_identifier" /></td>
    <td><code>string</code></td>
    <td>The application ID or name.</td>
</tr>
<tr id="parameter-experiment_definition_identifier">
    <td><CopyableCode code="experiment_definition_identifier" /></td>
    <td><code>string</code></td>
    <td>The experiment definition ID or name.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-run">
    <td><CopyableCode code="run" /></td>
    <td><code>integer</code></td>
    <td>The run number to update.</td>
</tr>
<tr id="parameter-max_results">
    <td><CopyableCode code="max_results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return.</td>
</tr>
<tr id="parameter-next_token">
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>A token to start the list from a previously truncated response.</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>A filter for the experiment run status.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_experiment_run"
    values={[
        { label: 'get_experiment_run', value: 'get_experiment_run' },
        { label: 'list_experiment_runs', value: 'list_experiment_runs' }
    ]}
>
<TabItem value="get_experiment_run">

Retrieves information about an experiment run, including its status, start time, and exposure settings.

```sql
SELECT
application_id,
description,
ended_at,
experiment_definition_id,
experiment_definition_snapshot,
exposure_percentage,
result,
run,
started_at,
status,
treatment_overrides,
updated_at
FROM aws.appconfig.experiment_runs
WHERE application_identifier = '{{ application_identifier }}' -- required
AND experiment_definition_identifier = '{{ experiment_definition_identifier }}' -- required
AND run = '{{ run }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_experiment_runs">

Lists the experiment runs for a specified experiment definition. You can filter by status.

```sql
SELECT
description,
ended_at,
experiment_definition_id,
run,
started_at,
status,
updated_at
FROM aws.appconfig.experiment_runs
WHERE application_identifier = '{{ application_identifier }}' -- required
AND experiment_definition_identifier = '{{ experiment_definition_identifier }}' -- required
AND region = '{{ region }}' -- required
AND max_results = '{{ max_results }}'
AND next_token = '{{ next_token }}'
AND status = '{{ status }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_experiment_run"
    values={[
        { label: 'update_experiment_run', value: 'update_experiment_run' }
    ]}
>
<TabItem value="update_experiment_run">

Updates a running experiment. Use this operation to increase audience exposure, modify treatment assignment overrides, or update the description of an active experiment run. Audience exposure can only be increased, not decreased.

```sql
UPDATE aws.appconfig.experiment_runs
SET 
Description = '{{ Description }}',
ExposurePercentage = {{ ExposurePercentage }},
TreatmentOverrides = '{{ TreatmentOverrides }}',
DeploymentParameters = '{{ DeploymentParameters }}'
WHERE 
application_identifier = '{{ application_identifier }}' --required
AND experiment_definition_identifier = '{{ experiment_definition_identifier }}' --required
AND run = '{{ run }}' --required
AND region = '{{ region }}' --required
RETURNING
application_id,
description,
ended_at,
experiment_definition_id,
experiment_definition_snapshot,
exposure_percentage,
result,
run,
started_at,
status,
treatment_overrides,
updated_at;
```
</TabItem>
</Tabs>
