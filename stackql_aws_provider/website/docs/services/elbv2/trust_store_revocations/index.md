--- 
title: trust_store_revocations
hide_title: false
hide_table_of_contents: false
keywords:
  - trust_store_revocations
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

Creates, updates, deletes, gets or lists a <code>trust_store_revocations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="trust_store_revocations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.elbv2.trust_store_revocations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_trust_store_revocations"
    values={[
        { label: 'describe_trust_store_revocations', value: 'describe_trust_store_revocations' }
    ]}
>
<TabItem value="describe_trust_store_revocations">

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
    <td><CopyableCode code="NumberOfRevokedEntries" /></td>
    <td><code>integer</code></td>
    <td>The number of revoked certificates.</td>
</tr>
<tr>
    <td><CopyableCode code="RevocationId" /></td>
    <td><code>integer</code></td>
    <td>The revocation ID of a revocation file in use.</td>
</tr>
<tr>
    <td><CopyableCode code="RevocationType" /></td>
    <td><code>string</code></td>
    <td>The type of revocation file.</td>
</tr>
<tr>
    <td><CopyableCode code="TrustStoreArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the trust store.</td>
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
    <td><a href="#describe_trust_store_revocations"><CopyableCode code="describe_trust_store_revocations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-TrustStoreArn"><code>TrustStoreArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-RevocationIds"><code>RevocationIds</code></a>, <a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-PageSize"><code>PageSize</code></a></td>
    <td>Describes the revocation files in use by the specified trust store or revocation files.</td>
</tr>
<tr>
    <td><a href="#remove_trust_store_revocations"><CopyableCode code="remove_trust_store_revocations" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-TrustStoreArn"><code>TrustStoreArn</code></a>, <a href="#parameter-RevocationIds"><code>RevocationIds</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes the specified revocation file from the specified trust store.</td>
</tr>
<tr>
    <td><a href="#add_trust_store_revocations"><CopyableCode code="add_trust_store_revocations" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-TrustStoreArn"><code>TrustStoreArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-RevocationContents"><code>RevocationContents</code></a></td>
    <td>Adds the specified revocation file to the specified trust store.</td>
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
<tr id="parameter-RevocationIds">
    <td><CopyableCode code="RevocationIds" /></td>
    <td><code>array</code></td>
    <td>The revocation IDs of the revocation files you want to remove.</td>
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
<tr id="parameter-RevocationContents">
    <td><CopyableCode code="RevocationContents" /></td>
    <td><code>array</code></td>
    <td>The revocation file to add.</td>
</tr>
<tr id="parameter-RevocationIds">
    <td><CopyableCode code="RevocationIds" /></td>
    <td><code>array</code></td>
    <td>The revocation IDs of the revocation files you want to describe.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_trust_store_revocations"
    values={[
        { label: 'describe_trust_store_revocations', value: 'describe_trust_store_revocations' }
    ]}
>
<TabItem value="describe_trust_store_revocations">

Describes the revocation files in use by the specified trust store or revocation files.

```sql
SELECT
NumberOfRevokedEntries,
RevocationId,
RevocationType,
TrustStoreArn
FROM aws.elbv2.trust_store_revocations
WHERE TrustStoreArn = '{{ TrustStoreArn }}' -- required
AND region = '{{ region }}' -- required
AND RevocationIds = '{{ RevocationIds }}'
AND Marker = '{{ Marker }}'
AND PageSize = '{{ PageSize }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="remove_trust_store_revocations"
    values={[
        { label: 'remove_trust_store_revocations', value: 'remove_trust_store_revocations' },
        { label: 'add_trust_store_revocations', value: 'add_trust_store_revocations' }
    ]}
>
<TabItem value="remove_trust_store_revocations">

Removes the specified revocation file from the specified trust store.

```sql
UPDATE aws.elbv2.trust_store_revocations
SET 
-- No updatable properties
WHERE 
TrustStoreArn = '{{ TrustStoreArn }}' --required
AND RevocationIds = '{{ RevocationIds }}' --required
AND region = '{{ region }}' --required
RETURNING
line_items;
```
</TabItem>
<TabItem value="add_trust_store_revocations">

Adds the specified revocation file to the specified trust store.

```sql
UPDATE aws.elbv2.trust_store_revocations
SET 
-- No updatable properties
WHERE 
TrustStoreArn = '{{ TrustStoreArn }}' --required
AND region = '{{ region }}' --required
AND RevocationContents = '{{ RevocationContents}}'
RETURNING
NumberOfRevokedEntries,
RevocationId,
RevocationType,
TrustStoreArn;
```
</TabItem>
</Tabs>
