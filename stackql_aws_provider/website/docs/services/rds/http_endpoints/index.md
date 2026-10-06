--- 
title: http_endpoints
hide_title: false
hide_table_of_contents: false
keywords:
  - http_endpoints
  - rds
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

Creates, updates, deletes, gets or lists a <code>http_endpoints</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="http_endpoints" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.rds.http_endpoints" /></td></tr>
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
    <td><a href="#disable_http_endpoint"><CopyableCode code="disable_http_endpoint" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ResourceArn"><code>ResourceArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disables the HTTP endpoint for the specified DB cluster. Disabling this endpoint disables RDS Data API. For more information, see Using RDS Data API in the Amazon Aurora User Guide. This operation applies only to Aurora Serverless v2 and provisioned DB clusters. To disable the HTTP endpoint for Aurora Serverless v1 DB clusters, use the EnableHttpEndpoint parameter of the ModifyDBCluster operation.</td>
</tr>
<tr>
    <td><a href="#enable_http_endpoint"><CopyableCode code="enable_http_endpoint" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ResourceArn"><code>ResourceArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Enables the HTTP endpoint for the DB cluster. By default, the HTTP endpoint isn't enabled. When enabled, this endpoint provides a connectionless web service API (RDS Data API) for running SQL queries on the Aurora DB cluster. You can also query your database from inside the RDS console with the RDS query editor. For more information, see Using RDS Data API in the Amazon Aurora User Guide. This operation applies only to Aurora Serverless v2 and provisioned DB clusters. To enable the HTTP endpoint for Aurora Serverless v1 DB clusters, use the EnableHttpEndpoint parameter of the ModifyDBCluster operation.</td>
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
<tr id="parameter-ResourceArn">
    <td><CopyableCode code="ResourceArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the DB cluster.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="disable_http_endpoint"
    values={[
        { label: 'disable_http_endpoint', value: 'disable_http_endpoint' },
        { label: 'enable_http_endpoint', value: 'enable_http_endpoint' }
    ]}
>
<TabItem value="disable_http_endpoint">

Disables the HTTP endpoint for the specified DB cluster. Disabling this endpoint disables RDS Data API. For more information, see Using RDS Data API in the Amazon Aurora User Guide. This operation applies only to Aurora Serverless v2 and provisioned DB clusters. To disable the HTTP endpoint for Aurora Serverless v1 DB clusters, use the EnableHttpEndpoint parameter of the ModifyDBCluster operation.

```sql
EXEC aws.rds.http_endpoints.disable_http_endpoint 
@ResourceArn='{{ ResourceArn }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="enable_http_endpoint">

Enables the HTTP endpoint for the DB cluster. By default, the HTTP endpoint isn't enabled. When enabled, this endpoint provides a connectionless web service API (RDS Data API) for running SQL queries on the Aurora DB cluster. You can also query your database from inside the RDS console with the RDS query editor. For more information, see Using RDS Data API in the Amazon Aurora User Guide. This operation applies only to Aurora Serverless v2 and provisioned DB clusters. To enable the HTTP endpoint for Aurora Serverless v1 DB clusters, use the EnableHttpEndpoint parameter of the ModifyDBCluster operation.

```sql
EXEC aws.rds.http_endpoints.enable_http_endpoint 
@ResourceArn='{{ ResourceArn }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
