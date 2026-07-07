--- 
title: dns_views
hide_title: false
hide_table_of_contents: false
keywords:
  - dns_views
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

Creates, updates, deletes, gets or lists a <code>dns_views</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="dns_views" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.route53globalresolver.dns_views" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_dns_view"
    values={[
        { label: 'get_dns_view', value: 'get_dns_view' },
        { label: 'list_dns_views', value: 'list_dns_views' }
    ]}
>
<TabItem value="get_dns_view">

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
    <td>ID of the DNS view. (pattern: &lt;code&gt;&#91;-.a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the DNS view. (pattern: &lt;code&gt;(?!^&#91;0-9&#93;+$)(&#91;a-zA-Z0-9-_/' '&#93;+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) of the DNS view. (pattern: &lt;code&gt;arn:&#91;-.a-z0-9&#93;&#123;1,63&#125;:&#91;-.a-z0-9&#93;&#123;1,63&#125;:&#91;-.a-z0-9&#93;&#123;0,63&#125;:&#91;-.a-z0-9&#93;&#123;0,63&#125;:&#91;^/&#93;.&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="clientToken" /></td>
    <td><code>string</code></td>
    <td>A unique, case-sensitive identifier to ensure idempotency. This means that making the same request multiple times with the same clientToken has the same result every time.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time and date the DNS view was creates on.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the DNS view.</td>
</tr>
<tr>
    <td><CopyableCode code="dnssecValidation" /></td>
    <td><code>string</code></td>
    <td>Specifies whether DNSSEC is enabled or disabled for the DNS view. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="ednsClientSubnet" /></td>
    <td><code>string</code></td>
    <td>Specifies whether edns0 client subnet is enabled. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="firewallRulesFailOpen" /></td>
    <td><code>string</code></td>
    <td>Specifies the DNS Firewall failure mode configuration. When enabled, the DNS Firewall allows DNS queries to proceed if it's unable to properly evaluate them. When disabled, the DNS Firewall blocks DNS queries it's unable to evaluate. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="globalResolverId" /></td>
    <td><code>string</code></td>
    <td>ID of the Global Resolver the DNS view is associated to. (pattern: &lt;code&gt;&#91;-.a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Operational status of the DNS view. (CREATING, OPERATIONAL, UPDATING, ENABLING, DISABLING, DISABLED, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time and date the DNS view was updated on.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_dns_views">

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
    <td>The unique identifier of the DNS view. (pattern: &lt;code&gt;&#91;-.a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the DNS view. (pattern: &lt;code&gt;(?!^&#91;0-9&#93;+$)(&#91;a-zA-Z0-9-_/' '&#93;+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the DNS view. (pattern: &lt;code&gt;arn:&#91;-.a-z0-9&#93;&#123;1,63&#125;:&#91;-.a-z0-9&#93;&#123;1,63&#125;:&#91;-.a-z0-9&#93;&#123;0,63&#125;:&#91;-.a-z0-9&#93;&#123;0,63&#125;:&#91;^/&#93;.&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="clientToken" /></td>
    <td><code>string</code></td>
    <td>The unique string that identifies the request and ensures idempotency.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the DNS view was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the DNS view.</td>
</tr>
<tr>
    <td><CopyableCode code="dnssecValidation" /></td>
    <td><code>string</code></td>
    <td>Whether DNSSEC validation is enabled for the DNS view. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="ednsClientSubnet" /></td>
    <td><code>string</code></td>
    <td>Whether EDNS Client Subnet injection is enabled for the DNS view. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="firewallRulesFailOpen" /></td>
    <td><code>string</code></td>
    <td>Whether firewall rules fail open when they cannot be evaluated. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="globalResolverId" /></td>
    <td><code>string</code></td>
    <td>The ID of the global resolver that the DNS view is associated with. (pattern: &lt;code&gt;&#91;-.a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the DNS view. (CREATING, OPERATIONAL, UPDATING, ENABLING, DISABLING, DISABLED, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the DNS view was last updated.</td>
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
    <td><a href="#get_dns_view"><CopyableCode code="get_dns_view" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-dns_view_id"><code>dns_view_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a DNS view. Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify --region us-east-2 on Amazon Web Services CLI commands.</td>
</tr>
<tr>
    <td><a href="#list_dns_views"><CopyableCode code="list_dns_views" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-global_resolver_id"><code>global_resolver_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-max_results"><code>max_results</code></a>, <a href="#parameter-next_token"><code>next_token</code></a></td>
    <td>Lists all DNS views for a Route 53 Global Resolver with pagination support. Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify --region us-east-2 on Amazon Web Services CLI commands.</td>
</tr>
<tr>
    <td><a href="#create_dns_view"><CopyableCode code="create_dns_view" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-global_resolver_id"><code>global_resolver_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates a DNS view within a Route 53 Global Resolver. A DNS view models end users, user groups, networks, and devices, and serves as a parent resource that holds configurations controlling access, authorization, DNS firewall rules, and forwarding rules. Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify --region us-east-2 on Amazon Web Services CLI commands.</td>
</tr>
<tr>
    <td><a href="#update_dns_view"><CopyableCode code="update_dns_view" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-dns_view_id"><code>dns_view_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the configuration of a DNS view. Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify --region us-east-2 on Amazon Web Services CLI commands.</td>
</tr>
<tr>
    <td><a href="#delete_dns_view"><CopyableCode code="delete_dns_view" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-dns_view_id"><code>dns_view_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a DNS view. This operation cannot be undone. Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify --region us-east-2 on Amazon Web Services CLI commands.</td>
</tr>
<tr>
    <td><a href="#disable_dns_view"><CopyableCode code="disable_dns_view" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-dns_view_id"><code>dns_view_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disables a DNS view, preventing it from serving DNS queries. Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify --region us-east-2 on Amazon Web Services CLI commands.</td>
</tr>
<tr>
    <td><a href="#enable_dns_view"><CopyableCode code="enable_dns_view" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-dns_view_id"><code>dns_view_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Enables a disabled DNS view, allowing it to serve DNS queries again. Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify --region us-east-2 on Amazon Web Services CLI commands.</td>
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
<tr id="parameter-dns_view_id">
    <td><CopyableCode code="dns_view_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the DNS view to enable.</td>
</tr>
<tr id="parameter-global_resolver_id">
    <td><CopyableCode code="global_resolver_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Route 53 Global Resolver to associate with this DNS view.</td>
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
    defaultValue="get_dns_view"
    values={[
        { label: 'get_dns_view', value: 'get_dns_view' },
        { label: 'list_dns_views', value: 'list_dns_views' }
    ]}
>
<TabItem value="get_dns_view">

Retrieves information about a DNS view. Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify --region us-east-2 on Amazon Web Services CLI commands.

```sql
SELECT
id,
name,
arn,
clientToken,
createdAt,
description,
dnssecValidation,
ednsClientSubnet,
firewallRulesFailOpen,
globalResolverId,
status,
updatedAt
FROM aws.route53globalresolver.dns_views
WHERE dns_view_id = '{{ dns_view_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_dns_views">

Lists all DNS views for a Route 53 Global Resolver with pagination support. Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify --region us-east-2 on Amazon Web Services CLI commands.

```sql
SELECT
id,
name,
arn,
clientToken,
createdAt,
description,
dnssecValidation,
ednsClientSubnet,
firewallRulesFailOpen,
globalResolverId,
status,
updatedAt
FROM aws.route53globalresolver.dns_views
WHERE global_resolver_id = '{{ global_resolver_id }}' -- required
AND region = '{{ region }}' -- required
AND max_results = '{{ max_results }}'
AND next_token = '{{ next_token }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_dns_view"
    values={[
        { label: 'create_dns_view', value: 'create_dns_view' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_dns_view">

Creates a DNS view within a Route 53 Global Resolver. A DNS view models end users, user groups, networks, and devices, and serves as a parent resource that holds configurations controlling access, authorization, DNS firewall rules, and forwarding rules. Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify --region us-east-2 on Amazon Web Services CLI commands.

```sql
INSERT INTO aws.route53globalresolver.dns_views (
clientToken,
name,
dnssecValidation,
ednsClientSubnet,
firewallRulesFailOpen,
description,
tags,
global_resolver_id,
region
)
SELECT 
'{{ clientToken }}',
'{{ name }}' /* required */,
'{{ dnssecValidation }}',
'{{ ednsClientSubnet }}',
'{{ firewallRulesFailOpen }}',
'{{ description }}',
'{{ tags }}',
'{{ global_resolver_id }}',
'{{ region }}'
RETURNING
id,
name,
arn,
clientToken,
createdAt,
description,
dnssecValidation,
ednsClientSubnet,
firewallRulesFailOpen,
globalResolverId,
status,
updatedAt
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: dns_views
  props:
    - name: global_resolver_id
      value: "{{ global_resolver_id }}"
      description: Required parameter for the dns_views resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the dns_views resource.
    - name: clientToken
      value: "{{ clientToken }}"
    - name: name
      value: "{{ name }}"
    - name: dnssecValidation
      value: "{{ dnssecValidation }}"
      valid_values: ['ENABLED', 'DISABLED']
    - name: ednsClientSubnet
      value: "{{ ednsClientSubnet }}"
      valid_values: ['ENABLED', 'DISABLED']
    - name: firewallRulesFailOpen
      value: "{{ firewallRulesFailOpen }}"
      valid_values: ['ENABLED', 'DISABLED']
    - name: description
      value: "{{ description }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_dns_view"
    values={[
        { label: 'update_dns_view', value: 'update_dns_view' }
    ]}
>
<TabItem value="update_dns_view">

Updates the configuration of a DNS view. Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify --region us-east-2 on Amazon Web Services CLI commands.

```sql
UPDATE aws.route53globalresolver.dns_views
SET 
name = '{{ name }}',
description = '{{ description }}',
dnssecValidation = '{{ dnssecValidation }}',
ednsClientSubnet = '{{ ednsClientSubnet }}',
firewallRulesFailOpen = '{{ firewallRulesFailOpen }}'
WHERE 
dns_view_id = '{{ dns_view_id }}' --required
AND region = '{{ region }}' --required
RETURNING
id,
name,
arn,
clientToken,
createdAt,
description,
dnssecValidation,
ednsClientSubnet,
firewallRulesFailOpen,
globalResolverId,
status,
updatedAt;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_dns_view"
    values={[
        { label: 'delete_dns_view', value: 'delete_dns_view' }
    ]}
>
<TabItem value="delete_dns_view">

Deletes a DNS view. This operation cannot be undone. Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify --region us-east-2 on Amazon Web Services CLI commands.

```sql
DELETE FROM aws.route53globalresolver.dns_views
WHERE dns_view_id = '{{ dns_view_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disable_dns_view"
    values={[
        { label: 'disable_dns_view', value: 'disable_dns_view' },
        { label: 'enable_dns_view', value: 'enable_dns_view' }
    ]}
>
<TabItem value="disable_dns_view">

Disables a DNS view, preventing it from serving DNS queries. Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify --region us-east-2 on Amazon Web Services CLI commands.

```sql
EXEC aws.route53globalresolver.dns_views.disable_dns_view 
@dns_view_id='{{ dns_view_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="enable_dns_view">

Enables a disabled DNS view, allowing it to serve DNS queries again. Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify --region us-east-2 on Amazon Web Services CLI commands.

```sql
EXEC aws.route53globalresolver.dns_views.enable_dns_view 
@dns_view_id='{{ dns_view_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
