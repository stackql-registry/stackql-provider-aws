--- 
title: schema_mappings
hide_title: false
hide_table_of_contents: false
keywords:
  - schema_mappings
  - entityresolution
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

Creates, updates, deletes, gets or lists a <code>schema_mappings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="schema_mappings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.entityresolution.schema_mappings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_schema_mapping"
    values={[
        { label: 'get_schema_mapping', value: 'get_schema_mapping' },
        { label: 'list_schema_mappings', value: 'list_schema_mappings' }
    ]}
>
<TabItem value="get_schema_mapping">

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
    <td>The timestamp of when the SchemaMapping was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the schema.</td>
</tr>
<tr>
    <td><CopyableCode code="has_workflows" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the schema mapping has been applied to a workflow.</td>
</tr>
<tr>
    <td><CopyableCode code="mapped_input_fields" /></td>
    <td><code>array</code></td>
    <td>A list of MappedInputFields. Each MappedInputField corresponds to a column the source data table, and contains column name plus additional information Entity Resolution uses for matching.</td>
</tr>
<tr>
    <td><CopyableCode code="schema_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN (Amazon Resource Name) that Entity Resolution generated for the SchemaMapping. (pattern: &lt;code&gt;arn:(aws|aws-us-gov|aws-cn):entityresolution:&#91;a-z&#93;&#123;2&#125;-&#91;a-z&#93;&#123;1,10&#125;-&#91;0-9&#93;:&#91;0-9&#93;&#123;12&#125;:(schemamapping/&#91;a-zA-Z_0-9-&#93;&#123;1,255&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="schema_name" /></td>
    <td><code>string</code></td>
    <td>The name of the schema. (pattern: &lt;code&gt;&#91;a-zA-Z_0-9-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags used to organize, track, or control access for this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the SchemaMapping was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_schema_mappings">

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
    <td>The timestamp of when the SchemaMapping was created.</td>
</tr>
<tr>
    <td><CopyableCode code="has_workflows" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the schema mapping has been applied to a workflow.</td>
</tr>
<tr>
    <td><CopyableCode code="schema_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN (Amazon Resource Name) that Entity Resolution generated for the SchemaMapping. (pattern: &lt;code&gt;arn:(aws|aws-us-gov|aws-cn):entityresolution:&#91;a-z&#93;&#123;2&#125;-&#91;a-z&#93;&#123;1,10&#125;-&#91;0-9&#93;:&#91;0-9&#93;&#123;12&#125;:(schemamapping/&#91;a-zA-Z_0-9-&#93;&#123;1,255&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="schema_name" /></td>
    <td><code>string</code></td>
    <td>The name of the schema. (pattern: &lt;code&gt;&#91;a-zA-Z_0-9-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the SchemaMapping was last updated.</td>
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
    <td><a href="#get_schema_mapping"><CopyableCode code="get_schema_mapping" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-schema_name"><code>schema_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the SchemaMapping of a given name.</td>
</tr>
<tr>
    <td><a href="#list_schema_mappings"><CopyableCode code="list_schema_mappings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Returns a list of all the SchemaMappings that have been created for an Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#create_schema_mapping"><CopyableCode code="create_schema_mapping" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-schemaName"><code>schemaName</code></a>, <a href="#parameter-mappedInputFields"><code>mappedInputFields</code></a></td>
    <td></td>
    <td>Creates a schema mapping, which defines the schema of the input customer records table. The SchemaMapping also provides Entity Resolution with some metadata about the table, such as the attribute types of the columns and which columns to match on.</td>
</tr>
<tr>
    <td><a href="#update_schema_mapping"><CopyableCode code="update_schema_mapping" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-schema_name"><code>schema_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-mappedInputFields"><code>mappedInputFields</code></a></td>
    <td></td>
    <td>Updates a schema mapping. A schema is immutable if it is being used by a workflow. Therefore, you can't update a schema mapping if it's associated with a workflow.</td>
</tr>
<tr>
    <td><a href="#delete_schema_mapping"><CopyableCode code="delete_schema_mapping" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-schema_name"><code>schema_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the SchemaMapping with a given name. This operation will succeed even if a schema with the given name does not exist. This operation will fail if there is a MatchingWorkflow object that references the SchemaMapping in the workflow's InputSourceConfig.</td>
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
<tr id="parameter-schema_name">
    <td><CopyableCode code="schema_name" /></td>
    <td><code>string</code></td>
    <td>The name of the schema to delete.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of objects returned per page.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token from the previous API call.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_schema_mapping"
    values={[
        { label: 'get_schema_mapping', value: 'get_schema_mapping' },
        { label: 'list_schema_mappings', value: 'list_schema_mappings' }
    ]}
>
<TabItem value="get_schema_mapping">

Returns the SchemaMapping of a given name.

```sql
SELECT
created_at,
description,
has_workflows,
mapped_input_fields,
schema_arn,
schema_name,
tags,
updated_at
FROM aws.entityresolution.schema_mappings
WHERE schema_name = '{{ schema_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_schema_mappings">

Returns a list of all the SchemaMappings that have been created for an Amazon Web Services account.

```sql
SELECT
created_at,
has_workflows,
schema_arn,
schema_name,
updated_at
FROM aws.entityresolution.schema_mappings
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_schema_mapping"
    values={[
        { label: 'create_schema_mapping', value: 'create_schema_mapping' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_schema_mapping">

Creates a schema mapping, which defines the schema of the input customer records table. The SchemaMapping also provides Entity Resolution with some metadata about the table, such as the attribute types of the columns and which columns to match on.

```sql
INSERT INTO aws.entityresolution.schema_mappings (
schemaName,
description,
mappedInputFields,
tags,
region
)
SELECT 
'{{ schemaName }}' /* required */,
'{{ description }}',
'{{ mappedInputFields }}' /* required */,
'{{ tags }}',
'{{ region }}'
RETURNING
description,
mapped_input_fields,
schema_arn,
schema_name
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: schema_mappings
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the schema_mappings resource.
    - name: schemaName
      value: "{{ schemaName }}"
    - name: description
      value: "{{ description }}"
    - name: mappedInputFields
      value:
        - fieldName: "{{ fieldName }}"
          type_: "{{ type_ }}"
          groupName: "{{ groupName }}"
          matchKey: "{{ matchKey }}"
          subType: "{{ subType }}"
          hashed: {{ hashed }}
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_schema_mapping"
    values={[
        { label: 'update_schema_mapping', value: 'update_schema_mapping' }
    ]}
>
<TabItem value="update_schema_mapping">

Updates a schema mapping. A schema is immutable if it is being used by a workflow. Therefore, you can't update a schema mapping if it's associated with a workflow.

```sql
UPDATE aws.entityresolution.schema_mappings
SET 
description = '{{ description }}',
mappedInputFields = '{{ mappedInputFields }}'
WHERE 
schema_name = '{{ schema_name }}' --required
AND region = '{{ region }}' --required
AND mappedInputFields = '{{ mappedInputFields }}' --required
RETURNING
description,
mapped_input_fields,
schema_arn,
schema_name;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_schema_mapping"
    values={[
        { label: 'delete_schema_mapping', value: 'delete_schema_mapping' }
    ]}
>
<TabItem value="delete_schema_mapping">

Deletes the SchemaMapping with a given name. This operation will succeed even if a schema with the given name does not exist. This operation will fail if there is a MatchingWorkflow object that references the SchemaMapping in the workflow's InputSourceConfig.

```sql
DELETE FROM aws.entityresolution.schema_mappings
WHERE schema_name = '{{ schema_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
