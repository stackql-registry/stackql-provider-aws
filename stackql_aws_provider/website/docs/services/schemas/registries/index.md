--- 
title: registries
hide_title: false
hide_table_of_contents: false
keywords:
  - registries
  - schemas
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

Creates, updates, deletes, gets or lists a <code>registries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="registries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.schemas.registries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_registry"
    values={[
        { label: 'describe_registry', value: 'describe_registry' },
        { label: 'list_registries', value: 'list_registries' }
    ]}
>
<TabItem value="describe_registry">

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
    <td>The description of the registry.</td>
</tr>
<tr>
    <td><CopyableCode code="registry_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the registry.</td>
</tr>
<tr>
    <td><CopyableCode code="registry_name" /></td>
    <td><code>string</code></td>
    <td>The name of the registry.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Tags associated with the registry.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_registries">

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
    <td><CopyableCode code="registry_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the registry.</td>
</tr>
<tr>
    <td><CopyableCode code="registry_name" /></td>
    <td><code>string</code></td>
    <td>The name of the registry.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Tags associated with the registry.</td>
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
    <td><a href="#describe_registry"><CopyableCode code="describe_registry" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-registry_name"><code>registry_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the registry.</td>
</tr>
<tr>
    <td><a href="#list_registries"><CopyableCode code="list_registries" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-registryNamePrefix"><code>registryNamePrefix</code></a>, <a href="#parameter-scope"><code>scope</code></a></td>
    <td>List the registries.</td>
</tr>
<tr>
    <td><a href="#create_registry"><CopyableCode code="create_registry" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-registry_name"><code>registry_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a registry.</td>
</tr>
<tr>
    <td><a href="#update_registry"><CopyableCode code="update_registry" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-registry_name"><code>registry_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a registry.</td>
</tr>
<tr>
    <td><a href="#delete_registry"><CopyableCode code="delete_registry" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-registry_name"><code>registry_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a Registry.</td>
</tr>
<tr>
    <td><a href="#export_schema"><CopyableCode code="export_schema" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-registry_name"><code>registry_name</code></a>, <a href="#parameter-schema_name"><code>schema_name</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-schemaVersion"><code>schemaVersion</code></a></td>
    <td></td>
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
<tr id="parameter-registry_name">
    <td><CopyableCode code="registry_name" /></td>
    <td><code>string</code></td>
    <td>The name of the registry.</td>
</tr>
<tr id="parameter-schema_name">
    <td><CopyableCode code="schema_name" /></td>
    <td><code>string</code></td>
    <td>The name of the schema.</td>
</tr>
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.</td>
</tr>
<tr id="parameter-registryNamePrefix">
    <td><CopyableCode code="registryNamePrefix" /></td>
    <td><code>string</code></td>
    <td>Specifying this limits the results to only those registry names that start with the specified prefix.</td>
</tr>
<tr id="parameter-schemaVersion">
    <td><CopyableCode code="schemaVersion" /></td>
    <td><code>string</code></td>
    <td>Specifying this limits the results to only this schema version.</td>
</tr>
<tr id="parameter-scope">
    <td><CopyableCode code="scope" /></td>
    <td><code>string</code></td>
    <td>Can be set to Local or AWS to limit responses to your custom registries, or the ones provided by AWS.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_registry"
    values={[
        { label: 'describe_registry', value: 'describe_registry' },
        { label: 'list_registries', value: 'list_registries' }
    ]}
>
<TabItem value="describe_registry">

Describes the registry.

```sql
SELECT
description,
registry_arn,
registry_name,
tags
FROM aws.schemas.registries
WHERE registry_name = '{{ registry_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_registries">

List the registries.

```sql
SELECT
registry_arn,
registry_name,
tags
FROM aws.schemas.registries
WHERE region = '{{ region }}' -- required
AND limit = '{{ limit }}'
AND nextToken = '{{ nextToken }}'
AND registryNamePrefix = '{{ registryNamePrefix }}'
AND scope = '{{ scope }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_registry"
    values={[
        { label: 'create_registry', value: 'create_registry' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_registry">

Creates a registry.

```sql
INSERT INTO aws.schemas.registries (
Description,
Tags,
registry_name,
region
)
SELECT 
'{{ Description }}',
'{{ Tags }}',
'{{ registry_name }}',
'{{ region }}'
RETURNING
description,
registry_arn,
registry_name,
tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: registries
  props:
    - name: registry_name
      value: "{{ registry_name }}"
      description: Required parameter for the registries resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the registries resource.
    - name: Description
      value: "{{ Description }}"
    - name: Tags
      value: "{{ Tags }}"
      description: |
        Key-value pairs associated with a resource.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_registry"
    values={[
        { label: 'update_registry', value: 'update_registry' }
    ]}
>
<TabItem value="update_registry">

Updates a registry.

```sql
UPDATE aws.schemas.registries
SET 
Description = '{{ Description }}'
WHERE 
registry_name = '{{ registry_name }}' --required
AND region = '{{ region }}' --required
RETURNING
description,
registry_arn,
registry_name,
tags;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_registry"
    values={[
        { label: 'delete_registry', value: 'delete_registry' }
    ]}
>
<TabItem value="delete_registry">

Deletes a Registry.

```sql
DELETE FROM aws.schemas.registries
WHERE registry_name = '{{ registry_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="export_schema"
    values={[
        { label: 'export_schema', value: 'export_schema' }
    ]}
>
<TabItem value="export_schema">

Success

```sql
EXEC aws.schemas.registries.export_schema 
@registry_name='{{ registry_name }}' --required, 
@schema_name='{{ schema_name }}' --required, 
@type='{{ type }}' --required, 
@region='{{ region }}' --required, 
@schemaVersion='{{ schemaVersion }}'
;
```
</TabItem>
</Tabs>
