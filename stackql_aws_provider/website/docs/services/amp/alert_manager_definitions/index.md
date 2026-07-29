--- 
title: alert_manager_definitions
hide_title: false
hide_table_of_contents: false
keywords:
  - alert_manager_definitions
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

Creates, updates, deletes, gets or lists an <code>alert_manager_definitions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="alert_manager_definitions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.amp.alert_manager_definitions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_alert_manager_definition"
    values={[
        { label: 'describe_alert_manager_definition', value: 'describe_alert_manager_definition' }
    ]}
>
<TabItem value="describe_alert_manager_definition">

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
    <td>The date and time that the alert manager definition was created.</td>
</tr>
<tr>
    <td><CopyableCode code="data" /></td>
    <td><code>string (byte)</code></td>
    <td>The base-64 encoded blob that is alert manager definition. For details about the alert manager definition, see AlertManagedDefinitionData.</td>
</tr>
<tr>
    <td><CopyableCode code="modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the alert manager definition was most recently changed.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>A structure that displays the current status of the alert manager definition..</td>
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
    <td><a href="#describe_alert_manager_definition"><CopyableCode code="describe_alert_manager_definition" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the full information about the alert manager definition for a workspace.</td>
</tr>
<tr>
    <td><a href="#create_alert_manager_definition"><CopyableCode code="create_alert_manager_definition" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>The CreateAlertManagerDefinition operation creates the alert manager definition in a workspace. If a workspace already has an alert manager definition, don't use this operation to update it. Instead, use PutAlertManagerDefinition.</td>
</tr>
<tr>
    <td><a href="#put_alert_manager_definition"><CopyableCode code="put_alert_manager_definition" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Updates an existing alert manager definition in a workspace. If the workspace does not already have an alert manager definition, don't use this operation to create it. Instead, use CreateAlertManagerDefinition.</td>
</tr>
<tr>
    <td><a href="#delete_alert_manager_definition"><CopyableCode code="delete_alert_manager_definition" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td>Deletes the alert manager definition from a workspace.</td>
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
    <td>The ID of the workspace to delete the alert manager definition from.</td>
</tr>
<tr id="parameter-clientToken">
    <td><CopyableCode code="clientToken" /></td>
    <td><code>string</code></td>
    <td>A unique identifier that you can provide to ensure the idempotency of the request. Case-sensitive.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_alert_manager_definition"
    values={[
        { label: 'describe_alert_manager_definition', value: 'describe_alert_manager_definition' }
    ]}
>
<TabItem value="describe_alert_manager_definition">

Retrieves the full information about the alert manager definition for a workspace.

```sql
SELECT
created_at,
data,
modified_at,
status
FROM aws.amp.alert_manager_definitions
WHERE workspace_id = '{{ workspace_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_alert_manager_definition"
    values={[
        { label: 'create_alert_manager_definition', value: 'create_alert_manager_definition' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_alert_manager_definition">

The CreateAlertManagerDefinition operation creates the alert manager definition in a workspace. If a workspace already has an alert manager definition, don't use this operation to update it. Instead, use PutAlertManagerDefinition.

```sql
INSERT INTO aws.amp.alert_manager_definitions (
data,
clientToken,
workspace_id,
region
)
SELECT 
'{{ data }}' /* required */,
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
- name: alert_manager_definitions
  props:
    - name: workspace_id
      value: "{{ workspace_id }}"
      description: Required parameter for the alert_manager_definitions resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the alert_manager_definitions resource.
    - name: data
      value: "{{ data }}"
      description: |
        The base-64 encoded blob that is alert manager definition. For details about the alert manager definition, see AlertManagedDefinitionData.
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        An identifier used to ensure the idempotency of a write request.
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_alert_manager_definition"
    values={[
        { label: 'put_alert_manager_definition', value: 'put_alert_manager_definition' }
    ]}
>
<TabItem value="put_alert_manager_definition">

Updates an existing alert manager definition in a workspace. If the workspace does not already have an alert manager definition, don't use this operation to create it. Instead, use CreateAlertManagerDefinition.

```sql
REPLACE aws.amp.alert_manager_definitions
SET 
data = '{{ data }}',
clientToken = '{{ clientToken }}'
WHERE 
workspace_id = '{{ workspace_id }}' --required
AND region = '{{ region }}' --required
AND data = '{{ data }}' --required
RETURNING
status;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_alert_manager_definition"
    values={[
        { label: 'delete_alert_manager_definition', value: 'delete_alert_manager_definition' }
    ]}
>
<TabItem value="delete_alert_manager_definition">

Deletes the alert manager definition from a workspace.

```sql
DELETE FROM aws.amp.alert_manager_definitions
WHERE workspace_id = '{{ workspace_id }}' --required
AND region = '{{ region }}' --required
AND clientToken = '{{ clientToken }}'
;
```
</TabItem>
</Tabs>
