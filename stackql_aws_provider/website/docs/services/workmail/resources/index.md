--- 
title: resources
hide_title: false
hide_table_of_contents: false
keywords:
  - resources
  - workmail
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

Creates, updates, deletes, gets or lists a <code>resources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.workmail.resources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_resource"
    values={[
        { label: 'describe_resource', value: 'describe_resource' },
        { label: 'list_resources', value: 'list_resources' }
    ]}
>
<TabItem value="describe_resource">

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
    <td><CopyableCode code="booking_options" /></td>
    <td><code>object</code></td>
    <td>The booking options for the described resource.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="disabled_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when a resource was disabled from WorkMail, in UNIX epoch time format.</td>
</tr>
<tr>
    <td><CopyableCode code="email" /></td>
    <td><code>string</code></td>
    <td>The email of the described resource. (pattern: &lt;code&gt;&#91;a-zA-Z0-9._%+-&#93;&#123;1,64&#125;@&#91;a-zA-Z0-9.-&#93;+\.&#91;a-zA-Z-&#93;&#123;2,&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="enabled_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when a resource was enabled for WorkMail, in UNIX epoch time format.</td>
</tr>
<tr>
    <td><CopyableCode code="hidden_from_global_address_list" /></td>
    <td><code>boolean</code></td>
    <td>If enabled, the resource is hidden from the global address list.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the described resource. (pattern: &lt;code&gt;&#91;\w\-.&#93;+(@&#91;a-zA-Z0-9.\-&#93;+\.&#91;a-zA-Z0-9-&#93;&#123;2,&#125;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the described resource. (pattern: &lt;code&gt;^r-&#91;0-9a-f&#93;&#123;32&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the resource: enabled (registered to WorkMail), disabled (deregistered or never registered to WorkMail), or deleted. (ENABLED, DISABLED, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the described resource. (ROOM, EQUIPMENT)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_resources">

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
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Resource description.</td>
</tr>
<tr>
    <td><CopyableCode code="disabled_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date indicating when the resource was disabled from WorkMail use.</td>
</tr>
<tr>
    <td><CopyableCode code="email" /></td>
    <td><code>string</code></td>
    <td>The email of the resource. (pattern: &lt;code&gt;&#91;a-zA-Z0-9._%+-&#93;&#123;1,64&#125;@&#91;a-zA-Z0-9.-&#93;+\.&#91;a-zA-Z-&#93;&#123;2,&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="enabled_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date indicating when the resource was enabled for WorkMail use.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the resource. (pattern: &lt;code&gt;&#91;\w\-.&#93;+(@&#91;a-zA-Z0-9.\-&#93;+\.&#91;a-zA-Z0-9-&#93;&#123;2,&#125;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the resource, which can be ENABLED, DISABLED, or DELETED. (ENABLED, DISABLED, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the resource: equipment or room. (ROOM, EQUIPMENT)</td>
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
    <td><a href="#describe_resource"><CopyableCode code="describe_resource" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the data available for the resource.</td>
</tr>
<tr>
    <td><a href="#list_resources"><CopyableCode code="list_resources" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns summaries of the organization's resources.</td>
</tr>
<tr>
    <td><a href="#create_resource"><CopyableCode code="create_resource" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-OrganizationId"><code>OrganizationId</code></a></td>
    <td></td>
    <td>Creates a new WorkMail resource.</td>
</tr>
<tr>
    <td><a href="#associate_delegate_to_resource"><CopyableCode code="associate_delegate_to_resource" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-OrganizationId"><code>OrganizationId</code></a>, <a href="#parameter-ResourceId"><code>ResourceId</code></a>, <a href="#parameter-EntityId"><code>EntityId</code></a></td>
    <td></td>
    <td>Adds a member (user or group) to the resource's set of delegates.</td>
</tr>
<tr>
    <td><a href="#update_resource"><CopyableCode code="update_resource" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-OrganizationId"><code>OrganizationId</code></a>, <a href="#parameter-ResourceId"><code>ResourceId</code></a></td>
    <td></td>
    <td>Updates data for the resource. To have the latest information, it must be preceded by a DescribeResource call. The dataset in the request should be the one expected when performing another DescribeResource call.</td>
</tr>
<tr>
    <td><a href="#delete_resource"><CopyableCode code="delete_resource" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified resource.</td>
</tr>
<tr>
    <td><a href="#disassociate_delegate_from_resource"><CopyableCode code="disassociate_delegate_from_resource" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-OrganizationId"><code>OrganizationId</code></a>, <a href="#parameter-ResourceId"><code>ResourceId</code></a>, <a href="#parameter-EntityId"><code>EntityId</code></a></td>
    <td></td>
    <td>Removes a member from the resource's set of delegates.</td>
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
    defaultValue="describe_resource"
    values={[
        { label: 'describe_resource', value: 'describe_resource' },
        { label: 'list_resources', value: 'list_resources' }
    ]}
>
<TabItem value="describe_resource">

Returns the data available for the resource.

```sql
SELECT
booking_options,
description,
disabled_date,
email,
enabled_date,
hidden_from_global_address_list,
name,
resource_id,
state,
type
FROM aws.workmail.resources
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_resources">

Returns summaries of the organization's resources.

```sql
SELECT
description,
disabled_date,
email,
enabled_date,
id,
name,
state,
type
FROM aws.workmail.resources
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_resource"
    values={[
        { label: 'create_resource', value: 'create_resource' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_resource">

Creates a new WorkMail resource.

```sql
INSERT INTO aws.workmail.resources (
OrganizationId,
Name,
Type,
Description,
HiddenFromGlobalAddressList,
region
)
SELECT 
'{{ OrganizationId }}' /* required */,
'{{ Name }}',
'{{ Type }}',
'{{ Description }}',
{{ HiddenFromGlobalAddressList }},
'{{ region }}'
RETURNING
resource_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: resources
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the resources resource.
    - name: OrganizationId
      value: "{{ OrganizationId }}"
      description: |
        The identifier associated with the organization for which the resource is created.
    - name: Name
      value: "{{ Name }}"
      description: |
        The name of the new resource.
    - name: Type
      value: "{{ Type }}"
      description: |
        The type of the new resource. The available types are equipment and room.
      valid_values: ['ROOM', 'EQUIPMENT']
    - name: Description
      value: "{{ Description }}"
      description: |
        Resource description.
    - name: HiddenFromGlobalAddressList
      value: {{ HiddenFromGlobalAddressList }}
      description: |
        If this parameter is enabled, the resource will be hidden from the address book.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_delegate_to_resource"
    values={[
        { label: 'associate_delegate_to_resource', value: 'associate_delegate_to_resource' },
        { label: 'update_resource', value: 'update_resource' }
    ]}
>
<TabItem value="associate_delegate_to_resource">

Adds a member (user or group) to the resource's set of delegates.

```sql
UPDATE aws.workmail.resources
SET 
OrganizationId = '{{ OrganizationId }}',
ResourceId = '{{ ResourceId }}',
EntityId = '{{ EntityId }}'
WHERE 
region = '{{ region }}' --required
AND OrganizationId = '{{ OrganizationId }}' --required
AND ResourceId = '{{ ResourceId }}' --required
AND EntityId = '{{ EntityId }}' --required;
```
</TabItem>
<TabItem value="update_resource">

Updates data for the resource. To have the latest information, it must be preceded by a DescribeResource call. The dataset in the request should be the one expected when performing another DescribeResource call.

```sql
UPDATE aws.workmail.resources
SET 
OrganizationId = '{{ OrganizationId }}',
ResourceId = '{{ ResourceId }}',
Name = '{{ Name }}',
BookingOptions = '{{ BookingOptions }}',
Description = '{{ Description }}',
Type = '{{ Type }}',
HiddenFromGlobalAddressList = {{ HiddenFromGlobalAddressList }}
WHERE 
region = '{{ region }}' --required
AND OrganizationId = '{{ OrganizationId }}' --required
AND ResourceId = '{{ ResourceId }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_resource"
    values={[
        { label: 'delete_resource', value: 'delete_resource' }
    ]}
>
<TabItem value="delete_resource">

Deletes the specified resource.

```sql
DELETE FROM aws.workmail.resources
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disassociate_delegate_from_resource"
    values={[
        { label: 'disassociate_delegate_from_resource', value: 'disassociate_delegate_from_resource' }
    ]}
>
<TabItem value="disassociate_delegate_from_resource">

Removes a member from the resource's set of delegates.

```sql
EXEC aws.workmail.resources.disassociate_delegate_from_resource 
@region='{{ region }}' --required 
@@json=
'{
"OrganizationId": "{{ OrganizationId }}", 
"ResourceId": "{{ ResourceId }}", 
"EntityId": "{{ EntityId }}"
}'
;
```
</TabItem>
</Tabs>
