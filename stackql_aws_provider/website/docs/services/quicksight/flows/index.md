--- 
title: flows
hide_title: false
hide_table_of_contents: false
keywords:
  - flows
  - quicksight
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

Creates, updates, deletes, gets or lists a <code>flows</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="flows" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.quicksight.flows" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_flow"
    values={[
        { label: 'describe_flow', value: 'describe_flow' },
        { label: 'search_flows', value: 'search_flows' },
        { label: 'list_flows', value: 'list_flows' }
    ]}
>
<TabItem value="describe_flow">

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
    <td><CopyableCode code="flow" /></td>
    <td><code>object</code></td>
    <td>The full details of the flow.</td>
</tr>
<tr>
    <td><CopyableCode code="request_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services request ID for this operation.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>integer</code></td>
    <td>The HTTP status of the request.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="search_flows">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the flow.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The identifier of the principal who created the flow.</td>
</tr>
<tr>
    <td><CopyableCode code="created_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time this flow was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the flow.</td>
</tr>
<tr>
    <td><CopyableCode code="flow_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the flow. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_published_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time this flow was published.</td>
</tr>
<tr>
    <td><CopyableCode code="last_published_by" /></td>
    <td><code>string</code></td>
    <td>The identifier of the last principal who published the flow.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_by" /></td>
    <td><code>string</code></td>
    <td>The identifier of the last principal who updated the flow.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time this flow was modified.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The display name of the flow.</td>
</tr>
<tr>
    <td><CopyableCode code="publish_state" /></td>
    <td><code>string</code></td>
    <td>The publish state for the flow. The valid values are DRAFT, PUBLISHED, or PENDING_APPROVAL. (PUBLISHED, DRAFT, PENDING_APPROVAL)</td>
</tr>
<tr>
    <td><CopyableCode code="run_count" /></td>
    <td><code>integer</code></td>
    <td>The number of runs done for the flow.</td>
</tr>
<tr>
    <td><CopyableCode code="user_count" /></td>
    <td><code>integer</code></td>
    <td>The number of users who have used the flow.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_flows">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the flow.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The identifier of the principal who created the flow.</td>
</tr>
<tr>
    <td><CopyableCode code="created_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time this flow was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the flow.</td>
</tr>
<tr>
    <td><CopyableCode code="flow_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the flow. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_published_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time this flow was published.</td>
</tr>
<tr>
    <td><CopyableCode code="last_published_by" /></td>
    <td><code>string</code></td>
    <td>The identifier of the last principal who published the flow.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_by" /></td>
    <td><code>string</code></td>
    <td>The identifier of the last principal who updated the flow.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time this flow was modified.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The display name of the flow.</td>
</tr>
<tr>
    <td><CopyableCode code="publish_state" /></td>
    <td><code>string</code></td>
    <td>The publish state for the flow. The valid values are DRAFT, PUBLISHED, or PENDING_APPROVAL. (PUBLISHED, DRAFT, PENDING_APPROVAL)</td>
</tr>
<tr>
    <td><CopyableCode code="run_count" /></td>
    <td><code>integer</code></td>
    <td>The number of runs done for the flow.</td>
</tr>
<tr>
    <td><CopyableCode code="user_count" /></td>
    <td><code>integer</code></td>
    <td>The number of users who have used the flow.</td>
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
    <td><a href="#describe_flow"><CopyableCode code="describe_flow" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-flow_id"><code>flow_id</code></a>, <a href="#parameter-publish-state"><code>publish-state</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the full details of a flow for the latest version of the requested publish state.</td>
</tr>
<tr>
    <td><a href="#search_flows"><CopyableCode code="search_flows" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Search for the flows in an Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#list_flows"><CopyableCode code="list_flows" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-next-token"><code>next-token</code></a>, <a href="#parameter-max-results"><code>max-results</code></a></td>
    <td>Lists flows in an Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#create_flow"><CopyableCode code="create_flow" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FlowDefinition"><code>FlowDefinition</code></a></td>
    <td></td>
    <td>Creates a new flow in the specified Amazon Web Services account. Creates both a DRAFT and PUBLISHED (auto-published) version. This operation is idempotent. Supply a ClientToken to safely retry without creating duplicate resources.</td>
</tr>
<tr>
    <td><a href="#update_flow"><CopyableCode code="update_flow" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-flow_id"><code>flow_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an existing flow. Supply only the fields you want to change. Updates both DRAFT and PUBLISHED versions. When FlowDefinition is provided, all existing steps are replaced with the new definition.</td>
</tr>
<tr>
    <td><a href="#delete_flow"><CopyableCode code="delete_flow" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-flow_id"><code>flow_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Permanently deletes a flow from the specified Amazon Web Services account. This operation cannot be undone.</td>
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
<tr id="parameter-aws_account_id">
    <td><CopyableCode code="aws_account_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that contains the flow that you are deleting.</td>
</tr>
<tr id="parameter-flow_id">
    <td><CopyableCode code="flow_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the flow to delete.</td>
</tr>
<tr id="parameter-publish-state">
    <td><CopyableCode code="publish-state" /></td>
    <td><code>string</code></td>
    <td>The publish state of the flow version to describe. Valid values are DRAFT, PUBLISHED, or PENDING_APPROVAL.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to be returned per request.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>The token to request the next set of results, or null if you want to retrieve the first set.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_flow"
    values={[
        { label: 'describe_flow', value: 'describe_flow' },
        { label: 'search_flows', value: 'search_flows' },
        { label: 'list_flows', value: 'list_flows' }
    ]}
>
<TabItem value="describe_flow">

Returns the full details of a flow for the latest version of the requested publish state.

```sql
SELECT
flow,
request_id,
status
FROM aws.quicksight.flows
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND flow_id = '{{ flow_id }}' -- required
AND `publish-state` = '{{ publish-state }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="search_flows">

Search for the flows in an Amazon Web Services account.

```sql
SELECT
arn,
created_by,
created_time,
description,
flow_id,
last_published_at,
last_published_by,
last_updated_by,
last_updated_time,
name,
publish_state,
run_count,
user_count
FROM aws.quicksight.flows
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_flows">

Lists flows in an Amazon Web Services account.

```sql
SELECT
arn,
created_by,
created_time,
description,
flow_id,
last_published_at,
last_published_by,
last_updated_by,
last_updated_time,
name,
publish_state,
run_count,
user_count
FROM aws.quicksight.flows
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND region = '{{ region }}' -- required
AND `next-token` = '{{ next-token }}'
AND `max-results` = '{{ max-results }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_flow"
    values={[
        { label: 'create_flow', value: 'create_flow' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_flow">

Creates a new flow in the specified Amazon Web Services account. Creates both a DRAFT and PUBLISHED (auto-published) version. This operation is idempotent. Supply a ClientToken to safely retry without creating duplicate resources.

```sql
INSERT INTO aws.quicksight.flows (
Name,
Description,
FlowDefinition,
Permissions,
ClientToken,
aws_account_id,
region
)
SELECT 
'{{ Name }}',
'{{ Description }}',
'{{ FlowDefinition }}' /* required */,
'{{ Permissions }}',
'{{ ClientToken }}',
'{{ aws_account_id }}',
'{{ region }}'
RETURNING
arn,
flow_id,
request_id,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: flows
  props:
    - name: aws_account_id
      value: "{{ aws_account_id }}"
      description: Required parameter for the flows resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the flows resource.
    - name: Name
      value: "{{ Name }}"
    - name: Description
      value: "{{ Description }}"
    - name: FlowDefinition
      value: "{{ FlowDefinition }}"
    - name: Permissions
      value:
        - Actions: "{{ Actions }}"
          Principal: "{{ Principal }}"
    - name: ClientToken
      value: "{{ ClientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_flow"
    values={[
        { label: 'update_flow', value: 'update_flow' }
    ]}
>
<TabItem value="update_flow">

Updates an existing flow. Supply only the fields you want to change. Updates both DRAFT and PUBLISHED versions. When FlowDefinition is provided, all existing steps are replaced with the new definition.

```sql
UPDATE aws.quicksight.flows
SET 
Name = '{{ Name }}',
Description = '{{ Description }}',
FlowDefinition = '{{ FlowDefinition }}',
ClientToken = '{{ ClientToken }}'
WHERE 
aws_account_id = '{{ aws_account_id }}' --required
AND flow_id = '{{ flow_id }}' --required
AND region = '{{ region }}' --required
RETURNING
arn,
flow_id,
request_id,
status;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_flow"
    values={[
        { label: 'delete_flow', value: 'delete_flow' }
    ]}
>
<TabItem value="delete_flow">

Permanently deletes a flow from the specified Amazon Web Services account. This operation cannot be undone.

```sql
DELETE FROM aws.quicksight.flows
WHERE aws_account_id = '{{ aws_account_id }}' --required
AND flow_id = '{{ flow_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
