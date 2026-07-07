--- 
title: managed_firewall_domain_lists
hide_title: false
hide_table_of_contents: false
keywords:
  - managed_firewall_domain_lists
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

Creates, updates, deletes, gets or lists a <code>managed_firewall_domain_lists</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="managed_firewall_domain_lists" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.route53globalresolver.managed_firewall_domain_lists" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_managed_firewall_domain_list"
    values={[
        { label: 'get_managed_firewall_domain_list', value: 'get_managed_firewall_domain_list' },
        { label: 'list_managed_firewall_domain_lists', value: 'list_managed_firewall_domain_lists' }
    ]}
>
<TabItem value="get_managed_firewall_domain_list">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>ID of the Managed Domain List. (pattern: &lt;code&gt;&#91;-.a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the Managed Domain List. (pattern: &lt;code&gt;(?!^&#91;0-9&#93;+$)(&#91;a-zA-Z0-9-_/' '&#93;+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the Managed Domain List.</td>
</tr>
<tr>
    <td><CopyableCode code="managedListType" /></td>
    <td><code>string</code></td>
    <td>Type of the managed category. This is either THREAT or CONTENT.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_managed_firewall_domain_lists">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the managed firewall domain list. (pattern: &lt;code&gt;&#91;-.a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the managed firewall domain list. (pattern: &lt;code&gt;(?!^&#91;0-9&#93;+$)(&#91;a-zA-Z0-9-_/' '&#93;+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the managed firewall domain list.</td>
</tr>
<tr>
    <td><CopyableCode code="managedListType" /></td>
    <td><code>string</code></td>
    <td>The type of the managed firewall domain list.</td>
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
    <td><a href="#get_managed_firewall_domain_list"><CopyableCode code="get_managed_firewall_domain_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-managed_firewall_domain_list_id"><code>managed_firewall_domain_list_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about an Amazon Web Services-managed firewall domain list. Managed domain lists contain domains associated with malicious activity, content categories, or specific threats. Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify --region us-east-2 on Amazon Web Services CLI commands.</td>
</tr>
<tr>
    <td><a href="#list_managed_firewall_domain_lists"><CopyableCode code="list_managed_firewall_domain_lists" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-managed_firewall_domain_list_type"><code>managed_firewall_domain_list_type</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-max_results"><code>max_results</code></a>, <a href="#parameter-next_token"><code>next_token</code></a></td>
    <td>Returns a paginated list of the Amazon Web Services Managed DNS Lists and the categories for DNS Firewall. The categories are either THREAT or CONTENT. Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify --region us-east-2 on Amazon Web Services CLI commands.</td>
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
<tr id="parameter-managed_firewall_domain_list_id">
    <td><CopyableCode code="managed_firewall_domain_list_id" /></td>
    <td><code>string</code></td>
    <td>ID of the Managed Domain List.</td>
</tr>
<tr id="parameter-managed_firewall_domain_list_type">
    <td><CopyableCode code="managed_firewall_domain_list_type" /></td>
    <td><code>string</code></td>
    <td>The category of the Manage DNS list either THREAT or CONTENT.</td>
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
    defaultValue="get_managed_firewall_domain_list"
    values={[
        { label: 'get_managed_firewall_domain_list', value: 'get_managed_firewall_domain_list' },
        { label: 'list_managed_firewall_domain_lists', value: 'list_managed_firewall_domain_lists' }
    ]}
>
<TabItem value="get_managed_firewall_domain_list">

Retrieves information about an Amazon Web Services-managed firewall domain list. Managed domain lists contain domains associated with malicious activity, content categories, or specific threats. Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify --region us-east-2 on Amazon Web Services CLI commands.

```sql
SELECT
id,
name,
description,
managedListType
FROM aws.route53globalresolver.managed_firewall_domain_lists
WHERE managed_firewall_domain_list_id = '{{ managed_firewall_domain_list_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_managed_firewall_domain_lists">

Returns a paginated list of the Amazon Web Services Managed DNS Lists and the categories for DNS Firewall. The categories are either THREAT or CONTENT. Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify --region us-east-2 on Amazon Web Services CLI commands.

```sql
SELECT
id,
name,
description,
managedListType
FROM aws.route53globalresolver.managed_firewall_domain_lists
WHERE managed_firewall_domain_list_type = '{{ managed_firewall_domain_list_type }}' -- required
AND region = '{{ region }}' -- required
AND max_results = '{{ max_results }}'
AND next_token = '{{ next_token }}'
;
```
</TabItem>
</Tabs>
