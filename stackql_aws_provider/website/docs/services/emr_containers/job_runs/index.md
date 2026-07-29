--- 
title: job_runs
hide_title: false
hide_table_of_contents: false
keywords:
  - job_runs
  - emr_containers
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.emr_containers.job_runs" /></td></tr>
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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the job run. (pattern: &lt;code&gt;&#91;0-9a-z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the job run. (pattern: &lt;code&gt;&#91;\.\-_/#A-Za-z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of job run. (pattern: &lt;code&gt;^arn:(aws&#91;a-zA-Z0-9-&#93;*):emr-containers:.+:(\d&#123;12&#125;):\/virtualclusters\/&#91;0-9a-zA-Z&#93;+\/jobruns\/&#91;0-9a-zA-Z&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="client_token" /></td>
    <td><code>string</code></td>
    <td>The client token used to start a job run. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="configuration_overrides" /></td>
    <td><code>object</code></td>
    <td>The configuration settings that are used to override default configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the job run was created.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The user who created the job run. (pattern: &lt;code&gt;^arn:(aws&#91;a-zA-Z0-9-&#93;*):(iam|sts)::(\d&#123;12&#125;)?:&#91;\w/+=,.@-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="execution_role_arn" /></td>
    <td><code>string</code></td>
    <td>The execution role ARN of the job run. (pattern: &lt;code&gt;^arn:(aws&#91;a-zA-Z0-9-&#93;*):iam::(\d&#123;12&#125;)?:(role((\u002F)|(\u002F&#91;\u0021-\u007F&#93;+\u002F))&#91;\w+=,.@-&#93;+)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reason" /></td>
    <td><code>string</code></td>
    <td>The reasons why the job run has failed. (INTERNAL_ERROR, USER_ERROR, VALIDATION_ERROR, CLUSTER_UNAVAILABLE)</td>
</tr>
<tr>
    <td><CopyableCode code="finished_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the job run has finished.</td>
</tr>
<tr>
    <td><CopyableCode code="job_driver" /></td>
    <td><code>object</code></td>
    <td>Parameters of job driver for the job run.</td>
</tr>
<tr>
    <td><CopyableCode code="release_label" /></td>
    <td><code>string</code></td>
    <td>The release version of Amazon EMR. (pattern: &lt;code&gt;&#91;\.\-_/A-Za-z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="retry_policy_configuration" /></td>
    <td><code>object</code></td>
    <td>The configuration of the retry policy that the job runs on.</td>
</tr>
<tr>
    <td><CopyableCode code="retry_policy_execution" /></td>
    <td><code>object</code></td>
    <td>The current status of the retry policy executed on the job.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the job run. (PENDING, SUBMITTED, RUNNING, FAILED, CANCELLED, CANCEL_PENDING, COMPLETED)</td>
</tr>
<tr>
    <td><CopyableCode code="state_details" /></td>
    <td><code>string</code></td>
    <td>Additional details of the job run state. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The assigned tags of the job run.</td>
</tr>
<tr>
    <td><CopyableCode code="virtual_cluster_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the job run's virtual cluster. (pattern: &lt;code&gt;&#91;0-9a-z&#93;+&lt;/code&gt;)</td>
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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the job run. (pattern: &lt;code&gt;&#91;0-9a-z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the job run. (pattern: &lt;code&gt;&#91;\.\-_/#A-Za-z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of job run. (pattern: &lt;code&gt;^arn:(aws&#91;a-zA-Z0-9-&#93;*):emr-containers:.+:(\d&#123;12&#125;):\/virtualclusters\/&#91;0-9a-zA-Z&#93;+\/jobruns\/&#91;0-9a-zA-Z&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="client_token" /></td>
    <td><code>string</code></td>
    <td>The client token used to start a job run. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="configuration_overrides" /></td>
    <td><code>object</code></td>
    <td>The configuration settings that are used to override default configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the job run was created.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The user who created the job run. (pattern: &lt;code&gt;^arn:(aws&#91;a-zA-Z0-9-&#93;*):(iam|sts)::(\d&#123;12&#125;)?:&#91;\w/+=,.@-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="execution_role_arn" /></td>
    <td><code>string</code></td>
    <td>The execution role ARN of the job run. (pattern: &lt;code&gt;^arn:(aws&#91;a-zA-Z0-9-&#93;*):iam::(\d&#123;12&#125;)?:(role((\u002F)|(\u002F&#91;\u0021-\u007F&#93;+\u002F))&#91;\w+=,.@-&#93;+)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reason" /></td>
    <td><code>string</code></td>
    <td>The reasons why the job run has failed. (INTERNAL_ERROR, USER_ERROR, VALIDATION_ERROR, CLUSTER_UNAVAILABLE)</td>
</tr>
<tr>
    <td><CopyableCode code="finished_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the job run has finished.</td>
</tr>
<tr>
    <td><CopyableCode code="job_driver" /></td>
    <td><code>object</code></td>
    <td>Parameters of job driver for the job run.</td>
</tr>
<tr>
    <td><CopyableCode code="release_label" /></td>
    <td><code>string</code></td>
    <td>The release version of Amazon EMR. (pattern: &lt;code&gt;&#91;\.\-_/A-Za-z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="retry_policy_configuration" /></td>
    <td><code>object</code></td>
    <td>The configuration of the retry policy that the job runs on.</td>
</tr>
<tr>
    <td><CopyableCode code="retry_policy_execution" /></td>
    <td><code>object</code></td>
    <td>The current status of the retry policy executed on the job.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the job run. (PENDING, SUBMITTED, RUNNING, FAILED, CANCELLED, CANCEL_PENDING, COMPLETED)</td>
</tr>
<tr>
    <td><CopyableCode code="state_details" /></td>
    <td><code>string</code></td>
    <td>Additional details of the job run state. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The assigned tags of the job run.</td>
</tr>
<tr>
    <td><CopyableCode code="virtual_cluster_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the job run's virtual cluster. (pattern: &lt;code&gt;&#91;0-9a-z&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#parameter-job_run_id"><code>job_run_id</code></a>, <a href="#parameter-virtual_cluster_id"><code>virtual_cluster_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Displays detailed information about a job run. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.</td>
</tr>
<tr>
    <td><a href="#list_job_runs"><CopyableCode code="list_job_runs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-virtual_cluster_id"><code>virtual_cluster_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-createdBefore"><code>createdBefore</code></a>, <a href="#parameter-createdAfter"><code>createdAfter</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-states"><code>states</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists job runs based on a set of parameters. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.</td>
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
<tr id="parameter-job_run_id">
    <td><CopyableCode code="job_run_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the job run request.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-virtual_cluster_id">
    <td><CopyableCode code="virtual_cluster_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the virtual cluster for which to list the job run.</td>
</tr>
<tr id="parameter-createdAfter">
    <td><CopyableCode code="createdAfter" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time after which the job runs were submitted.</td>
</tr>
<tr id="parameter-createdBefore">
    <td><CopyableCode code="createdBefore" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time before which the job runs were submitted.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of job runs that can be listed.</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the job run.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of job runs to return.</td>
</tr>
<tr id="parameter-states">
    <td><CopyableCode code="states" /></td>
    <td><code>array</code></td>
    <td>The states of the job run.</td>
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

Displays detailed information about a job run. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.

```sql
SELECT
id,
name,
arn,
client_token,
configuration_overrides,
created_at,
created_by,
execution_role_arn,
failure_reason,
finished_at,
job_driver,
release_label,
retry_policy_configuration,
retry_policy_execution,
state,
state_details,
tags,
virtual_cluster_id
FROM aws.emr_containers.job_runs
WHERE job_run_id = '{{ job_run_id }}' -- required
AND virtual_cluster_id = '{{ virtual_cluster_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_job_runs">

Lists job runs based on a set of parameters. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.

```sql
SELECT
id,
name,
arn,
client_token,
configuration_overrides,
created_at,
created_by,
execution_role_arn,
failure_reason,
finished_at,
job_driver,
release_label,
retry_policy_configuration,
retry_policy_execution,
state,
state_details,
tags,
virtual_cluster_id
FROM aws.emr_containers.job_runs
WHERE virtual_cluster_id = '{{ virtual_cluster_id }}' -- required
AND region = '{{ region }}' -- required
AND createdBefore = '{{ createdBefore }}'
AND createdAfter = '{{ createdAfter }}'
AND name = '{{ name }}'
AND states = '{{ states }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
