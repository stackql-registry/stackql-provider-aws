--- 
title: query_logging_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - query_logging_configurations
  - amp
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

Creates, updates, deletes, gets or lists a <code>query_logging_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="query_logging_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.amp.query_logging_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_query_logging_configuration"
    values={[
        { label: 'describe_query_logging_configuration', value: 'describe_query_logging_configuration' }
    ]}
>
<TabItem value="describe_query_logging_configuration">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the query logging configuration was created.</td>
</tr>
<tr>
    <td><CopyableCode code="destinations" /></td>
    <td><code>array</code></td>
    <td>A list structure that contains a single CloudWatch Logs destination.</td>
</tr>
<tr>
    <td><CopyableCode code="modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the query logging configuration was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The current status of the query logging configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="workspace" /></td>
    <td><code>string</code></td>
    <td>A workspace ID. (pattern: &lt;code&gt;.*&#91;0-9A-Za-z&#93;&#91;-.0-9A-Z_a-z&#93;*.*&lt;/code&gt;)</td>
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
    <td><a href="#describe_query_logging_configuration"><CopyableCode code="describe_query_logging_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the details of the query logging configuration for the specified workspace.</td>
</tr>
<tr>
    <td><a href="#create_query_logging_configuration"><CopyableCode code="create_query_logging_configuration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-destinations"><code>destinations</code></a></td>
    <td></td>
    <td>Creates a query logging configuration for the specified workspace. This operation enables logging of queries that exceed the specified QSP threshold.</td>
</tr>
<tr>
    <td><a href="#update_query_logging_configuration"><CopyableCode code="update_query_logging_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-destinations"><code>destinations</code></a></td>
    <td></td>
    <td>Updates the query logging configuration for the specified workspace.</td>
</tr>
<tr>
    <td><a href="#delete_query_logging_configuration"><CopyableCode code="delete_query_logging_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td>Deletes the query logging configuration for the specified workspace.</td>
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
<tr id="parameter-workspace_id">
    <td><CopyableCode code="workspace_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the workspace from which to delete the query logging configuration.</td>
</tr>
<tr id="parameter-clientToken">
    <td><CopyableCode code="clientToken" /></td>
    <td><code>string</code></td>
    <td>(Optional) A unique, case-sensitive identifier that you can provide to ensure the idempotency of the request.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_query_logging_configuration"
    values={[
        { label: 'describe_query_logging_configuration', value: 'describe_query_logging_configuration' }
    ]}
>
<TabItem value="describe_query_logging_configuration">

Retrieves the details of the query logging configuration for the specified workspace.

```sql
SELECT
created_at,
destinations,
modified_at,
status,
workspace
FROM aws.amp.query_logging_configurations
WHERE workspace_id = '{{ workspace_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_query_logging_configuration"
    values={[
        { label: 'create_query_logging_configuration', value: 'create_query_logging_configuration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_query_logging_configuration">

Creates a query logging configuration for the specified workspace. This operation enables logging of queries that exceed the specified QSP threshold.

```sql
INSERT INTO aws.amp.query_logging_configurations (
destinations,
clientToken,
workspace_id,
region
)
SELECT 
'{{ destinations }}' /* required */,
'{{ clientToken }}',
'{{ workspace_id }}',
'{{ region }}'
RETURNING
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: query_logging_configurations
  props:
    - name: workspace_id
      value: "{{ workspace_id }}"
      description: Required parameter for the query_logging_configurations resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the query_logging_configurations resource.
    - name: destinations
      description: |
        A list structure that contains a single CloudWatch Logs destination.
      value:
        - cloudWatchLogs:
            logGroupArn: "{{ logGroupArn }}"
          filters:
            qspThreshold: {{ qspThreshold }}
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        An identifier used to ensure the idempotency of a write request.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_query_logging_configuration"
    values={[
        { label: 'update_query_logging_configuration', value: 'update_query_logging_configuration' }
    ]}
>
<TabItem value="update_query_logging_configuration">

Updates the query logging configuration for the specified workspace.

```sql
UPDATE aws.amp.query_logging_configurations
SET 
destinations = '{{ destinations }}',
clientToken = '{{ clientToken }}'
WHERE 
workspace_id = '{{ workspace_id }}' --required
AND region = '{{ region }}' --required
AND destinations = '{{ destinations }}' --required
RETURNING
status;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_query_logging_configuration"
    values={[
        { label: 'delete_query_logging_configuration', value: 'delete_query_logging_configuration' }
    ]}
>
<TabItem value="delete_query_logging_configuration">

Deletes the query logging configuration for the specified workspace.

```sql
DELETE FROM aws.amp.query_logging_configurations
WHERE workspace_id = '{{ workspace_id }}' --required
AND region = '{{ region }}' --required
AND clientToken = '{{ clientToken }}'
;
```
</TabItem>
</Tabs>
