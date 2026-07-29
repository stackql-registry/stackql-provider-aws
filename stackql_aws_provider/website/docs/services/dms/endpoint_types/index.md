--- 
title: endpoint_types
hide_title: false
hide_table_of_contents: false
keywords:
  - endpoint_types
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

Creates, updates, deletes, gets or lists an <code>endpoint_types</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="endpoint_types" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.dms.endpoint_types" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_endpoint_types"
    values={[
        { label: 'describe_endpoint_types', value: 'describe_endpoint_types' }
    ]}
>
<TabItem value="describe_endpoint_types">

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
    <td><CopyableCode code="endpoint_type" /></td>
    <td><code>string</code></td>
    <td>The type of endpoint. Valid values are source and target. (source, target)</td>
</tr>
<tr>
    <td><CopyableCode code="engine_display_name" /></td>
    <td><code>string</code></td>
    <td>The expanded name for the engine name. For example, if the EngineName parameter is "aurora", this value would be "Amazon Aurora MySQL".</td>
</tr>
<tr>
    <td><CopyableCode code="engine_name" /></td>
    <td><code>string</code></td>
    <td>The database engine name. Valid values, depending on the EndpointType, include "mysql", "oracle", "postgres", "mariadb", "aurora", "aurora-postgresql", "redshift", "s3", "db2", "db2-zos", "azuredb", "sybase", "dynamodb", "mongodb", "kinesis", "kafka", "elasticsearch", "documentdb", "sqlserver", "neptune", and "babelfish".</td>
</tr>
<tr>
    <td><CopyableCode code="replication_instance_engine_minimum_version" /></td>
    <td><code>string</code></td>
    <td>The earliest DMS engine version that supports this endpoint engine. Note that endpoint engines released with DMS versions earlier than 3.1.1 do not return a value for this parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="supports_cdc" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if change data capture (CDC) is supported.</td>
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
    <td><a href="#describe_endpoint_types"><CopyableCode code="describe_endpoint_types" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the type of endpoints available.</td>
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
    defaultValue="describe_endpoint_types"
    values={[
        { label: 'describe_endpoint_types', value: 'describe_endpoint_types' }
    ]}
>
<TabItem value="describe_endpoint_types">

Returns information about the type of endpoints available.

```sql
SELECT
endpoint_type,
engine_display_name,
engine_name,
replication_instance_engine_minimum_version,
supports_cdc
FROM aws.dms.endpoint_types
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
