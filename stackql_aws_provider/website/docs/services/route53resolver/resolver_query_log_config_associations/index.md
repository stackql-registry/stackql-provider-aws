--- 
title: resolver_query_log_config_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - resolver_query_log_config_associations
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

Creates, updates, deletes, gets or lists a <code>resolver_query_log_config_associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resolver_query_log_config_associations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.route53resolver.resolver_query_log_config_associations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_resolver_query_log_config_association"
    values={[
        { label: 'get_resolver_query_log_config_association', value: 'get_resolver_query_log_config_association' },
        { label: 'list_resolver_query_log_config_associations', value: 'list_resolver_query_log_config_associations' }
    ]}
>
<TabItem value="get_resolver_query_log_config_association">

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
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string</code></td>
    <td>The date and time that the VPC was associated with the query logging configuration, in Unix time format and Coordinated Universal Time (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="Error" /></td>
    <td><code>string</code></td>
    <td>If the value of Status is FAILED, the value of Error indicates the cause: DESTINATION_NOT_FOUND: The specified destination (for example, an Amazon S3 bucket) was deleted. ACCESS_DENIED: Permissions don't allow sending logs to the destination. If the value of Status is a value other than FAILED, Error is null. (NONE, DESTINATION_NOT_FOUND, ACCESS_DENIED, INTERNAL_SERVICE_ERROR)</td>
</tr>
<tr>
    <td><CopyableCode code="ErrorMessage" /></td>
    <td><code>string</code></td>
    <td>Contains additional information about the error. If the value or Error is null, the value of ErrorMessage also is null.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The ID of the query logging association.</td>
</tr>
<tr>
    <td><CopyableCode code="ResolverQueryLogConfigId" /></td>
    <td><code>string</code></td>
    <td>The ID of the query logging configuration that a VPC is associated with.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon VPC that is associated with the query logging configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the specified query logging association. Valid values include the following: CREATING: Resolver is creating an association between an Amazon VPC and a query logging configuration. ACTIVE: The association between an Amazon VPC and a query logging configuration was successfully created. Resolver is logging queries that originate in the specified VPC. DELETING: Resolver is deleting this query logging association. FAILED: Resolver either couldn't create or couldn't delete the query logging association. (CREATING, ACTIVE, ACTION_NEEDED, DELETING, FAILED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_resolver_query_log_config_associations">

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
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string</code></td>
    <td>The date and time that the VPC was associated with the query logging configuration, in Unix time format and Coordinated Universal Time (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="Error" /></td>
    <td><code>string</code></td>
    <td>If the value of Status is FAILED, the value of Error indicates the cause: DESTINATION_NOT_FOUND: The specified destination (for example, an Amazon S3 bucket) was deleted. ACCESS_DENIED: Permissions don't allow sending logs to the destination. If the value of Status is a value other than FAILED, Error is null. (NONE, DESTINATION_NOT_FOUND, ACCESS_DENIED, INTERNAL_SERVICE_ERROR)</td>
</tr>
<tr>
    <td><CopyableCode code="ErrorMessage" /></td>
    <td><code>string</code></td>
    <td>Contains additional information about the error. If the value or Error is null, the value of ErrorMessage also is null.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The ID of the query logging association.</td>
</tr>
<tr>
    <td><CopyableCode code="ResolverQueryLogConfigId" /></td>
    <td><code>string</code></td>
    <td>The ID of the query logging configuration that a VPC is associated with.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon VPC that is associated with the query logging configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the specified query logging association. Valid values include the following: CREATING: Resolver is creating an association between an Amazon VPC and a query logging configuration. ACTIVE: The association between an Amazon VPC and a query logging configuration was successfully created. Resolver is logging queries that originate in the specified VPC. DELETING: Resolver is deleting this query logging association. FAILED: Resolver either couldn't create or couldn't delete the query logging association. (CREATING, ACTIVE, ACTION_NEEDED, DELETING, FAILED)</td>
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
    <td><a href="#get_resolver_query_log_config_association"><CopyableCode code="get_resolver_query_log_config_association" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a specified association between a Resolver query logging configuration and an Amazon VPC. When you associate a VPC with a query logging configuration, Resolver logs DNS queries that originate in that VPC.</td>
</tr>
<tr>
    <td><a href="#list_resolver_query_log_config_associations"><CopyableCode code="list_resolver_query_log_config_associations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists information about associations between Amazon VPCs and query logging configurations.</td>
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
    defaultValue="get_resolver_query_log_config_association"
    values={[
        { label: 'get_resolver_query_log_config_association', value: 'get_resolver_query_log_config_association' },
        { label: 'list_resolver_query_log_config_associations', value: 'list_resolver_query_log_config_associations' }
    ]}
>
<TabItem value="get_resolver_query_log_config_association">

Gets information about a specified association between a Resolver query logging configuration and an Amazon VPC. When you associate a VPC with a query logging configuration, Resolver logs DNS queries that originate in that VPC.

```sql
SELECT
CreationTime,
Error,
ErrorMessage,
Id,
ResolverQueryLogConfigId,
ResourceId,
Status
FROM aws.route53resolver.resolver_query_log_config_associations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_resolver_query_log_config_associations">

Lists information about associations between Amazon VPCs and query logging configurations.

```sql
SELECT
CreationTime,
Error,
ErrorMessage,
Id,
ResolverQueryLogConfigId,
ResourceId,
Status
FROM aws.route53resolver.resolver_query_log_config_associations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
