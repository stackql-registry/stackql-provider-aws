--- 
title: data_integration_flow_executions
hide_title: false
hide_table_of_contents: false
keywords:
  - data_integration_flow_executions
  - supplychain
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

Creates, updates, deletes, gets or lists a <code>data_integration_flow_executions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_integration_flow_executions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.supplychain.data_integration_flow_executions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_data_integration_flow_execution"
    values={[
        { label: 'get_data_integration_flow_execution', value: 'get_data_integration_flow_execution' },
        { label: 'list_data_integration_flow_executions', value: 'list_data_integration_flow_executions' }
    ]}
>
<TabItem value="get_data_integration_flow_execution">

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
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The flow execution end timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="executionId" /></td>
    <td><code>string</code></td>
    <td>The flow executionId. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="flowName" /></td>
    <td><code>string</code></td>
    <td>The flow execution's flowName. (pattern: &lt;code&gt;&#91;A-Za-z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="instanceId" /></td>
    <td><code>string</code></td>
    <td>The flow execution's instanceId. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>The failure message (if any) of failed flow execution.</td>
</tr>
<tr>
    <td><CopyableCode code="outputMetadata" /></td>
    <td><code>object</code></td>
    <td>The flow execution output metadata.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceInfo" /></td>
    <td><code>object</code></td>
    <td>The source information for a flow execution.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The flow execution start timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of flow execution. (SUCCEEDED, IN_PROGRESS, FAILED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_data_integration_flow_executions">

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
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The flow execution end timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="executionId" /></td>
    <td><code>string</code></td>
    <td>The flow executionId. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="flowName" /></td>
    <td><code>string</code></td>
    <td>The flow execution's flowName. (pattern: &lt;code&gt;&#91;A-Za-z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="instanceId" /></td>
    <td><code>string</code></td>
    <td>The flow execution's instanceId. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>The failure message (if any) of failed flow execution.</td>
</tr>
<tr>
    <td><CopyableCode code="outputMetadata" /></td>
    <td><code>object</code></td>
    <td>The flow execution output metadata.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceInfo" /></td>
    <td><code>object</code></td>
    <td>The source information for a flow execution.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The flow execution start timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of flow execution. (SUCCEEDED, IN_PROGRESS, FAILED)</td>
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
    <td><a href="#get_data_integration_flow_execution"><CopyableCode code="get_data_integration_flow_execution" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-flow_name"><code>flow_name</code></a>, <a href="#parameter-execution_id"><code>execution_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get the flow execution.</td>
</tr>
<tr>
    <td><a href="#list_data_integration_flow_executions"><CopyableCode code="list_data_integration_flow_executions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-flow_name"><code>flow_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>List flow executions.</td>
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
    <td>The flow execution identifier.</td>
</tr>
<tr id="parameter-flow_name">
    <td><CopyableCode code="flow_name" /></td>
    <td><code>string</code></td>
    <td>The flow name.</td>
</tr>
<tr id="parameter-instance_id">
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The AWS Supply Chain instance identifier.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The number to specify the max number of flow executions to fetch in this paginated request.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token to fetch next page of flow executions.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_data_integration_flow_execution"
    values={[
        { label: 'get_data_integration_flow_execution', value: 'get_data_integration_flow_execution' },
        { label: 'list_data_integration_flow_executions', value: 'list_data_integration_flow_executions' }
    ]}
>
<TabItem value="get_data_integration_flow_execution">

Get the flow execution.

```sql
SELECT
endTime,
executionId,
flowName,
instanceId,
message,
outputMetadata,
sourceInfo,
startTime,
status
FROM aws.supplychain.data_integration_flow_executions
WHERE instance_id = '{{ instance_id }}' -- required
AND flow_name = '{{ flow_name }}' -- required
AND execution_id = '{{ execution_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_data_integration_flow_executions">

List flow executions.

```sql
SELECT
endTime,
executionId,
flowName,
instanceId,
message,
outputMetadata,
sourceInfo,
startTime,
status
FROM aws.supplychain.data_integration_flow_executions
WHERE instance_id = '{{ instance_id }}' -- required
AND flow_name = '{{ flow_name }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>
