--- 
title: automated_reasoning_policy_build_workflows
hide_title: false
hide_table_of_contents: false
keywords:
  - automated_reasoning_policy_build_workflows
  - bedrock
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

Creates, updates, deletes, gets or lists an <code>automated_reasoning_policy_build_workflows</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="automated_reasoning_policy_build_workflows" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock.automated_reasoning_policy_build_workflows" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_automated_reasoning_policy_build_workflow"
    values={[
        { label: 'get_automated_reasoning_policy_build_workflow', value: 'get_automated_reasoning_policy_build_workflow' },
        { label: 'list_automated_reasoning_policy_build_workflows', value: 'list_automated_reasoning_policy_build_workflows' }
    ]}
>
<TabItem value="get_automated_reasoning_policy_build_workflow">

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
    <td><CopyableCode code="build_workflow_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the build workflow. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-?&#91;a-f0-9&#93;&#123;4&#125;-?4&#91;a-f0-9&#93;&#123;3&#125;-?&#91;89ab&#93;&#91;a-f0-9&#93;&#123;3&#125;-?&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="build_workflow_type" /></td>
    <td><code>string</code></td>
    <td>The type of build workflow being executed (e.g., DOCUMENT_INGESTION, POLICY_REPAIR). (INGEST_CONTENT, REFINE_POLICY, IMPORT_POLICY, GENERATE_FIDELITY_REPORT, GENERATE_POLICY_SCENARIOS, RESOLVE_POLICY_AMBIGUITIES, ITERATIVELY_REFINE_POLICY)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the build workflow was created.</td>
</tr>
<tr>
    <td><CopyableCode code="document_content_type" /></td>
    <td><code>string</code></td>
    <td>The content type of the source document (e.g., text/plain, application/pdf). (pdf, txt)</td>
</tr>
<tr>
    <td><CopyableCode code="document_description" /></td>
    <td><code>string</code></td>
    <td>A detailed description of the document's content and how it should be used in the policy generation process.</td>
</tr>
<tr>
    <td><CopyableCode code="document_name" /></td>
    <td><code>string</code></td>
    <td>The name of the source document used in the build workflow.</td>
</tr>
<tr>
    <td><CopyableCode code="policy_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Automated Reasoning policy. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:bedrock:&#91;a-z0-9-&#93;&#123;1,20&#125;:&#91;0-9&#93;&#123;12&#125;:automated-reasoning-policy/&#91;a-z0-9&#93;&#123;12&#125;(:(&#91;1-9&#93;&#91;0-9&#93;&#123;0,11&#125;))?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the build workflow (e.g., RUNNING, COMPLETED, FAILED, CANCELLED). (SCHEDULED, CANCEL_REQUESTED, PREPROCESSING, BUILDING, TESTING, COMPLETED, FAILED, CANCELLED)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the build workflow was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_automated_reasoning_policy_build_workflows">

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
    <td><CopyableCode code="build_workflow_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the build workflow. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-?&#91;a-f0-9&#93;&#123;4&#125;-?4&#91;a-f0-9&#93;&#123;3&#125;-?&#91;89ab&#93;&#91;a-f0-9&#93;&#123;3&#125;-?&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="build_workflow_type" /></td>
    <td><code>string</code></td>
    <td>The type of build workflow (e.g., DOCUMENT_INGESTION, POLICY_REPAIR). (INGEST_CONTENT, REFINE_POLICY, IMPORT_POLICY, GENERATE_FIDELITY_REPORT, GENERATE_POLICY_SCENARIOS, RESOLVE_POLICY_AMBIGUITIES, ITERATIVELY_REFINE_POLICY)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the build workflow was created.</td>
</tr>
<tr>
    <td><CopyableCode code="policy_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Automated Reasoning policy associated with this build workflow. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:bedrock:&#91;a-z0-9-&#93;&#123;1,20&#125;:&#91;0-9&#93;&#123;12&#125;:automated-reasoning-policy/&#91;a-z0-9&#93;&#123;12&#125;(:(&#91;1-9&#93;&#91;0-9&#93;&#123;0,11&#125;))?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the build workflow (e.g., RUNNING, COMPLETED, FAILED, CANCELLED). (SCHEDULED, CANCEL_REQUESTED, PREPROCESSING, BUILDING, TESTING, COMPLETED, FAILED, CANCELLED)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the build workflow was last updated.</td>
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
    <td><a href="#get_automated_reasoning_policy_build_workflow"><CopyableCode code="get_automated_reasoning_policy_build_workflow" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-policy_arn"><code>policy_arn</code></a>, <a href="#parameter-build_workflow_id"><code>build_workflow_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves detailed information about an Automated Reasoning policy build workflow, including its status, configuration, and metadata.</td>
</tr>
<tr>
    <td><a href="#list_automated_reasoning_policy_build_workflows"><CopyableCode code="list_automated_reasoning_policy_build_workflows" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-policy_arn"><code>policy_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists all build workflows for an Automated Reasoning policy, showing the history of policy creation and modification attempts.</td>
</tr>
<tr>
    <td><a href="#delete_automated_reasoning_policy_build_workflow"><CopyableCode code="delete_automated_reasoning_policy_build_workflow" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-policy_arn"><code>policy_arn</code></a>, <a href="#parameter-build_workflow_id"><code>build_workflow_id</code></a>, <a href="#parameter-updatedAt"><code>updatedAt</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an Automated Reasoning policy build workflow and its associated artifacts. This permanently removes the workflow history and any generated assets.</td>
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
<tr id="parameter-build_workflow_id">
    <td><CopyableCode code="build_workflow_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the build workflow to delete.</td>
</tr>
<tr id="parameter-policy_arn">
    <td><CopyableCode code="policy_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Automated Reasoning policy whose build workflow you want to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-updatedAt">
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the build workflow was last updated. This is used for optimistic concurrency control to prevent accidental deletion of workflows that have been modified.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of build workflows to return in a single response. Valid range is 1-100.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A pagination token from a previous request to continue listing build workflows from where the previous request left off.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_automated_reasoning_policy_build_workflow"
    values={[
        { label: 'get_automated_reasoning_policy_build_workflow', value: 'get_automated_reasoning_policy_build_workflow' },
        { label: 'list_automated_reasoning_policy_build_workflows', value: 'list_automated_reasoning_policy_build_workflows' }
    ]}
>
<TabItem value="get_automated_reasoning_policy_build_workflow">

Retrieves detailed information about an Automated Reasoning policy build workflow, including its status, configuration, and metadata.

```sql
SELECT
build_workflow_id,
build_workflow_type,
created_at,
document_content_type,
document_description,
document_name,
policy_arn,
status,
updated_at
FROM aws.bedrock.automated_reasoning_policy_build_workflows
WHERE policy_arn = '{{ policy_arn }}' -- required
AND build_workflow_id = '{{ build_workflow_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_automated_reasoning_policy_build_workflows">

Lists all build workflows for an Automated Reasoning policy, showing the history of policy creation and modification attempts.

```sql
SELECT
build_workflow_id,
build_workflow_type,
created_at,
policy_arn,
status,
updated_at
FROM aws.bedrock.automated_reasoning_policy_build_workflows
WHERE policy_arn = '{{ policy_arn }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_automated_reasoning_policy_build_workflow"
    values={[
        { label: 'delete_automated_reasoning_policy_build_workflow', value: 'delete_automated_reasoning_policy_build_workflow' }
    ]}
>
<TabItem value="delete_automated_reasoning_policy_build_workflow">

Deletes an Automated Reasoning policy build workflow and its associated artifacts. This permanently removes the workflow history and any generated assets.

```sql
DELETE FROM aws.bedrock.automated_reasoning_policy_build_workflows
WHERE policy_arn = '{{ policy_arn }}' --required
AND build_workflow_id = '{{ build_workflow_id }}' --required
AND updatedAt = '{{ updatedAt }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
