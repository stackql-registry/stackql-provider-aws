--- 
title: rotation_overrides
hide_title: false
hide_table_of_contents: false
keywords:
  - rotation_overrides
  - ssm_contacts
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

Creates, updates, deletes, gets or lists a <code>rotation_overrides</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="rotation_overrides" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm_contacts.rotation_overrides" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_rotation_overrides"
    values={[
        { label: 'list_rotation_overrides', value: 'list_rotation_overrides' },
        { label: 'get_rotation_override', value: 'get_rotation_override' }
    ]}
>
<TabItem value="list_rotation_overrides">

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
    <td><CopyableCode code="create_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time a rotation override was created.</td>
</tr>
<tr>
    <td><CopyableCode code="end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time a rotation override ends.</td>
</tr>
<tr>
    <td><CopyableCode code="new_contact_ids" /></td>
    <td><code>array</code></td>
    <td>The Amazon Resource Names (ARNs) of the contacts assigned to the override of the on-call rotation.</td>
</tr>
<tr>
    <td><CopyableCode code="rotation_override_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the override to an on-call rotation. (pattern: &lt;code&gt;(&#91;a-fA-Z0-9&#93;&#123;8,11&#125;-&#91;a-fA-F0-9&#93;&#123;4&#125;-&#91;a-fA-F0-9&#93;&#123;4&#125;-&#91;a-fA-F0-9&#93;&#123;4&#125;-&#91;a-fA-F0-9&#93;&#123;12&#125;)&#123;1&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time a rotation override begins.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_rotation_override">

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
    <td><CopyableCode code="create_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the override was created.</td>
</tr>
<tr>
    <td><CopyableCode code="end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the override ends.</td>
</tr>
<tr>
    <td><CopyableCode code="new_contact_ids" /></td>
    <td><code>array</code></td>
    <td>The Amazon Resource Names (ARNs) of the contacts assigned to the override of the on-call rotation.</td>
</tr>
<tr>
    <td><CopyableCode code="rotation_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the on-call rotation that was overridden. (pattern: &lt;code&gt;arn:(aws|aws-cn|aws-us-gov):ssm-contacts:&#91;-\w+=\/,.@&#93;*:&#91;0-9&#93;+:(&#91;\w+=\/,.@:-&#93;+)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="rotation_override_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the override to an on-call rotation. (pattern: &lt;code&gt;(&#91;a-fA-Z0-9&#93;&#123;8,11&#125;-&#91;a-fA-F0-9&#93;&#123;4&#125;-&#91;a-fA-F0-9&#93;&#123;4&#125;-&#91;a-fA-F0-9&#93;&#123;4&#125;-&#91;a-fA-F0-9&#93;&#123;12&#125;)&#123;1&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the override goes into effect.</td>
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
    <td><a href="#list_rotation_overrides"><CopyableCode code="list_rotation_overrides" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list of overrides currently specified for an on-call rotation.</td>
</tr>
<tr>
    <td><a href="#get_rotation_override"><CopyableCode code="get_rotation_override" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about an override to an on-call rotation.</td>
</tr>
<tr>
    <td><a href="#create_rotation_override"><CopyableCode code="create_rotation_override" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RotationId"><code>RotationId</code></a>, <a href="#parameter-NewContactIds"><code>NewContactIds</code></a>, <a href="#parameter-StartTime"><code>StartTime</code></a>, <a href="#parameter-EndTime"><code>EndTime</code></a></td>
    <td></td>
    <td>Creates an override for a rotation in an on-call schedule.</td>
</tr>
<tr>
    <td><a href="#delete_rotation_override"><CopyableCode code="delete_rotation_override" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an existing override for an on-call rotation.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_rotation_overrides"
    values={[
        { label: 'list_rotation_overrides', value: 'list_rotation_overrides' },
        { label: 'get_rotation_override', value: 'get_rotation_override' }
    ]}
>
<TabItem value="list_rotation_overrides">

Retrieves a list of overrides currently specified for an on-call rotation.

```sql
SELECT
create_time,
end_time,
new_contact_ids,
rotation_override_id,
start_time
FROM aws.ssm_contacts.rotation_overrides
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_rotation_override">

Retrieves information about an override to an on-call rotation.

```sql
SELECT
create_time,
end_time,
new_contact_ids,
rotation_arn,
rotation_override_id,
start_time
FROM aws.ssm_contacts.rotation_overrides
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_rotation_override"
    values={[
        { label: 'create_rotation_override', value: 'create_rotation_override' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_rotation_override">

Creates an override for a rotation in an on-call schedule.

```sql
INSERT INTO aws.ssm_contacts.rotation_overrides (
RotationId,
NewContactIds,
StartTime,
EndTime,
IdempotencyToken,
region
)
SELECT 
'{{ RotationId }}' /* required */,
'{{ NewContactIds }}' /* required */,
'{{ StartTime }}' /* required */,
'{{ EndTime }}' /* required */,
'{{ IdempotencyToken }}',
'{{ region }}'
RETURNING
rotation_override_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: rotation_overrides
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the rotation_overrides resource.
    - name: RotationId
      value: "{{ RotationId }}"
      description: |
        The Amazon Resource Name (ARN) of the rotation to create an override for.
    - name: NewContactIds
      value:
        - "{{ NewContactIds }}"
      description: |
        The Amazon Resource Names (ARNs) of the contacts to replace those in the current on-call rotation with. If you want to include any current team members in the override shift, you must include their ARNs in the new contact ID list.
    - name: StartTime
      value: "{{ StartTime }}"
      description: |
        The date and time when the override goes into effect.
    - name: EndTime
      value: "{{ EndTime }}"
      description: |
        The date and time when the override ends.
    - name: IdempotencyToken
      value: "{{ IdempotencyToken }}"
      description: |
        A token that ensures that the operation is called only once with the specified details.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_rotation_override"
    values={[
        { label: 'delete_rotation_override', value: 'delete_rotation_override' }
    ]}
>
<TabItem value="delete_rotation_override">

Deletes an existing override for an on-call rotation.

```sql
DELETE FROM aws.ssm_contacts.rotation_overrides
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
