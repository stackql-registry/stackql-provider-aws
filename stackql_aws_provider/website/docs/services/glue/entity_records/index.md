--- 
title: entity_records
hide_title: false
hide_table_of_contents: false
keywords:
  - entity_records
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

Creates, updates, deletes, gets or lists an <code>entity_records</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="entity_records" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.glue.entity_records" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_entity_records"
    values={[
        { label: 'get_entity_records', value: 'get_entity_records' }
    ]}
>
<TabItem value="get_entity_records">

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
    <td><CopyableCode code="record" /></td>
    <td><code>object</code></td>
    <td>A list of the requested objects.</td>
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
    <td><a href="#get_entity_records"><CopyableCode code="get_entity_records" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API is used to query preview data from a given connection type or from a native Amazon S3 based Glue Data Catalog. Returns records as an array of JSON blobs. Each record is formatted using Jackson JsonNode based on the field type defined by the DescribeEntity API. Spark connectors generate schemas according to the same data type mapping as in the DescribeEntity API. Spark connectors convert data to the appropriate data types matching the schema when returning rows.</td>
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
    defaultValue="get_entity_records"
    values={[
        { label: 'get_entity_records', value: 'get_entity_records' }
    ]}
>
<TabItem value="get_entity_records">

This API is used to query preview data from a given connection type or from a native Amazon S3 based Glue Data Catalog. Returns records as an array of JSON blobs. Each record is formatted using Jackson JsonNode based on the field type defined by the DescribeEntity API. Spark connectors generate schemas according to the same data type mapping as in the DescribeEntity API. Spark connectors convert data to the appropriate data types matching the schema when returning rows.

```sql
SELECT
record
FROM aws.glue.entity_records
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
