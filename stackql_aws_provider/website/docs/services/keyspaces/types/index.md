--- 
title: types
hide_title: false
hide_table_of_contents: false
keywords:
  - types
  - keyspaces
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

Creates, updates, deletes, gets or lists a <code>types</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="types" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.keyspaces.types" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_type"
    values={[
        { label: 'get_type', value: 'get_type' },
        { label: 'list_types', value: 'list_types' }
    ]}
>
<TabItem value="get_type">

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
    <td><CopyableCode code="direct_parent_types" /></td>
    <td><code>array</code></td>
    <td>The types that use this type.</td>
</tr>
<tr>
    <td><CopyableCode code="direct_referring_tables" /></td>
    <td><code>array</code></td>
    <td>The tables that use this type.</td>
</tr>
<tr>
    <td><CopyableCode code="field_definitions" /></td>
    <td><code>array</code></td>
    <td>The names and types that define this type.</td>
</tr>
<tr>
    <td><CopyableCode code="keyspace_arn" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the keyspace that contains this type in the format of an Amazon Resource Name (ARN). (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z0-9-&#93;*):cassandra:.+.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="keyspace_name" /></td>
    <td><code>string</code></td>
    <td>The name of the keyspace that contains this type. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9_&#93;&#123;0,47&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp that shows when this type was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="max_nesting_depth" /></td>
    <td><code>integer</code></td>
    <td>The level of nesting implemented for this type.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of this type. (ACTIVE, CREATING, DELETING, RESTORING)</td>
</tr>
<tr>
    <td><CopyableCode code="type_name" /></td>
    <td><code>string</code></td>
    <td>The name of the type.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_types">

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
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The list of types contained in the specified keyspace.</td>
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
    <td><a href="#get_type"><CopyableCode code="get_type" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>The GetType operation returns information about the type, for example the field definitions, the timestamp when the type was last modified, the level of nesting, the status, and details about if the type is used in other types and tables. To read keyspace metadata using GetType, the IAM principal needs Select action permissions for the system keyspace. To configure the required permissions, see Permissions to view a UDT in the Amazon Keyspaces Developer Guide.</td>
</tr>
<tr>
    <td><a href="#list_types"><CopyableCode code="list_types" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>The ListTypes operation returns a list of types for a specified keyspace. To read keyspace metadata using ListTypes, the IAM principal needs Select action permissions for the system keyspace. To configure the required permissions, see Permissions to view a UDT in the Amazon Keyspaces Developer Guide.</td>
</tr>
<tr>
    <td><a href="#create_type"><CopyableCode code="create_type" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-keyspaceName"><code>keyspaceName</code></a>, <a href="#parameter-typeName"><code>typeName</code></a>, <a href="#parameter-fieldDefinitions"><code>fieldDefinitions</code></a></td>
    <td></td>
    <td>The CreateType operation creates a new user-defined type in the specified keyspace. To configure the required permissions, see Permissions to create a UDT in the Amazon Keyspaces Developer Guide. For more information, see User-defined types (UDTs) in the Amazon Keyspaces Developer Guide.</td>
</tr>
<tr>
    <td><a href="#delete_type"><CopyableCode code="delete_type" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>The DeleteType operation deletes a user-defined type (UDT). You can only delete a type that is not used in a table or another UDT. To configure the required permissions, see Permissions to delete a UDT in the Amazon Keyspaces Developer Guide.</td>
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
    defaultValue="get_type"
    values={[
        { label: 'get_type', value: 'get_type' },
        { label: 'list_types', value: 'list_types' }
    ]}
>
<TabItem value="get_type">

The GetType operation returns information about the type, for example the field definitions, the timestamp when the type was last modified, the level of nesting, the status, and details about if the type is used in other types and tables. To read keyspace metadata using GetType, the IAM principal needs Select action permissions for the system keyspace. To configure the required permissions, see Permissions to view a UDT in the Amazon Keyspaces Developer Guide.

```sql
SELECT
direct_parent_types,
direct_referring_tables,
field_definitions,
keyspace_arn,
keyspace_name,
last_modified_timestamp,
max_nesting_depth,
status,
type_name
FROM aws.keyspaces.types
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_types">

The ListTypes operation returns a list of types for a specified keyspace. To read keyspace metadata using ListTypes, the IAM principal needs Select action permissions for the system keyspace. To configure the required permissions, see Permissions to view a UDT in the Amazon Keyspaces Developer Guide.

```sql
SELECT
type
FROM aws.keyspaces.types
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_type"
    values={[
        { label: 'create_type', value: 'create_type' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_type">

The CreateType operation creates a new user-defined type in the specified keyspace. To configure the required permissions, see Permissions to create a UDT in the Amazon Keyspaces Developer Guide. For more information, see User-defined types (UDTs) in the Amazon Keyspaces Developer Guide.

```sql
INSERT INTO aws.keyspaces.types (
keyspaceName,
typeName,
fieldDefinitions,
region
)
SELECT 
'{{ keyspaceName }}' /* required */,
'{{ typeName }}' /* required */,
'{{ fieldDefinitions }}' /* required */,
'{{ region }}'
RETURNING
keyspace_arn,
type_name
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: types
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the types resource.
    - name: keyspaceName
      value: "{{ keyspaceName }}"
      description: |
        The name of the keyspace.
    - name: typeName
      value: "{{ typeName }}"
      description: |
        The name of the user-defined type. UDT names must contain 48 characters or less, must begin with an alphabetic character, and can only contain alpha-numeric characters and underscores. Amazon Keyspaces converts upper case characters automatically into lower case characters. Alternatively, you can declare a UDT name in double quotes. When declaring a UDT name inside double quotes, Amazon Keyspaces preserves upper casing and allows special characters. You can also use double quotes as part of the name when you create the UDT, but you must escape each double quote character with an additional double quote character.
    - name: fieldDefinitions
      description: |
        The field definitions, consisting of names and types, that define this type.
      value:
        - name: "{{ name }}"
          type_: "{{ type_ }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_type"
    values={[
        { label: 'delete_type', value: 'delete_type' }
    ]}
>
<TabItem value="delete_type">

The DeleteType operation deletes a user-defined type (UDT). You can only delete a type that is not used in a table or another UDT. To configure the required permissions, see Permissions to delete a UDT in the Amazon Keyspaces Developer Guide.

```sql
DELETE FROM aws.keyspaces.types
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
