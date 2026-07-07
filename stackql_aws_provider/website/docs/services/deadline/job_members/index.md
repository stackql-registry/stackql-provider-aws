--- 
title: job_members
hide_title: false
hide_table_of_contents: false
keywords:
  - job_members
  - deadline
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

Creates, updates, deletes, gets or lists a <code>job_members</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="job_members" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.deadline.job_members" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_job_members"
    values={[
        { label: 'list_job_members', value: 'list_job_members' }
    ]}
>
<TabItem value="list_job_members">

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
    <td><CopyableCode code="farmId" /></td>
    <td><code>string</code></td>
    <td>The farm ID. (pattern: &lt;code&gt;farm-&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="identityStoreId" /></td>
    <td><code>string</code></td>
    <td>The identity store ID. (pattern: &lt;code&gt;d-&#91;0-9a-f&#93;&#123;10&#125;$|^&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="jobId" /></td>
    <td><code>string</code></td>
    <td>The job ID. (pattern: &lt;code&gt;job-&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="membershipLevel" /></td>
    <td><code>string</code></td>
    <td>The job member's membership level. (VIEWER, CONTRIBUTOR, OWNER, MANAGER)</td>
</tr>
<tr>
    <td><CopyableCode code="principalId" /></td>
    <td><code>string</code></td>
    <td>The principal ID of the job member. (pattern: &lt;code&gt;(&#91;0-9a-f&#93;&#123;10&#125;-|)&#91;A-Fa-f0-9&#93;&#123;8&#125;-&#91;A-Fa-f0-9&#93;&#123;4&#125;-&#91;A-Fa-f0-9&#93;&#123;4&#125;-&#91;A-Fa-f0-9&#93;&#123;4&#125;-&#91;A-Fa-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="principalType" /></td>
    <td><code>string</code></td>
    <td>The principal type of the job member. (USER, GROUP)</td>
</tr>
<tr>
    <td><CopyableCode code="queueId" /></td>
    <td><code>string</code></td>
    <td>The queue ID. (pattern: &lt;code&gt;queue-&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
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
    <td><a href="#list_job_members"><CopyableCode code="list_job_members" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-queue_id"><code>queue_id</code></a>, <a href="#parameter-job_id"><code>job_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists members on a job.</td>
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
<tr id="parameter-farm_id">
    <td><CopyableCode code="farm_id" /></td>
    <td><code>string</code></td>
    <td>The farm ID of the job to list.</td>
</tr>
<tr id="parameter-job_id">
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td>The job ID to include on the list.</td>
</tr>
<tr id="parameter-queue_id">
    <td><CopyableCode code="queue_id" /></td>
    <td><code>string</code></td>
    <td>The queue ID to include on the list.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results, or null to start from the beginning.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_job_members"
    values={[
        { label: 'list_job_members', value: 'list_job_members' }
    ]}
>
<TabItem value="list_job_members">

Lists members on a job.

```sql
SELECT
farmId,
identityStoreId,
jobId,
membershipLevel,
principalId,
principalType,
queueId
FROM aws.deadline.job_members
WHERE farm_id = '{{ farm_id }}' -- required
AND queue_id = '{{ queue_id }}' -- required
AND job_id = '{{ job_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>
