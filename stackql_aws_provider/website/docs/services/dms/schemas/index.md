--- 
title: schemas
hide_title: false
hide_table_of_contents: false
keywords:
  - schemas
  - dms
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.dms.schemas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_schemas"
    values={[
        { label: 'describe_schemas', value: 'describe_schemas' }
    ]}
>
<TabItem value="describe_schemas">

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
    <td><CopyableCode code="schema" /></td>
    <td><code>string</code></td>
    <td>The described schema.</td>
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
    <td><a href="#describe_schemas"><CopyableCode code="describe_schemas" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the schema for the specified endpoint.</td>
</tr>
<tr>
    <td><a href="#refresh_schemas"><CopyableCode code="refresh_schemas" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-EndpointArn"><code>EndpointArn</code></a>, <a href="#parameter-ReplicationInstanceArn"><code>ReplicationInstanceArn</code></a></td>
    <td></td>
    <td>Populates the schema for the specified endpoint. This is an asynchronous operation and can take several minutes. You can check the status of this operation by calling the DescribeRefreshSchemasStatus operation.</td>
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
    defaultValue="describe_schemas"
    values={[
        { label: 'describe_schemas', value: 'describe_schemas' }
    ]}
>
<TabItem value="describe_schemas">

Returns information about the schema for the specified endpoint.

```sql
SELECT
schema
FROM aws.dms.schemas
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="refresh_schemas"
    values={[
        { label: 'refresh_schemas', value: 'refresh_schemas' }
    ]}
>
<TabItem value="refresh_schemas">

Populates the schema for the specified endpoint. This is an asynchronous operation and can take several minutes. You can check the status of this operation by calling the DescribeRefreshSchemasStatus operation.

```sql
EXEC aws.dms.schemas.refresh_schemas 
@region='{{ region }}' --required 
@@json=
'{
"EndpointArn": "{{ EndpointArn }}", 
"ReplicationInstanceArn": "{{ ReplicationInstanceArn }}"
}'
;
```
</TabItem>
</Tabs>
