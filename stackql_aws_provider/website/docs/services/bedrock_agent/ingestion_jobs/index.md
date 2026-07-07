--- 
title: ingestion_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - ingestion_jobs
  - bedrock_agent
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

Creates, updates, deletes, gets or lists an <code>ingestion_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ingestion_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agent.ingestion_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_ingestion_job"
    values={[
        { label: 'get_ingestion_job', value: 'get_ingestion_job' },
        { label: 'list_ingestion_jobs', value: 'list_ingestion_jobs' }
    ]}
>
<TabItem value="get_ingestion_job">

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
    <td><CopyableCode code="dataSourceId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the data source for the data ingestion job. (pattern: &lt;code&gt;&#91;0-9a-zA-Z&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the data ingestion job.</td>
</tr>
<tr>
    <td><CopyableCode code="failureReasons" /></td>
    <td><code>array</code></td>
    <td>A list of reasons that the data ingestion job failed.</td>
</tr>
<tr>
    <td><CopyableCode code="ingestionJobId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the data ingestion job. (pattern: &lt;code&gt;&#91;0-9a-zA-Z&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="knowledgeBaseId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the knowledge for the data ingestion job. (pattern: &lt;code&gt;&#91;0-9a-zA-Z&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="startedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the data ingestion job started. If you stop a data ingestion job, the startedAt time is the time the job was started before the job was stopped.</td>
</tr>
<tr>
    <td><CopyableCode code="statistics" /></td>
    <td><code>object</code></td>
    <td>Contains statistics about the data ingestion job.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the data ingestion job. (STARTING, IN_PROGRESS, COMPLETE, FAILED, STOPPING, STOPPED)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the data ingestion job was last updated. If you stop a data ingestion job, the updatedAt time is the time the job was stopped.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_ingestion_jobs">

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
    <td><CopyableCode code="dataSourceId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the data source for the data ingestion job. (pattern: &lt;code&gt;&#91;0-9a-zA-Z&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the data ingestion job.</td>
</tr>
<tr>
    <td><CopyableCode code="ingestionJobId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the data ingestion job. (pattern: &lt;code&gt;&#91;0-9a-zA-Z&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="knowledgeBaseId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the knowledge base for the data ingestion job. (pattern: &lt;code&gt;&#91;0-9a-zA-Z&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="startedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the data ingestion job started.</td>
</tr>
<tr>
    <td><CopyableCode code="statistics" /></td>
    <td><code>object</code></td>
    <td>Contains statistics for the data ingestion job.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the data ingestion job. (STARTING, IN_PROGRESS, COMPLETE, FAILED, STOPPING, STOPPED)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the data ingestion job was last updated.</td>
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
    <td><a href="#get_ingestion_job"><CopyableCode code="get_ingestion_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-knowledge_base_id"><code>knowledge_base_id</code></a>, <a href="#parameter-data_source_id"><code>data_source_id</code></a>, <a href="#parameter-ingestion_job_id"><code>ingestion_job_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a data ingestion job. Data sources are ingested into your knowledge base so that Large Language Models (LLMs) can use your data.</td>
</tr>
<tr>
    <td><a href="#list_ingestion_jobs"><CopyableCode code="list_ingestion_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-knowledge_base_id"><code>knowledge_base_id</code></a>, <a href="#parameter-data_source_id"><code>data_source_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the data ingestion jobs for a data source. The list also includes information about each job.</td>
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
<tr id="parameter-data_source_id">
    <td><CopyableCode code="data_source_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the data source for the list of data ingestion jobs.</td>
</tr>
<tr id="parameter-ingestion_job_id">
    <td><CopyableCode code="ingestion_job_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the data ingestion job you want to get information on.</td>
</tr>
<tr id="parameter-knowledge_base_id">
    <td><CopyableCode code="knowledge_base_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the knowledge base for the list of data ingestion jobs.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_ingestion_job"
    values={[
        { label: 'get_ingestion_job', value: 'get_ingestion_job' },
        { label: 'list_ingestion_jobs', value: 'list_ingestion_jobs' }
    ]}
>
<TabItem value="get_ingestion_job">

Gets information about a data ingestion job. Data sources are ingested into your knowledge base so that Large Language Models (LLMs) can use your data.

```sql
SELECT
dataSourceId,
description,
failureReasons,
ingestionJobId,
knowledgeBaseId,
startedAt,
statistics,
status,
updatedAt
FROM aws.bedrock_agent.ingestion_jobs
WHERE knowledge_base_id = '{{ knowledge_base_id }}' -- required
AND data_source_id = '{{ data_source_id }}' -- required
AND ingestion_job_id = '{{ ingestion_job_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_ingestion_jobs">

Lists the data ingestion jobs for a data source. The list also includes information about each job.

```sql
SELECT
dataSourceId,
description,
ingestionJobId,
knowledgeBaseId,
startedAt,
statistics,
status,
updatedAt
FROM aws.bedrock_agent.ingestion_jobs
WHERE knowledge_base_id = '{{ knowledge_base_id }}' -- required
AND data_source_id = '{{ data_source_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
