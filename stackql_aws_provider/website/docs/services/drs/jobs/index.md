--- 
title: jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - jobs
  - drs
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

Creates, updates, deletes, gets or lists a <code>jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.drs.jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_jobs"
    values={[
        { label: 'describe_jobs', value: 'describe_jobs' }
    ]}
>
<TabItem value="describe_jobs">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of a Job. (pattern: &lt;code&gt;arn:.&#123;16,2044&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creationDateTime" /></td>
    <td><code>string</code></td>
    <td>The date and time of when the Job was created. (pattern: &lt;code&gt;&#91;1-9&#93;&#91;0-9&#93;*-(0&#91;1-9&#93;|1&#91;0-2&#93;)-(0&#91;1-9&#93;|&#91;12&#93;&#91;0-9&#93;|3&#91;01&#93;)T(&#91;0-1&#93;&#91;0-9&#93;|2&#91;0-3&#93;):&#91;0-5&#93;&#91;0-9&#93;:&#91;0-5&#93;&#91;0-9&#93;(\.&#91;0-9&#93;+)?Z&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="endDateTime" /></td>
    <td><code>string</code></td>
    <td>The date and time of when the Job ended. (pattern: &lt;code&gt;&#91;1-9&#93;&#91;0-9&#93;*-(0&#91;1-9&#93;|1&#91;0-2&#93;)-(0&#91;1-9&#93;|&#91;12&#93;&#91;0-9&#93;|3&#91;01&#93;)T(&#91;0-1&#93;&#91;0-9&#93;|2&#91;0-3&#93;):&#91;0-5&#93;&#91;0-9&#93;:&#91;0-5&#93;&#91;0-9&#93;(\.&#91;0-9&#93;+)?Z&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="initiatedBy" /></td>
    <td><code>string</code></td>
    <td>A string representing who initiated the Job. (START_RECOVERY, START_DRILL, FAILBACK, DIAGNOSTIC, TERMINATE_RECOVERY_INSTANCES, TARGET_ACCOUNT, CREATE_NETWORK_RECOVERY, UPDATE_NETWORK_RECOVERY, ASSOCIATE_NETWORK_RECOVERY)</td>
</tr>
<tr>
    <td><CopyableCode code="jobID" /></td>
    <td><code>string</code></td>
    <td>The ID of the Job. (pattern: &lt;code&gt;drsjob-&#91;0-9a-zA-Z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="participatingResources" /></td>
    <td><code>array</code></td>
    <td>A list of resources that the Job is acting upon.</td>
</tr>
<tr>
    <td><CopyableCode code="participatingServers" /></td>
    <td><code>array</code></td>
    <td>A list of servers that the Job is acting upon.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the Job. (PENDING, STARTED, COMPLETED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>A list of tags associated with the Job.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of the Job. (LAUNCH, TERMINATE, CREATE_CONVERTED_SNAPSHOT)</td>
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
    <td><a href="#describe_jobs"><CopyableCode code="describe_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of Jobs. Use the JobsID and fromDate and toDate filters to limit which jobs are returned. The response is sorted by creationDataTime - latest date first. Jobs are created by the StartRecovery, TerminateRecoveryInstances and StartFailbackLaunch APIs. Jobs are also created by DiagnosticLaunch and TerminateDiagnosticInstances, which are APIs available only to *Support* and only used in response to relevant support tickets.</td>
</tr>
<tr>
    <td><a href="#delete_job"><CopyableCode code="delete_job" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a single Job by ID.</td>
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
    defaultValue="describe_jobs"
    values={[
        { label: 'describe_jobs', value: 'describe_jobs' }
    ]}
>
<TabItem value="describe_jobs">

Returns a list of Jobs. Use the JobsID and fromDate and toDate filters to limit which jobs are returned. The response is sorted by creationDataTime - latest date first. Jobs are created by the StartRecovery, TerminateRecoveryInstances and StartFailbackLaunch APIs. Jobs are also created by DiagnosticLaunch and TerminateDiagnosticInstances, which are APIs available only to *Support* and only used in response to relevant support tickets.

```sql
SELECT
arn,
creationDateTime,
endDateTime,
initiatedBy,
jobID,
participatingResources,
participatingServers,
status,
tags,
type_
FROM aws.drs.jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_job"
    values={[
        { label: 'delete_job', value: 'delete_job' }
    ]}
>
<TabItem value="delete_job">

Deletes a single Job by ID.

```sql
DELETE FROM aws.drs.jobs
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
