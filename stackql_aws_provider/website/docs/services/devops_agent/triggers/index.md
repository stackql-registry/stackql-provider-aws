--- 
title: triggers
hide_title: false
hide_table_of_contents: false
keywords:
  - triggers
  - devops_agent
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

Creates, updates, deletes, gets or lists a <code>triggers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="triggers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.devops_agent.triggers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_trigger"
    values={[
        { label: 'get_trigger', value: 'get_trigger' },
        { label: 'list_triggers', value: 'list_triggers' }
    ]}
>
<TabItem value="get_trigger">

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
    <td><CopyableCode code="action" /></td>
    <td><code>object</code></td>
    <td>Action a Trigger performs when it fires</td>
</tr>
<tr>
    <td><CopyableCode code="agent_space_id" /></td>
    <td><code>string</code></td>
    <td>Unique identifier for an agent space (allows alphanumeric characters and hyphens; 1-64 characters) (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;&#123;1,64&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="condition" /></td>
    <td><code>object</code></td>
    <td>Defines the firing condition for a Trigger</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp when this Trigger was created</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of a Trigger</td>
</tr>
<tr>
    <td><CopyableCode code="trigger_id" /></td>
    <td><code>string</code></td>
    <td>Generic resource identifier (allows alphanumeric characters, hyphens, and underscores; 1-128 characters) (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>How a Trigger is fired</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp when this Trigger was last updated</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_triggers">

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
    <td><CopyableCode code="action" /></td>
    <td><code>object</code></td>
    <td>Action a Trigger performs when it fires</td>
</tr>
<tr>
    <td><CopyableCode code="agent_space_id" /></td>
    <td><code>string</code></td>
    <td>Unique identifier for an agent space (allows alphanumeric characters and hyphens; 1-64 characters) (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;&#123;1,64&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="condition" /></td>
    <td><code>object</code></td>
    <td>Defines the firing condition for a Trigger</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp when this Trigger was created</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of a Trigger</td>
</tr>
<tr>
    <td><CopyableCode code="trigger_id" /></td>
    <td><code>string</code></td>
    <td>Generic resource identifier (allows alphanumeric characters, hyphens, and underscores; 1-128 characters) (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>How a Trigger is fired</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp when this Trigger was last updated</td>
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
    <td><a href="#get_trigger"><CopyableCode code="get_trigger" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-agent_space_id"><code>agent_space_id</code></a>, <a href="#parameter-trigger_id"><code>trigger_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a Trigger from the specified agent space</td>
</tr>
<tr>
    <td><a href="#list_triggers"><CopyableCode code="list_triggers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-agent_space_id"><code>agent_space_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-status"><code>status</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists Triggers in the specified agent space</td>
</tr>
<tr>
    <td><a href="#create_trigger"><CopyableCode code="create_trigger" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-agent_space_id"><code>agent_space_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-condition"><code>condition</code></a>, <a href="#parameter-action"><code>action</code></a></td>
    <td></td>
    <td>Creates a new Trigger in the specified agent space</td>
</tr>
<tr>
    <td><a href="#update_trigger"><CopyableCode code="update_trigger" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-agent_space_id"><code>agent_space_id</code></a>, <a href="#parameter-trigger_id"><code>trigger_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the status of an existing Trigger</td>
</tr>
<tr>
    <td><a href="#delete_trigger"><CopyableCode code="delete_trigger" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-agent_space_id"><code>agent_space_id</code></a>, <a href="#parameter-trigger_id"><code>trigger_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a Trigger from the specified agent space</td>
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
<tr id="parameter-agent_space_id">
    <td><CopyableCode code="agent_space_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the agent space containing the Trigger</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-trigger_id">
    <td><CopyableCode code="trigger_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Trigger to delete</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in a single response</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>Pagination token from a previous response to retrieve the next page of results</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Filter results to Triggers in this status</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_trigger"
    values={[
        { label: 'get_trigger', value: 'get_trigger' },
        { label: 'list_triggers', value: 'list_triggers' }
    ]}
>
<TabItem value="get_trigger">

Gets a Trigger from the specified agent space

```sql
SELECT
action,
agent_space_id,
condition,
created_at,
status,
trigger_id,
type_,
updated_at
FROM aws.devops_agent.triggers
WHERE agent_space_id = '{{ agent_space_id }}' -- required
AND trigger_id = '{{ trigger_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_triggers">

Lists Triggers in the specified agent space

```sql
SELECT
action,
agent_space_id,
condition,
created_at,
status,
trigger_id,
type_,
updated_at
FROM aws.devops_agent.triggers
WHERE agent_space_id = '{{ agent_space_id }}' -- required
AND region = '{{ region }}' -- required
AND status = '{{ status }}'
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_trigger"
    values={[
        { label: 'create_trigger', value: 'create_trigger' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_trigger">

Creates a new Trigger in the specified agent space

```sql
INSERT INTO aws.devops_agent.triggers (
type,
condition,
action,
status,
clientToken,
agent_space_id,
region
)
SELECT 
'{{ type }}' /* required */,
'{{ condition }}' /* required */,
'{{ action }}' /* required */,
'{{ status }}',
'{{ clientToken }}',
'{{ agent_space_id }}',
'{{ region }}'
RETURNING
trigger
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: triggers
  props:
    - name: agent_space_id
      value: "{{ agent_space_id }}"
      description: Required parameter for the triggers resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the triggers resource.
    - name: type
      value: "{{ type }}"
      description: |
        How a Trigger is fired
    - name: condition
      description: |
        Defines the firing condition for a Trigger
      value:
        schedule:
          expression: "{{ expression }}"
    - name: action
      value: "{{ action }}"
      description: |
        Action a Trigger performs when it fires
    - name: status
      value: "{{ status }}"
      description: |
        The status of a Trigger
    - name: clientToken
      value: "{{ clientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_trigger"
    values={[
        { label: 'update_trigger', value: 'update_trigger' }
    ]}
>
<TabItem value="update_trigger">

Updates the status of an existing Trigger

```sql
UPDATE aws.devops_agent.triggers
SET 
status = '{{ status }}',
clientToken = '{{ clientToken }}'
WHERE 
agent_space_id = '{{ agent_space_id }}' --required
AND trigger_id = '{{ trigger_id }}' --required
AND region = '{{ region }}' --required
RETURNING
trigger;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_trigger"
    values={[
        { label: 'delete_trigger', value: 'delete_trigger' }
    ]}
>
<TabItem value="delete_trigger">

Deletes a Trigger from the specified agent space

```sql
DELETE FROM aws.devops_agent.triggers
WHERE agent_space_id = '{{ agent_space_id }}' --required
AND trigger_id = '{{ trigger_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
