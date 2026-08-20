--- 
title: contact_flow_module_alias
hide_title: false
hide_table_of_contents: false
keywords:
  - contact_flow_module_alias
  - connect
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

Creates, updates, deletes, gets or lists a <code>contact_flow_module_alias</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="contact_flow_module_alias" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.contact_flow_module_alias" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_contact_flow_module_alias"
    values={[
        { label: 'describe_contact_flow_module_alias', value: 'describe_contact_flow_module_alias' }
    ]}
>
<TabItem value="describe_contact_flow_module_alias">

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
    <td><CopyableCode code="alias_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the alias. (pattern: &lt;code&gt;^(&#91;$0-9a-zA-Z&#93;&#91;_-&#93;?)+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="contact_flow_module_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the flow module.</td>
</tr>
<tr>
    <td><CopyableCode code="contact_flow_module_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the flow module.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the alias. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_region" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region where this resource was last modified. (pattern: &lt;code&gt;&#91;a-z&#93;&#123;2&#125;(-&#91;a-z&#93;+)&#123;1,2&#125;(-&#91;0-9&#93;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when this resource was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the alias. (pattern: &lt;code&gt;^(&#91;$0-9a-zA-Z&#93;&#91;_-&#93;?)+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>integer (int64)</code></td>
    <td>The version of the flow module.</td>
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
    <td><a href="#describe_contact_flow_module_alias"><CopyableCode code="describe_contact_flow_module_alias" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-contact_flow_module_id"><code>contact_flow_module_id</code></a>, <a href="#parameter-alias_id"><code>alias_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves detailed information about a specific alias, including which version it currently points to and its metadata.</td>
</tr>
<tr>
    <td><a href="#create_contact_flow_module_alias"><CopyableCode code="create_contact_flow_module_alias" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-contact_flow_module_id"><code>contact_flow_module_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ContactFlowModuleVersion"><code>ContactFlowModuleVersion</code></a>, <a href="#parameter-AliasName"><code>AliasName</code></a></td>
    <td></td>
    <td>Creates a named alias that points to a specific version of a contact flow module.</td>
</tr>
<tr>
    <td><a href="#update_contact_flow_module_alias"><CopyableCode code="update_contact_flow_module_alias" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-contact_flow_module_id"><code>contact_flow_module_id</code></a>, <a href="#parameter-alias_id"><code>alias_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a specific Aliases metadata, including the version it’s tied to, it’s name, and description.</td>
</tr>
<tr>
    <td><a href="#delete_contact_flow_module_alias"><CopyableCode code="delete_contact_flow_module_alias" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-contact_flow_module_id"><code>contact_flow_module_id</code></a>, <a href="#parameter-alias_id"><code>alias_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes an alias reference, breaking the named connection to the underlying module version without affecting the version itself.</td>
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
<tr id="parameter-alias_id">
    <td><CopyableCode code="alias_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the alias.</td>
</tr>
<tr id="parameter-contact_flow_module_id">
    <td><CopyableCode code="contact_flow_module_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the flow module.</td>
</tr>
<tr id="parameter-instance_id">
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Connect Customer instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance.</td>
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
    defaultValue="describe_contact_flow_module_alias"
    values={[
        { label: 'describe_contact_flow_module_alias', value: 'describe_contact_flow_module_alias' }
    ]}
>
<TabItem value="describe_contact_flow_module_alias">

Retrieves detailed information about a specific alias, including which version it currently points to and its metadata.

```sql
SELECT
alias_id,
contact_flow_module_arn,
contact_flow_module_id,
description,
last_modified_region,
last_modified_time,
name,
version
FROM aws.connect.contact_flow_module_alias
WHERE instance_id = '{{ instance_id }}' -- required
AND contact_flow_module_id = '{{ contact_flow_module_id }}' -- required
AND alias_id = '{{ alias_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_contact_flow_module_alias"
    values={[
        { label: 'create_contact_flow_module_alias', value: 'create_contact_flow_module_alias' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_contact_flow_module_alias">

Creates a named alias that points to a specific version of a contact flow module.

```sql
INSERT INTO aws.connect.contact_flow_module_alias (
Description,
ContactFlowModuleVersion,
AliasName,
instance_id,
contact_flow_module_id,
region
)
SELECT 
'{{ Description }}',
{{ ContactFlowModuleVersion }} /* required */,
'{{ AliasName }}' /* required */,
'{{ instance_id }}',
'{{ contact_flow_module_id }}',
'{{ region }}'
RETURNING
contact_flow_module_arn,
id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: contact_flow_module_alias
  props:
    - name: instance_id
      value: "{{ instance_id }}"
      description: Required parameter for the contact_flow_module_alias resource.
    - name: contact_flow_module_id
      value: "{{ contact_flow_module_id }}"
      description: Required parameter for the contact_flow_module_alias resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the contact_flow_module_alias resource.
    - name: Description
      value: "{{ Description }}"
    - name: ContactFlowModuleVersion
      value: {{ ContactFlowModuleVersion }}
    - name: AliasName
      value: "{{ AliasName }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_contact_flow_module_alias"
    values={[
        { label: 'update_contact_flow_module_alias', value: 'update_contact_flow_module_alias' }
    ]}
>
<TabItem value="update_contact_flow_module_alias">

Updates a specific Aliases metadata, including the version it’s tied to, it’s name, and description.

```sql
UPDATE aws.connect.contact_flow_module_alias
SET 
Name = '{{ Name }}',
Description = '{{ Description }}',
ContactFlowModuleVersion = {{ ContactFlowModuleVersion }}
WHERE 
instance_id = '{{ instance_id }}' --required
AND contact_flow_module_id = '{{ contact_flow_module_id }}' --required
AND alias_id = '{{ alias_id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_contact_flow_module_alias"
    values={[
        { label: 'delete_contact_flow_module_alias', value: 'delete_contact_flow_module_alias' }
    ]}
>
<TabItem value="delete_contact_flow_module_alias">

Removes an alias reference, breaking the named connection to the underlying module version without affecting the version itself.

```sql
DELETE FROM aws.connect.contact_flow_module_alias
WHERE instance_id = '{{ instance_id }}' --required
AND contact_flow_module_id = '{{ contact_flow_module_id }}' --required
AND alias_id = '{{ alias_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
