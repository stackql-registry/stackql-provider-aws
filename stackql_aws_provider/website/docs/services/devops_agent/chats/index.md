--- 
title: chats
hide_title: false
hide_table_of_contents: false
keywords:
  - chats
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

Creates, updates, deletes, gets or lists a <code>chats</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="chats" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.devops_agent.chats" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_chats"
    values={[
        { label: 'list_chats', value: 'list_chats' }
    ]}
>
<TabItem value="list_chats">

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
    <td><CopyableCode code="executions" /></td>
    <td><code>array</code></td>
    <td>List of recent chat executions</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>Token for retrieving the next page of results</td>
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
    <td><a href="#list_chats"><CopyableCode code="list_chats" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-agent_space_id"><code>agent_space_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-userId"><code>userId</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Retrieves a paginated list of the user's recent chat executions</td>
</tr>
<tr>
    <td><a href="#create_chat"><CopyableCode code="create_chat" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-agent_space_id"><code>agent_space_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-userId"><code>userId</code></a>, <a href="#parameter-userType"><code>userType</code></a></td>
    <td>Creates a new chat execution in the specified agent space</td>
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
    <td></td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>Maximum number of results to return</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>Token for pagination</td>
</tr>
<tr id="parameter-userId">
    <td><CopyableCode code="userId" /></td>
    <td><code>string</code></td>
    <td>The user identifier for the chat. This field is deprecated and will be ignored — the service resolves user identity from the authenticated session.</td>
</tr>
<tr id="parameter-userType">
    <td><CopyableCode code="userType" /></td>
    <td><code>string</code></td>
    <td>The authentication type of the user</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_chats"
    values={[
        { label: 'list_chats', value: 'list_chats' }
    ]}
>
<TabItem value="list_chats">

Retrieves a paginated list of the user's recent chat executions

```sql
SELECT
executions,
next_token
FROM aws.devops_agent.chats
WHERE agent_space_id = '{{ agent_space_id }}' -- required
AND region = '{{ region }}' -- required
AND userId = '{{ userId }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_chat"
    values={[
        { label: 'create_chat', value: 'create_chat' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_chat">

Creates a new chat execution in the specified agent space

```sql
INSERT INTO aws.devops_agent.chats (
agent_space_id,
region,
userId,
userType
)
SELECT 
'{{ agent_space_id }}',
'{{ region }}',
'{{ userId }}',
'{{ userType }}'
RETURNING
created_at,
execution_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: chats
  props:
    - name: agent_space_id
      value: "{{ agent_space_id }}"
      description: Required parameter for the chats resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the chats resource.
    - name: userId
      value: "{{ userId }}"
      description: The user identifier for the chat. This field is deprecated and will be ignored — the service resolves user identity from the authenticated session.
      description: The user identifier for the chat. This field is deprecated and will be ignored — the service resolves user identity from the authenticated session.
    - name: userType
      value: "{{ userType }}"
      description: The authentication type of the user
      description: The authentication type of the user
`}</CodeBlock>

</TabItem>
</Tabs>
