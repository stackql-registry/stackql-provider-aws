--- 
title: load_balancer_tls_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - load_balancer_tls_policies
  - lightsail
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

Creates, updates, deletes, gets or lists a <code>load_balancer_tls_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="load_balancer_tls_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lightsail.load_balancer_tls_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_load_balancer_tls_policies"
    values={[
        { label: 'get_load_balancer_tls_policies', value: 'get_load_balancer_tls_policies' }
    ]}
>
<TabItem value="get_load_balancer_tls_policies">

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
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>The token to advance to the next page of results from your request. A next page token is not returned if there are no more results to display. To get the next page of results, perform another GetLoadBalancerTlsPolicies request and specify the next page token using the pageToken parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="tlsPolicies" /></td>
    <td><code>array</code></td>
    <td>An array of objects that describe the TLS security policies that are available.</td>
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
    <td><a href="#get_load_balancer_tls_policies"><CopyableCode code="get_load_balancer_tls_policies" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of TLS security policies that you can apply to Lightsail load balancers. For more information about load balancer TLS security policies, see Configuring TLS security policies on your Amazon Lightsail load balancers in the Amazon Lightsail Developer Guide.</td>
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
    defaultValue="get_load_balancer_tls_policies"
    values={[
        { label: 'get_load_balancer_tls_policies', value: 'get_load_balancer_tls_policies' }
    ]}
>
<TabItem value="get_load_balancer_tls_policies">

Returns a list of TLS security policies that you can apply to Lightsail load balancers. For more information about load balancer TLS security policies, see Configuring TLS security policies on your Amazon Lightsail load balancers in the Amazon Lightsail Developer Guide.

```sql
SELECT
nextPageToken,
tlsPolicies
FROM aws.lightsail.load_balancer_tls_policies
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
