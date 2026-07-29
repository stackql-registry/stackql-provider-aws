--- 
title: trust_store_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - trust_store_associations
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

Creates, updates, deletes, gets or lists a <code>trust_store_associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="trust_store_associations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.elbv2.trust_store_associations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_trust_store_associations"
    values={[
        { label: 'describe_trust_store_associations', value: 'describe_trust_store_associations' }
    ]}
>
<TabItem value="describe_trust_store_associations">

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
    <td><CopyableCode code="resource_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the resource.</td>
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
    <td><a href="#describe_trust_store_associations"><CopyableCode code="describe_trust_store_associations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-TrustStoreArn"><code>TrustStoreArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-PageSize"><code>PageSize</code></a></td>
    <td>Describes all resources associated with the specified trust store.</td>
</tr>
<tr>
    <td><a href="#delete_shared_trust_store_association"><CopyableCode code="delete_shared_trust_store_association" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-TrustStoreArn"><code>TrustStoreArn</code></a>, <a href="#parameter-ResourceArn"><code>ResourceArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a shared trust store association.</td>
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
    <td>The Amazon Resource Name (ARN) of the resource.</td>
</tr>
<tr id="parameter-TrustStoreArn">
    <td><CopyableCode code="TrustStoreArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the trust store.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>The marker for the next set of results. (You received this marker from a previous call.)</td>
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
    defaultValue="describe_trust_store_associations"
    values={[
        { label: 'describe_trust_store_associations', value: 'describe_trust_store_associations' }
    ]}
>
<TabItem value="describe_trust_store_associations">

Describes all resources associated with the specified trust store.

```sql
SELECT
resource_arn
FROM aws.elbv2.trust_store_associations
WHERE TrustStoreArn = '{{ TrustStoreArn }}' -- required
AND region = '{{ region }}' -- required
AND Marker = '{{ Marker }}'
AND PageSize = '{{ PageSize }}'
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_shared_trust_store_association"
    values={[
        { label: 'delete_shared_trust_store_association', value: 'delete_shared_trust_store_association' }
    ]}
>
<TabItem value="delete_shared_trust_store_association">

Deletes a shared trust store association.

```sql
DELETE FROM aws.elbv2.trust_store_associations
WHERE TrustStoreArn = '{{ TrustStoreArn }}' --required
AND ResourceArn = '{{ ResourceArn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
