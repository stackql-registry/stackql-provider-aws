--- 
title: action_targets
hide_title: false
hide_table_of_contents: false
keywords:
  - action_targets
  - securityhub
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

Creates, updates, deletes, gets or lists an <code>action_targets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="action_targets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.securityhub.action_targets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_action_targets"
    values={[
        { label: 'describe_action_targets', value: 'describe_action_targets' }
    ]}
>
<TabItem value="describe_action_targets">

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
    <td><CopyableCode code="action_target_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN for the target action. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the target action. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the action target. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
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
    <td><a href="#describe_action_targets"><CopyableCode code="describe_action_targets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of the custom action targets in Security Hub CSPM in your account.</td>
</tr>
<tr>
    <td><a href="#create_action_target"><CopyableCode code="create_action_target" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Id"><code>Id</code></a></td>
    <td></td>
    <td>Creates a custom action target in Security Hub CSPM. You can use custom actions on findings and insights in Security Hub CSPM to trigger target actions in Amazon CloudWatch Events.</td>
</tr>
<tr>
    <td><a href="#update_action_target"><CopyableCode code="update_action_target" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-action_target_arn"><code>action_target_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the name and description of a custom action target in Security Hub CSPM.</td>
</tr>
<tr>
    <td><a href="#delete_action_target"><CopyableCode code="delete_action_target" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-action_target_arn"><code>action_target_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a custom action target from Security Hub CSPM. Deleting a custom action target does not affect any findings or insights that were already sent to Amazon CloudWatch Events using the custom action.</td>
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
<tr id="parameter-action_target_arn">
    <td><CopyableCode code="action_target_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the custom action target to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_action_targets"
    values={[
        { label: 'describe_action_targets', value: 'describe_action_targets' }
    ]}
>
<TabItem value="describe_action_targets">

Returns a list of the custom action targets in Security Hub CSPM in your account.

```sql
SELECT
action_target_arn,
description,
name
FROM aws.securityhub.action_targets
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_action_target"
    values={[
        { label: 'create_action_target', value: 'create_action_target' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_action_target">

Creates a custom action target in Security Hub CSPM. You can use custom actions on findings and insights in Security Hub CSPM to trigger target actions in Amazon CloudWatch Events.

```sql
INSERT INTO aws.securityhub.action_targets (
Name,
Description,
Id,
region
)
SELECT 
'{{ Name }}',
'{{ Description }}',
'{{ Id }}' /* required */,
'{{ region }}'
RETURNING
action_target_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: action_targets
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the action_targets resource.
    - name: Name
      value: "{{ Name }}"
    - name: Description
      value: "{{ Description }}"
    - name: Id
      value: "{{ Id }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_action_target"
    values={[
        { label: 'update_action_target', value: 'update_action_target' }
    ]}
>
<TabItem value="update_action_target">

Updates the name and description of a custom action target in Security Hub CSPM.

```sql
UPDATE aws.securityhub.action_targets
SET 
Name = '{{ Name }}',
Description = '{{ Description }}'
WHERE 
action_target_arn = '{{ action_target_arn }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_action_target"
    values={[
        { label: 'delete_action_target', value: 'delete_action_target' }
    ]}
>
<TabItem value="delete_action_target">

Deletes a custom action target from Security Hub CSPM. Deleting a custom action target does not affect any findings or insights that were already sent to Amazon CloudWatch Events using the custom action.

```sql
DELETE FROM aws.securityhub.action_targets
WHERE action_target_arn = '{{ action_target_arn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
