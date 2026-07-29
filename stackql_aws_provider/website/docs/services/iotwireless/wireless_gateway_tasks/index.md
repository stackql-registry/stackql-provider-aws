--- 
title: wireless_gateway_tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - wireless_gateway_tasks
  - iotwireless
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

Creates, updates, deletes, gets or lists a <code>wireless_gateway_tasks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="wireless_gateway_tasks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotwireless.wireless_gateway_tasks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_wireless_gateway_task"
    values={[
        { label: 'get_wireless_gateway_task', value: 'get_wireless_gateway_task' }
    ]}
>
<TabItem value="get_wireless_gateway_task">

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
    <td><CopyableCode code="last_uplink_received_at" /></td>
    <td><code>string</code></td>
    <td>The date and time when the most recent uplink was received. This value is only valid for 3 months. (pattern: &lt;code&gt;^(&#91;\+-&#93;?\d&#123;4&#125;(?!\d&#123;2&#125;\b))((-?)((0&#91;1-9&#93;|1&#91;0-2&#93;)(\3(&#91;12&#93;\d|0&#91;1-9&#93;|3&#91;01&#93;))?|W(&#91;0-4&#93;\d|5&#91;0-2&#93;)(-?&#91;1-7&#93;)?|(00&#91;1-9&#93;|0&#91;1-9&#93;\d|&#91;12&#93;\d&#123;2&#125;|3(&#91;0-5&#93;\d|6&#91;1-6&#93;)))(&#91;T\s&#93;(((&#91;01&#93;\d|2&#91;0-3&#93;)((:?)&#91;0-5&#93;\d)?|24\:?00)(&#91;\.,&#93;\d+(?!:))?)?(\17&#91;0-5&#93;\d(&#91;\.,&#93;\d+)?)?(&#91;zZ&#93;|(&#91;\+-&#93;)(&#91;01&#93;\d|2&#91;0-3&#93;):?(&#91;0-5&#93;\d)?)?)?)?$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the request. (PENDING, IN_PROGRESS, FIRST_RETRY, SECOND_RETRY, COMPLETED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="task_created_at" /></td>
    <td><code>string</code></td>
    <td>The date and time when the task was created. (pattern: &lt;code&gt;^(&#91;\+-&#93;?\d&#123;4&#125;(?!\d&#123;2&#125;\b))((-?)((0&#91;1-9&#93;|1&#91;0-2&#93;)(\3(&#91;12&#93;\d|0&#91;1-9&#93;|3&#91;01&#93;))?|W(&#91;0-4&#93;\d|5&#91;0-2&#93;)(-?&#91;1-7&#93;)?|(00&#91;1-9&#93;|0&#91;1-9&#93;\d|&#91;12&#93;\d&#123;2&#125;|3(&#91;0-5&#93;\d|6&#91;1-6&#93;)))(&#91;T\s&#93;(((&#91;01&#93;\d|2&#91;0-3&#93;)((:?)&#91;0-5&#93;\d)?|24\:?00)(&#91;\.,&#93;\d+(?!:))?)?(\17&#91;0-5&#93;\d(&#91;\.,&#93;\d+)?)?(&#91;zZ&#93;|(&#91;\+-&#93;)(&#91;01&#93;\d|2&#91;0-3&#93;):?(&#91;0-5&#93;\d)?)?)?)?$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="wireless_gateway_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the wireless gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="wireless_gateway_task_definition_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the WirelessGatewayTask. (pattern: &lt;code&gt;&#91;a-fA-F0-9&#93;&#123;8&#125;-&#91;a-fA-F0-9&#93;&#123;4&#125;-&#91;a-fA-F0-9&#93;&#123;4&#125;-&#91;a-fA-F0-9&#93;&#123;4&#125;-&#91;a-fA-F0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
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
    <td><a href="#get_wireless_gateway_task"><CopyableCode code="get_wireless_gateway_task" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a wireless gateway task.</td>
</tr>
<tr>
    <td><a href="#create_wireless_gateway_task"><CopyableCode code="create_wireless_gateway_task" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-WirelessGatewayTaskDefinitionId"><code>WirelessGatewayTaskDefinitionId</code></a></td>
    <td></td>
    <td>Creates a task for a wireless gateway.</td>
</tr>
<tr>
    <td><a href="#delete_wireless_gateway_task"><CopyableCode code="delete_wireless_gateway_task" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a wireless gateway task.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the resource to delete.</td>
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
    defaultValue="get_wireless_gateway_task"
    values={[
        { label: 'get_wireless_gateway_task', value: 'get_wireless_gateway_task' }
    ]}
>
<TabItem value="get_wireless_gateway_task">

Gets information about a wireless gateway task.

```sql
SELECT
last_uplink_received_at,
status,
task_created_at,
wireless_gateway_id,
wireless_gateway_task_definition_id
FROM aws.iotwireless.wireless_gateway_tasks
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_wireless_gateway_task"
    values={[
        { label: 'create_wireless_gateway_task', value: 'create_wireless_gateway_task' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_wireless_gateway_task">

Creates a task for a wireless gateway.

```sql
INSERT INTO aws.iotwireless.wireless_gateway_tasks (
WirelessGatewayTaskDefinitionId,
id,
region
)
SELECT 
'{{ WirelessGatewayTaskDefinitionId }}' /* required */,
'{{ id }}',
'{{ region }}'
RETURNING
status,
wireless_gateway_task_definition_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: wireless_gateway_tasks
  props:
    - name: id
      value: "{{ id }}"
      description: Required parameter for the wireless_gateway_tasks resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the wireless_gateway_tasks resource.
    - name: WirelessGatewayTaskDefinitionId
      value: "{{ WirelessGatewayTaskDefinitionId }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_wireless_gateway_task"
    values={[
        { label: 'delete_wireless_gateway_task', value: 'delete_wireless_gateway_task' }
    ]}
>
<TabItem value="delete_wireless_gateway_task">

Deletes a wireless gateway task.

```sql
DELETE FROM aws.iotwireless.wireless_gateway_tasks
WHERE id = '{{ id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
