--- 
title: domain_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - domain_associations
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

Creates, updates, deletes, gets or lists a <code>domain_associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="domain_associations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudfront.domain_associations" /></td></tr>
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
    <td><a href="#update_domain_association"><CopyableCode code="update_domain_association" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TargetResource"><code>TargetResource</code></a></td>
    <td><a href="#parameter-If-Match"><code>If-Match</code></a></td>
    <td>We recommend that you use the UpdateDomainAssociation API operation to move a domain association, as it supports both standard distributions and distribution tenants. AssociateAlias performs similar checks but only supports standard distributions. Moves a domain from its current standard distribution or distribution tenant to another one. You must first disable the source distribution (standard distribution or distribution tenant) and then separately call this operation to move the domain to another target distribution (standard distribution or distribution tenant). To use this operation, specify the domain and the ID of the target resource (standard distribution or distribution tenant). For more information, including how to set up the target resource, prerequisites that you must complete, and other restrictions, see Moving an alternate domain name to a different standard distribution or distribution tenant in the Amazon CloudFront Developer Guide.</td>
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
<tr id="parameter-If-Match">
    <td><CopyableCode code="If-Match" /></td>
    <td><code>string</code></td>
    <td>The value of the ETag identifier for the standard distribution or distribution tenant that will be associated with the domain.</td>
</tr>
</tbody>
</table>

## `UPDATE` examples

<Tabs
    defaultValue="update_domain_association"
    values={[
        { label: 'update_domain_association', value: 'update_domain_association' }
    ]}
>
<TabItem value="update_domain_association">

We recommend that you use the UpdateDomainAssociation API operation to move a domain association, as it supports both standard distributions and distribution tenants. AssociateAlias performs similar checks but only supports standard distributions. Moves a domain from its current standard distribution or distribution tenant to another one. You must first disable the source distribution (standard distribution or distribution tenant) and then separately call this operation to move the domain to another target distribution (standard distribution or distribution tenant). To use this operation, specify the domain and the ID of the target resource (standard distribution or distribution tenant). For more information, including how to set up the target resource, prerequisites that you must complete, and other restrictions, see Moving an alternate domain name to a different standard distribution or distribution tenant in the Amazon CloudFront Developer Guide.

```sql
UPDATE aws.cloudfront.domain_associations
SET 
Domain = '{{ Domain }}',
TargetResource = '{{ TargetResource }}'
WHERE 
region = '{{ region }}' --required
AND TargetResource = '{{ TargetResource }}' --required
AND `If-Match` = '{{ If-Match}}'
RETURNING
Domain,
ETag,
ResourceId;
```
</TabItem>
</Tabs>
