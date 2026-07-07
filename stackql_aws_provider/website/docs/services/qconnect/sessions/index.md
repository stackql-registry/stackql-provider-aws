--- 
title: sessions
hide_title: false
hide_table_of_contents: false
keywords:
  - sessions
  - qconnect
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.qconnect.sessions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_session"
    values={[
        { label: 'get_session', value: 'get_session' },
        { label: 'search_sessions', value: 'search_sessions' }
    ]}
>
<TabItem value="get_session">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the session. (pattern: &lt;code&gt;&#91;a-zA-Z0-9\s_.,-&#93;+.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="aiAgentConfiguration" /></td>
    <td><code>object</code></td>
    <td>The configuration of the AI Agents (mapped by AI Agent Type to AI Agent version) that should be used by Amazon Q in Connect for this Session.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the session. (pattern: &lt;code&gt;&#91;a-zA-Z0-9\s_.,-&#93;+.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="integrationConfiguration" /></td>
    <td><code>object</code></td>
    <td>The configuration information for the session integration.</td>
</tr>
<tr>
    <td><CopyableCode code="orchestratorConfigurationList" /></td>
    <td><code>array</code></td>
    <td>The list of orchestrator configurations for the session.</td>
</tr>
<tr>
    <td><CopyableCode code="origin" /></td>
    <td><code>string</code></td>
    <td>The origin of the Session to be listed. SYSTEM for a default Session created by Amazon Q in Connect or CUSTOMER for a Session created by calling CreateSession API. (SYSTEM, CUSTOMER)</td>
</tr>
<tr>
    <td><CopyableCode code="sessionArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the session. (pattern: &lt;code&gt;arn:&#91;a-z-&#93;*?:wisdom:&#91;a-z0-9-&#93;*?:&#91;0-9&#93;&#123;12&#125;:&#91;a-z-&#93;*?/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;(?:/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;)&#123;0,2&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="sessionId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the session. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tagFilter" /></td>
    <td><code>object</code></td>
    <td>An object that can be used to specify Tag conditions.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags used to organize, track, or control access for this resource.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="search_sessions">

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
    <td><CopyableCode code="assistantArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Amazon Q in Connect assistant. (pattern: &lt;code&gt;arn:&#91;a-z-&#93;*?:wisdom:&#91;a-z0-9-&#93;*?:&#91;0-9&#93;&#123;12&#125;:&#91;a-z-&#93;*?/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;(?:/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;)&#123;0,2&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="assistantId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Q in Connect assistant. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="sessionArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the session. (pattern: &lt;code&gt;arn:&#91;a-z-&#93;*?:wisdom:&#91;a-z0-9-&#93;*?:&#91;0-9&#93;&#123;12&#125;:&#91;a-z-&#93;*?/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;(?:/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;)&#123;0,2&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="sessionId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the session. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
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
    <td><a href="#get_session"><CopyableCode code="get_session" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-assistant_id"><code>assistant_id</code></a>, <a href="#parameter-session_id"><code>session_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information for a specified session.</td>
</tr>
<tr>
    <td><a href="#search_sessions"><CopyableCode code="search_sessions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-assistant_id"><code>assistant_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Searches for sessions.</td>
</tr>
<tr>
    <td><a href="#create_session"><CopyableCode code="create_session" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-assistant_id"><code>assistant_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates a session. A session is a contextual container used for generating recommendations. Amazon Connect creates a new Amazon Q in Connect session for each contact on which Amazon Q in Connect is enabled.</td>
</tr>
<tr>
    <td><a href="#update_session_data"><CopyableCode code="update_session_data" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-assistant_id"><code>assistant_id</code></a>, <a href="#parameter-session_id"><code>session_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Updates the data stored on an Amazon Q in Connect Session.</td>
</tr>
<tr>
    <td><a href="#update_session"><CopyableCode code="update_session" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-assistant_id"><code>assistant_id</code></a>, <a href="#parameter-session_id"><code>session_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a session. A session is a contextual container used for generating recommendations. Amazon Connect updates the existing Amazon Q in Connect session for each contact on which Amazon Q in Connect is enabled.</td>
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
<tr id="parameter-assistant_id">
    <td><CopyableCode code="assistant_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-session_id">
    <td><CopyableCode code="session_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the session. Can be either the ID or the ARN. URLs cannot contain the ARN.</td>
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
    defaultValue="get_session"
    values={[
        { label: 'get_session', value: 'get_session' },
        { label: 'search_sessions', value: 'search_sessions' }
    ]}
>
<TabItem value="get_session">

Retrieves information for a specified session.

```sql
SELECT
name,
aiAgentConfiguration,
description,
integrationConfiguration,
orchestratorConfigurationList,
origin,
sessionArn,
sessionId,
tagFilter,
tags
FROM aws.qconnect.sessions
WHERE assistant_id = '{{ assistant_id }}' -- required
AND session_id = '{{ session_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="search_sessions">

Searches for sessions.

```sql
SELECT
assistantArn,
assistantId,
sessionArn,
sessionId
FROM aws.qconnect.sessions
WHERE assistant_id = '{{ assistant_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
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

Creates a session. A session is a contextual container used for generating recommendations. Amazon Connect creates a new Amazon Q in Connect session for each contact on which Amazon Q in Connect is enabled.

```sql
INSERT INTO aws.qconnect.sessions (
clientToken,
name,
description,
tags,
tagFilter,
aiAgentConfiguration,
contactArn,
orchestratorConfigurationList,
removeOrchestratorConfigurationList,
assistant_id,
region
)
SELECT 
'{{ clientToken }}',
'{{ name }}' /* required */,
'{{ description }}',
'{{ tags }}',
'{{ tagFilter }}',
'{{ aiAgentConfiguration }}',
'{{ contactArn }}',
'{{ orchestratorConfigurationList }}',
{{ removeOrchestratorConfigurationList }},
'{{ assistant_id }}',
'{{ region }}'
RETURNING
session
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: sessions
  props:
    - name: assistant_id
      value: "{{ assistant_id }}"
      description: Required parameter for the sessions resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the sessions resource.
    - name: clientToken
      value: "{{ clientToken }}"
    - name: name
      value: "{{ name }}"
    - name: description
      value: "{{ description }}"
    - name: tags
      value: "{{ tags }}"
    - name: tagFilter
      description: |
        An object that can be used to specify Tag conditions.
      value:
        tagCondition:
          key: "{{ key }}"
          value: "{{ value }}"
        andConditions:
          - key: "{{ key }}"
            value: "{{ value }}"
        orConditions:
          - andConditions: "{{ andConditions }}"
            tagCondition:
              key: "{{ key }}"
              value: "{{ value }}"
    - name: aiAgentConfiguration
      value: "{{ aiAgentConfiguration }}"
    - name: contactArn
      value: "{{ contactArn }}"
    - name: orchestratorConfigurationList
      value:
        - aiAgentId: "{{ aiAgentId }}"
          orchestratorUseCase: "{{ orchestratorUseCase }}"
    - name: removeOrchestratorConfigurationList
      value: {{ removeOrchestratorConfigurationList }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_session_data"
    values={[
        { label: 'update_session_data', value: 'update_session_data' },
        { label: 'update_session', value: 'update_session' }
    ]}
>
<TabItem value="update_session_data">

Updates the data stored on an Amazon Q in Connect Session.

```sql
UPDATE aws.qconnect.sessions
SET 
namespace = '{{ namespace }}',
data = '{{ data }}'
WHERE 
assistant_id = '{{ assistant_id }}' --required
AND session_id = '{{ session_id }}' --required
AND region = '{{ region }}' --required
AND data = '{{ data }}' --required
RETURNING
data,
namespace,
sessionArn,
sessionId;
```
</TabItem>
<TabItem value="update_session">

Updates a session. A session is a contextual container used for generating recommendations. Amazon Connect updates the existing Amazon Q in Connect session for each contact on which Amazon Q in Connect is enabled.

```sql
UPDATE aws.qconnect.sessions
SET 
description = '{{ description }}',
tagFilter = '{{ tagFilter }}',
aiAgentConfiguration = '{{ aiAgentConfiguration }}',
orchestratorConfigurationList = '{{ orchestratorConfigurationList }}',
removeOrchestratorConfigurationList = {{ removeOrchestratorConfigurationList }}
WHERE 
assistant_id = '{{ assistant_id }}' --required
AND session_id = '{{ session_id }}' --required
AND region = '{{ region }}' --required
RETURNING
session;
```
</TabItem>
</Tabs>
