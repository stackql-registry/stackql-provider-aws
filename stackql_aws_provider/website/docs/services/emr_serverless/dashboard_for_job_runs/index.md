--- 
title: dashboard_for_job_runs
hide_title: false
hide_table_of_contents: false
keywords:
  - dashboard_for_job_runs
  - emr_serverless
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

Creates, updates, deletes, gets or lists a <code>dashboard_for_job_runs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="dashboard_for_job_runs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.emr_serverless.dashboard_for_job_runs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_dashboard_for_job_run"
    values={[
        { label: 'get_dashboard_for_job_run', value: 'get_dashboard_for_job_run' }
    ]}
>
<TabItem value="get_dashboard_for_job_run">

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
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td>The URL to view job run's dashboard.</td>
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
    <td><a href="#get_dashboard_for_job_run"><CopyableCode code="get_dashboard_for_job_run" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-job_run_id"><code>job_run_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-attempt"><code>attempt</code></a>, <a href="#parameter-accessSystemProfileLogs"><code>accessSystemProfileLogs</code></a></td>
    <td>Creates and returns a URL that you can use to access the application UIs for a job run. For jobs in a running state, the application UI is a live user interface such as the Spark or Tez web UI. For completed jobs, the application UI is a persistent application user interface such as the Spark History Server or persistent Tez UI. The URL is valid for one hour after you generate it. To access the application UI after that hour elapses, you must invoke the API again to generate a new URL.</td>
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
<tr id="parameter-application_id">
    <td><CopyableCode code="application_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the application.</td>
</tr>
<tr id="parameter-job_run_id">
    <td><CopyableCode code="job_run_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the job run.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-accessSystemProfileLogs">
    <td><CopyableCode code="accessSystemProfileLogs" /></td>
    <td><code>boolean</code></td>
    <td>Allows access to system profile logs for Lake Formation-enabled jobs. Default is false.</td>
</tr>
<tr id="parameter-attempt">
    <td><CopyableCode code="attempt" /></td>
    <td><code>integer</code></td>
    <td>An optimal parameter that indicates the amount of attempts for the job. If not specified, this value defaults to the attempt of the latest job.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_dashboard_for_job_run"
    values={[
        { label: 'get_dashboard_for_job_run', value: 'get_dashboard_for_job_run' }
    ]}
>
<TabItem value="get_dashboard_for_job_run">

Creates and returns a URL that you can use to access the application UIs for a job run. For jobs in a running state, the application UI is a live user interface such as the Spark or Tez web UI. For completed jobs, the application UI is a persistent application user interface such as the Spark History Server or persistent Tez UI. The URL is valid for one hour after you generate it. To access the application UI after that hour elapses, you must invoke the API again to generate a new URL.

```sql
SELECT
url
FROM aws.emr_serverless.dashboard_for_job_runs
WHERE application_id = '{{ application_id }}' -- required
AND job_run_id = '{{ job_run_id }}' -- required
AND region = '{{ region }}' -- required
AND attempt = '{{ attempt }}'
AND accessSystemProfileLogs = '{{ accessSystemProfileLogs }}'
;
```
</TabItem>
</Tabs>
