--- 
title: firewall_domain_lists
hide_title: false
hide_table_of_contents: false
keywords:
  - firewall_domain_lists
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

Creates, updates, deletes, gets or lists a <code>firewall_domain_lists</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="firewall_domain_lists" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.route53globalresolver.firewall_domain_lists" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_firewall_domain_list"
    values={[
        { label: 'get_firewall_domain_list', value: 'get_firewall_domain_list' },
        { label: 'list_firewall_domain_lists', value: 'list_firewall_domain_lists' }
    ]}
>
<TabItem value="get_firewall_domain_list">

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
    <td>ID of the domain list. (pattern: &lt;code&gt;&#91;-.a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the domain list. (pattern: &lt;code&gt;(?!^&#91;0-9&#93;+$)(&#91;a-zA-Z0-9-_/' '&#93;+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) of the domain list. (pattern: &lt;code&gt;arn:&#91;-.a-z0-9&#93;&#123;1,63&#125;:&#91;-.a-z0-9&#93;&#123;1,63&#125;:&#91;-.a-z0-9&#93;&#123;0,63&#125;:&#91;-.a-z0-9&#93;&#123;0,63&#125;:&#91;^/&#93;.&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="client_token" /></td>
    <td><code>string</code></td>
    <td>A unique, case-sensitive identifier to ensure idempotency. This means that making the same request multiple times with the same clientToken has the same result every time.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time and date the domain list was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the domain list.</td>
</tr>
<tr>
    <td><CopyableCode code="domain_count" /></td>
    <td><code>integer</code></td>
    <td>Number of domains in the domain list.</td>
</tr>
<tr>
    <td><CopyableCode code="global_resolver_id" /></td>
    <td><code>string</code></td>
    <td>ID of the Global Resolver that the domain list is associated to. (pattern: &lt;code&gt;&#91;-.a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Operational status of the domain list. (CREATING, OPERATIONAL, UPDATING, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>Additional information about the status of the domain list.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the domain list was updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_firewall_domain_lists">

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
    <td>The unique identifier of the firewall domain list. (pattern: &lt;code&gt;&#91;-.a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the firewall domain list. (pattern: &lt;code&gt;(?!^&#91;0-9&#93;+$)(&#91;a-zA-Z0-9-_/' '&#93;+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the firewall domain list. (pattern: &lt;code&gt;arn:&#91;-.a-z0-9&#93;&#123;1,63&#125;:&#91;-.a-z0-9&#93;&#123;1,63&#125;:&#91;-.a-z0-9&#93;&#123;0,63&#125;:&#91;-.a-z0-9&#93;&#123;0,63&#125;:&#91;^/&#93;.&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the firewall domain list was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the firewall domain list.</td>
</tr>
<tr>
    <td><CopyableCode code="global_resolver_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the global resolver that the firewall domain list is associated with. (pattern: &lt;code&gt;&#91;-.a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the firewall domain list. (CREATING, OPERATIONAL, UPDATING, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the firewall domain list was last updated.</td>
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
    <td><a href="#get_firewall_domain_list"><CopyableCode code="get_firewall_domain_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-firewall_domain_list_id"><code>firewall_domain_list_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a firewall domain list. Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify --region us-east-2 on Amazon Web Services CLI commands.</td>
</tr>
<tr>
    <td><a href="#list_firewall_domain_lists"><CopyableCode code="list_firewall_domain_lists" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-max_results"><code>max_results</code></a>, <a href="#parameter-next_token"><code>next_token</code></a>, <a href="#parameter-global_resolver_id"><code>global_resolver_id</code></a></td>
    <td>Lists all firewall domain lists for a Route 53 Global Resolver with pagination support. Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify --region us-east-2 on Amazon Web Services CLI commands.</td>
</tr>
<tr>
    <td><a href="#create_firewall_domain_list"><CopyableCode code="create_firewall_domain_list" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-global_resolver_id"><code>global_resolver_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates a firewall domain list. Domain lists are reusable sets of domain specifications that you use in DNS firewall rules to allow, block, or alert on DNS queries to specific domains. Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify --region us-east-2 on Amazon Web Services CLI commands.</td>
</tr>
<tr>
    <td><a href="#delete_firewall_domain_list"><CopyableCode code="delete_firewall_domain_list" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-firewall_domain_list_id"><code>firewall_domain_list_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a firewall domain list. This operation cannot be undone. Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify --region us-east-2 on Amazon Web Services CLI commands.</td>
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
    <td>The unique identifier of the firewall domain list to delete.</td>
</tr>
<tr id="parameter-global_resolver_id">
    <td><CopyableCode code="global_resolver_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Route 53 Global Resolver that the domain list will be associated with.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-global_resolver_id">
    <td><CopyableCode code="global_resolver_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Global Resolver that contains the DNS view the domain lists are associated to.</td>
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
    defaultValue="get_firewall_domain_list"
    values={[
        { label: 'get_firewall_domain_list', value: 'get_firewall_domain_list' },
        { label: 'list_firewall_domain_lists', value: 'list_firewall_domain_lists' }
    ]}
>
<TabItem value="get_firewall_domain_list">

Retrieves information about a firewall domain list. Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify --region us-east-2 on Amazon Web Services CLI commands.

```sql
SELECT
id,
name,
arn,
client_token,
created_at,
description,
domain_count,
global_resolver_id,
status,
status_message,
updated_at
FROM aws.route53globalresolver.firewall_domain_lists
WHERE firewall_domain_list_id = '{{ firewall_domain_list_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_firewall_domain_lists">

Lists all firewall domain lists for a Route 53 Global Resolver with pagination support. Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify --region us-east-2 on Amazon Web Services CLI commands.

```sql
SELECT
id,
name,
arn,
created_at,
description,
global_resolver_id,
status,
updated_at
FROM aws.route53globalresolver.firewall_domain_lists
WHERE region = '{{ region }}' -- required
AND max_results = '{{ max_results }}'
AND next_token = '{{ next_token }}'
AND global_resolver_id = '{{ global_resolver_id }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_firewall_domain_list"
    values={[
        { label: 'create_firewall_domain_list', value: 'create_firewall_domain_list' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_firewall_domain_list">

Creates a firewall domain list. Domain lists are reusable sets of domain specifications that you use in DNS firewall rules to allow, block, or alert on DNS queries to specific domains. Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify --region us-east-2 on Amazon Web Services CLI commands.

```sql
INSERT INTO aws.route53globalresolver.firewall_domain_lists (
clientToken,
description,
name,
tags,
global_resolver_id,
region
)
SELECT 
'{{ clientToken }}',
'{{ description }}',
'{{ name }}' /* required */,
'{{ tags }}',
'{{ global_resolver_id }}',
'{{ region }}'
RETURNING
id,
name,
arn,
created_at,
description,
domain_count,
global_resolver_id,
status,
updated_at
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: firewall_domain_lists
  props:
    - name: global_resolver_id
      value: "{{ global_resolver_id }}"
      description: Required parameter for the firewall_domain_lists resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the firewall_domain_lists resource.
    - name: clientToken
      value: "{{ clientToken }}"
    - name: description
      value: "{{ description }}"
    - name: name
      value: "{{ name }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_firewall_domain_list"
    values={[
        { label: 'delete_firewall_domain_list', value: 'delete_firewall_domain_list' }
    ]}
>
<TabItem value="delete_firewall_domain_list">

Deletes a firewall domain list. This operation cannot be undone. Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify --region us-east-2 on Amazon Web Services CLI commands.

```sql
DELETE FROM aws.route53globalresolver.firewall_domain_lists
WHERE firewall_domain_list_id = '{{ firewall_domain_list_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
