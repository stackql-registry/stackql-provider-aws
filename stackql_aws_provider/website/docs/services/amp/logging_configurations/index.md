--- 
title: logging_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - logging_configurations
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

Creates, updates, deletes, gets or lists a <code>logging_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="logging_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.amp.logging_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_logging_configuration"
    values={[
        { label: 'describe_logging_configuration', value: 'describe_logging_configuration' }
    ]}
>
<TabItem value="describe_logging_configuration">

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
    <td>The date and time that the logging configuration was created.</td>
</tr>
<tr>
    <td><CopyableCode code="log_group_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the CloudWatch log group to which the vended log data will be published. (pattern: &lt;code&gt;arn:aws&#91;a-z0-9-&#93;*:logs:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:log-group:&#91;A-Za-z0-9\.\-\_\#/&#93;&#123;1,512&#125;\:\*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the logging configuration was most recently changed.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The current status of the logging configuration.</td>
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
    <td><a href="#describe_logging_configuration"><CopyableCode code="describe_logging_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns complete information about the current rules and alerting logging configuration of the workspace. These logging configurations are only for rules and alerting logs.</td>
</tr>
<tr>
    <td><a href="#create_logging_configuration"><CopyableCode code="create_logging_configuration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-logGroupArn"><code>logGroupArn</code></a></td>
    <td></td>
    <td>The CreateLoggingConfiguration operation creates rules and alerting logging configuration for the workspace. Use this operation to set the CloudWatch log group to which the logs will be published to. These logging configurations are only for rules and alerting logs.</td>
</tr>
<tr>
    <td><a href="#update_logging_configuration"><CopyableCode code="update_logging_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-logGroupArn"><code>logGroupArn</code></a></td>
    <td></td>
    <td>Updates the log group ARN or the workspace ID of the current rules and alerting logging configuration. These logging configurations are only for rules and alerting logs.</td>
</tr>
<tr>
    <td><a href="#delete_logging_configuration"><CopyableCode code="delete_logging_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td>Deletes the rules and alerting logging configuration for a workspace. These logging configurations are only for rules and alerting logs.</td>
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
    <td>The ID of the workspace containing the logging configuration to delete.</td>
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
    defaultValue="describe_logging_configuration"
    values={[
        { label: 'describe_logging_configuration', value: 'describe_logging_configuration' }
    ]}
>
<TabItem value="describe_logging_configuration">

Returns complete information about the current rules and alerting logging configuration of the workspace. These logging configurations are only for rules and alerting logs.

```sql
SELECT
created_at,
log_group_arn,
modified_at,
status,
workspace
FROM aws.amp.logging_configurations
WHERE workspace_id = '{{ workspace_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_logging_configuration"
    values={[
        { label: 'create_logging_configuration', value: 'create_logging_configuration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_logging_configuration">

The CreateLoggingConfiguration operation creates rules and alerting logging configuration for the workspace. Use this operation to set the CloudWatch log group to which the logs will be published to. These logging configurations are only for rules and alerting logs.

```sql
INSERT INTO aws.amp.logging_configurations (
logGroupArn,
clientToken,
workspace_id,
region
)
SELECT 
'{{ logGroupArn }}' /* required */,
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
- name: logging_configurations
  props:
    - name: workspace_id
      value: "{{ workspace_id }}"
      description: Required parameter for the logging_configurations resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the logging_configurations resource.
    - name: logGroupArn
      value: "{{ logGroupArn }}"
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        An identifier used to ensure the idempotency of a write request.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_logging_configuration"
    values={[
        { label: 'update_logging_configuration', value: 'update_logging_configuration' }
    ]}
>
<TabItem value="update_logging_configuration">

Updates the log group ARN or the workspace ID of the current rules and alerting logging configuration. These logging configurations are only for rules and alerting logs.

```sql
UPDATE aws.amp.logging_configurations
SET 
logGroupArn = '{{ logGroupArn }}',
clientToken = '{{ clientToken }}'
WHERE 
workspace_id = '{{ workspace_id }}' --required
AND region = '{{ region }}' --required
AND logGroupArn = '{{ logGroupArn }}' --required
RETURNING
status;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_logging_configuration"
    values={[
        { label: 'delete_logging_configuration', value: 'delete_logging_configuration' }
    ]}
>
<TabItem value="delete_logging_configuration">

Deletes the rules and alerting logging configuration for a workspace. These logging configurations are only for rules and alerting logs.

```sql
DELETE FROM aws.amp.logging_configurations
WHERE workspace_id = '{{ workspace_id }}' --required
AND region = '{{ region }}' --required
AND clientToken = '{{ clientToken }}'
;
```
</TabItem>
</Tabs>
