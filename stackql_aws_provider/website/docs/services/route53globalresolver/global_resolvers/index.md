--- 
title: global_resolvers
hide_title: false
hide_table_of_contents: false
keywords:
  - global_resolvers
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

Creates, updates, deletes, gets or lists a <code>global_resolvers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="global_resolvers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.route53globalresolver.global_resolvers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_global_resolver"
    values={[
        { label: 'get_global_resolver', value: 'get_global_resolver' },
        { label: 'list_global_resolvers', value: 'list_global_resolvers' }
    ]}
>
<TabItem value="get_global_resolver">

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
    <td>The ID of the Global Resolver. (pattern: &lt;code&gt;&#91;-.a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the Global Resolver. (pattern: &lt;code&gt;(?!^&#91;0-9&#93;+$)(&#91;a-zA-Z0-9-_/' '&#93;+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Global Resolver. (pattern: &lt;code&gt;arn:&#91;-.a-z0-9&#93;&#123;1,63&#125;:&#91;-.a-z0-9&#93;&#123;1,63&#125;:&#91;-.a-z0-9&#93;&#123;0,63&#125;:&#91;-.a-z0-9&#93;&#123;0,63&#125;:&#91;^/&#93;.&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="clientToken" /></td>
    <td><code>string</code></td>
    <td>A unique, case-sensitive identifier to ensure idempotency. This means that making the same request multiple times with the same clientToken has the same result every time.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the Global Resolver was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the Global Resolver.</td>
</tr>
<tr>
    <td><CopyableCode code="dnsName" /></td>
    <td><code>string</code></td>
    <td>The hostname used by the customers' DNS clients for certification validation.</td>
</tr>
<tr>
    <td><CopyableCode code="ipAddressType" /></td>
    <td><code>string</code></td>
    <td>The IP address type configured for the Global Resolver. (IPV4, DUAL_STACK)</td>
</tr>
<tr>
    <td><CopyableCode code="ipv4Addresses" /></td>
    <td><code>array</code></td>
    <td>List of anycast IPv4 addresses associated with the Global Resolver instance.</td>
</tr>
<tr>
    <td><CopyableCode code="ipv6Addresses" /></td>
    <td><code>array</code></td>
    <td>List of anycast IPv6 addresses associated with the Global Resolver instance. This field is only populated when ipAddressType is DUAL_STACK.</td>
</tr>
<tr>
    <td><CopyableCode code="observabilityRegion" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Regions in which the users' Global Resolver query resolution logs will be propagated.</td>
</tr>
<tr>
    <td><CopyableCode code="regions" /></td>
    <td><code>array</code></td>
    <td>The Amazon Web Services Regions in which the Global Resolver operate.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The operational status of the Global Resolver. (CREATING, OPERATIONAL, UPDATING, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the Global Resolver was updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_global_resolvers">

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
    <td>The unique identifier of the global resolver. (pattern: &lt;code&gt;&#91;-.a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the global resolver. (pattern: &lt;code&gt;(?!^&#91;0-9&#93;+$)(&#91;a-zA-Z0-9-_/' '&#93;+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the global resolver. (pattern: &lt;code&gt;arn:&#91;-.a-z0-9&#93;&#123;1,63&#125;:&#91;-.a-z0-9&#93;&#123;1,63&#125;:&#91;-.a-z0-9&#93;&#123;0,63&#125;:&#91;-.a-z0-9&#93;&#123;0,63&#125;:&#91;^/&#93;.&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="clientToken" /></td>
    <td><code>string</code></td>
    <td>The unique string that identifies the request and ensures idempotency.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the global resolver was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the global resolver.</td>
</tr>
<tr>
    <td><CopyableCode code="dnsName" /></td>
    <td><code>string</code></td>
    <td>The DNS name of the global resolver.</td>
</tr>
<tr>
    <td><CopyableCode code="ipAddressType" /></td>
    <td><code>string</code></td>
    <td>The IP address type configured for the global resolver. (IPV4, DUAL_STACK)</td>
</tr>
<tr>
    <td><CopyableCode code="ipv4Addresses" /></td>
    <td><code>array</code></td>
    <td>The IPv4 addresses assigned to the global resolver.</td>
</tr>
<tr>
    <td><CopyableCode code="ipv6Addresses" /></td>
    <td><code>array</code></td>
    <td>The IPv6 addresses assigned to the global resolver. This field is only populated when ipAddressType is DUAL_STACK.</td>
</tr>
<tr>
    <td><CopyableCode code="observabilityRegion" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region where observability data is collected for the global resolver.</td>
</tr>
<tr>
    <td><CopyableCode code="regions" /></td>
    <td><code>array</code></td>
    <td>The Amazon Web Services Regions where the global resolver is deployed.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the global resolver. (CREATING, OPERATIONAL, UPDATING, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the global resolver was last updated.</td>
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
    <td><a href="#get_global_resolver"><CopyableCode code="get_global_resolver" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-global_resolver_id"><code>global_resolver_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a Route 53 Global Resolver instance. Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify --region us-east-2 on Amazon Web Services CLI commands.</td>
</tr>
<tr>
    <td><a href="#list_global_resolvers"><CopyableCode code="list_global_resolvers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-max_results"><code>max_results</code></a>, <a href="#parameter-next_token"><code>next_token</code></a></td>
    <td>Lists all Route 53 Global Resolver instances in your account with pagination support. Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify --region us-east-2 on Amazon Web Services CLI commands.</td>
</tr>
<tr>
    <td><a href="#create_global_resolver"><CopyableCode code="create_global_resolver" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-regions"><code>regions</code></a></td>
    <td></td>
    <td>Creates a new Route 53 Global Resolver instance. A Route 53 Global Resolver is a global, internet-accessible DNS resolver that provides secure DNS resolution for both public and private domains through global anycast IP addresses. Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify --region us-east-2 on Amazon Web Services CLI commands.</td>
</tr>
<tr>
    <td><a href="#update_global_resolver"><CopyableCode code="update_global_resolver" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-global_resolver_id"><code>global_resolver_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the configuration of a Route 53 Global Resolver instance. You can modify the name, description, and observability Region. Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify --region us-east-2 on Amazon Web Services CLI commands.</td>
</tr>
<tr>
    <td><a href="#delete_global_resolver"><CopyableCode code="delete_global_resolver" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-global_resolver_id"><code>global_resolver_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a Route 53 Global Resolver instance. This operation cannot be undone. All associated DNS views, access sources, tokens, and firewall rules are also deleted. Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify --region us-east-2 on Amazon Web Services CLI commands.</td>
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
<tr id="parameter-global_resolver_id">
    <td><CopyableCode code="global_resolver_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Route 53 Global Resolver to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-max_results">
    <td><CopyableCode code="max_results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of Route 53 Global Resolver instances to return in the response. Valid range is 1-100.</td>
</tr>
<tr id="parameter-next_token">
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results. This value is returned in the response if there are more results to retrieve.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_global_resolver"
    values={[
        { label: 'get_global_resolver', value: 'get_global_resolver' },
        { label: 'list_global_resolvers', value: 'list_global_resolvers' }
    ]}
>
<TabItem value="get_global_resolver">

Retrieves information about a Route 53 Global Resolver instance. Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify --region us-east-2 on Amazon Web Services CLI commands.

```sql
SELECT
id,
name,
arn,
clientToken,
createdAt,
description,
dnsName,
ipAddressType,
ipv4Addresses,
ipv6Addresses,
observabilityRegion,
regions,
status,
updatedAt
FROM aws.route53globalresolver.global_resolvers
WHERE global_resolver_id = '{{ global_resolver_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_global_resolvers">

Lists all Route 53 Global Resolver instances in your account with pagination support. Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify --region us-east-2 on Amazon Web Services CLI commands.

```sql
SELECT
id,
name,
arn,
clientToken,
createdAt,
description,
dnsName,
ipAddressType,
ipv4Addresses,
ipv6Addresses,
observabilityRegion,
regions,
status,
updatedAt
FROM aws.route53globalresolver.global_resolvers
WHERE region = '{{ region }}' -- required
AND max_results = '{{ max_results }}'
AND next_token = '{{ next_token }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_global_resolver"
    values={[
        { label: 'create_global_resolver', value: 'create_global_resolver' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_global_resolver">

Creates a new Route 53 Global Resolver instance. A Route 53 Global Resolver is a global, internet-accessible DNS resolver that provides secure DNS resolution for both public and private domains through global anycast IP addresses. Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify --region us-east-2 on Amazon Web Services CLI commands.

```sql
INSERT INTO aws.route53globalresolver.global_resolvers (
clientToken,
description,
ipAddressType,
name,
observabilityRegion,
regions,
tags,
region
)
SELECT 
'{{ clientToken }}',
'{{ description }}',
'{{ ipAddressType }}',
'{{ name }}' /* required */,
'{{ observabilityRegion }}',
'{{ regions }}' /* required */,
'{{ tags }}',
'{{ region }}'
RETURNING
id,
name,
arn,
clientToken,
createdAt,
description,
dnsName,
ipAddressType,
ipv4Addresses,
ipv6Addresses,
observabilityRegion,
regions,
status,
updatedAt
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: global_resolvers
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the global_resolvers resource.
    - name: clientToken
      value: "{{ clientToken }}"
    - name: description
      value: "{{ description }}"
    - name: ipAddressType
      value: "{{ ipAddressType }}"
      valid_values: ['IPV4', 'DUAL_STACK']
    - name: name
      value: "{{ name }}"
    - name: observabilityRegion
      value: "{{ observabilityRegion }}"
    - name: regions
      value:
        - "{{ regions }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_global_resolver"
    values={[
        { label: 'update_global_resolver', value: 'update_global_resolver' }
    ]}
>
<TabItem value="update_global_resolver">

Updates the configuration of a Route 53 Global Resolver instance. You can modify the name, description, and observability Region. Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify --region us-east-2 on Amazon Web Services CLI commands.

```sql
UPDATE aws.route53globalresolver.global_resolvers
SET 
name = '{{ name }}',
observabilityRegion = '{{ observabilityRegion }}',
description = '{{ description }}',
ipAddressType = '{{ ipAddressType }}',
regions = '{{ regions }}'
WHERE 
global_resolver_id = '{{ global_resolver_id }}' --required
AND region = '{{ region }}' --required
RETURNING
id,
name,
arn,
clientToken,
createdAt,
description,
dnsName,
ipAddressType,
ipv4Addresses,
ipv6Addresses,
observabilityRegion,
regions,
status,
updatedAt;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_global_resolver"
    values={[
        { label: 'delete_global_resolver', value: 'delete_global_resolver' }
    ]}
>
<TabItem value="delete_global_resolver">

Deletes a Route 53 Global Resolver instance. This operation cannot be undone. All associated DNS views, access sources, tokens, and firewall rules are also deleted. Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify --region us-east-2 on Amazon Web Services CLI commands.

```sql
DELETE FROM aws.route53globalresolver.global_resolvers
WHERE global_resolver_id = '{{ global_resolver_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
