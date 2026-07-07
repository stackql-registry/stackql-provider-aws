--- 
title: custom_domain_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - custom_domain_associations
  - redshift
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

Creates, updates, deletes, gets or lists a <code>custom_domain_associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="custom_domain_associations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.redshift.custom_domain_associations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_custom_domain_associations"
    values={[
        { label: 'describe_custom_domain_associations', value: 'describe_custom_domain_associations' }
    ]}
>
<TabItem value="describe_custom_domain_associations">

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
    <td><CopyableCode code="CertificateAssociations" /></td>
    <td><code>string</code></td>
    <td>A list of all associated clusters and domain names tied to a specific certificate.</td>
</tr>
<tr>
    <td><CopyableCode code="CustomDomainCertificateArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the certificate associated with the custom domain.</td>
</tr>
<tr>
    <td><CopyableCode code="CustomDomainCertificateExpiryDate" /></td>
    <td><code>string</code></td>
    <td>The expiration date for the certificate.</td>
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
    <td><a href="#describe_custom_domain_associations"><CopyableCode code="describe_custom_domain_associations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-CustomDomainName"><code>CustomDomainName</code></a>, <a href="#parameter-CustomDomainCertificateArn"><code>CustomDomainCertificateArn</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a></td>
    <td>Contains information about custom domain associations for a cluster.</td>
</tr>
<tr>
    <td><a href="#create_custom_domain_association"><CopyableCode code="create_custom_domain_association" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-CustomDomainName"><code>CustomDomainName</code></a>, <a href="#parameter-CustomDomainCertificateArn"><code>CustomDomainCertificateArn</code></a>, <a href="#parameter-ClusterIdentifier"><code>ClusterIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Used to create a custom domain name for a cluster. Properties include the custom domain name, the cluster the custom domain is associated with, and the certificate Amazon Resource Name (ARN).</td>
</tr>
<tr>
    <td><a href="#modify_custom_domain_association"><CopyableCode code="modify_custom_domain_association" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-CustomDomainName"><code>CustomDomainName</code></a>, <a href="#parameter-CustomDomainCertificateArn"><code>CustomDomainCertificateArn</code></a>, <a href="#parameter-ClusterIdentifier"><code>ClusterIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Contains information for changing a custom domain association.</td>
</tr>
<tr>
    <td><a href="#delete_custom_domain_association"><CopyableCode code="delete_custom_domain_association" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-ClusterIdentifier"><code>ClusterIdentifier</code></a>, <a href="#parameter-CustomDomainName"><code>CustomDomainName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Contains information about deleting a custom domain association for a cluster.</td>
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
<tr id="parameter-ClusterIdentifier">
    <td><CopyableCode code="ClusterIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the cluster to delete a custom domain association for.</td>
</tr>
<tr id="parameter-CustomDomainCertificateArn">
    <td><CopyableCode code="CustomDomainCertificateArn" /></td>
    <td><code>string</code></td>
    <td>The certificate Amazon Resource Name (ARN) for the changed custom domain association.</td>
</tr>
<tr id="parameter-CustomDomainName">
    <td><CopyableCode code="CustomDomainName" /></td>
    <td><code>string</code></td>
    <td>The custom domain name for the custom domain association.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-CustomDomainCertificateArn">
    <td><CopyableCode code="CustomDomainCertificateArn" /></td>
    <td><code>string</code></td>
    <td>The certificate Amazon Resource Name (ARN) for the custom domain association.</td>
</tr>
<tr id="parameter-CustomDomainName">
    <td><CopyableCode code="CustomDomainName" /></td>
    <td><code>string</code></td>
    <td>The custom domain name for the custom domain association.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>The marker for the custom domain association.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum records setting for the associated custom domain.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_custom_domain_associations"
    values={[
        { label: 'describe_custom_domain_associations', value: 'describe_custom_domain_associations' }
    ]}
>
<TabItem value="describe_custom_domain_associations">

Contains information about custom domain associations for a cluster.

```sql
SELECT
CertificateAssociations,
CustomDomainCertificateArn,
CustomDomainCertificateExpiryDate
FROM aws.redshift.custom_domain_associations
WHERE region = '{{ region }}' -- required
AND CustomDomainName = '{{ CustomDomainName }}'
AND CustomDomainCertificateArn = '{{ CustomDomainCertificateArn }}'
AND MaxRecords = '{{ MaxRecords }}'
AND Marker = '{{ Marker }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_custom_domain_association"
    values={[
        { label: 'create_custom_domain_association', value: 'create_custom_domain_association' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_custom_domain_association">

Used to create a custom domain name for a cluster. Properties include the custom domain name, the cluster the custom domain is associated with, and the certificate Amazon Resource Name (ARN).

```sql
INSERT INTO aws.redshift.custom_domain_associations (
CustomDomainName,
CustomDomainCertificateArn,
ClusterIdentifier,
region
)
SELECT 
'{{ CustomDomainName }}',
'{{ CustomDomainCertificateArn }}',
'{{ ClusterIdentifier }}',
'{{ region }}'
RETURNING
ClusterIdentifier,
CustomDomainCertExpiryTime,
CustomDomainCertificateArn,
CustomDomainName
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: custom_domain_associations
  props:
    - name: CustomDomainName
      value: "{{ CustomDomainName }}"
      description: Required parameter for the custom_domain_associations resource.
    - name: CustomDomainCertificateArn
      value: "{{ CustomDomainCertificateArn }}"
      description: Required parameter for the custom_domain_associations resource.
    - name: ClusterIdentifier
      value: "{{ ClusterIdentifier }}"
      description: Required parameter for the custom_domain_associations resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the custom_domain_associations resource.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_custom_domain_association"
    values={[
        { label: 'modify_custom_domain_association', value: 'modify_custom_domain_association' }
    ]}
>
<TabItem value="modify_custom_domain_association">

Contains information for changing a custom domain association.

```sql
UPDATE aws.redshift.custom_domain_associations
SET 
-- No updatable properties
WHERE 
CustomDomainName = '{{ CustomDomainName }}' --required
AND CustomDomainCertificateArn = '{{ CustomDomainCertificateArn }}' --required
AND ClusterIdentifier = '{{ ClusterIdentifier }}' --required
AND region = '{{ region }}' --required
RETURNING
ClusterIdentifier,
CustomDomainCertExpiryTime,
CustomDomainCertificateArn,
CustomDomainName;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_custom_domain_association"
    values={[
        { label: 'delete_custom_domain_association', value: 'delete_custom_domain_association' }
    ]}
>
<TabItem value="delete_custom_domain_association">

Contains information about deleting a custom domain association for a cluster.

```sql
DELETE FROM aws.redshift.custom_domain_associations
WHERE ClusterIdentifier = '{{ ClusterIdentifier }}' --required
AND CustomDomainName = '{{ CustomDomainName }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
