--- 
title: executions
hide_title: false
hide_table_of_contents: false
keywords:
  - executions
  - iotsitewise
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

Creates, updates, deletes, gets or lists an <code>executions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="executions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotsitewise.executions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_executions"
    values={[
        { label: 'list_executions', value: 'list_executions' },
        { label: 'describe_execution', value: 'describe_execution' }
    ]}
>
<TabItem value="list_executions">

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
    <td><CopyableCode code="action_type" /></td>
    <td><code>string</code></td>
    <td>The type of action exectued. (pattern: &lt;code&gt;&#91;^\u0000-\u001F\u007F&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="execution_end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the process ended.</td>
</tr>
<tr>
    <td><CopyableCode code="execution_entity_version" /></td>
    <td><code>string</code></td>
    <td>The execution entity version associated with the summary. (pattern: &lt;code&gt;^(0|(&#91;1-9&#93;&#123;1&#125;\d*))$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="execution_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the execution. (pattern: &lt;code&gt;^(?!00000000-0000-0000-0000-000000000000)&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="execution_start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the process started.</td>
</tr>
<tr>
    <td><CopyableCode code="execution_status" /></td>
    <td><code>object</code></td>
    <td>The status of the execution process.</td>
</tr>
<tr>
    <td><CopyableCode code="resolve_to" /></td>
    <td><code>object</code></td>
    <td>The detailed resource this execution summary resolves to.</td>
</tr>
<tr>
    <td><CopyableCode code="target_resource" /></td>
    <td><code>object</code></td>
    <td>The resource the action will be taken on. This can include asset-based resources and computation model resources.</td>
</tr>
<tr>
    <td><CopyableCode code="target_resource_version" /></td>
    <td><code>string</code></td>
    <td>The version of the target resource. (pattern: &lt;code&gt;^(0|(&#91;1-9&#93;&#123;1&#125;\d*))$&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="describe_execution">

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
    <td><CopyableCode code="action_type" /></td>
    <td><code>string</code></td>
    <td>The type of action exectued. (pattern: &lt;code&gt;&#91;^\u0000-\u001F\u007F&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="execution_details" /></td>
    <td><code>object</code></td>
    <td>Provides detailed information about the execution of your anomaly detection models. This includes model metrics and training timestamps for both training and inference actions. The training action (Amazon Web Services/ANOMALY_DETECTION_TRAINING), includes performance metrics that help you compare different versions of your anomaly detection models. These metrics provide insights into the model's performance during the training process. The inference action (Amazon Web Services/ANOMALY_DETECTION_INFERENCE), includes information about the results of executing your anomaly detection models. This helps you understand the output of your models and assess their performance.</td>
</tr>
<tr>
    <td><CopyableCode code="execution_end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the process ended.</td>
</tr>
<tr>
    <td><CopyableCode code="execution_entity_version" /></td>
    <td><code>string</code></td>
    <td>Entity version used for the execution. (pattern: &lt;code&gt;^(0|(&#91;1-9&#93;&#123;1&#125;\d*))$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="execution_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the execution. (pattern: &lt;code&gt;^(?!00000000-0000-0000-0000-000000000000)&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="execution_result" /></td>
    <td><code>object</code></td>
    <td>The result of the execution.</td>
</tr>
<tr>
    <td><CopyableCode code="execution_start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the process started.</td>
</tr>
<tr>
    <td><CopyableCode code="execution_status" /></td>
    <td><code>object</code></td>
    <td>The status of the execution process.</td>
</tr>
<tr>
    <td><CopyableCode code="resolve_to" /></td>
    <td><code>object</code></td>
    <td>The detailed resource this execution resolves to.</td>
</tr>
<tr>
    <td><CopyableCode code="target_resource" /></td>
    <td><code>object</code></td>
    <td>The resource the action will be taken on. This can include asset-based resources and computation model resources.</td>
</tr>
<tr>
    <td><CopyableCode code="target_resource_version" /></td>
    <td><code>string</code></td>
    <td>The version of the target resource. (pattern: &lt;code&gt;^(0|(&#91;1-9&#93;&#123;1&#125;\d*))$&lt;/code&gt;)</td>
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
    <td><a href="#list_executions"><CopyableCode code="list_executions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-targetResourceType"><code>targetResourceType</code></a>, <a href="#parameter-targetResourceId"><code>targetResourceId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-resolveToResourceType"><code>resolveToResourceType</code></a>, <a href="#parameter-resolveToResourceId"><code>resolveToResourceId</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-actionType"><code>actionType</code></a></td>
    <td>Retrieves a paginated list of summaries of all executions.</td>
</tr>
<tr>
    <td><a href="#describe_execution"><CopyableCode code="describe_execution" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-execution_id"><code>execution_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about the execution.</td>
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
<tr id="parameter-execution_id">
    <td><CopyableCode code="execution_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the execution.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-targetResourceId">
    <td><CopyableCode code="targetResourceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the target resource.</td>
</tr>
<tr id="parameter-targetResourceType">
    <td><CopyableCode code="targetResourceType" /></td>
    <td><code>string</code></td>
    <td>The type of the target resource.</td>
</tr>
<tr id="parameter-actionType">
    <td><CopyableCode code="actionType" /></td>
    <td><code>string</code></td>
    <td>The type of action exectued.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results returned for each paginated request.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token used for the next set of paginated results.</td>
</tr>
<tr id="parameter-resolveToResourceId">
    <td><CopyableCode code="resolveToResourceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the resolved resource.</td>
</tr>
<tr id="parameter-resolveToResourceType">
    <td><CopyableCode code="resolveToResourceType" /></td>
    <td><code>string</code></td>
    <td>The type of the resolved resource.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_executions"
    values={[
        { label: 'list_executions', value: 'list_executions' },
        { label: 'describe_execution', value: 'describe_execution' }
    ]}
>
<TabItem value="list_executions">

Retrieves a paginated list of summaries of all executions.

```sql
SELECT
action_type,
execution_end_time,
execution_entity_version,
execution_id,
execution_start_time,
execution_status,
resolve_to,
target_resource,
target_resource_version
FROM aws.iotsitewise.executions
WHERE targetResourceType = '{{ targetResourceType }}' -- required
AND targetResourceId = '{{ targetResourceId }}' -- required
AND region = '{{ region }}' -- required
AND resolveToResourceType = '{{ resolveToResourceType }}'
AND resolveToResourceId = '{{ resolveToResourceId }}'
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND actionType = '{{ actionType }}'
;
```
</TabItem>
<TabItem value="describe_execution">

Retrieves information about the execution.

```sql
SELECT
action_type,
execution_details,
execution_end_time,
execution_entity_version,
execution_id,
execution_result,
execution_start_time,
execution_status,
resolve_to,
target_resource,
target_resource_version
FROM aws.iotsitewise.executions
WHERE execution_id = '{{ execution_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
