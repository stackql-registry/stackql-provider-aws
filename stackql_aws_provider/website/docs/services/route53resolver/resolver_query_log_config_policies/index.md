--- 
title: resolver_query_log_config_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - resolver_query_log_config_policies
  - route53resolver
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

Creates, updates, deletes, gets or lists a <code>resolver_query_log_config_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resolver_query_log_config_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.route53resolver.resolver_query_log_config_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_resolver_query_log_config_policy"
    values={[
        { label: 'get_resolver_query_log_config_policy', value: 'get_resolver_query_log_config_policy' }
    ]}
>
<TabItem value="get_resolver_query_log_config_policy">

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
    <td><CopyableCode code="ResolverQueryLogConfigPolicy" /></td>
    <td><code>string</code></td>
    <td>Information about the query logging policy for the query logging configuration that you specified in a GetResolverQueryLogConfigPolicy request.</td>
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
    <td><a href="#get_resolver_query_log_config_policy"><CopyableCode code="get_resolver_query_log_config_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a query logging policy. A query logging policy specifies the Resolver query logging operations and resources that you want to allow another Amazon Web Services account to be able to use.</td>
</tr>
<tr>
    <td><a href="#put_resolver_query_log_config_policy"><CopyableCode code="put_resolver_query_log_config_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Arn"><code>Arn</code></a>, <a href="#parameter-ResolverQueryLogConfigPolicy"><code>ResolverQueryLogConfigPolicy</code></a></td>
    <td></td>
    <td>Specifies an Amazon Web Services account that you want to share a query logging configuration with, the query logging configuration that you want to share, and the operations that you want the account to be able to perform on the configuration.</td>
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
    defaultValue="get_resolver_query_log_config_policy"
    values={[
        { label: 'get_resolver_query_log_config_policy', value: 'get_resolver_query_log_config_policy' }
    ]}
>
<TabItem value="get_resolver_query_log_config_policy">

Gets information about a query logging policy. A query logging policy specifies the Resolver query logging operations and resources that you want to allow another Amazon Web Services account to be able to use.

```sql
SELECT
ResolverQueryLogConfigPolicy
FROM aws.route53resolver.resolver_query_log_config_policies
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_resolver_query_log_config_policy"
    values={[
        { label: 'put_resolver_query_log_config_policy', value: 'put_resolver_query_log_config_policy' }
    ]}
>
<TabItem value="put_resolver_query_log_config_policy">

Specifies an Amazon Web Services account that you want to share a query logging configuration with, the query logging configuration that you want to share, and the operations that you want the account to be able to perform on the configuration.

```sql
REPLACE aws.route53resolver.resolver_query_log_config_policies
SET 
Arn = '{{ Arn }}',
ResolverQueryLogConfigPolicy = '{{ ResolverQueryLogConfigPolicy }}'
WHERE 
region = '{{ region }}' --required
AND Arn = '{{ Arn }}' --required
AND ResolverQueryLogConfigPolicy = '{{ ResolverQueryLogConfigPolicy }}' --required
RETURNING
ReturnValue;
```
</TabItem>
</Tabs>
