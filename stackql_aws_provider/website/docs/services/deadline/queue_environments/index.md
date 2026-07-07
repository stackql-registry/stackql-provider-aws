--- 
title: queue_environments
hide_title: false
hide_table_of_contents: false
keywords:
  - queue_environments
  - deadline
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

Creates, updates, deletes, gets or lists a <code>queue_environments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="queue_environments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.deadline.queue_environments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_queue_environment"
    values={[
        { label: 'get_queue_environment', value: 'get_queue_environment' },
        { label: 'list_queue_environments', value: 'list_queue_environments' }
    ]}
>
<TabItem value="get_queue_environment">

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
    <td>The name of the queue environment.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="createdBy" /></td>
    <td><code>string</code></td>
    <td>The user or system that created this resource.&gt;</td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>integer</code></td>
    <td>The priority of the queue environment.</td>
</tr>
<tr>
    <td><CopyableCode code="queueEnvironmentId" /></td>
    <td><code>string</code></td>
    <td>The queue environment ID. (pattern: &lt;code&gt;queueenv-&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="template" /></td>
    <td><code>string</code></td>
    <td>The template for the queue environment.</td>
</tr>
<tr>
    <td><CopyableCode code="templateType" /></td>
    <td><code>string</code></td>
    <td>The type of template for the queue environment. (JSON, YAML)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="updatedBy" /></td>
    <td><code>string</code></td>
    <td>The user or system that updated this resource.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_queue_environments">

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
    <td>The name of the queue environment.</td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>integer</code></td>
    <td>The queue environment's priority.</td>
</tr>
<tr>
    <td><CopyableCode code="queueEnvironmentId" /></td>
    <td><code>string</code></td>
    <td>The queue environment ID. (pattern: &lt;code&gt;queueenv-&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
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
    <td><a href="#get_queue_environment"><CopyableCode code="get_queue_environment" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-queue_id"><code>queue_id</code></a>, <a href="#parameter-queue_environment_id"><code>queue_environment_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a queue environment.</td>
</tr>
<tr>
    <td><a href="#list_queue_environments"><CopyableCode code="list_queue_environments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-queue_id"><code>queue_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists queue environments.</td>
</tr>
<tr>
    <td><a href="#create_queue_environment"><CopyableCode code="create_queue_environment" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-queue_id"><code>queue_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-priority"><code>priority</code></a>, <a href="#parameter-templateType"><code>templateType</code></a>, <a href="#parameter-template"><code>template</code></a></td>
    <td><a href="#parameter-X-Amz-Client-Token"><code>X-Amz-Client-Token</code></a></td>
    <td>Creates an environment for a queue that defines how jobs in the queue run.</td>
</tr>
<tr>
    <td><a href="#update_queue_environment"><CopyableCode code="update_queue_environment" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-queue_id"><code>queue_id</code></a>, <a href="#parameter-queue_environment_id"><code>queue_environment_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-X-Amz-Client-Token"><code>X-Amz-Client-Token</code></a></td>
    <td>Updates the queue environment.</td>
</tr>
<tr>
    <td><a href="#delete_queue_environment"><CopyableCode code="delete_queue_environment" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-queue_id"><code>queue_id</code></a>, <a href="#parameter-queue_environment_id"><code>queue_environment_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a queue environment.</td>
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
<tr id="parameter-farm_id">
    <td><CopyableCode code="farm_id" /></td>
    <td><code>string</code></td>
    <td>The farm ID of the farm from which to remove the queue environment.</td>
</tr>
<tr id="parameter-queue_environment_id">
    <td><CopyableCode code="queue_environment_id" /></td>
    <td><code>string</code></td>
    <td>The queue environment ID of the queue environment to delete.</td>
</tr>
<tr id="parameter-queue_id">
    <td><CopyableCode code="queue_id" /></td>
    <td><code>string</code></td>
    <td>The queue ID of the queue environment to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-X-Amz-Client-Token">
    <td><CopyableCode code="X-Amz-Client-Token" /></td>
    <td><code>string</code></td>
    <td>The unique token which the server uses to recognize retries of the same request.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results, or null to start from the beginning.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_queue_environment"
    values={[
        { label: 'get_queue_environment', value: 'get_queue_environment' },
        { label: 'list_queue_environments', value: 'list_queue_environments' }
    ]}
>
<TabItem value="get_queue_environment">

Gets a queue environment.

```sql
SELECT
name,
createdAt,
createdBy,
priority,
queueEnvironmentId,
template,
templateType,
updatedAt,
updatedBy
FROM aws.deadline.queue_environments
WHERE farm_id = '{{ farm_id }}' -- required
AND queue_id = '{{ queue_id }}' -- required
AND queue_environment_id = '{{ queue_environment_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_queue_environments">

Lists queue environments.

```sql
SELECT
name,
priority,
queueEnvironmentId
FROM aws.deadline.queue_environments
WHERE farm_id = '{{ farm_id }}' -- required
AND queue_id = '{{ queue_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_queue_environment"
    values={[
        { label: 'create_queue_environment', value: 'create_queue_environment' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_queue_environment">

Creates an environment for a queue that defines how jobs in the queue run.

```sql
INSERT INTO aws.deadline.queue_environments (
priority,
templateType,
template,
farm_id,
queue_id,
region,
`X-Amz-Client-Token`
)
SELECT 
{{ priority }} /* required */,
'{{ templateType }}' /* required */,
'{{ template }}' /* required */,
'{{ farm_id }}',
'{{ queue_id }}',
'{{ region }}',
'{{ X-Amz-Client-Token }}'
RETURNING
queueEnvironmentId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: queue_environments
  props:
    - name: farm_id
      value: "{{ farm_id }}"
      description: Required parameter for the queue_environments resource.
    - name: queue_id
      value: "{{ queue_id }}"
      description: Required parameter for the queue_environments resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the queue_environments resource.
    - name: priority
      value: {{ priority }}
    - name: templateType
      value: "{{ templateType }}"
      valid_values: ['JSON', 'YAML']
    - name: template
      value: "{{ template }}"
    - name: X-Amz-Client-Token
      value: "{{ X-Amz-Client-Token }}"
      description: The unique token which the server uses to recognize retries of the same request.
      description: The unique token which the server uses to recognize retries of the same request.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_queue_environment"
    values={[
        { label: 'update_queue_environment', value: 'update_queue_environment' }
    ]}
>
<TabItem value="update_queue_environment">

Updates the queue environment.

```sql
UPDATE aws.deadline.queue_environments
SET 
priority = {{ priority }},
templateType = '{{ templateType }}',
template = '{{ template }}'
WHERE 
farm_id = '{{ farm_id }}' --required
AND queue_id = '{{ queue_id }}' --required
AND queue_environment_id = '{{ queue_environment_id }}' --required
AND region = '{{ region }}' --required
AND `X-Amz-Client-Token` = '{{ X-Amz-Client-Token}}';
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_queue_environment"
    values={[
        { label: 'delete_queue_environment', value: 'delete_queue_environment' }
    ]}
>
<TabItem value="delete_queue_environment">

Deletes a queue environment.

```sql
DELETE FROM aws.deadline.queue_environments
WHERE farm_id = '{{ farm_id }}' --required
AND queue_id = '{{ queue_id }}' --required
AND queue_environment_id = '{{ queue_environment_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
