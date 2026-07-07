--- 
title: firewall_domains
hide_title: false
hide_table_of_contents: false
keywords:
  - firewall_domains
  - route53resolver
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

Creates, updates, deletes, gets or lists a <code>firewall_domains</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="firewall_domains" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.route53resolver.firewall_domains" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_firewall_domains"
    values={[
        { label: 'list_firewall_domains', value: 'list_firewall_domains' }
    ]}
>
<TabItem value="list_firewall_domains">

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
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>A list of the domains in the firewall domain list. This might be a partial list of the domains that you've defined in the domain list. For information, see MaxResults.</td>
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
    <td><a href="#list_firewall_domains"><CopyableCode code="list_firewall_domains" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the domains that you have defined for the specified firewall domain list. A single call might return only a partial list of the domains. For information, see MaxResults.</td>
</tr>
<tr>
    <td><a href="#update_firewall_domains"><CopyableCode code="update_firewall_domains" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FirewallDomainListId"><code>FirewallDomainListId</code></a>, <a href="#parameter-Operation"><code>Operation</code></a>, <a href="#parameter-Domains"><code>Domains</code></a></td>
    <td></td>
    <td>Updates the firewall domain list from an array of domain specifications.</td>
</tr>
<tr>
    <td><a href="#import_firewall_domains"><CopyableCode code="import_firewall_domains" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FirewallDomainListId"><code>FirewallDomainListId</code></a>, <a href="#parameter-Operation"><code>Operation</code></a>, <a href="#parameter-DomainFileUrl"><code>DomainFileUrl</code></a></td>
    <td></td>
    <td>Imports domain names from a file into a domain list, for use in a DNS firewall rule group. Each domain specification in your domain list must satisfy the following requirements: It can optionally start with * (asterisk). With the exception of the optional starting asterisk, it must only contain the following characters: A-Z, a-z, 0-9, - (hyphen). It must be from 1-255 characters in length.</td>
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
    defaultValue="list_firewall_domains"
    values={[
        { label: 'list_firewall_domains', value: 'list_firewall_domains' }
    ]}
>
<TabItem value="list_firewall_domains">

Retrieves the domains that you have defined for the specified firewall domain list. A single call might return only a partial list of the domains. For information, see MaxResults.

```sql
SELECT
domain
FROM aws.route53resolver.firewall_domains
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_firewall_domains"
    values={[
        { label: 'update_firewall_domains', value: 'update_firewall_domains' }
    ]}
>
<TabItem value="update_firewall_domains">

Updates the firewall domain list from an array of domain specifications.

```sql
UPDATE aws.route53resolver.firewall_domains
SET 
FirewallDomainListId = '{{ FirewallDomainListId }}',
Operation = '{{ Operation }}',
Domains = '{{ Domains }}'
WHERE 
region = '{{ region }}' --required
AND FirewallDomainListId = '{{ FirewallDomainListId }}' --required
AND Operation = '{{ Operation }}' --required
AND Domains = '{{ Domains }}' --required
RETURNING
Id,
Name,
Status,
StatusMessage;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="import_firewall_domains"
    values={[
        { label: 'import_firewall_domains', value: 'import_firewall_domains' }
    ]}
>
<TabItem value="import_firewall_domains">

Imports domain names from a file into a domain list, for use in a DNS firewall rule group. Each domain specification in your domain list must satisfy the following requirements: It can optionally start with * (asterisk). With the exception of the optional starting asterisk, it must only contain the following characters: A-Z, a-z, 0-9, - (hyphen). It must be from 1-255 characters in length.

```sql
EXEC aws.route53resolver.firewall_domains.import_firewall_domains 
@region='{{ region }}' --required 
@@json=
'{
"FirewallDomainListId": "{{ FirewallDomainListId }}", 
"Operation": "{{ Operation }}", 
"DomainFileUrl": "{{ DomainFileUrl }}"
}'
;
```
</TabItem>
</Tabs>
