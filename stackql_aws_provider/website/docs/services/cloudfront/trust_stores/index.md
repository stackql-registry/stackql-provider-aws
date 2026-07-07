--- 
title: trust_stores
hide_title: false
hide_table_of_contents: false
keywords:
  - trust_stores
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

Creates, updates, deletes, gets or lists a <code>trust_stores</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="trust_stores" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudfront.trust_stores" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_trust_store"
    values={[
        { label: 'get_trust_store', value: 'get_trust_store' },
        { label: 'list_trust_stores', value: 'list_trust_stores' }
    ]}
>
<TabItem value="get_trust_store">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The trust store's Amazon Resource Name (ARN).</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The trust store's ID.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string</code></td>
    <td>The trust store's last modified time.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The trust store's name.</td>
</tr>
<tr>
    <td><CopyableCode code="NumberOfCaCertificates" /></td>
    <td><code>integer</code></td>
    <td>The trust store's number of CA certificates.</td>
</tr>
<tr>
    <td><CopyableCode code="Reason" /></td>
    <td><code>string</code></td>
    <td>The trust store's reason.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The trust store's status.</td>
</tr>
<tr>
    <td><CopyableCode code="UseClientCertificateOCSPEndpoint" /></td>
    <td><code>boolean</code></td>
    <td>A Boolean that determines whether the trust store uses the CA certificate's OCSP endpoint to check certificate revocation status.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_trust_stores">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The trust store's Amazon Resource Name (ARN).</td>
</tr>
<tr>
    <td><CopyableCode code="ETag" /></td>
    <td><code>string</code></td>
    <td>The version identifier for the current version of the trust store.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The trust store's ID.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string</code></td>
    <td>The trust store's last modified time.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The trust store's name.</td>
</tr>
<tr>
    <td><CopyableCode code="NumberOfCaCertificates" /></td>
    <td><code>integer</code></td>
    <td>The trust store's number of CA certificates.</td>
</tr>
<tr>
    <td><CopyableCode code="Reason" /></td>
    <td><code>string</code></td>
    <td>The trust store's reason.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The trust store's status.</td>
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
    <td><a href="#get_trust_store"><CopyableCode code="get_trust_store" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a trust store.</td>
</tr>
<tr>
    <td><a href="#list_trust_stores"><CopyableCode code="list_trust_stores" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists trust stores.</td>
</tr>
<tr>
    <td><a href="#create_trust_store"><CopyableCode code="create_trust_store" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CaCertificatesBundleSource"><code>CaCertificatesBundleSource</code></a></td>
    <td></td>
    <td>Creates a trust store.</td>
</tr>
<tr>
    <td><a href="#update_trust_store"><CopyableCode code="update_trust_store" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-If-Match"><code>If-Match</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-UseClientCertificateOCSPEndpoint"><code>UseClientCertificateOCSPEndpoint</code></a></td>
    <td>Updates a trust store.</td>
</tr>
<tr>
    <td><a href="#delete_trust_store"><CopyableCode code="delete_trust_store" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-If-Match"><code>If-Match</code></a>, <a href="#parameter-region"><code>region</code></a></td>
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
<tr id="parameter-If-Match">
    <td><CopyableCode code="If-Match" /></td>
    <td><code>string</code></td>
    <td>The current version (ETag value) of the trust store you are deleting.</td>
</tr>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The trust store's ID.</td>
</tr>
<tr id="parameter-identifier">
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>The trust store's identifier.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-UseClientCertificateOCSPEndpoint">
    <td><CopyableCode code="UseClientCertificateOCSPEndpoint" /></td>
    <td><code>boolean</code></td>
    <td>A Boolean that determines whether to use the CA certificate's OCSP endpoint to check certificate revocation status.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_trust_store"
    values={[
        { label: 'get_trust_store', value: 'get_trust_store' },
        { label: 'list_trust_stores', value: 'list_trust_stores' }
    ]}
>
<TabItem value="get_trust_store">

Gets a trust store.

```sql
SELECT
Arn,
Id,
LastModifiedTime,
Name,
NumberOfCaCertificates,
Reason,
Status,
UseClientCertificateOCSPEndpoint
FROM aws.cloudfront.trust_stores
WHERE identifier = '{{ identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_trust_stores">

Lists trust stores.

```sql
SELECT
Arn,
ETag,
Id,
LastModifiedTime,
Name,
NumberOfCaCertificates,
Reason,
Status
FROM aws.cloudfront.trust_stores
WHERE region = '{{ region }}' -- required
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

Creates a trust store.

```sql
INSERT INTO aws.cloudfront.trust_stores (
Name,
CaCertificatesBundleSource,
UseClientCertificateOCSPEndpoint,
Tags,
region
)
SELECT 
'{{ Name }}',
'{{ CaCertificatesBundleSource }}' /* required */,
{{ UseClientCertificateOCSPEndpoint }},
'{{ Tags }}',
'{{ region }}'
RETURNING
Arn,
Id,
LastModifiedTime,
Name,
NumberOfCaCertificates,
Reason,
Status,
UseClientCertificateOCSPEndpoint
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: trust_stores
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the trust_stores resource.
    - name: Name
      value: "{{ Name }}"
    - name: CaCertificatesBundleSource
      description: |
        A CA certificates bundle source.
      value:
        CaCertificatesBundleS3Location:
          Bucket: "{{ Bucket }}"
          Key: "{{ Key }}"
          Region: "{{ Region }}"
          Version: "{{ Version }}"
    - name: UseClientCertificateOCSPEndpoint
      value: {{ UseClientCertificateOCSPEndpoint }}
    - name: Tags
      description: |
        A complex type that contains zero or more Tag elements.
      value:
        Items:
          - Key: "{{ Key }}"
            Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_trust_store"
    values={[
        { label: 'update_trust_store', value: 'update_trust_store' }
    ]}
>
<TabItem value="update_trust_store">

Updates a trust store.

```sql
UPDATE aws.cloudfront.trust_stores
SET 
CaCertificatesBundleSource = '{{ CaCertificatesBundleSource }}'
WHERE 
id = '{{ id }}' --required
AND `If-Match` = '{{ If-Match }}' --required
AND region = '{{ region }}' --required
AND UseClientCertificateOCSPEndpoint = {{ UseClientCertificateOCSPEndpoint}}
RETURNING
Arn,
Id,
LastModifiedTime,
Name,
NumberOfCaCertificates,
Reason,
Status,
UseClientCertificateOCSPEndpoint;
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
DELETE FROM aws.cloudfront.trust_stores
WHERE id = '{{ id }}' --required
AND `If-Match` = '{{ If-Match }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
