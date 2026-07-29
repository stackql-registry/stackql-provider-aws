--- 
title: schemas
hide_title: false
hide_table_of_contents: false
keywords:
  - schemas
  - clouddirectory
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

Creates, updates, deletes, gets or lists a <code>schemas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="schemas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.clouddirectory.schemas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#create_schema"><CopyableCode code="create_schema" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Name"><code>Name</code></a></td>
    <td></td>
    <td>Creates a new schema in a development state. A schema can exist in three phases: Development: This is a mutable phase of the schema. All new schemas are in the development phase. Once the schema is finalized, it can be published. Published: Published schemas are immutable and have a version associated with them. Applied: Applied schemas are mutable in a way that allows you to add new schema facets. You can also add new, nonrequired attributes to existing schema facets. You can apply only published schemas to directories.</td>
</tr>
<tr>
    <td><a href="#update_schema"><CopyableCode code="update_schema" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-x-amz-data-partition"><code>x-amz-data-partition</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Name"><code>Name</code></a></td>
    <td></td>
    <td>Updates the schema name with a new name. Only development schema names can be updated.</td>
</tr>
<tr>
    <td><a href="#delete_schema"><CopyableCode code="delete_schema" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-x-amz-data-partition"><code>x-amz-data-partition</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a given schema. Schemas in a development and published state can only be deleted.</td>
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
<tr id="parameter-x-amz-data-partition">
    <td><CopyableCode code="x-amz-data-partition" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the development schema. For more information, see arns.</td>
</tr>
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="create_schema"
    values={[
        { label: 'create_schema', value: 'create_schema' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_schema">

Creates a new schema in a development state. A schema can exist in three phases: Development: This is a mutable phase of the schema. All new schemas are in the development phase. Once the schema is finalized, it can be published. Published: Published schemas are immutable and have a version associated with them. Applied: Applied schemas are mutable in a way that allows you to add new schema facets. You can also add new, nonrequired attributes to existing schema facets. You can apply only published schemas to directories.

```sql
INSERT INTO aws.clouddirectory.schemas (
Name,
region
)
SELECT 
'{{ Name }}' /* required */,
'{{ region }}'
RETURNING
schema_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: schemas
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the schemas resource.
    - name: Name
      value: "{{ Name }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_schema"
    values={[
        { label: 'update_schema', value: 'update_schema' }
    ]}
>
<TabItem value="update_schema">

Updates the schema name with a new name. Only development schema names can be updated.

```sql
UPDATE aws.clouddirectory.schemas
SET 
Name = '{{ Name }}'
WHERE 
`x-amz-data-partition` = '{{ x-amz-data-partition }}' --required
AND region = '{{ region }}' --required
AND Name = '{{ Name }}' --required
RETURNING
schema_arn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_schema"
    values={[
        { label: 'delete_schema', value: 'delete_schema' }
    ]}
>
<TabItem value="delete_schema">

Deletes a given schema. Schemas in a development and published state can only be deleted.

```sql
DELETE FROM aws.clouddirectory.schemas
WHERE `x-amz-data-partition` = '{{ x-amz-data-partition }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
