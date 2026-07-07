--- 
title: domains
hide_title: false
hide_table_of_contents: false
keywords:
  - domains
  - lightsail
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

Creates, updates, deletes, gets or lists a <code>domains</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="domains" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lightsail.domains" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_domain"
    values={[
        { label: 'get_domain', value: 'get_domain' },
        { label: 'get_domains', value: 'get_domains' }
    ]}
>
<TabItem value="get_domain">

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
    <td>The name of the domain. (pattern: &lt;code&gt;\w&#91;\w\-&#93;*\w&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the domain recordset (arn:aws:lightsail:global:123456789101:Domain/824cede0-abc7-4f84-8dbc-12345EXAMPLE). (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the domain recordset was created.</td>
</tr>
<tr>
    <td><CopyableCode code="domainEntries" /></td>
    <td><code>array</code></td>
    <td>An array of key-value pairs containing information about the domain entries.</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>object</code></td>
    <td>The AWS Region and Availability Zones where the domain recordset was created.</td>
</tr>
<tr>
    <td><CopyableCode code="registeredDomainDelegationInfo" /></td>
    <td><code>object</code></td>
    <td>An object that describes the state of the Route 53 domain delegation to a Lightsail DNS zone.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceType" /></td>
    <td><code>string</code></td>
    <td>The resource type. (ContainerService, Instance, StaticIp, KeyPair, InstanceSnapshot, Domain, PeeredVpc, LoadBalancer, LoadBalancerTlsCertificate, Disk, DiskSnapshot, RelationalDatabase, RelationalDatabaseSnapshot, ExportSnapshotRecord, CloudFormationStackRecord, Alarm, ContactMethod, Distribution, Certificate, Bucket)</td>
</tr>
<tr>
    <td><CopyableCode code="supportCode" /></td>
    <td><code>string</code></td>
    <td>The support code. Include this code in your email to support when you have questions about an instance or another resource in Lightsail. This code enables our support team to look up your Lightsail information more easily.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>The tag keys and optional values for the resource. For more information about tags in Lightsail, see the Amazon Lightsail Developer Guide.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_domains">

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
    <td>The name of the domain. (pattern: &lt;code&gt;\w&#91;\w\-&#93;*\w&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the domain recordset (arn:aws:lightsail:global:123456789101:Domain/824cede0-abc7-4f84-8dbc-12345EXAMPLE). (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the domain recordset was created.</td>
</tr>
<tr>
    <td><CopyableCode code="domainEntries" /></td>
    <td><code>array</code></td>
    <td>An array of key-value pairs containing information about the domain entries.</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>object</code></td>
    <td>The AWS Region and Availability Zones where the domain recordset was created.</td>
</tr>
<tr>
    <td><CopyableCode code="registeredDomainDelegationInfo" /></td>
    <td><code>object</code></td>
    <td>An object that describes the state of the Route 53 domain delegation to a Lightsail DNS zone.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceType" /></td>
    <td><code>string</code></td>
    <td>The resource type. (ContainerService, Instance, StaticIp, KeyPair, InstanceSnapshot, Domain, PeeredVpc, LoadBalancer, LoadBalancerTlsCertificate, Disk, DiskSnapshot, RelationalDatabase, RelationalDatabaseSnapshot, ExportSnapshotRecord, CloudFormationStackRecord, Alarm, ContactMethod, Distribution, Certificate, Bucket)</td>
</tr>
<tr>
    <td><CopyableCode code="supportCode" /></td>
    <td><code>string</code></td>
    <td>The support code. Include this code in your email to support when you have questions about an instance or another resource in Lightsail. This code enables our support team to look up your Lightsail information more easily.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>The tag keys and optional values for the resource. For more information about tags in Lightsail, see the Amazon Lightsail Developer Guide.</td>
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
    <td><a href="#get_domain"><CopyableCode code="get_domain" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a specific domain recordset.</td>
</tr>
<tr>
    <td><a href="#get_domains"><CopyableCode code="get_domains" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of all domains in the user's account.</td>
</tr>
<tr>
    <td><a href="#create_domain_entry"><CopyableCode code="create_domain_entry" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-domainName"><code>domainName</code></a>, <a href="#parameter-domainEntry"><code>domainEntry</code></a></td>
    <td></td>
    <td>Creates one of the following domain name system (DNS) records in a domain DNS zone: Address (A), canonical name (CNAME), mail exchanger (MX), name server (NS), start of authority (SOA), service locator (SRV), or text (TXT). The create domain entry operation supports tag-based access control via resource tags applied to the resource identified by domain name. For more information, see the Amazon Lightsail Developer Guide.</td>
</tr>
<tr>
    <td><a href="#create_domain"><CopyableCode code="create_domain" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-domainName"><code>domainName</code></a></td>
    <td></td>
    <td>Creates a domain resource for the specified domain (example.com). The create domain operation supports tag-based access control via request tags. For more information, see the Amazon Lightsail Developer Guide.</td>
</tr>
<tr>
    <td><a href="#update_domain_entry"><CopyableCode code="update_domain_entry" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-domainName"><code>domainName</code></a>, <a href="#parameter-domainEntry"><code>domainEntry</code></a></td>
    <td></td>
    <td>Updates a domain recordset after it is created. The update domain entry operation supports tag-based access control via resource tags applied to the resource identified by domain name. For more information, see the Amazon Lightsail Developer Guide.</td>
</tr>
<tr>
    <td><a href="#delete_domain_entry"><CopyableCode code="delete_domain_entry" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a specific domain entry. The delete domain entry operation supports tag-based access control via resource tags applied to the resource identified by domain name. For more information, see the Amazon Lightsail Developer Guide.</td>
</tr>
<tr>
    <td><a href="#delete_domain"><CopyableCode code="delete_domain" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified domain recordset and all of its domain records. The delete domain operation supports tag-based access control via resource tags applied to the resource identified by domain name. For more information, see the Amazon Lightsail Developer Guide.</td>
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
    defaultValue="get_domain"
    values={[
        { label: 'get_domain', value: 'get_domain' },
        { label: 'get_domains', value: 'get_domains' }
    ]}
>
<TabItem value="get_domain">

Returns information about a specific domain recordset.

```sql
SELECT
name,
arn,
createdAt,
domainEntries,
location,
registeredDomainDelegationInfo,
resourceType,
supportCode,
tags
FROM aws.lightsail.domains
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_domains">

Returns a list of all domains in the user's account.

```sql
SELECT
name,
arn,
createdAt,
domainEntries,
location,
registeredDomainDelegationInfo,
resourceType,
supportCode,
tags
FROM aws.lightsail.domains
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_domain_entry"
    values={[
        { label: 'create_domain_entry', value: 'create_domain_entry' },
        { label: 'create_domain', value: 'create_domain' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_domain_entry">

Creates one of the following domain name system (DNS) records in a domain DNS zone: Address (A), canonical name (CNAME), mail exchanger (MX), name server (NS), start of authority (SOA), service locator (SRV), or text (TXT). The create domain entry operation supports tag-based access control via resource tags applied to the resource identified by domain name. For more information, see the Amazon Lightsail Developer Guide.

```sql
INSERT INTO aws.lightsail.domains (
domainName,
domainEntry,
region
)
SELECT 
'{{ domainName }}' /* required */,
'{{ domainEntry }}' /* required */,
'{{ region }}'
RETURNING
operation
;
```
</TabItem>
<TabItem value="create_domain">

Creates a domain resource for the specified domain (example.com). The create domain operation supports tag-based access control via request tags. For more information, see the Amazon Lightsail Developer Guide.

```sql
INSERT INTO aws.lightsail.domains (
domainName,
tags,
region
)
SELECT 
'{{ domainName }}' /* required */,
'{{ tags }}',
'{{ region }}'
RETURNING
operation
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: domains
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the domains resource.
    - name: domainName
      value: "{{ domainName }}"
      description: |
        The domain name to manage (example.com).
    - name: domainEntry
      description: |
        An array of key-value pairs containing information about the domain entry request.
      value:
        id: "{{ id }}"
        name: "{{ name }}"
        target: "{{ target }}"
        isAlias: {{ isAlias }}
        type_: "{{ type_ }}"
        options: "{{ options }}"
    - name: tags
      description: |
        The tag keys and optional values to add to the resource during create. Use the TagResource action to tag a resource after it's created.
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_domain_entry"
    values={[
        { label: 'update_domain_entry', value: 'update_domain_entry' }
    ]}
>
<TabItem value="update_domain_entry">

Updates a domain recordset after it is created. The update domain entry operation supports tag-based access control via resource tags applied to the resource identified by domain name. For more information, see the Amazon Lightsail Developer Guide.

```sql
UPDATE aws.lightsail.domains
SET 
domainName = '{{ domainName }}',
domainEntry = '{{ domainEntry }}'
WHERE 
region = '{{ region }}' --required
AND domainName = '{{ domainName }}' --required
AND domainEntry = '{{ domainEntry }}' --required
RETURNING
operations;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_domain_entry"
    values={[
        { label: 'delete_domain_entry', value: 'delete_domain_entry' },
        { label: 'delete_domain', value: 'delete_domain' }
    ]}
>
<TabItem value="delete_domain_entry">

Deletes a specific domain entry. The delete domain entry operation supports tag-based access control via resource tags applied to the resource identified by domain name. For more information, see the Amazon Lightsail Developer Guide.

```sql
DELETE FROM aws.lightsail.domains
WHERE region = '{{ region }}' --required
;
```
</TabItem>
<TabItem value="delete_domain">

Deletes the specified domain recordset and all of its domain records. The delete domain operation supports tag-based access control via resource tags applied to the resource identified by domain name. For more information, see the Amazon Lightsail Developer Guide.

```sql
DELETE FROM aws.lightsail.domains
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
