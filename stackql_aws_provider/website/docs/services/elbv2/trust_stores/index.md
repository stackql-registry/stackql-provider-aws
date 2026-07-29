--- 
title: trust_stores
hide_title: false
hide_table_of_contents: false
keywords:
  - trust_stores
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

Creates, updates, deletes, gets or lists a <code>trust_stores</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="trust_stores" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.elbv2.trust_stores" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_trust_stores"
    values={[
        { label: 'describe_trust_stores', value: 'describe_trust_stores' }
    ]}
>
<TabItem value="describe_trust_stores">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the trust store.</td>
</tr>
<tr>
    <td><CopyableCode code="number_of_ca_certificates" /></td>
    <td><code>integer</code></td>
    <td>The number of ca certificates in the trust store.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the trust store.</td>
</tr>
<tr>
    <td><CopyableCode code="total_revoked_entries" /></td>
    <td><code>integer</code></td>
    <td>The number of revoked certificates in the trust store.</td>
</tr>
<tr>
    <td><CopyableCode code="trust_store_arn" /></td>
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
    <td><a href="#describe_trust_stores"><CopyableCode code="describe_trust_stores" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-TrustStoreArns"><code>TrustStoreArns</code></a>, <a href="#parameter-Names"><code>Names</code></a>, <a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-PageSize"><code>PageSize</code></a></td>
    <td>Describes all trust stores for the specified account.</td>
</tr>
<tr>
    <td><a href="#create_trust_store"><CopyableCode code="create_trust_store" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-CaCertificatesBundleS3Bucket"><code>CaCertificatesBundleS3Bucket</code></a>, <a href="#parameter-CaCertificatesBundleS3Key"><code>CaCertificatesBundleS3Key</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Name"><code>Name</code></a>, <a href="#parameter-CaCertificatesBundleS3ObjectVersion"><code>CaCertificatesBundleS3ObjectVersion</code></a>, <a href="#parameter-Tags"><code>Tags</code></a></td>
    <td>Creates a trust store. For more information, see Mutual TLS for Application Load Balancers.</td>
</tr>
<tr>
    <td><a href="#modify_trust_store"><CopyableCode code="modify_trust_store" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-TrustStoreArn"><code>TrustStoreArn</code></a>, <a href="#parameter-CaCertificatesBundleS3Bucket"><code>CaCertificatesBundleS3Bucket</code></a>, <a href="#parameter-CaCertificatesBundleS3Key"><code>CaCertificatesBundleS3Key</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-CaCertificatesBundleS3ObjectVersion"><code>CaCertificatesBundleS3ObjectVersion</code></a></td>
    <td>Update the ca certificate bundle for the specified trust store.</td>
</tr>
<tr>
    <td><a href="#delete_trust_store"><CopyableCode code="delete_trust_store" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-TrustStoreArn"><code>TrustStoreArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a trust store.</td>
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
<tr id="parameter-CaCertificatesBundleS3Bucket">
    <td><CopyableCode code="CaCertificatesBundleS3Bucket" /></td>
    <td><code>string</code></td>
    <td>The Amazon S3 bucket for the ca certificates bundle.</td>
</tr>
<tr id="parameter-CaCertificatesBundleS3Key">
    <td><CopyableCode code="CaCertificatesBundleS3Key" /></td>
    <td><code>string</code></td>
    <td>The Amazon S3 path for the ca certificates bundle.</td>
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
<tr id="parameter-CaCertificatesBundleS3ObjectVersion">
    <td><CopyableCode code="CaCertificatesBundleS3ObjectVersion" /></td>
    <td><code>string</code></td>
    <td>The Amazon S3 object version for the ca certificates bundle. If undefined the current version is used.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>The marker for the next set of results. (You received this marker from a previous call.)</td>
</tr>
<tr id="parameter-Name">
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the trust store. This name must be unique per region and can't be changed after creation.</td>
</tr>
<tr id="parameter-Names">
    <td><CopyableCode code="Names" /></td>
    <td><code>array</code></td>
    <td>The names of the trust stores.</td>
</tr>
<tr id="parameter-PageSize">
    <td><CopyableCode code="PageSize" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return with this call.</td>
</tr>
<tr id="parameter-Tags">
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>The tags to assign to the trust store.</td>
</tr>
<tr id="parameter-TrustStoreArns">
    <td><CopyableCode code="TrustStoreArns" /></td>
    <td><code>array</code></td>
    <td>The Amazon Resource Name (ARN) of the trust store.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_trust_stores"
    values={[
        { label: 'describe_trust_stores', value: 'describe_trust_stores' }
    ]}
>
<TabItem value="describe_trust_stores">

Describes all trust stores for the specified account.

```sql
SELECT
name,
number_of_ca_certificates,
status,
total_revoked_entries,
trust_store_arn
FROM aws.elbv2.trust_stores
WHERE region = '{{ region }}' -- required
AND TrustStoreArns = '{{ TrustStoreArns }}'
AND Names = '{{ Names }}'
AND Marker = '{{ Marker }}'
AND PageSize = '{{ PageSize }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_trust_store"
    values={[
        { label: 'create_trust_store', value: 'create_trust_store' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_trust_store">

Creates a trust store. For more information, see Mutual TLS for Application Load Balancers.

```sql
INSERT INTO aws.elbv2.trust_stores (
CaCertificatesBundleS3Bucket,
CaCertificatesBundleS3Key,
region,
Name,
CaCertificatesBundleS3ObjectVersion,
Tags
)
SELECT 
'{{ CaCertificatesBundleS3Bucket }}',
'{{ CaCertificatesBundleS3Key }}',
'{{ region }}',
'{{ Name }}',
'{{ CaCertificatesBundleS3ObjectVersion }}',
'{{ Tags }}'
RETURNING
line_items
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: trust_stores
  props:
    - name: CaCertificatesBundleS3Bucket
      value: "{{ CaCertificatesBundleS3Bucket }}"
      description: Required parameter for the trust_stores resource.
    - name: CaCertificatesBundleS3Key
      value: "{{ CaCertificatesBundleS3Key }}"
      description: Required parameter for the trust_stores resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the trust_stores resource.
    - name: Name
      value: "{{ Name }}"
      description: The name of the trust store. This name must be unique per region and can't be changed after creation.
      description: The name of the trust store. This name must be unique per region and can't be changed after creation.
    - name: CaCertificatesBundleS3ObjectVersion
      value: "{{ CaCertificatesBundleS3ObjectVersion }}"
      description: The Amazon S3 object version for the ca certificates bundle. If undefined the current version is used.
      description: The Amazon S3 object version for the ca certificates bundle. If undefined the current version is used.
    - name: Tags
      value: "{{ Tags }}"
      description: The tags to assign to the trust store.
      description: The tags to assign to the trust store.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_trust_store"
    values={[
        { label: 'modify_trust_store', value: 'modify_trust_store' }
    ]}
>
<TabItem value="modify_trust_store">

Update the ca certificate bundle for the specified trust store.

```sql
UPDATE aws.elbv2.trust_stores
SET 
-- No updatable properties
WHERE 
TrustStoreArn = '{{ TrustStoreArn }}' --required
AND CaCertificatesBundleS3Bucket = '{{ CaCertificatesBundleS3Bucket }}' --required
AND CaCertificatesBundleS3Key = '{{ CaCertificatesBundleS3Key }}' --required
AND region = '{{ region }}' --required
AND CaCertificatesBundleS3ObjectVersion = '{{ CaCertificatesBundleS3ObjectVersion}}'
RETURNING
line_items;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_trust_store"
    values={[
        { label: 'delete_trust_store', value: 'delete_trust_store' }
    ]}
>
<TabItem value="delete_trust_store">

Deletes a trust store.

```sql
DELETE FROM aws.elbv2.trust_stores
WHERE TrustStoreArn = '{{ TrustStoreArn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
