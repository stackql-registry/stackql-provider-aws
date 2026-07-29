--- 
title: job_executions_for_things
hide_title: false
hide_table_of_contents: false
keywords:
  - job_executions_for_things
  - iot
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

Creates, updates, deletes, gets or lists a <code>job_executions_for_things</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="job_executions_for_things" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot.job_executions_for_things" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_job_executions_for_thing"
    values={[
        { label: 'list_job_executions_for_thing', value: 'list_job_executions_for_thing' }
    ]}
>
<TabItem value="list_job_executions_for_thing">

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
    <td><CopyableCode code="job_execution_summary" /></td>
    <td><code>object</code></td>
    <td>Contains a subset of information about a job execution.</td>
</tr>
<tr>
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier you assigned to this job when it was created. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#list_job_executions_for_thing"><CopyableCode code="list_job_executions_for_thing" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-thing_name"><code>thing_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-status"><code>status</code></a>, <a href="#parameter-namespaceId"><code>namespaceId</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-jobId"><code>jobId</code></a></td>
    <td>Lists the job executions for the specified thing. Requires permission to access the ListJobExecutionsForThing action.</td>
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
<tr id="parameter-thing_name">
    <td><CopyableCode code="thing_name" /></td>
    <td><code>string</code></td>
    <td>The thing name.</td>
</tr>
<tr id="parameter-jobId">
    <td><CopyableCode code="jobId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier you assigned to this job when it was created.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to be returned per request.</td>
</tr>
<tr id="parameter-namespaceId">
    <td><CopyableCode code="namespaceId" /></td>
    <td><code>string</code></td>
    <td>The namespace used to indicate that a job is a customer-managed job. When you specify a value for this parameter, Amazon Web Services IoT Core sends jobs notifications to MQTT topics that contain the value in the following format. $aws/things/THING_NAME/jobs/JOB_ID/notify-namespace-NAMESPACE_ID/ The namespaceId feature is only supported by IoT Greengrass at this time. For more information, see Setting up IoT Greengrass core devices.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token to retrieve the next set of results.</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>An optional filter that lets you search for jobs that have the specified status.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_job_executions_for_thing"
    values={[
        { label: 'list_job_executions_for_thing', value: 'list_job_executions_for_thing' }
    ]}
>
<TabItem value="list_job_executions_for_thing">

Lists the job executions for the specified thing. Requires permission to access the ListJobExecutionsForThing action.

```sql
SELECT
job_execution_summary,
job_id
FROM aws.iot.job_executions_for_things
WHERE thing_name = '{{ thing_name }}' -- required
AND region = '{{ region }}' -- required
AND status = '{{ status }}'
AND namespaceId = '{{ namespaceId }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND jobId = '{{ jobId }}'
;
```
</TabItem>
</Tabs>
