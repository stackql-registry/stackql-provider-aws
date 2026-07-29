--- 
title: schemas
hide_title: false
hide_table_of_contents: false
keywords:
  - schemas
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

Creates, updates, deletes, gets or lists a <code>schemas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="schemas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.schemas.schemas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_schema"
    values={[
        { label: 'describe_schema', value: 'describe_schema' },
        { label: 'search_schemas', value: 'search_schemas' },
        { label: 'list_schemas', value: 'list_schemas' }
    ]}
>
<TabItem value="describe_schema">

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
    <td><CopyableCode code="content" /></td>
    <td><code>string</code></td>
    <td>The source of the schema definition.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the schema.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that schema was modified.</td>
</tr>
<tr>
    <td><CopyableCode code="schema_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the schema.</td>
</tr>
<tr>
    <td><CopyableCode code="schema_name" /></td>
    <td><code>string</code></td>
    <td>The name of the schema.</td>
</tr>
<tr>
    <td><CopyableCode code="schema_version" /></td>
    <td><code>string</code></td>
    <td>The version number of the schema</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Tags associated with the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the schema.</td>
</tr>
<tr>
    <td><CopyableCode code="version_created_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the schema version was created.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="search_schemas">

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
    <td><CopyableCode code="registry_name" /></td>
    <td><code>string</code></td>
    <td>The name of the registry.</td>
</tr>
<tr>
    <td><CopyableCode code="schema_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the schema.</td>
</tr>
<tr>
    <td><CopyableCode code="schema_name" /></td>
    <td><code>string</code></td>
    <td>The name of the schema.</td>
</tr>
<tr>
    <td><CopyableCode code="schema_versions" /></td>
    <td><code>array</code></td>
    <td>An array of schema version summaries.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_schemas">

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
    <td><CopyableCode code="last_modified" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that schema was modified.</td>
</tr>
<tr>
    <td><CopyableCode code="schema_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the schema.</td>
</tr>
<tr>
    <td><CopyableCode code="schema_name" /></td>
    <td><code>string</code></td>
    <td>The name of the schema.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Tags associated with the schema.</td>
</tr>
<tr>
    <td><CopyableCode code="version_count" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of versions available for the schema.</td>
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
    <td><a href="#describe_schema"><CopyableCode code="describe_schema" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-registry_name"><code>registry_name</code></a>, <a href="#parameter-schema_name"><code>schema_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-schemaVersion"><code>schemaVersion</code></a></td>
    <td>Retrieve the schema definition.</td>
</tr>
<tr>
    <td><a href="#search_schemas"><CopyableCode code="search_schemas" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-keywords"><code>keywords</code></a>, <a href="#parameter-registry_name"><code>registry_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Search the schemas</td>
</tr>
<tr>
    <td><a href="#list_schemas"><CopyableCode code="list_schemas" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-registry_name"><code>registry_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-schemaNamePrefix"><code>schemaNamePrefix</code></a></td>
    <td>List the schemas.</td>
</tr>
<tr>
    <td><a href="#create_schema"><CopyableCode code="create_schema" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-registry_name"><code>registry_name</code></a>, <a href="#parameter-schema_name"><code>schema_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a schema definition. Inactive schemas will be deleted after two years.</td>
</tr>
<tr>
    <td><a href="#update_schema"><CopyableCode code="update_schema" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-registry_name"><code>registry_name</code></a>, <a href="#parameter-schema_name"><code>schema_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the schema definition Inactive schemas will be deleted after two years.</td>
</tr>
<tr>
    <td><a href="#delete_schema"><CopyableCode code="delete_schema" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-registry_name"><code>registry_name</code></a>, <a href="#parameter-schema_name"><code>schema_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete a schema definition.</td>
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
<tr id="parameter-keywords">
    <td><CopyableCode code="keywords" /></td>
    <td><code>string</code></td>
    <td>Specifying this limits the results to only schemas that include the provided keywords.</td>
</tr>
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
<tr id="parameter-schemaNamePrefix">
    <td><CopyableCode code="schemaNamePrefix" /></td>
    <td><code>string</code></td>
    <td>Specifying this limits the results to only those schema names that start with the specified prefix.</td>
</tr>
<tr id="parameter-schemaVersion">
    <td><CopyableCode code="schemaVersion" /></td>
    <td><code>string</code></td>
    <td>Specifying this limits the results to only this schema version.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_schema"
    values={[
        { label: 'describe_schema', value: 'describe_schema' },
        { label: 'search_schemas', value: 'search_schemas' },
        { label: 'list_schemas', value: 'list_schemas' }
    ]}
>
<TabItem value="describe_schema">

Retrieve the schema definition.

```sql
SELECT
content,
description,
last_modified,
schema_arn,
schema_name,
schema_version,
tags,
type,
version_created_date
FROM aws.schemas.schemas
WHERE registry_name = '{{ registry_name }}' -- required
AND schema_name = '{{ schema_name }}' -- required
AND region = '{{ region }}' -- required
AND schemaVersion = '{{ schemaVersion }}'
;
```
</TabItem>
<TabItem value="search_schemas">

Search the schemas

```sql
SELECT
registry_name,
schema_arn,
schema_name,
schema_versions
FROM aws.schemas.schemas
WHERE keywords = '{{ keywords }}' -- required
AND registry_name = '{{ registry_name }}' -- required
AND region = '{{ region }}' -- required
AND limit = '{{ limit }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
<TabItem value="list_schemas">

List the schemas.

```sql
SELECT
last_modified,
schema_arn,
schema_name,
tags,
version_count
FROM aws.schemas.schemas
WHERE registry_name = '{{ registry_name }}' -- required
AND region = '{{ region }}' -- required
AND limit = '{{ limit }}'
AND nextToken = '{{ nextToken }}'
AND schemaNamePrefix = '{{ schemaNamePrefix }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_schema"
    values={[
        { label: 'create_schema', value: 'create_schema' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_schema">

Creates a schema definition. Inactive schemas will be deleted after two years.

```sql
INSERT INTO aws.schemas.schemas (
Content,
Description,
Tags,
Type,
registry_name,
schema_name,
region
)
SELECT 
'{{ Content }}',
'{{ Description }}',
'{{ Tags }}',
'{{ Type }}',
'{{ registry_name }}',
'{{ schema_name }}',
'{{ region }}'
RETURNING
description,
last_modified,
schema_arn,
schema_name,
schema_version,
tags,
type,
version_created_date
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: schemas
  props:
    - name: registry_name
      value: "{{ registry_name }}"
      description: Required parameter for the schemas resource.
    - name: schema_name
      value: "{{ schema_name }}"
      description: Required parameter for the schemas resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the schemas resource.
    - name: Content
      value: "{{ Content }}"
    - name: Description
      value: "{{ Description }}"
    - name: Tags
      value: "{{ Tags }}"
      description: |
        Key-value pairs associated with a resource.
    - name: Type
      value: "{{ Type }}"
      valid_values: ['OpenApi3', 'JSONSchemaDraft4']
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

Updates the schema definition Inactive schemas will be deleted after two years.

```sql
UPDATE aws.schemas.schemas
SET 
ClientTokenId = '{{ ClientTokenId }}',
Content = '{{ Content }}',
Description = '{{ Description }}',
Type = '{{ Type }}'
WHERE 
registry_name = '{{ registry_name }}' --required
AND schema_name = '{{ schema_name }}' --required
AND region = '{{ region }}' --required
RETURNING
description,
last_modified,
schema_arn,
schema_name,
schema_version,
tags,
type,
version_created_date;
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

Delete a schema definition.

```sql
DELETE FROM aws.schemas.schemas
WHERE registry_name = '{{ registry_name }}' --required
AND schema_name = '{{ schema_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
