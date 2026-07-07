--- 
title: vpc_endpoint_service_names
hide_title: false
hide_table_of_contents: false
keywords:
  - vpc_endpoint_service_names
  - dsql
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

Creates, updates, deletes, gets or lists a <code>vpc_endpoint_service_names</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="vpc_endpoint_service_names" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.dsql.vpc_endpoint_service_names" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_vpc_endpoint_service_name"
    values={[
        { label: 'get_vpc_endpoint_service_name', value: 'get_vpc_endpoint_service_name' }
    ]}
>
<TabItem value="get_vpc_endpoint_service_name">

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
    <td><CopyableCode code="clusterVpcEndpoint" /></td>
    <td><code>string</code></td>
    <td>The VPC connection endpoint for the cluster. (pattern: &lt;code&gt;&#91;a-zA-Z0-9.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="serviceName" /></td>
    <td><code>string</code></td>
    <td>The VPC endpoint service name. (pattern: &lt;code&gt;com\.amazonaws\.&#91;a-z0-9-&#93;+\.dsql-&#91;a-f0-9&#93;&#123;6&#125;&lt;/code&gt;)</td>
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
    <td><a href="#get_vpc_endpoint_service_name"><CopyableCode code="get_vpc_endpoint_service_name" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the VPC endpoint service name.</td>
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
<tr id="parameter-identifier">
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the cluster to retrieve.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_vpc_endpoint_service_name"
    values={[
        { label: 'get_vpc_endpoint_service_name', value: 'get_vpc_endpoint_service_name' }
    ]}
>
<TabItem value="get_vpc_endpoint_service_name">

Retrieves the VPC endpoint service name.

```sql
SELECT
clusterVpcEndpoint,
serviceName
FROM aws.dsql.vpc_endpoint_service_names
WHERE identifier = '{{ identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
