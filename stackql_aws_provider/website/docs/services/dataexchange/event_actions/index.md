--- 
title: event_actions
hide_title: false
hide_table_of_contents: false
keywords:
  - event_actions
  - dataexchange
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

Creates, updates, deletes, gets or lists an <code>event_actions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="event_actions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.dataexchange.event_actions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_event_action"
    values={[
        { label: 'get_event_action', value: 'get_event_action' },
        { label: 'list_event_actions', value: 'list_event_actions' }
    ]}
>
<TabItem value="get_event_action">

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
    <td><CopyableCode code="Action" /></td>
    <td><code>object</code></td>
    <td>What occurs after a certain event.</td>
</tr>
<tr>
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The ARN for the event action.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the event action was created, in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="Event" /></td>
    <td><code>object</code></td>
    <td>What occurs to start an action.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the event action. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#123;30,40&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>The tags for the event action.</td>
</tr>
<tr>
    <td><CopyableCode code="UpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the event action was last updated, in ISO 8601 format.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_event_actions">

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
    <td><CopyableCode code="Action" /></td>
    <td><code>object</code></td>
    <td>What occurs after a certain event.</td>
</tr>
<tr>
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the event action.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the event action was created, in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="Event" /></td>
    <td><code>object</code></td>
    <td>What occurs to start an action.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the event action. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#123;30,40&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="UpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the event action was last updated, in ISO 8601 format.</td>
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
    <td><a href="#get_event_action"><CopyableCode code="get_event_action" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-event_action_id"><code>event_action_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation retrieves information about an event action.</td>
</tr>
<tr>
    <td><a href="#list_event_actions"><CopyableCode code="list_event_actions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-eventSourceId"><code>eventSourceId</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>This operation lists your event actions.</td>
</tr>
<tr>
    <td><a href="#create_event_action"><CopyableCode code="create_event_action" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation creates an event action.</td>
</tr>
<tr>
    <td><a href="#update_event_action"><CopyableCode code="update_event_action" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-event_action_id"><code>event_action_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation updates the event action.</td>
</tr>
<tr>
    <td><a href="#delete_event_action"><CopyableCode code="delete_event_action" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-event_action_id"><code>event_action_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation deletes the event action.</td>
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
<tr id="parameter-event_action_id">
    <td><CopyableCode code="event_action_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the event action.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-eventSourceId">
    <td><CopyableCode code="eventSourceId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the event source.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results returned by a single call.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token value retrieved from a previous call to access the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_event_action"
    values={[
        { label: 'get_event_action', value: 'get_event_action' },
        { label: 'list_event_actions', value: 'list_event_actions' }
    ]}
>
<TabItem value="get_event_action">

This operation retrieves information about an event action.

```sql
SELECT
Action,
Arn,
CreatedAt,
Event,
Id,
Tags,
UpdatedAt
FROM aws.dataexchange.event_actions
WHERE event_action_id = '{{ event_action_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_event_actions">

This operation lists your event actions.

```sql
SELECT
Action,
Arn,
CreatedAt,
Event,
Id,
UpdatedAt
FROM aws.dataexchange.event_actions
WHERE region = '{{ region }}' -- required
AND eventSourceId = '{{ eventSourceId }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_event_action"
    values={[
        { label: 'create_event_action', value: 'create_event_action' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_event_action">

This operation creates an event action.

```sql
INSERT INTO aws.dataexchange.event_actions (
Action,
Event,
Tags,
region
)
SELECT 
'{{ Action }}',
'{{ Event }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
Action,
Arn,
CreatedAt,
Event,
Id,
Tags,
UpdatedAt
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: event_actions
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the event_actions resource.
    - name: Action
      description: |
        What occurs after a certain event.
      value:
        ExportRevisionToS3:
          Encryption:
            KmsKeyArn: "{{ KmsKeyArn }}"
            Type: "{{ Type }}"
          RevisionDestination:
            Bucket: "{{ Bucket }}"
            KeyPattern: "{{ KeyPattern }}"
    - name: Event
      description: |
        What occurs to start an action.
      value:
        RevisionPublished:
          DataSetId: "{{ DataSetId }}"
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_event_action"
    values={[
        { label: 'update_event_action', value: 'update_event_action' }
    ]}
>
<TabItem value="update_event_action">

This operation updates the event action.

```sql
UPDATE aws.dataexchange.event_actions
SET 
Action = '{{ Action }}'
WHERE 
event_action_id = '{{ event_action_id }}' --required
AND region = '{{ region }}' --required
RETURNING
Action,
Arn,
CreatedAt,
Event,
Id,
UpdatedAt;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_event_action"
    values={[
        { label: 'delete_event_action', value: 'delete_event_action' }
    ]}
>
<TabItem value="delete_event_action">

This operation deletes the event action.

```sql
DELETE FROM aws.dataexchange.event_actions
WHERE event_action_id = '{{ event_action_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
