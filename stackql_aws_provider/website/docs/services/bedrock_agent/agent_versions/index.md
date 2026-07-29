--- 
title: agent_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - agent_versions
  - bedrock_agent
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

Creates, updates, deletes, gets or lists an <code>agent_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="agent_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agent.agent_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_agent_version"
    values={[
        { label: 'get_agent_version', value: 'get_agent_version' },
        { label: 'list_agent_versions', value: 'list_agent_versions' }
    ]}
>
<TabItem value="get_agent_version">

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
    <td><CopyableCode code="agent_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the agent that the version belongs to. (pattern: &lt;code&gt;arn:aws:bedrock:&#91;a-z0-9-&#93;&#123;1,20&#125;:&#91;0-9&#93;&#123;12&#125;:agent/&#91;0-9a-zA-Z&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="agent_collaboration" /></td>
    <td><code>string</code></td>
    <td>The agent's collaboration settings. (SUPERVISOR, SUPERVISOR_ROUTER, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="agent_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the agent that the version belongs to. (pattern: &lt;code&gt;&#91;0-9a-zA-Z&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="agent_name" /></td>
    <td><code>string</code></td>
    <td>The name of the agent that the version belongs to. (pattern: &lt;code&gt;(&#91;0-9a-zA-Z&#93;&#91;_-&#93;?)&#123;1,100&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="agent_resource_role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role with permissions to invoke API operations on the agent. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:iam::(&#91;0-9&#93;&#123;12&#125;)?:role/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="agent_status" /></td>
    <td><code>string</code></td>
    <td>The status of the agent that the version belongs to. (CREATING, PREPARING, PREPARED, NOT_PREPARED, DELETING, FAILED, VERSIONING, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the version was created.</td>
</tr>
<tr>
    <td><CopyableCode code="customer_encryption_key_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the KMS key that encrypts the agent. (pattern: &lt;code&gt;arn:aws(|-cn|-us-gov):kms:&#91;a-zA-Z0-9-&#93;*:&#91;0-9&#93;&#123;12&#125;:key/&#91;a-zA-Z0-9-&#93;&#123;36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the version.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reasons" /></td>
    <td><code>array</code></td>
    <td>A list of reasons that the API operation on the version failed.</td>
</tr>
<tr>
    <td><CopyableCode code="foundation_model" /></td>
    <td><code>string</code></td>
    <td>The foundation model that the version invokes. (pattern: &lt;code&gt;(arn:aws(-&#91;^:&#93;&#123;1,12&#125;)?:(bedrock|sagemaker):&#91;a-z0-9-&#93;&#123;1,20&#125;:(&#91;0-9&#93;&#123;12&#125;)?:(&#91;a-z-&#93;+/)?)?(&#91;a-zA-Z0-9.-&#93;&#123;1,63&#125;)&#123;0,2&#125;((&#91;:&#93;&#91;a-z0-9-&#93;&#123;1,63&#125;)&#123;0,2&#125;)?(/&#91;a-z0-9&#93;&#123;1,12&#125;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="guardrail_configuration" /></td>
    <td><code>object</code></td>
    <td>Details about a guardrail associated with a resource.</td>
</tr>
<tr>
    <td><CopyableCode code="idle_session_ttl_in_seconds" /></td>
    <td><code>integer</code></td>
    <td>The number of seconds for which Amazon Bedrock keeps information about a user's conversation with the agent. A user interaction remains active for the amount of time specified. If no conversation occurs during this time, the session expires and Amazon Bedrock deletes any data provided before the timeout.</td>
</tr>
<tr>
    <td><CopyableCode code="instruction" /></td>
    <td><code>string</code></td>
    <td>The instructions provided to the agent.</td>
</tr>
<tr>
    <td><CopyableCode code="memory_configuration" /></td>
    <td><code>object</code></td>
    <td>Details of the memory configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="prompt_override_configuration" /></td>
    <td><code>object</code></td>
    <td>Contains configurations to override prompts in different parts of an agent sequence. For more information, see Advanced prompts.</td>
</tr>
<tr>
    <td><CopyableCode code="recommended_actions" /></td>
    <td><code>array</code></td>
    <td>A list of recommended actions to take for the failed API operation on the version to succeed.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the version was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The version number. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;1,5&#125;&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_agent_versions">

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
    <td><CopyableCode code="agent_name" /></td>
    <td><code>string</code></td>
    <td>The name of the agent to which the version belongs. (pattern: &lt;code&gt;(&#91;0-9a-zA-Z&#93;&#91;_-&#93;?)&#123;1,100&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="agent_status" /></td>
    <td><code>string</code></td>
    <td>The status of the agent to which the version belongs. (CREATING, PREPARING, PREPARED, NOT_PREPARED, DELETING, FAILED, VERSIONING, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="agent_version" /></td>
    <td><code>string</code></td>
    <td>The version of the agent. (pattern: &lt;code&gt;(DRAFT|&#91;0-9&#93;&#123;0,4&#125;&#91;1-9&#93;&#91;0-9&#93;&#123;0,4&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the version was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the version of the agent.</td>
</tr>
<tr>
    <td><CopyableCode code="guardrail_configuration" /></td>
    <td><code>object</code></td>
    <td>Details about a guardrail associated with a resource.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the version was last updated.</td>
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
    <td><a href="#get_agent_version"><CopyableCode code="get_agent_version" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-agent_id"><code>agent_id</code></a>, <a href="#parameter-agent_version"><code>agent_version</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets details about a version of an agent.</td>
</tr>
<tr>
    <td><a href="#list_agent_versions"><CopyableCode code="list_agent_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-agent_id"><code>agent_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the versions of an agent and information about each version.</td>
</tr>
<tr>
    <td><a href="#delete_agent_version"><CopyableCode code="delete_agent_version" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-agent_id"><code>agent_id</code></a>, <a href="#parameter-agent_version"><code>agent_version</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-skipResourceInUseCheck"><code>skipResourceInUseCheck</code></a></td>
    <td>Deletes a version of an agent.</td>
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
<tr id="parameter-agent_id">
    <td><CopyableCode code="agent_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the agent that the version belongs to.</td>
</tr>
<tr id="parameter-agent_version">
    <td><CopyableCode code="agent_version" /></td>
    <td><code>string</code></td>
    <td>The version of the agent to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-skipResourceInUseCheck">
    <td><CopyableCode code="skipResourceInUseCheck" /></td>
    <td><code>boolean</code></td>
    <td>By default, this value is false and deletion is stopped if the resource is in use. If you set it to true, the resource will be deleted even if the resource is in use.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_agent_version"
    values={[
        { label: 'get_agent_version', value: 'get_agent_version' },
        { label: 'list_agent_versions', value: 'list_agent_versions' }
    ]}
>
<TabItem value="get_agent_version">

Gets details about a version of an agent.

```sql
SELECT
agent_arn,
agent_collaboration,
agent_id,
agent_name,
agent_resource_role_arn,
agent_status,
created_at,
customer_encryption_key_arn,
description,
failure_reasons,
foundation_model,
guardrail_configuration,
idle_session_ttl_in_seconds,
instruction,
memory_configuration,
prompt_override_configuration,
recommended_actions,
updated_at,
version
FROM aws.bedrock_agent.agent_versions
WHERE agent_id = '{{ agent_id }}' -- required
AND agent_version = '{{ agent_version }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_agent_versions">

Lists the versions of an agent and information about each version.

```sql
SELECT
agent_name,
agent_status,
agent_version,
created_at,
description,
guardrail_configuration,
updated_at
FROM aws.bedrock_agent.agent_versions
WHERE agent_id = '{{ agent_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_agent_version"
    values={[
        { label: 'delete_agent_version', value: 'delete_agent_version' }
    ]}
>
<TabItem value="delete_agent_version">

Deletes a version of an agent.

```sql
DELETE FROM aws.bedrock_agent.agent_versions
WHERE agent_id = '{{ agent_id }}' --required
AND agent_version = '{{ agent_version }}' --required
AND region = '{{ region }}' --required
AND skipResourceInUseCheck = '{{ skipResourceInUseCheck }}'
;
```
</TabItem>
</Tabs>
