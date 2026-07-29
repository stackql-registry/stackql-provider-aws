--- 
title: schemas
hide_title: false
hide_table_of_contents: false
keywords:
  - schemas
  - personalize
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.personalize.schemas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_schema"
    values={[
        { label: 'describe_schema', value: 'describe_schema' },
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the schema. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9\-_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time (in Unix time) that the schema was created.</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>The domain of a schema that you created for a dataset in a Domain dataset group. (ECOMMERCE, VIDEO_ON_DEMAND)</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time (in Unix time) that the schema was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="schema" /></td>
    <td><code>string</code></td>
    <td>The schema.</td>
</tr>
<tr>
    <td><CopyableCode code="schema_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the schema. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):personalize:.*:.*:.+&lt;/code&gt;)</td>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the schema. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9\-_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time (in Unix time) that the schema was created.</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>The domain of a schema that you created for a dataset in a Domain dataset group. (ECOMMERCE, VIDEO_ON_DEMAND)</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time (in Unix time) that the schema was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="schema_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the schema. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):personalize:.*:.*:.+&lt;/code&gt;)</td>
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
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes a schema. For more information on schemas, see CreateSchema.</td>
</tr>
<tr>
    <td><a href="#list_schemas"><CopyableCode code="list_schemas" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the list of schemas associated with the account. The response provides the properties for each schema, including the Amazon Resource Name (ARN). For more information on schemas, see CreateSchema.</td>
</tr>
<tr>
    <td><a href="#create_schema"><CopyableCode code="create_schema" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-schema"><code>schema</code></a></td>
    <td></td>
    <td>Creates an Amazon Personalize schema from the specified schema string. The schema you create must be in Avro JSON format. Amazon Personalize recognizes three schema variants. Each schema is associated with a dataset type and has a set of required field and keywords. If you are creating a schema for a dataset in a Domain dataset group, you provide the domain of the Domain dataset group. You specify a schema when you call CreateDataset. Related APIs ListSchemas DescribeSchema DeleteSchema</td>
</tr>
<tr>
    <td><a href="#delete_schema"><CopyableCode code="delete_schema" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a schema. Before deleting a schema, you must delete all datasets referencing the schema. For more information on schemas, see CreateSchema.</td>
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
    defaultValue="describe_schema"
    values={[
        { label: 'describe_schema', value: 'describe_schema' },
        { label: 'list_schemas', value: 'list_schemas' }
    ]}
>
<TabItem value="describe_schema">

Describes a schema. For more information on schemas, see CreateSchema.

```sql
SELECT
name,
creation_date_time,
domain,
last_updated_date_time,
schema,
schema_arn
FROM aws.personalize.schemas
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_schemas">

Returns the list of schemas associated with the account. The response provides the properties for each schema, including the Amazon Resource Name (ARN). For more information on schemas, see CreateSchema.

```sql
SELECT
name,
creation_date_time,
domain,
last_updated_date_time,
schema_arn
FROM aws.personalize.schemas
WHERE region = '{{ region }}' -- required
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

Creates an Amazon Personalize schema from the specified schema string. The schema you create must be in Avro JSON format. Amazon Personalize recognizes three schema variants. Each schema is associated with a dataset type and has a set of required field and keywords. If you are creating a schema for a dataset in a Domain dataset group, you provide the domain of the Domain dataset group. You specify a schema when you call CreateDataset. Related APIs ListSchemas DescribeSchema DeleteSchema

```sql
INSERT INTO aws.personalize.schemas (
name,
schema,
domain,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ schema }}' /* required */,
'{{ domain }}',
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
    - name: name
      value: "{{ name }}"
      description: |
        The name for the schema.
    - name: schema
      value: "{{ schema }}"
      description: |
        A schema in Avro JSON format.
    - name: domain
      value: "{{ domain }}"
      description: |
        The domain for the schema. If you are creating a schema for a dataset in a Domain dataset group, specify the domain you chose when you created the Domain dataset group.
      valid_values: ['ECOMMERCE', 'VIDEO_ON_DEMAND']
`}</CodeBlock>

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

Deletes a schema. Before deleting a schema, you must delete all datasets referencing the schema. For more information on schemas, see CreateSchema.

```sql
DELETE FROM aws.personalize.schemas
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
