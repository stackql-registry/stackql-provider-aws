--- 
title: agent_spaces
hide_title: false
hide_table_of_contents: false
keywords:
  - agent_spaces
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

Creates, updates, deletes, gets or lists an <code>agent_spaces</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="agent_spaces" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.devops_agent.agent_spaces" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_agent_space"
    values={[
        { label: 'get_agent_space', value: 'get_agent_space' },
        { label: 'list_agent_spaces', value: 'list_agent_spaces' }
    ]}
>
<TabItem value="get_agent_space">

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
    <td><CopyableCode code="agent_space" /></td>
    <td><code>object</code></td>
    <td>Represents a complete AgentSpace with all its properties, timestamps, encryption settings, and unique identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Tags associated with the AgentSpace.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_agent_spaces">

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
    <td>Agent space name field (pattern: &lt;code&gt;&#91;\p&#123;L&#125;\p&#123;N&#125;\p&#123;P&#125;\p&#123;S&#125;\p&#123;Z&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="agent_space_id" /></td>
    <td><code>string</code></td>
    <td>Unique identifier for an agent space (allows alphanumeric characters and hyphens; 1-64 characters) (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;&#123;1,64&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description field (pattern: &lt;code&gt;&#91;\p&#123;L&#125;\p&#123;N&#125;\p&#123;P&#125;\p&#123;S&#125;\p&#123;Z&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the AWS Key Management Service (AWS KMS) customer managed key that's used to encrypt resources. (pattern: &lt;code&gt;arn:aws&#91;a-zA-Z-&#93;*:kms:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:key/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="locale" /></td>
    <td><code>string</code></td>
    <td>A BCP 47 locale identifier for configuring the language used in agent responses. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#123;2,3&#125;(-&#91;a-zA-Z0-9&#93;&#123;2,8&#125;)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the resource was last updated.</td>
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
    <td><a href="#get_agent_space"><CopyableCode code="get_agent_space" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-agent_space_id"><code>agent_space_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves detailed information about a specific AgentSpace.</td>
</tr>
<tr>
    <td><a href="#list_agent_spaces"><CopyableCode code="list_agent_spaces" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists all AgentSpaces with optional pagination.</td>
</tr>
<tr>
    <td><a href="#create_agent_space"><CopyableCode code="create_agent_space" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates a new AgentSpace with the specified name and description. Duplicate space names are allowed.</td>
</tr>
<tr>
    <td><a href="#update_agent_space"><CopyableCode code="update_agent_space" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-agent_space_id"><code>agent_space_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the information of an existing AgentSpace.</td>
</tr>
<tr>
    <td><a href="#delete_agent_space"><CopyableCode code="delete_agent_space" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-agent_space_id"><code>agent_space_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an AgentSpace. This operation is idempotent and returns a 204 No Content response on success.</td>
</tr>
<tr>
    <td><a href="#disable_operator_app"><CopyableCode code="disable_operator_app" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-agent_space_id"><code>agent_space_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-x-amzn-app-auth-flow"><code>x-amzn-app-auth-flow</code></a></td>
    <td>Disable the Operator App for the specified AgentSpace</td>
</tr>
<tr>
    <td><a href="#enable_operator_app"><CopyableCode code="enable_operator_app" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-agent_space_id"><code>agent_space_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-authFlow"><code>authFlow</code></a>, <a href="#parameter-operatorAppRoleArn"><code>operatorAppRoleArn</code></a></td>
    <td></td>
    <td>Enable the Operator App to access the given AgentSpace</td>
</tr>
<tr>
    <td><a href="#send_message"><CopyableCode code="send_message" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-agent_space_id"><code>agent_space_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-executionId"><code>executionId</code></a>, <a href="#parameter-content"><code>content</code></a></td>
    <td></td>
    <td>Sends a chat message and streams the response for the specified agent space execution</td>
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
    <td>The agent space identifier</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>Maximum number of results to return in a single call.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>Token for the next page of results.</td>
</tr>
<tr id="parameter-x-amzn-app-auth-flow">
    <td><CopyableCode code="x-amzn-app-auth-flow" /></td>
    <td><code>string</code></td>
    <td>The authentication flow configured for the operator App. e.g. idc</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_agent_space"
    values={[
        { label: 'get_agent_space', value: 'get_agent_space' },
        { label: 'list_agent_spaces', value: 'list_agent_spaces' }
    ]}
>
<TabItem value="get_agent_space">

Retrieves detailed information about a specific AgentSpace.

```sql
SELECT
agent_space,
tags
FROM aws.devops_agent.agent_spaces
WHERE agent_space_id = '{{ agent_space_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_agent_spaces">

Lists all AgentSpaces with optional pagination.

```sql
SELECT
name,
agent_space_id,
created_at,
description,
kms_key_arn,
locale,
updated_at
FROM aws.devops_agent.agent_spaces
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_agent_space"
    values={[
        { label: 'create_agent_space', value: 'create_agent_space' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_agent_space">

Creates a new AgentSpace with the specified name and description. Duplicate space names are allowed.

```sql
INSERT INTO aws.devops_agent.agent_spaces (
name,
description,
locale,
kmsKeyArn,
clientToken,
tags,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ locale }}',
'{{ kmsKeyArn }}',
'{{ clientToken }}',
'{{ tags }}',
'{{ region }}'
RETURNING
agent_space,
tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: agent_spaces
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the agent_spaces resource.
    - name: name
      value: "{{ name }}"
      description: |
        Agent space name field
    - name: description
      value: "{{ description }}"
      description: |
        Description field
    - name: locale
      value: "{{ locale }}"
      description: |
        A BCP 47 locale identifier for configuring the language used in agent responses.
    - name: kmsKeyArn
      value: "{{ kmsKeyArn }}"
      description: |
        The ARN of the AWS Key Management Service (AWS KMS) customer managed key that's used to encrypt resources.
    - name: clientToken
      value: "{{ clientToken }}"
    - name: tags
      value: "{{ tags }}"
      description: |
        Map of tag keys to values.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_agent_space"
    values={[
        { label: 'update_agent_space', value: 'update_agent_space' }
    ]}
>
<TabItem value="update_agent_space">

Updates the information of an existing AgentSpace.

```sql
UPDATE aws.devops_agent.agent_spaces
SET 
name = '{{ name }}',
description = '{{ description }}',
locale = '{{ locale }}'
WHERE 
agent_space_id = '{{ agent_space_id }}' --required
AND region = '{{ region }}' --required
RETURNING
agent_space;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_agent_space"
    values={[
        { label: 'delete_agent_space', value: 'delete_agent_space' }
    ]}
>
<TabItem value="delete_agent_space">

Deletes an AgentSpace. This operation is idempotent and returns a 204 No Content response on success.

```sql
DELETE FROM aws.devops_agent.agent_spaces
WHERE agent_space_id = '{{ agent_space_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disable_operator_app"
    values={[
        { label: 'disable_operator_app', value: 'disable_operator_app' },
        { label: 'enable_operator_app', value: 'enable_operator_app' },
        { label: 'send_message', value: 'send_message' }
    ]}
>
<TabItem value="disable_operator_app">

Disable the Operator App for the specified AgentSpace

```sql
EXEC aws.devops_agent.agent_spaces.disable_operator_app 
@agent_space_id='{{ agent_space_id }}' --required, 
@region='{{ region }}' --required, 
@x-amzn-app-auth-flow='{{ x-amzn-app-auth-flow }}'
;
```
</TabItem>
<TabItem value="enable_operator_app">

Enable the Operator App to access the given AgentSpace

```sql
EXEC aws.devops_agent.agent_spaces.enable_operator_app 
@agent_space_id='{{ agent_space_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"authFlow": "{{ authFlow }}", 
"operatorAppRoleArn": "{{ operatorAppRoleArn }}", 
"idcInstanceArn": "{{ idcInstanceArn }}", 
"issuerUrl": "{{ issuerUrl }}", 
"idpClientId": "{{ idpClientId }}", 
"idpClientSecret": "{{ idpClientSecret }}", 
"provider": "{{ provider }}"
}'
;
```
</TabItem>
<TabItem value="send_message">

Sends a chat message and streams the response for the specified agent space execution

```sql
EXEC aws.devops_agent.agent_spaces.send_message 
@agent_space_id='{{ agent_space_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"executionId": "{{ executionId }}", 
"content": "{{ content }}", 
"context": "{{ context }}", 
"userId": "{{ userId }}", 
"assetIds": "{{ assetIds }}"
}'
;
```
</TabItem>
</Tabs>
