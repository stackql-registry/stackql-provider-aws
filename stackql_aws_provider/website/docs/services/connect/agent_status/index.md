--- 
title: agent_status
hide_title: false
hide_table_of_contents: false
keywords:
  - agent_status
  - connect
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

Creates, updates, deletes, gets or lists an <code>agent_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="agent_status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.agent_status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_agent_status"
    values={[
        { label: 'describe_agent_status', value: 'describe_agent_status' }
    ]}
>
<TabItem value="describe_agent_status">

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
    <td><CopyableCode code="AgentStatusARN" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the agent status.</td>
</tr>
<tr>
    <td><CopyableCode code="AgentStatusId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the agent status.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the agent status.</td>
</tr>
<tr>
    <td><CopyableCode code="DisplayOrder" /></td>
    <td><code>integer</code></td>
    <td>The display order of the agent status.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedRegion" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region where this resource was last modified. (pattern: &lt;code&gt;&#91;a-z&#93;&#123;2&#125;(-&#91;a-z&#93;+)&#123;1,2&#125;(-&#91;0-9&#93;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when this resource was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the agent status.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The state of the agent status. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>The tags used to organize, track, or control access for this resource. For example, &#123; "Tags": &#123;"key1":"value1", "key2":"value2"&#125; &#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>The type of agent status. (ROUTABLE, CUSTOM, OFFLINE)</td>
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
    <td><a href="#describe_agent_status"><CopyableCode code="describe_agent_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-agent_status_id"><code>agent_status_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes an agent status.</td>
</tr>
<tr>
    <td><a href="#create_agent_status"><CopyableCode code="create_agent_status" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Name"><code>Name</code></a>, <a href="#parameter-State"><code>State</code></a></td>
    <td></td>
    <td>Creates an agent status for the specified Amazon Connect instance.</td>
</tr>
<tr>
    <td><a href="#update_agent_status"><CopyableCode code="update_agent_status" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-agent_status_id"><code>agent_status_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates agent status.</td>
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
<tr id="parameter-agent_status_id">
    <td><CopyableCode code="agent_status_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the agent status.</td>
</tr>
<tr id="parameter-instance_id">
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance.</td>
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
    defaultValue="describe_agent_status"
    values={[
        { label: 'describe_agent_status', value: 'describe_agent_status' }
    ]}
>
<TabItem value="describe_agent_status">

Describes an agent status.

```sql
SELECT
AgentStatusARN,
AgentStatusId,
Description,
DisplayOrder,
LastModifiedRegion,
LastModifiedTime,
Name,
State,
Tags,
Type
FROM aws.connect.agent_status
WHERE instance_id = '{{ instance_id }}' -- required
AND agent_status_id = '{{ agent_status_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_agent_status"
    values={[
        { label: 'create_agent_status', value: 'create_agent_status' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_agent_status">

Creates an agent status for the specified Amazon Connect instance.

```sql
INSERT INTO aws.connect.agent_status (
Name,
Description,
State,
DisplayOrder,
Tags,
instance_id,
region
)
SELECT 
'{{ Name }}' /* required */,
'{{ Description }}',
'{{ State }}' /* required */,
{{ DisplayOrder }},
'{{ Tags }}',
'{{ instance_id }}',
'{{ region }}'
RETURNING
AgentStatusARN,
AgentStatusId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: agent_status
  props:
    - name: instance_id
      value: "{{ instance_id }}"
      description: Required parameter for the agent_status resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the agent_status resource.
    - name: Name
      value: "{{ Name }}"
    - name: Description
      value: "{{ Description }}"
    - name: State
      value: "{{ State }}"
      valid_values: ['ENABLED', 'DISABLED']
    - name: DisplayOrder
      value: {{ DisplayOrder }}
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_agent_status"
    values={[
        { label: 'update_agent_status', value: 'update_agent_status' }
    ]}
>
<TabItem value="update_agent_status">

Updates agent status.

```sql
UPDATE aws.connect.agent_status
SET 
Name = '{{ Name }}',
Description = '{{ Description }}',
State = '{{ State }}',
DisplayOrder = {{ DisplayOrder }},
ResetOrderNumber = {{ ResetOrderNumber }}
WHERE 
instance_id = '{{ instance_id }}' --required
AND agent_status_id = '{{ agent_status_id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>
