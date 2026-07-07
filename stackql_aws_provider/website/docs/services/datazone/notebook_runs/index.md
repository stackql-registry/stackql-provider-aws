--- 
title: notebook_runs
hide_title: false
hide_table_of_contents: false
keywords:
  - notebook_runs
  - datazone
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

Creates, updates, deletes, gets or lists a <code>notebook_runs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="notebook_runs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.datazone.notebook_runs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_notebook_run"
    values={[
        { label: 'get_notebook_run', value: 'get_notebook_run' },
        { label: 'list_notebook_runs', value: 'list_notebook_runs' }
    ]}
>
<TabItem value="get_notebook_run">

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
    <td>The identifier of the notebook run. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="cellOrder" /></td>
    <td><code>array</code></td>
    <td>The ordered list of cells in the notebook run.</td>
</tr>
<tr>
    <td><CopyableCode code="completedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the notebook run completed.</td>
</tr>
<tr>
    <td><CopyableCode code="computeConfiguration" /></td>
    <td><code>object</code></td>
    <td>The compute configuration of the notebook run.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the notebook run was created.</td>
</tr>
<tr>
    <td><CopyableCode code="createdBy" /></td>
    <td><code>string</code></td>
    <td>The identifier of the user who created the notebook run.</td>
</tr>
<tr>
    <td><CopyableCode code="domainId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon SageMaker Unified Studio domain. (pattern: &lt;code&gt;dzd&#91;-_&#93;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="environmentConfiguration" /></td>
    <td><code>object</code></td>
    <td>The environment configuration for a notebook run in Amazon SageMaker Unified Studio.</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>The error details if the notebook run failed.</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>The metadata of the notebook run.</td>
</tr>
<tr>
    <td><CopyableCode code="networkConfiguration" /></td>
    <td><code>object</code></td>
    <td>The network configuration of the notebook run.</td>
</tr>
<tr>
    <td><CopyableCode code="notebookId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the notebook. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="owningProjectId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the project that owns the notebook run. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="parameters" /></td>
    <td><code>object</code></td>
    <td>The sensitive parameters of the notebook run.</td>
</tr>
<tr>
    <td><CopyableCode code="scheduleId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the schedule associated with the notebook run. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="startedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the notebook run started executing.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the notebook run. (QUEUED, STARTING, RUNNING, STOPPING, STOPPED, SUCCEEDED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="storageConfiguration" /></td>
    <td><code>object</code></td>
    <td>The storage configuration of the notebook run, including the Amazon Simple Storage Service path and KMS key ARN.</td>
</tr>
<tr>
    <td><CopyableCode code="timeoutConfiguration" /></td>
    <td><code>object</code></td>
    <td>The timeout configuration of the notebook run.</td>
</tr>
<tr>
    <td><CopyableCode code="triggerSource" /></td>
    <td><code>object</code></td>
    <td>The source that triggered the notebook run.</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the notebook run was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="updatedBy" /></td>
    <td><code>string</code></td>
    <td>The identifier of the user who last updated the notebook run.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_notebook_runs">

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
    <td>The identifier of the notebook run. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="completedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the notebook run completed.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the notebook run was created.</td>
</tr>
<tr>
    <td><CopyableCode code="createdBy" /></td>
    <td><code>string</code></td>
    <td>The identifier of the user who created the notebook run.</td>
</tr>
<tr>
    <td><CopyableCode code="domainId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon SageMaker Unified Studio domain. (pattern: &lt;code&gt;dzd&#91;-_&#93;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="notebookId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the notebook. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="owningProjectId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the project that owns the notebook run. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="scheduleId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the schedule associated with the notebook run. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="startedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the notebook run started executing.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of a notebook run in Amazon SageMaker Unified Studio. (QUEUED, STARTING, RUNNING, STOPPING, STOPPED, SUCCEEDED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="triggerSource" /></td>
    <td><code>object</code></td>
    <td>The source that triggered the notebook run.</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the notebook run was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="updatedBy" /></td>
    <td><code>string</code></td>
    <td>The identifier of the user who last updated the notebook run.</td>
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
    <td><a href="#get_notebook_run"><CopyableCode code="get_notebook_run" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the details of a notebook run in Amazon SageMaker Unified Studio.</td>
</tr>
<tr>
    <td><a href="#list_notebook_runs"><CopyableCode code="list_notebook_runs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-owningProjectIdentifier"><code>owningProjectIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-notebookIdentifier"><code>notebookIdentifier</code></a>, <a href="#parameter-status"><code>status</code></a>, <a href="#parameter-scheduleIdentifier"><code>scheduleIdentifier</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists notebook runs in Amazon SageMaker Unified Studio.</td>
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
<tr id="parameter-domain_identifier">
    <td><CopyableCode code="domain_identifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon SageMaker Unified Studio domain in which to list notebook runs.</td>
</tr>
<tr id="parameter-identifier">
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the notebook run.</td>
</tr>
<tr id="parameter-owningProjectIdentifier">
    <td><CopyableCode code="owningProjectIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the project that owns the notebook runs.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of notebook runs to return in a single call. When the number of notebook runs exceeds the value of MaxResults, the response contains a NextToken value.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>When the number of notebook runs is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of notebook runs, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListNotebookRuns to list the next set of notebook runs.</td>
</tr>
<tr id="parameter-notebookIdentifier">
    <td><CopyableCode code="notebookIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the notebook to filter runs by.</td>
</tr>
<tr id="parameter-scheduleIdentifier">
    <td><CopyableCode code="scheduleIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the schedule to filter notebook runs by.</td>
</tr>
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
    <td><code>string</code></td>
    <td>The sort order for the results.</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status to filter notebook runs by.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_notebook_run"
    values={[
        { label: 'get_notebook_run', value: 'get_notebook_run' },
        { label: 'list_notebook_runs', value: 'list_notebook_runs' }
    ]}
>
<TabItem value="get_notebook_run">

Gets the details of a notebook run in Amazon SageMaker Unified Studio.

```sql
SELECT
id,
cellOrder,
completedAt,
computeConfiguration,
createdAt,
createdBy,
domainId,
environmentConfiguration,
error,
metadata,
networkConfiguration,
notebookId,
owningProjectId,
parameters,
scheduleId,
startedAt,
status,
storageConfiguration,
timeoutConfiguration,
triggerSource,
updatedAt,
updatedBy
FROM aws.datazone.notebook_runs
WHERE domain_identifier = '{{ domain_identifier }}' -- required
AND identifier = '{{ identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_notebook_runs">

Lists notebook runs in Amazon SageMaker Unified Studio.

```sql
SELECT
id,
completedAt,
createdAt,
createdBy,
domainId,
notebookId,
owningProjectId,
scheduleId,
startedAt,
status,
triggerSource,
updatedAt,
updatedBy
FROM aws.datazone.notebook_runs
WHERE domain_identifier = '{{ domain_identifier }}' -- required
AND owningProjectIdentifier = '{{ owningProjectIdentifier }}' -- required
AND region = '{{ region }}' -- required
AND notebookIdentifier = '{{ notebookIdentifier }}'
AND status = '{{ status }}'
AND scheduleIdentifier = '{{ scheduleIdentifier }}'
AND maxResults = '{{ maxResults }}'
AND sortOrder = '{{ sortOrder }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
