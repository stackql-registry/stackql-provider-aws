--- 
title: agent_statuses
hide_title: false
hide_table_of_contents: false
keywords:
  - agent_statuses
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

Creates, updates, deletes, gets or lists an <code>agent_statuses</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="agent_statuses" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.agent_statuses" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_agent_status"
    values={[
        { label: 'describe_agent_status', value: 'describe_agent_status' },
        { label: 'list_agent_statuses', value: 'list_agent_statuses' }
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
    <td><CopyableCode code="agent_status_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the agent status.</td>
</tr>
<tr>
    <td><CopyableCode code="agent_status_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the agent status.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the agent status.</td>
</tr>
<tr>
    <td><CopyableCode code="display_order" /></td>
    <td><code>integer</code></td>
    <td>The display order of the agent status.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_region" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region where this resource was last modified. (pattern: &lt;code&gt;&#91;a-z&#93;&#123;2&#125;(-&#91;a-z&#93;+)&#123;1,2&#125;(-&#91;0-9&#93;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when this resource was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the agent status.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the agent status. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags used to organize, track, or control access for this resource. For example, &#123; "Tags": &#123;"key1":"value1", "key2":"value2"&#125; &#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of agent status. (ROUTABLE, CUSTOM, OFFLINE)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_agent_statuses">

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
    <td>The Amazon Resource Name (ARN) for the agent status.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The identifier for an agent status.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_region" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region where this resource was last modified. (pattern: &lt;code&gt;&#91;a-z&#93;&#123;2&#125;(-&#91;a-z&#93;+)&#123;1,2&#125;(-&#91;0-9&#93;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when this resource was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the agent status.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the agent status. (ROUTABLE, CUSTOM, OFFLINE)</td>
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
    <td><a href="#list_agent_statuses"><CopyableCode code="list_agent_statuses" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-AgentStatusTypes"><code>AgentStatusTypes</code></a></td>
    <td>Lists agent statuses.</td>
</tr>
<tr>
    <td><a href="#create_agent_status"><CopyableCode code="create_agent_status" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates an agent status for the specified Connect Customer instance.</td>
</tr>
<tr>
    <td><a href="#update_agent_status"><CopyableCode code="update_agent_status" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-agent_status_id"><code>agent_status_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates agent status.</td>
</tr>
<tr>
    <td><a href="#search_agent_statuses"><CopyableCode code="search_agent_statuses" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-InstanceId"><code>InstanceId</code></a></td>
    <td></td>
    <td>Searches AgentStatuses in an Connect Customer instance, with optional filtering.</td>
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
    <td>The identifier of the Connect Customer instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-AgentStatusTypes">
    <td><CopyableCode code="AgentStatusTypes" /></td>
    <td><code>array</code></td>
    <td>Available agent status types.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per page.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_agent_status"
    values={[
        { label: 'describe_agent_status', value: 'describe_agent_status' },
        { label: 'list_agent_statuses', value: 'list_agent_statuses' }
    ]}
>
<TabItem value="describe_agent_status">

Describes an agent status.

```sql
SELECT
agent_status_arn,
agent_status_id,
description,
display_order,
last_modified_region,
last_modified_time,
name,
state,
tags,
type
FROM aws.connect.agent_statuses
WHERE instance_id = '{{ instance_id }}' -- required
AND agent_status_id = '{{ agent_status_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_agent_statuses">

Lists agent statuses.

```sql
SELECT
arn,
id,
last_modified_region,
last_modified_time,
name,
type
FROM aws.connect.agent_statuses
WHERE instance_id = '{{ instance_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND AgentStatusTypes = '{{ AgentStatusTypes }}'
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

Creates an agent status for the specified Connect Customer instance.

```sql
INSERT INTO aws.connect.agent_statuses (
Name,
Description,
State,
DisplayOrder,
Tags,
instance_id,
region
)
SELECT 
'{{ Name }}',
'{{ Description }}',
'{{ State }}',
{{ DisplayOrder }},
'{{ Tags }}',
'{{ instance_id }}',
'{{ region }}'
RETURNING
agent_status_arn,
agent_status_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: agent_statuses
  props:
    - name: instance_id
      value: "{{ instance_id }}"
      description: Required parameter for the agent_statuses resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the agent_statuses resource.
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
UPDATE aws.connect.agent_statuses
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


## Lifecycle Methods

<Tabs
    defaultValue="search_agent_statuses"
    values={[
        { label: 'search_agent_statuses', value: 'search_agent_statuses' }
    ]}
>
<TabItem value="search_agent_statuses">

Searches AgentStatuses in an Connect Customer instance, with optional filtering.

```sql
EXEC aws.connect.agent_statuses.search_agent_statuses 
@region='{{ region }}' --required 
@@json=
'{
"InstanceId": "{{ InstanceId }}", 
"NextToken": "{{ NextToken }}", 
"MaxResults": {{ MaxResults }}, 
"SearchFilter": "{{ SearchFilter }}", 
"SearchCriteria": "{{ SearchCriteria }}"
}'
;
```
</TabItem>
</Tabs>
