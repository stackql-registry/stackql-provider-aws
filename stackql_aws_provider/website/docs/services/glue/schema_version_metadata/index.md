--- 
title: schema_version_metadata
hide_title: false
hide_table_of_contents: false
keywords:
  - schema_version_metadata
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

Creates, updates, deletes, gets or lists a <code>schema_version_metadata</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="schema_version_metadata" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.glue.schema_version_metadata" /></td></tr>
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
    <td><a href="#query_schema_version_metadata"><CopyableCode code="query_schema_version_metadata" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Queries for the schema version metadata information.</td>
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

## Lifecycle Methods

<Tabs
    defaultValue="query_schema_version_metadata"
    values={[
        { label: 'query_schema_version_metadata', value: 'query_schema_version_metadata' }
    ]}
>
<TabItem value="query_schema_version_metadata">

Queries for the schema version metadata information.

```sql
EXEC aws.glue.schema_version_metadata.query_schema_version_metadata 
@region='{{ region }}' --required 
@@json=
'{
"SchemaId": "{{ SchemaId }}", 
"SchemaVersionNumber": "{{ SchemaVersionNumber }}", 
"SchemaVersionId": "{{ SchemaVersionId }}", 
"MetadataList": "{{ MetadataList }}", 
"MaxResults": {{ MaxResults }}, 
"NextToken": "{{ NextToken }}"
}'
;
```
</TabItem>
</Tabs>
