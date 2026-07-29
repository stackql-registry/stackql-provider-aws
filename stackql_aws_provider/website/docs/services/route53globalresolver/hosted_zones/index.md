--- 
title: hosted_zones
hide_title: false
hide_table_of_contents: false
keywords:
  - hosted_zones
  - route53globalresolver
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

Creates, updates, deletes, gets or lists a <code>hosted_zones</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="hosted_zones" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.route53globalresolver.hosted_zones" /></td></tr>
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
    <td><a href="#associate_hosted_zone"><CopyableCode code="associate_hosted_zone" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-hosted_zone_id"><code>hosted_zone_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-resourceArn"><code>resourceArn</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Associates a Route 53 private hosted zone with a Route 53 Global Resolver resource. This allows the resolver to resolve DNS queries for the private hosted zone from anywhere globally. Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify --region us-east-2 on Amazon Web Services CLI commands.</td>
</tr>
<tr>
    <td><a href="#disassociate_hosted_zone"><CopyableCode code="disassociate_hosted_zone" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-hosted_zone_id"><code>hosted_zone_id</code></a>, <a href="#parameter-resource_arn"><code>resource_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disassociates a Route 53 private hosted zone from a Route 53 Global Resolver resource. Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify --region us-east-2 on Amazon Web Services CLI commands.</td>
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
<tr id="parameter-hosted_zone_id">
    <td><CopyableCode code="hosted_zone_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Route 53 private hosted zone to disassociate.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-resource_arn">
    <td><CopyableCode code="resource_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Route 53 Global Resolver resource to disassociate the hosted zone from.</td>
</tr>
</tbody>
</table>

## `UPDATE` examples

<Tabs
    defaultValue="associate_hosted_zone"
    values={[
        { label: 'associate_hosted_zone', value: 'associate_hosted_zone' },
        { label: 'disassociate_hosted_zone', value: 'disassociate_hosted_zone' }
    ]}
>
<TabItem value="associate_hosted_zone">

Associates a Route 53 private hosted zone with a Route 53 Global Resolver resource. This allows the resolver to resolve DNS queries for the private hosted zone from anywhere globally. Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify --region us-east-2 on Amazon Web Services CLI commands.

```sql
UPDATE aws.route53globalresolver.hosted_zones
SET 
resourceArn = '{{ resourceArn }}',
name = '{{ name }}'
WHERE 
hosted_zone_id = '{{ hosted_zone_id }}' --required
AND region = '{{ region }}' --required
AND resourceArn = '{{ resourceArn }}' --required
AND name = '{{ name }}' --required
RETURNING
id,
name,
created_at,
hosted_zone_id,
hosted_zone_name,
resource_arn,
status,
updated_at;
```
</TabItem>
<TabItem value="disassociate_hosted_zone">

Disassociates a Route 53 private hosted zone from a Route 53 Global Resolver resource. Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify --region us-east-2 on Amazon Web Services CLI commands.

```sql
UPDATE aws.route53globalresolver.hosted_zones
SET 
-- No updatable properties
WHERE 
hosted_zone_id = '{{ hosted_zone_id }}' --required
AND resource_arn = '{{ resource_arn }}' --required
AND region = '{{ region }}' --required
RETURNING
id,
name,
created_at,
hosted_zone_id,
hosted_zone_name,
resource_arn,
status,
updated_at;
```
</TabItem>
</Tabs>
