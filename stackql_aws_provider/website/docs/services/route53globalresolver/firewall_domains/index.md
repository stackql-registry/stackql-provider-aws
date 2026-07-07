--- 
title: firewall_domains
hide_title: false
hide_table_of_contents: false
keywords:
  - firewall_domains
  - route53globalresolver
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.route53globalresolver.firewall_domains" /></td></tr>
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
    <td>List of domains in the specified domain list.</td>
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
    <td><a href="#parameter-firewall_domain_list_id"><code>firewall_domain_list_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-max_results"><code>max_results</code></a>, <a href="#parameter-next_token"><code>next_token</code></a></td>
    <td>Lists all the domains in DNS Firewall domain list you have created. Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify --region us-east-2 on Amazon Web Services CLI commands.</td>
</tr>
<tr>
    <td><a href="#update_firewall_domains"><CopyableCode code="update_firewall_domains" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-firewall_domain_list_id"><code>firewall_domain_list_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-domains"><code>domains</code></a>, <a href="#parameter-operation"><code>operation</code></a></td>
    <td></td>
    <td>Updates a DNS Firewall domain list from an array of specified domains. Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify --region us-east-2 on Amazon Web Services CLI commands.</td>
</tr>
<tr>
    <td><a href="#import_firewall_domains"><CopyableCode code="import_firewall_domains" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-firewall_domain_list_id"><code>firewall_domain_list_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-domainFileUrl"><code>domainFileUrl</code></a>, <a href="#parameter-operation"><code>operation</code></a></td>
    <td></td>
    <td>Imports a list of domains from an Amazon S3 file into a firewall domain list. The file should contain one domain per line. Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify --region us-east-2 on Amazon Web Services CLI commands.</td>
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
<tr id="parameter-firewall_domain_list_id">
    <td><CopyableCode code="firewall_domain_list_id" /></td>
    <td><code>string</code></td>
    <td>ID of the DNS Firewall domain list that you want to import the domain list to.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-max_results">
    <td><CopyableCode code="max_results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to retrieve in a single call.</td>
</tr>
<tr id="parameter-next_token">
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>A pagination token used for large sets of results that can't be returned in a single response.</td>
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

Lists all the domains in DNS Firewall domain list you have created. Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify --region us-east-2 on Amazon Web Services CLI commands.

```sql
SELECT
domain
FROM aws.route53globalresolver.firewall_domains
WHERE firewall_domain_list_id = '{{ firewall_domain_list_id }}' -- required
AND region = '{{ region }}' -- required
AND max_results = '{{ max_results }}'
AND next_token = '{{ next_token }}'
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

Updates a DNS Firewall domain list from an array of specified domains. Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify --region us-east-2 on Amazon Web Services CLI commands.

```sql
UPDATE aws.route53globalresolver.firewall_domains
SET 
domains = '{{ domains }}',
operation = '{{ operation }}'
WHERE 
firewall_domain_list_id = '{{ firewall_domain_list_id }}' --required
AND region = '{{ region }}' --required
AND domains = '{{ domains }}' --required
AND operation = '{{ operation }}' --required
RETURNING
id,
name,
status;
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

Imports a list of domains from an Amazon S3 file into a firewall domain list. The file should contain one domain per line. Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify --region us-east-2 on Amazon Web Services CLI commands.

```sql
EXEC aws.route53globalresolver.firewall_domains.import_firewall_domains 
@firewall_domain_list_id='{{ firewall_domain_list_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"domainFileUrl": "{{ domainFileUrl }}", 
"operation": "{{ operation }}"
}'
;
```
</TabItem>
</Tabs>
