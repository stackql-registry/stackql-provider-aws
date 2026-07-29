--- 
title: ssl_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - ssl_policies
  - elbv2
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

Creates, updates, deletes, gets or lists a <code>ssl_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ssl_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.elbv2.ssl_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_ssl_policies"
    values={[
        { label: 'describe_ssl_policies', value: 'describe_ssl_policies' }
    ]}
>
<TabItem value="describe_ssl_policies">

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
    <td><CopyableCode code="ciphers" /></td>
    <td><code>string</code></td>
    <td>The ciphers.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the policy.</td>
</tr>
<tr>
    <td><CopyableCode code="ssl_protocols" /></td>
    <td><code>string</code></td>
    <td>The protocols.</td>
</tr>
<tr>
    <td><CopyableCode code="supported_load_balancer_types" /></td>
    <td><code>string</code></td>
    <td>The supported load balancers.</td>
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
    <td><a href="#describe_ssl_policies"><CopyableCode code="describe_ssl_policies" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Names"><code>Names</code></a>, <a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-PageSize"><code>PageSize</code></a>, <a href="#parameter-LoadBalancerType"><code>LoadBalancerType</code></a></td>
    <td>Describes the specified policies or all policies used for SSL negotiation. For more information, see Security policies in the Application Load Balancers Guide and Security policies in the Network Load Balancers Guide.</td>
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
<tr id="parameter-LoadBalancerType">
    <td><CopyableCode code="LoadBalancerType" /></td>
    <td><code>string</code></td>
    <td>The type of load balancer. The default lists the SSL policies for all load balancers.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>The marker for the next set of results. (You received this marker from a previous call.)</td>
</tr>
<tr id="parameter-Names">
    <td><CopyableCode code="Names" /></td>
    <td><code>array</code></td>
    <td>The names of the policies.</td>
</tr>
<tr id="parameter-PageSize">
    <td><CopyableCode code="PageSize" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return with this call.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_ssl_policies"
    values={[
        { label: 'describe_ssl_policies', value: 'describe_ssl_policies' }
    ]}
>
<TabItem value="describe_ssl_policies">

Describes the specified policies or all policies used for SSL negotiation. For more information, see Security policies in the Application Load Balancers Guide and Security policies in the Network Load Balancers Guide.

```sql
SELECT
ciphers,
name,
ssl_protocols,
supported_load_balancer_types
FROM aws.elbv2.ssl_policies
WHERE region = '{{ region }}' -- required
AND Names = '{{ Names }}'
AND Marker = '{{ Marker }}'
AND PageSize = '{{ PageSize }}'
AND LoadBalancerType = '{{ LoadBalancerType }}'
;
```
</TabItem>
</Tabs>
