--- 
title: alias
hide_title: false
hide_table_of_contents: false
keywords:
  - alias
  - cloudfront
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

Creates, updates, deletes, gets or lists an <code>alias</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="alias" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudfront.alias" /></td></tr>
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
    <td><a href="#associate_alias"><CopyableCode code="associate_alias" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-target_distribution_id"><code>target_distribution_id</code></a>, <a href="#parameter-Alias"><code>Alias</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>The AssociateAlias API operation only supports standard distributions. To move domains between distribution tenants and/or standard distributions, we recommend that you use the UpdateDomainAssociation API operation instead. Associates an alias with a CloudFront standard distribution. An alias is commonly known as a custom domain or vanity domain. It can also be called a CNAME or alternate domain name. With this operation, you can move an alias that's already used for a standard distribution to a different standard distribution. This prevents the downtime that could occur if you first remove the alias from one standard distribution and then separately add the alias to another standard distribution. To use this operation, specify the alias and the ID of the target standard distribution. For more information, including how to set up the target standard distribution, prerequisites that you must complete, and other restrictions, see Moving an alternate domain name to a different standard distribution or distribution tenant in the Amazon CloudFront Developer Guide.</td>
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
<tr id="parameter-Alias">
    <td><CopyableCode code="Alias" /></td>
    <td><code>string</code></td>
    <td>The alias (also known as a CNAME) to add to the target standard distribution.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-target_distribution_id">
    <td><CopyableCode code="target_distribution_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the standard distribution that you're associating the alias with.</td>
</tr>
</tbody>
</table>

## `UPDATE` examples

<Tabs
    defaultValue="associate_alias"
    values={[
        { label: 'associate_alias', value: 'associate_alias' }
    ]}
>
<TabItem value="associate_alias">

The AssociateAlias API operation only supports standard distributions. To move domains between distribution tenants and/or standard distributions, we recommend that you use the UpdateDomainAssociation API operation instead. Associates an alias with a CloudFront standard distribution. An alias is commonly known as a custom domain or vanity domain. It can also be called a CNAME or alternate domain name. With this operation, you can move an alias that's already used for a standard distribution to a different standard distribution. This prevents the downtime that could occur if you first remove the alias from one standard distribution and then separately add the alias to another standard distribution. To use this operation, specify the alias and the ID of the target standard distribution. For more information, including how to set up the target standard distribution, prerequisites that you must complete, and other restrictions, see Moving an alternate domain name to a different standard distribution or distribution tenant in the Amazon CloudFront Developer Guide.

```sql
UPDATE aws.cloudfront.alias
SET 
-- No updatable properties
WHERE 
target_distribution_id = '{{ target_distribution_id }}' --required
AND Alias = '{{ Alias }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>
