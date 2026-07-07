--- 
title: job_runs
hide_title: false
hide_table_of_contents: false
keywords:
  - job_runs
  - databrew
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

Creates, updates, deletes, gets or lists a <code>job_runs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="job_runs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.databrew.job_runs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_job_run"
    values={[
        { label: 'describe_job_run', value: 'describe_job_run' },
        { label: 'list_job_runs', value: 'list_job_runs' }
    ]}
>
<TabItem value="describe_job_run">

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
    <td><CopyableCode code="Attempt" /></td>
    <td><code>integer</code></td>
    <td>The number of times that DataBrew has attempted to run the job.</td>
</tr>
<tr>
    <td><CopyableCode code="CompletedOn" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the job completed processing.</td>
</tr>
<tr>
    <td><CopyableCode code="DataCatalogOutputs" /></td>
    <td><code>array</code></td>
    <td>One or more artifacts that represent the Glue Data Catalog output from running the job.</td>
</tr>
<tr>
    <td><CopyableCode code="DatabaseOutputs" /></td>
    <td><code>array</code></td>
    <td>Represents a list of JDBC database output objects which defines the output destination for a DataBrew recipe job to write into.</td>
</tr>
<tr>
    <td><CopyableCode code="DatasetName" /></td>
    <td><code>string</code></td>
    <td>The name of the dataset for the job to process.</td>
</tr>
<tr>
    <td><CopyableCode code="ErrorMessage" /></td>
    <td><code>string</code></td>
    <td>A message indicating an error (if any) that was encountered when the job ran.</td>
</tr>
<tr>
    <td><CopyableCode code="ExecutionTime" /></td>
    <td><code>integer</code></td>
    <td>The amount of time, in seconds, during which the job run consumed resources.</td>
</tr>
<tr>
    <td><CopyableCode code="JobName" /></td>
    <td><code>string</code></td>
    <td>The name of the job being processed during this run.</td>
</tr>
<tr>
    <td><CopyableCode code="JobSample" /></td>
    <td><code>object</code></td>
    <td>A sample configuration for profile jobs only, which determines the number of rows on which the profile job is run. If a JobSample value isn't provided, the default is used. The default value is CUSTOM_ROWS for the mode parameter and 20,000 for the size parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="LogGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of an Amazon CloudWatch log group, where the job writes diagnostic messages when it runs.</td>
</tr>
<tr>
    <td><CopyableCode code="LogSubscription" /></td>
    <td><code>string</code></td>
    <td>The current status of Amazon CloudWatch logging for the job run. (ENABLE, DISABLE)</td>
</tr>
<tr>
    <td><CopyableCode code="Outputs" /></td>
    <td><code>array</code></td>
    <td>One or more output artifacts from a job run.</td>
</tr>
<tr>
    <td><CopyableCode code="ProfileConfiguration" /></td>
    <td><code>object</code></td>
    <td>Configuration for profile jobs. Configuration can be used to select columns, do evaluations, and override default parameters of evaluations. When configuration is undefined, the profile job will apply default settings to all supported columns.</td>
</tr>
<tr>
    <td><CopyableCode code="RecipeReference" /></td>
    <td><code>object</code></td>
    <td>Represents the name and version of a DataBrew recipe.</td>
</tr>
<tr>
    <td><CopyableCode code="RunId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the job run.</td>
</tr>
<tr>
    <td><CopyableCode code="StartedBy" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the user who started the job run.</td>
</tr>
<tr>
    <td><CopyableCode code="StartedOn" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the job run began.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The current state of the job run entity itself. (STARTING, RUNNING, STOPPING, STOPPED, SUCCEEDED, FAILED, TIMEOUT)</td>
</tr>
<tr>
    <td><CopyableCode code="ValidationConfigurations" /></td>
    <td><code>array</code></td>
    <td>List of validation configurations that are applied to the profile job.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_job_runs">

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
    <td><CopyableCode code="Attempt" /></td>
    <td><code>integer</code></td>
    <td>The number of times that DataBrew has attempted to run the job.</td>
</tr>
<tr>
    <td><CopyableCode code="CompletedOn" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the job completed processing.</td>
</tr>
<tr>
    <td><CopyableCode code="DataCatalogOutputs" /></td>
    <td><code>array</code></td>
    <td>One or more artifacts that represent the Glue Data Catalog output from running the job.</td>
</tr>
<tr>
    <td><CopyableCode code="DatabaseOutputs" /></td>
    <td><code>array</code></td>
    <td>Represents a list of JDBC database output objects which defines the output destination for a DataBrew recipe job to write into.</td>
</tr>
<tr>
    <td><CopyableCode code="DatasetName" /></td>
    <td><code>string</code></td>
    <td>The name of the dataset for the job to process.</td>
</tr>
<tr>
    <td><CopyableCode code="ErrorMessage" /></td>
    <td><code>string</code></td>
    <td>A message indicating an error (if any) that was encountered when the job ran.</td>
</tr>
<tr>
    <td><CopyableCode code="ExecutionTime" /></td>
    <td><code>integer</code></td>
    <td>The amount of time, in seconds, during which a job run consumed resources.</td>
</tr>
<tr>
    <td><CopyableCode code="JobName" /></td>
    <td><code>string</code></td>
    <td>The name of the job being processed during this run.</td>
</tr>
<tr>
    <td><CopyableCode code="JobSample" /></td>
    <td><code>object</code></td>
    <td>A sample configuration for profile jobs only, which determines the number of rows on which the profile job is run. If a JobSample value isn't provided, the default is used. The default value is CUSTOM_ROWS for the mode parameter and 20,000 for the size parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="LogGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of an Amazon CloudWatch log group, where the job writes diagnostic messages when it runs.</td>
</tr>
<tr>
    <td><CopyableCode code="LogSubscription" /></td>
    <td><code>string</code></td>
    <td>The current status of Amazon CloudWatch logging for the job run. (ENABLE, DISABLE)</td>
</tr>
<tr>
    <td><CopyableCode code="Outputs" /></td>
    <td><code>array</code></td>
    <td>One or more output artifacts from a job run.</td>
</tr>
<tr>
    <td><CopyableCode code="RecipeReference" /></td>
    <td><code>object</code></td>
    <td>Represents the name and version of a DataBrew recipe.</td>
</tr>
<tr>
    <td><CopyableCode code="RunId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the job run.</td>
</tr>
<tr>
    <td><CopyableCode code="StartedBy" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the user who initiated the job run.</td>
</tr>
<tr>
    <td><CopyableCode code="StartedOn" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the job run began.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The current state of the job run entity itself. (STARTING, RUNNING, STOPPING, STOPPED, SUCCEEDED, FAILED, TIMEOUT)</td>
</tr>
<tr>
    <td><CopyableCode code="ValidationConfigurations" /></td>
    <td><code>array</code></td>
    <td>List of validation configurations that are applied to the profile job run.</td>
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
    <td><a href="#describe_job_run"><CopyableCode code="describe_job_run" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-run_id"><code>run_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Represents one run of a DataBrew job.</td>
</tr>
<tr>
    <td><a href="#list_job_runs"><CopyableCode code="list_job_runs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists all of the previous runs of a particular DataBrew job.</td>
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
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the job.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-run_id">
    <td><CopyableCode code="run_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the job run.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in this request.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token returned by a previous call to retrieve the next set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_job_run"
    values={[
        { label: 'describe_job_run', value: 'describe_job_run' },
        { label: 'list_job_runs', value: 'list_job_runs' }
    ]}
>
<TabItem value="describe_job_run">

Represents one run of a DataBrew job.

```sql
SELECT
Attempt,
CompletedOn,
DataCatalogOutputs,
DatabaseOutputs,
DatasetName,
ErrorMessage,
ExecutionTime,
JobName,
JobSample,
LogGroupName,
LogSubscription,
Outputs,
ProfileConfiguration,
RecipeReference,
RunId,
StartedBy,
StartedOn,
State,
ValidationConfigurations
FROM aws.databrew.job_runs
WHERE name = '{{ name }}' -- required
AND run_id = '{{ run_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_job_runs">

Lists all of the previous runs of a particular DataBrew job.

```sql
SELECT
Attempt,
CompletedOn,
DataCatalogOutputs,
DatabaseOutputs,
DatasetName,
ErrorMessage,
ExecutionTime,
JobName,
JobSample,
LogGroupName,
LogSubscription,
Outputs,
RecipeReference,
RunId,
StartedBy,
StartedOn,
State,
ValidationConfigurations
FROM aws.databrew.job_runs
WHERE name = '{{ name }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
