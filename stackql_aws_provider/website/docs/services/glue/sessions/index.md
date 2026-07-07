--- 
title: sessions
hide_title: false
hide_table_of_contents: false
keywords:
  - sessions
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

Creates, updates, deletes, gets or lists a <code>sessions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sessions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.glue.sessions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_session"
    values={[
        { label: 'get_session', value: 'get_session' }
    ]}
>
<TabItem value="get_session">

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
    <td><CopyableCode code="Command" /></td>
    <td><code>object</code></td>
    <td>The command object.See SessionCommand.</td>
</tr>
<tr>
    <td><CopyableCode code="CompletedOn" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that this session is completed.</td>
</tr>
<tr>
    <td><CopyableCode code="Connections" /></td>
    <td><code>object</code></td>
    <td>The number of connections used for the session.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedOn" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time and date when the session was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DPUSeconds" /></td>
    <td><code>number (double)</code></td>
    <td>The DPUs consumed by the session (formula: ExecutionTime * MaxCapacity).</td>
</tr>
<tr>
    <td><CopyableCode code="DefaultArguments" /></td>
    <td><code>object</code></td>
    <td>A map array of key-value pairs. Max is 75 pairs.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the session. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ErrorMessage" /></td>
    <td><code>string</code></td>
    <td>The error message displayed during the session. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ExecutionTime" /></td>
    <td><code>number (double)</code></td>
    <td>The total time the session ran for.</td>
</tr>
<tr>
    <td><CopyableCode code="GlueVersion" /></td>
    <td><code>string</code></td>
    <td>The Glue version determines the versions of Apache Spark and Python that Glue supports. The GlueVersion must be greater than 2.0. (pattern: &lt;code&gt;^(\w+\.)+\w+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The ID of the session. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="IdleTimeout" /></td>
    <td><code>integer</code></td>
    <td>The number of minutes when idle before the session times out.</td>
</tr>
<tr>
    <td><CopyableCode code="MaxCapacity" /></td>
    <td><code>number (double)</code></td>
    <td>The number of Glue data processing units (DPUs) that can be allocated when the job runs. A DPU is a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB memory.</td>
</tr>
<tr>
    <td><CopyableCode code="NumberOfWorkers" /></td>
    <td><code>integer</code></td>
    <td>The number of workers of a defined WorkerType to use for the session.</td>
</tr>
<tr>
    <td><CopyableCode code="ProfileName" /></td>
    <td><code>string</code></td>
    <td>The name of an Glue usage profile associated with the session. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Progress" /></td>
    <td><code>number (double)</code></td>
    <td>The code execution progress of the session.</td>
</tr>
<tr>
    <td><CopyableCode code="Role" /></td>
    <td><code>string</code></td>
    <td>The name or Amazon Resource Name (ARN) of the IAM role associated with the Session. (pattern: &lt;code&gt;arn:aws&#91;^:&#93;*:iam::&#91;0-9&#93;*:role/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SecurityConfiguration" /></td>
    <td><code>string</code></td>
    <td>The name of the SecurityConfiguration structure to be used with the session. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The session status. (PROVISIONING, READY, FAILED, TIMEOUT, STOPPING, STOPPED)</td>
</tr>
<tr>
    <td><CopyableCode code="WorkerType" /></td>
    <td><code>string</code></td>
    <td>The type of predefined worker that is allocated when a session runs. Accepts a value of G.1X, G.2X, G.4X, or G.8X for Spark sessions. Accepts the value Z.2X for Ray sessions. (Standard, G.1X, G.2X, G.025X, G.4X, G.8X, Z.2X)</td>
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
    <td><a href="#get_session"><CopyableCode code="get_session" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the session.</td>
</tr>
<tr>
    <td><a href="#create_session"><CopyableCode code="create_session" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Role"><code>Role</code></a>, <a href="#parameter-Command"><code>Command</code></a></td>
    <td></td>
    <td>Creates a new session.</td>
</tr>
<tr>
    <td><a href="#delete_session"><CopyableCode code="delete_session" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the session.</td>
</tr>
<tr>
    <td><a href="#cancel_statement"><CopyableCode code="cancel_statement" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SessionId"><code>SessionId</code></a></td>
    <td></td>
    <td>Cancels the statement.</td>
</tr>
<tr>
    <td><a href="#list_sessions"><CopyableCode code="list_sessions" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieve a list of sessions.</td>
</tr>
<tr>
    <td><a href="#run_statement"><CopyableCode code="run_statement" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SessionId"><code>SessionId</code></a>, <a href="#parameter-Code"><code>Code</code></a></td>
    <td></td>
    <td>Executes the statement.</td>
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
    defaultValue="get_session"
    values={[
        { label: 'get_session', value: 'get_session' }
    ]}
>
<TabItem value="get_session">

Retrieves the session.

```sql
SELECT
Command,
CompletedOn,
Connections,
CreatedOn,
DPUSeconds,
DefaultArguments,
Description,
ErrorMessage,
ExecutionTime,
GlueVersion,
Id,
IdleTimeout,
MaxCapacity,
NumberOfWorkers,
ProfileName,
Progress,
Role,
SecurityConfiguration,
Status,
WorkerType
FROM aws.glue.sessions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_session"
    values={[
        { label: 'create_session', value: 'create_session' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_session">

Creates a new session.

```sql
INSERT INTO aws.glue.sessions (
Id,
Description,
Role,
Command,
Timeout,
IdleTimeout,
DefaultArguments,
Connections,
MaxCapacity,
NumberOfWorkers,
WorkerType,
SecurityConfiguration,
GlueVersion,
Tags,
RequestOrigin,
region
)
SELECT 
'{{ Id }}',
'{{ Description }}',
'{{ Role }}' /* required */,
'{{ Command }}' /* required */,
{{ Timeout }},
{{ IdleTimeout }},
'{{ DefaultArguments }}',
'{{ Connections }}',
{{ MaxCapacity }},
{{ NumberOfWorkers }},
'{{ WorkerType }}',
'{{ SecurityConfiguration }}',
'{{ GlueVersion }}',
'{{ Tags }}',
'{{ RequestOrigin }}',
'{{ region }}'
RETURNING
Session
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: sessions
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the sessions resource.
    - name: Id
      value: "{{ Id }}"
      description: |
        The ID of the session request.
    - name: Description
      value: "{{ Description }}"
      description: |
        The description of the session.
    - name: Role
      value: "{{ Role }}"
      description: |
        The IAM Role ARN
    - name: Command
      description: |
        The SessionCommand that runs the job.
      value:
        Name: "{{ Name }}"
        PythonVersion: "{{ PythonVersion }}"
    - name: Timeout
      value: {{ Timeout }}
      description: |
        The number of minutes before session times out. Default for Spark ETL jobs is 48 hours (2880 minutes). Consult the documentation for other job types.
    - name: IdleTimeout
      value: {{ IdleTimeout }}
      description: |
        The number of minutes when idle before session times out. Default for Spark ETL jobs is value of Timeout. Consult the documentation for other job types.
    - name: DefaultArguments
      value: "{{ DefaultArguments }}"
      description: |
        A map array of key-value pairs. Max is 75 pairs.
    - name: Connections
      description: |
        The number of connections to use for the session.
      value:
        Connections:
          - "{{ Connections }}"
    - name: MaxCapacity
      value: {{ MaxCapacity }}
      description: |
        The number of Glue data processing units (DPUs) that can be allocated when the job runs. A DPU is a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB memory.
    - name: NumberOfWorkers
      value: {{ NumberOfWorkers }}
      description: |
        The number of workers of a defined WorkerType to use for the session.
    - name: WorkerType
      value: "{{ WorkerType }}"
      description: |
        The type of predefined worker that is allocated when a job runs. Accepts a value of G.1X, G.2X, G.4X, or G.8X for Spark jobs. Accepts the value Z.2X for Ray notebooks. For the G.1X worker type, each worker maps to 1 DPU (4 vCPUs, 16 GB of memory) with 94GB disk, and provides 1 executor per worker. We recommend this worker type for workloads such as data transforms, joins, and queries, to offers a scalable and cost effective way to run most jobs. For the G.2X worker type, each worker maps to 2 DPU (8 vCPUs, 32 GB of memory) with 138GB disk, and provides 1 executor per worker. We recommend this worker type for workloads such as data transforms, joins, and queries, to offers a scalable and cost effective way to run most jobs. For the G.4X worker type, each worker maps to 4 DPU (16 vCPUs, 64 GB of memory) with 256GB disk, and provides 1 executor per worker. We recommend this worker type for jobs whose workloads contain your most demanding transforms, aggregations, joins, and queries. This worker type is available only for Glue version 3.0 or later Spark ETL jobs in the following Amazon Web Services Regions: US East (Ohio), US East (N. Virginia), US West (Oregon), Asia Pacific (Singapore), Asia Pacific (Sydney), Asia Pacific (Tokyo), Canada (Central), Europe (Frankfurt), Europe (Ireland), and Europe (Stockholm). For the G.8X worker type, each worker maps to 8 DPU (32 vCPUs, 128 GB of memory) with 512GB disk, and provides 1 executor per worker. We recommend this worker type for jobs whose workloads contain your most demanding transforms, aggregations, joins, and queries. This worker type is available only for Glue version 3.0 or later Spark ETL jobs, in the same Amazon Web Services Regions as supported for the G.4X worker type. For the Z.2X worker type, each worker maps to 2 M-DPU (8vCPUs, 64 GB of memory) with 128 GB disk, and provides up to 8 Ray workers based on the autoscaler.
      valid_values: ['Standard', 'G.1X', 'G.2X', 'G.025X', 'G.4X', 'G.8X', 'Z.2X']
    - name: SecurityConfiguration
      value: "{{ SecurityConfiguration }}"
      description: |
        The name of the SecurityConfiguration structure to be used with the session
    - name: GlueVersion
      value: "{{ GlueVersion }}"
      description: |
        The Glue version determines the versions of Apache Spark and Python that Glue supports. The GlueVersion must be greater than 2.0.
    - name: Tags
      value: "{{ Tags }}"
      description: |
        The map of key value pairs (tags) belonging to the session.
    - name: RequestOrigin
      value: "{{ RequestOrigin }}"
      description: |
        The origin of the request.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_session"
    values={[
        { label: 'delete_session', value: 'delete_session' }
    ]}
>
<TabItem value="delete_session">

Deletes the session.

```sql
DELETE FROM aws.glue.sessions
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel_statement"
    values={[
        { label: 'cancel_statement', value: 'cancel_statement' },
        { label: 'list_sessions', value: 'list_sessions' },
        { label: 'run_statement', value: 'run_statement' }
    ]}
>
<TabItem value="cancel_statement">

Cancels the statement.

```sql
EXEC aws.glue.sessions.cancel_statement 
@region='{{ region }}' --required 
@@json=
'{
"SessionId": "{{ SessionId }}", 
"Id": {{ Id }}, 
"RequestOrigin": "{{ RequestOrigin }}"
}'
;
```
</TabItem>
<TabItem value="list_sessions">

Retrieve a list of sessions.

```sql
EXEC aws.glue.sessions.list_sessions 
@region='{{ region }}' --required 
@@json=
'{
"NextToken": "{{ NextToken }}", 
"MaxResults": {{ MaxResults }}, 
"Tags": "{{ Tags }}", 
"RequestOrigin": "{{ RequestOrigin }}"
}'
;
```
</TabItem>
<TabItem value="run_statement">

Executes the statement.

```sql
EXEC aws.glue.sessions.run_statement 
@region='{{ region }}' --required 
@@json=
'{
"SessionId": "{{ SessionId }}", 
"Code": "{{ Code }}", 
"RequestOrigin": "{{ RequestOrigin }}"
}'
;
```
</TabItem>
</Tabs>
