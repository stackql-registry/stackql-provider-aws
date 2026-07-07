--- 
title: actions
hide_title: false
hide_table_of_contents: false
keywords:
  - actions
  - iotsitewise
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

Creates, updates, deletes, gets or lists an <code>actions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="actions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotsitewise.actions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_actions"
    values={[
        { label: 'list_actions', value: 'list_actions' },
        { label: 'describe_action', value: 'describe_action' }
    ]}
>
<TabItem value="list_actions">

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
    <td><CopyableCode code="actionDefinitionId" /></td>
    <td><code>string</code></td>
    <td>The ID of the action definition. (pattern: &lt;code&gt;^(?!00000000-0000-0000-0000-000000000000)&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="actionId" /></td>
    <td><code>string</code></td>
    <td>The ID of the action. (pattern: &lt;code&gt;^(?!00000000-0000-0000-0000-000000000000)&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resolveTo" /></td>
    <td><code>object</code></td>
    <td>The detailed resource this execution summary resolves to.</td>
</tr>
<tr>
    <td><CopyableCode code="targetResource" /></td>
    <td><code>object</code></td>
    <td>The resource the action will be taken on. This can include asset-based resources and computation model resources.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="describe_action">

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
    <td><CopyableCode code="actionDefinitionId" /></td>
    <td><code>string</code></td>
    <td>The ID of the action definition. (pattern: &lt;code&gt;^(?!00000000-0000-0000-0000-000000000000)&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="actionId" /></td>
    <td><code>string</code></td>
    <td>The ID of the action. (pattern: &lt;code&gt;^(?!00000000-0000-0000-0000-000000000000)&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="actionPayload" /></td>
    <td><code>object</code></td>
    <td>The JSON payload of the action.</td>
</tr>
<tr>
    <td><CopyableCode code="executionTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the action was executed.</td>
</tr>
<tr>
    <td><CopyableCode code="resolveTo" /></td>
    <td><code>object</code></td>
    <td>The detailed resource this action resolves to.</td>
</tr>
<tr>
    <td><CopyableCode code="targetResource" /></td>
    <td><code>object</code></td>
    <td>The resource the action will be taken on.</td>
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
    <td><a href="#list_actions"><CopyableCode code="list_actions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-targetResourceType"><code>targetResourceType</code></a>, <a href="#parameter-targetResourceId"><code>targetResourceId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-resolveToResourceType"><code>resolveToResourceType</code></a>, <a href="#parameter-resolveToResourceId"><code>resolveToResourceId</code></a></td>
    <td>Retrieves a paginated list of actions for a specific target resource.</td>
</tr>
<tr>
    <td><a href="#describe_action"><CopyableCode code="describe_action" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-action_id"><code>action_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about an action.</td>
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
<tr id="parameter-action_id">
    <td><CopyableCode code="action_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the action.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-targetResourceId">
    <td><CopyableCode code="targetResourceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the target resource.</td>
</tr>
<tr id="parameter-targetResourceType">
    <td><CopyableCode code="targetResourceType" /></td>
    <td><code>string</code></td>
    <td>The type of resource.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return for each paginated request.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token to be used for the next set of paginated results.</td>
</tr>
<tr id="parameter-resolveToResourceId">
    <td><CopyableCode code="resolveToResourceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the resolved resource.</td>
</tr>
<tr id="parameter-resolveToResourceType">
    <td><CopyableCode code="resolveToResourceType" /></td>
    <td><code>string</code></td>
    <td>The type of the resolved resource.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_actions"
    values={[
        { label: 'list_actions', value: 'list_actions' },
        { label: 'describe_action', value: 'describe_action' }
    ]}
>
<TabItem value="list_actions">

Retrieves a paginated list of actions for a specific target resource.

```sql
SELECT
actionDefinitionId,
actionId,
resolveTo,
targetResource
FROM aws.iotsitewise.actions
WHERE targetResourceType = '{{ targetResourceType }}' -- required
AND targetResourceId = '{{ targetResourceId }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND resolveToResourceType = '{{ resolveToResourceType }}'
AND resolveToResourceId = '{{ resolveToResourceId }}'
;
```
</TabItem>
<TabItem value="describe_action">

Retrieves information about an action.

```sql
SELECT
actionDefinitionId,
actionId,
actionPayload,
executionTime,
resolveTo,
targetResource
FROM aws.iotsitewise.actions
WHERE action_id = '{{ action_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
