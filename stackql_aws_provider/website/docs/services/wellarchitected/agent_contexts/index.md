--- 
title: agent_contexts
hide_title: false
hide_table_of_contents: false
keywords:
  - agent_contexts
  - wellarchitected
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

Creates, updates, deletes, gets or lists an <code>agent_contexts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="agent_contexts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.wellarchitected.agent_contexts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_agent_context"
    values={[
        { label: 'get_agent_context', value: 'get_agent_context' },
        { label: 'list_agent_contexts', value: 'list_agent_contexts' }
    ]}
>
<TabItem value="get_agent_context">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the context. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="application_type" /></td>
    <td><code>string</code></td>
    <td>The type of application described by this context. (SAS, DESKTOP_APPLICATION, OTHER)</td>
</tr>
<tr>
    <td><CopyableCode code="content" /></td>
    <td><code>object</code></td>
    <td>Typed content structure for a context. Contains application-specific fields that describe the environment used during recommendation generation.</td>
</tr>
<tr>
    <td><CopyableCode code="context_type" /></td>
    <td><code>string</code></td>
    <td>The type of the context. (APPLICATION)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the context was created.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The identifier of the user or system that created this context.</td>
</tr>
<tr>
    <td><CopyableCode code="criticality" /></td>
    <td><code>string</code></td>
    <td>The business criticality of the application described by this context. (MISSION_CRITICAL, BUSINESS_CRITICAL, NON_CRITICAL, TEST_DEVELOPMENT)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the context was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_by" /></td>
    <td><code>string</code></td>
    <td>The identifier of the user or system that last modified this context.</td>
</tr>
<tr>
    <td><CopyableCode code="profile_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the associated profile. (pattern: &lt;code&gt;arn:aws(&#91;a-z0-9-&#93;+)?:wellarchitected:&#91;a-z0-9-&#93;&#123;6,64&#125;:\d&#123;12&#125;:agent-profile/(&#91;a-zA-Z0-9_-&#93;+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="title_" /></td>
    <td><code>string</code></td>
    <td>The title of the context. (pattern: &lt;code&gt;(?:(?!\$\&#123;&#91;a-zA-Z&#93;+:)&#91;\P&#123;C&#125;&#93;)+&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_agent_contexts">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the context. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="application_type" /></td>
    <td><code>string</code></td>
    <td>The type of application described by this context. (SAS, DESKTOP_APPLICATION, OTHER)</td>
</tr>
<tr>
    <td><CopyableCode code="content" /></td>
    <td><code>object</code></td>
    <td>Typed content structure for a context. Contains application-specific fields that describe the environment used during recommendation generation.</td>
</tr>
<tr>
    <td><CopyableCode code="context_type" /></td>
    <td><code>string</code></td>
    <td>The type of the context. (APPLICATION)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the context was created.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The identifier of the user or system that created this context.</td>
</tr>
<tr>
    <td><CopyableCode code="criticality" /></td>
    <td><code>string</code></td>
    <td>The business criticality of the application described by this context. (MISSION_CRITICAL, BUSINESS_CRITICAL, NON_CRITICAL, TEST_DEVELOPMENT)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the context was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_by" /></td>
    <td><code>string</code></td>
    <td>The identifier of the user or system that last modified this context.</td>
</tr>
<tr>
    <td><CopyableCode code="profile_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the associated profile. (pattern: &lt;code&gt;arn:aws(&#91;a-z0-9-&#93;+)?:wellarchitected:&#91;a-z0-9-&#93;&#123;6,64&#125;:\d&#123;12&#125;:agent-profile/(&#91;a-zA-Z0-9_-&#93;+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="title_" /></td>
    <td><code>string</code></td>
    <td>The title of the context. (pattern: &lt;code&gt;(?:(?!\$\&#123;&#91;a-zA-Z&#93;+:)&#91;\P&#123;C&#125;&#93;)+&lt;/code&gt;)</td>
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
    <td><a href="#get_agent_context"><CopyableCode code="get_agent_context" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-profile_arn"><code>profile_arn</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves detailed information about a specific context associated with a profile.</td>
</tr>
<tr>
    <td><a href="#list_agent_contexts"><CopyableCode code="list_agent_contexts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-profile_arn"><code>profile_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists contexts associated with a profile.</td>
</tr>
<tr>
    <td><a href="#create_agent_context"><CopyableCode code="create_agent_context" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-profile_arn"><code>profile_arn</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-title"><code>title</code></a>, <a href="#parameter-contextType"><code>contextType</code></a>, <a href="#parameter-content"><code>content</code></a></td>
    <td></td>
    <td>Creates a context associated with an optimization profile. Contexts provide application and environment information used during recommendation generation.</td>
</tr>
<tr>
    <td><a href="#update_agent_context"><CopyableCode code="update_agent_context" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-profile_arn"><code>profile_arn</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an existing context associated with a profile.</td>
</tr>
<tr>
    <td><a href="#delete_agent_context"><CopyableCode code="delete_agent_context" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-profile_arn"><code>profile_arn</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a context associated with a profile.</td>
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
    <td>The unique identifier of the context to delete.</td>
</tr>
<tr id="parameter-profile_arn">
    <td><CopyableCode code="profile_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the profile containing the context.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_agent_context"
    values={[
        { label: 'get_agent_context', value: 'get_agent_context' },
        { label: 'list_agent_contexts', value: 'list_agent_contexts' }
    ]}
>
<TabItem value="get_agent_context">

Retrieves detailed information about a specific context associated with a profile.

```sql
SELECT
id,
application_type,
content,
context_type,
created_at,
created_by,
criticality,
last_modified_at,
last_modified_by,
profile_arn,
title_
FROM aws.wellarchitected.agent_contexts
WHERE profile_arn = '{{ profile_arn }}' -- required
AND id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_agent_contexts">

Lists contexts associated with a profile.

```sql
SELECT
id,
application_type,
content,
context_type,
created_at,
created_by,
criticality,
last_modified_at,
last_modified_by,
profile_arn,
title_
FROM aws.wellarchitected.agent_contexts
WHERE profile_arn = '{{ profile_arn }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_agent_context"
    values={[
        { label: 'create_agent_context', value: 'create_agent_context' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_agent_context">

Creates a context associated with an optimization profile. Contexts provide application and environment information used during recommendation generation.

```sql
INSERT INTO aws.wellarchitected.agent_contexts (
clientToken,
title,
contextType,
content,
profile_arn,
region
)
SELECT 
'{{ clientToken }}',
'{{ title }}' /* required */,
'{{ contextType }}' /* required */,
'{{ content }}' /* required */,
'{{ profile_arn }}',
'{{ region }}'
RETURNING
context
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: agent_contexts
  props:
    - name: profile_arn
      value: "{{ profile_arn }}"
      description: Required parameter for the agent_contexts resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the agent_contexts resource.
    - name: clientToken
      value: "{{ clientToken }}"
    - name: title
      value: "{{ title }}"
    - name: contextType
      value: "{{ contextType }}"
      valid_values: ['APPLICATION']
    - name: content
      description: |
        Typed content structure for a context. Contains application-specific fields that describe the environment used during recommendation generation.
      value:
        accountIds:
          - "{{ accountIds }}"
        regions:
          - "{{ regions }}"
        awsServices:
          - "{{ awsServices }}"
        resourceTypes:
          - "{{ resourceTypes }}"
        resourceTags:
          - key: "{{ key }}"
            value: "{{ value }}"
        applicationOverview: "{{ applicationOverview }}"
        industry: "{{ industry }}"
        applicationType: "{{ applicationType }}"
        criticality: "{{ criticality }}"
        architectureOverview: "{{ architectureOverview }}"
        additionalContext: "{{ additionalContext }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_agent_context"
    values={[
        { label: 'update_agent_context', value: 'update_agent_context' }
    ]}
>
<TabItem value="update_agent_context">

Updates an existing context associated with a profile.

```sql
UPDATE aws.wellarchitected.agent_contexts
SET 
clientToken = '{{ clientToken }}',
title = '{{ title }}',
content = '{{ content }}'
WHERE 
profile_arn = '{{ profile_arn }}' --required
AND id = '{{ id }}' --required
AND region = '{{ region }}' --required
RETURNING
context;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_agent_context"
    values={[
        { label: 'delete_agent_context', value: 'delete_agent_context' }
    ]}
>
<TabItem value="delete_agent_context">

Deletes a context associated with a profile.

```sql
DELETE FROM aws.wellarchitected.agent_contexts
WHERE profile_arn = '{{ profile_arn }}' --required
AND id = '{{ id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
