--- 
title: sessions
hide_title: false
hide_table_of_contents: false
keywords:
  - sessions
  - nova_act
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

Creates, updates, deletes, gets or lists a <code>sessions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sessions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.nova_act.sessions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_sessions"
    values={[
        { label: 'list_sessions', value: 'list_sessions' }
    ]}
>
<TabItem value="list_sessions">

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
    <td><CopyableCode code="session_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the session. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
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
    <td><a href="#list_sessions"><CopyableCode code="list_sessions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-workflow_definition_name"><code>workflow_definition_name</code></a>, <a href="#parameter-workflow_run_id"><code>workflow_run_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists all sessions within a specific workflow run.</td>
</tr>
<tr>
    <td><a href="#create_session"><CopyableCode code="create_session" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-workflow_definition_name"><code>workflow_definition_name</code></a>, <a href="#parameter-workflow_run_id"><code>workflow_run_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a new session context within a workflow run to manage conversation state and acts.</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-workflow_definition_name">
    <td><CopyableCode code="workflow_definition_name" /></td>
    <td><code>string</code></td>
    <td>The name of the workflow definition containing the workflow run.</td>
</tr>
<tr id="parameter-workflow_run_id">
    <td><CopyableCode code="workflow_run_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the workflow run to create the session in.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of sessions to return in a single response.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for retrieving the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_sessions"
    values={[
        { label: 'list_sessions', value: 'list_sessions' }
    ]}
>
<TabItem value="list_sessions">

Lists all sessions within a specific workflow run.

```sql
SELECT
session_id
FROM aws.nova_act.sessions
WHERE workflow_definition_name = '{{ workflow_definition_name }}' -- required
AND workflow_run_id = '{{ workflow_run_id }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_session"
    values={[
        { label: 'create_session', value: 'create_session' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_session">

Creates a new session context within a workflow run to manage conversation state and acts.

```sql
INSERT INTO aws.nova_act.sessions (
clientToken,
workflow_definition_name,
workflow_run_id,
region
)
SELECT 
'{{ clientToken }}',
'{{ workflow_definition_name }}',
'{{ workflow_run_id }}',
'{{ region }}'
RETURNING
session_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: sessions
  props:
    - name: workflow_definition_name
      value: "{{ workflow_definition_name }}"
      description: Required parameter for the sessions resource.
    - name: workflow_run_id
      value: "{{ workflow_run_id }}"
      description: Required parameter for the sessions resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the sessions resource.
    - name: clientToken
      value: "{{ clientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>
