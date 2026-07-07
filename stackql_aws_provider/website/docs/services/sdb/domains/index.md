--- 
title: domains
hide_title: false
hide_table_of_contents: false
keywords:
  - domains
  - sdb
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sdb.domains" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_domains"
    values={[
        { label: 'list_domains', value: 'list_domains' }
    ]}
>
<TabItem value="list_domains">

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
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>A list of domain names that match the expression.</td>
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
    <td><a href="#list_domains"><CopyableCode code="list_domains" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MaxNumberOfDomains"><code>MaxNumberOfDomains</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>The ListDomains operation lists all domains associated with the Access Key ID. It returns domain names up to the limit set by MaxNumberOfDomains. A NextToken is returned if there are more than MaxNumberOfDomains domains. Calling ListDomains successive times with the NextToken provided by the operation returns up to MaxNumberOfDomains more domain names with each successive operation call.</td>
</tr>
<tr>
    <td><a href="#create_domain"><CopyableCode code="create_domain" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-DomainName"><code>DomainName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>The CreateDomain operation creates a new domain. The domain name should be unique among the domains associated with the Access Key ID provided in the request. The CreateDomain operation may take 10 or more seconds to complete. The client can create up to 100 domains per account. If the client requires additional domains, go to http:​//aws.amazon.com/contact-us/simpledb-limit-request/.</td>
</tr>
<tr>
    <td><a href="#delete_domain"><CopyableCode code="delete_domain" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-DomainName"><code>DomainName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>The DeleteDomain operation deletes a domain. Any items (and their attributes) in the domain are deleted as well. The DeleteDomain operation might take 10 or more seconds to complete.</td>
</tr>
<tr>
    <td><a href="#domain_metadata"><CopyableCode code="domain_metadata" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-DomainName"><code>DomainName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the domain, including when the domain was created, the number of items and attributes in the domain, and the size of the attribute names and values.</td>
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
<tr id="parameter-DomainName">
    <td><CopyableCode code="DomainName" /></td>
    <td><code>string</code></td>
    <td>The name of the domain for which to display the metadata of.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-MaxNumberOfDomains">
    <td><CopyableCode code="MaxNumberOfDomains" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of domain names you want returned. The range is 1 to 100. The default setting is 100.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>A string informing Amazon SimpleDB where to start the next list of domain names.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_domains"
    values={[
        { label: 'list_domains', value: 'list_domains' }
    ]}
>
<TabItem value="list_domains">

The ListDomains operation lists all domains associated with the Access Key ID. It returns domain names up to the limit set by MaxNumberOfDomains. A NextToken is returned if there are more than MaxNumberOfDomains domains. Calling ListDomains successive times with the NextToken provided by the operation returns up to MaxNumberOfDomains more domain names with each successive operation call.

```sql
SELECT
domain_name
FROM aws.sdb.domains
WHERE region = '{{ region }}' -- required
AND MaxNumberOfDomains = '{{ MaxNumberOfDomains }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_domain"
    values={[
        { label: 'create_domain', value: 'create_domain' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_domain">

The CreateDomain operation creates a new domain. The domain name should be unique among the domains associated with the Access Key ID provided in the request. The CreateDomain operation may take 10 or more seconds to complete. The client can create up to 100 domains per account. If the client requires additional domains, go to http://aws.amazon.com/contact-us/simpledb-limit-request/.

```sql
INSERT INTO aws.sdb.domains (
DomainName,
region
)
SELECT 
'{{ DomainName }}',
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: domains
  props:
    - name: DomainName
      value: "{{ DomainName }}"
      description: Required parameter for the domains resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the domains resource.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_domain"
    values={[
        { label: 'delete_domain', value: 'delete_domain' }
    ]}
>
<TabItem value="delete_domain">

The DeleteDomain operation deletes a domain. Any items (and their attributes) in the domain are deleted as well. The DeleteDomain operation might take 10 or more seconds to complete.

```sql
DELETE FROM aws.sdb.domains
WHERE DomainName = '{{ DomainName }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="domain_metadata"
    values={[
        { label: 'domain_metadata', value: 'domain_metadata' }
    ]}
>
<TabItem value="domain_metadata">

Returns information about the domain, including when the domain was created, the number of items and attributes in the domain, and the size of the attribute names and values.

```sql
EXEC aws.sdb.domains.domain_metadata 
@DomainName='{{ DomainName }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
