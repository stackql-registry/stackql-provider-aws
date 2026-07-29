--- 
title: entities
hide_title: false
hide_table_of_contents: false
keywords:
  - entities
  - glue
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

Creates, updates, deletes, gets or lists an <code>entities</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="entities" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.glue.entities" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_entity"
    values={[
        { label: 'describe_entity', value: 'describe_entity' },
        { label: 'list_entities', value: 'list_entities' }
    ]}
>
<TabItem value="describe_entity">

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
    <td><CopyableCode code="custom_properties" /></td>
    <td><code>object</code></td>
    <td>Optional map of keys which may be returned.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the field.</td>
</tr>
<tr>
    <td><CopyableCode code="field_name" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the field.</td>
</tr>
<tr>
    <td><CopyableCode code="field_type" /></td>
    <td><code>string</code></td>
    <td>The type of data in the field. (INT, SMALLINT, BIGINT, FLOAT, LONG, DATE, BOOLEAN, MAP, ARRAY, STRING, TIMESTAMP, DECIMAL, BYTE, SHORT, DOUBLE, STRUCT, BINARY, UNION)</td>
</tr>
<tr>
    <td><CopyableCode code="is_createable" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether this field can be created as part of a destination write.</td>
</tr>
<tr>
    <td><CopyableCode code="is_default_on_create" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether this field is populated automatically when the object is created, such as a created at timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="is_filterable" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether this field can used in a filter clause (WHERE clause) of a SQL statement when querying data.</td>
</tr>
<tr>
    <td><CopyableCode code="is_nullable" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether this field can be nullable or not.</td>
</tr>
<tr>
    <td><CopyableCode code="is_partitionable" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether a given field can be used in partitioning the query made to SaaS.</td>
</tr>
<tr>
    <td><CopyableCode code="is_primary_key" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether this field can used as a primary key for the given entity.</td>
</tr>
<tr>
    <td><CopyableCode code="is_retrievable" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether this field can be added in Select clause of SQL query or whether it is retrievable or not.</td>
</tr>
<tr>
    <td><CopyableCode code="is_updateable" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether this field can be updated as part of a destination write.</td>
</tr>
<tr>
    <td><CopyableCode code="is_upsertable" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether this field can be upserted as part of a destination write.</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>A readable label used for the field.</td>
</tr>
<tr>
    <td><CopyableCode code="native_data_type" /></td>
    <td><code>string</code></td>
    <td>The data type returned by the SaaS API, such as “picklist” or “textarea” from Salesforce.</td>
</tr>
<tr>
    <td><CopyableCode code="parent_field" /></td>
    <td><code>string</code></td>
    <td>A parent field name for a nested field.</td>
</tr>
<tr>
    <td><CopyableCode code="supported_filter_operators" /></td>
    <td><code>array</code></td>
    <td>Indicates the support filter operators for this field.</td>
</tr>
<tr>
    <td><CopyableCode code="supported_values" /></td>
    <td><code>array</code></td>
    <td>A list of supported values for the field.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_entities">

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
    <td><CopyableCode code="category" /></td>
    <td><code>string</code></td>
    <td>The type of entities that are present in the response. This value depends on the source connection. For example this is SObjects for Salesforce and databases or schemas or tables for sources like Amazon Redshift.</td>
</tr>
<tr>
    <td><CopyableCode code="custom_properties" /></td>
    <td><code>object</code></td>
    <td>An optional map of keys which may be returned for an entity by a connector.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the entity.</td>
</tr>
<tr>
    <td><CopyableCode code="entity_name" /></td>
    <td><code>string</code></td>
    <td>The name of the entity.</td>
</tr>
<tr>
    <td><CopyableCode code="is_parent_entity" /></td>
    <td><code>boolean</code></td>
    <td>A Boolean value which helps to determine whether there are sub objects that can be listed.</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>Label used for the entity.</td>
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
    <td><a href="#describe_entity"><CopyableCode code="describe_entity" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides details regarding the entity used with the connection type, with a description of the data model for each field in the selected entity. The response includes all the fields which make up the entity.</td>
</tr>
<tr>
    <td><a href="#list_entities"><CopyableCode code="list_entities" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the available entities supported by the connection type.</td>
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
    defaultValue="describe_entity"
    values={[
        { label: 'describe_entity', value: 'describe_entity' },
        { label: 'list_entities', value: 'list_entities' }
    ]}
>
<TabItem value="describe_entity">

Provides details regarding the entity used with the connection type, with a description of the data model for each field in the selected entity. The response includes all the fields which make up the entity.

```sql
SELECT
custom_properties,
description,
field_name,
field_type,
is_createable,
is_default_on_create,
is_filterable,
is_nullable,
is_partitionable,
is_primary_key,
is_retrievable,
is_updateable,
is_upsertable,
label,
native_data_type,
parent_field,
supported_filter_operators,
supported_values
FROM aws.glue.entities
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_entities">

Returns the available entities supported by the connection type.

```sql
SELECT
category,
custom_properties,
description,
entity_name,
is_parent_entity,
label
FROM aws.glue.entities
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
