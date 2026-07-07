--- 
title: access_sources
hide_title: false
hide_table_of_contents: false
keywords:
  - access_sources
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

Creates, updates, deletes, gets or lists an <code>access_sources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="access_sources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.route53globalresolver.access_sources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_access_source"
    values={[
        { label: 'get_access_source', value: 'get_access_source' },
        { label: 'list_access_sources', value: 'list_access_sources' }
    ]}
>
<TabItem value="get_access_source">

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
    <td>ID for the rule. (pattern: &lt;code&gt;&#91;-.a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name for the access source. (pattern: &lt;code&gt;(?!^&#91;0-9&#93;+$)(&#91;a-zA-Z0-9-_/' '&#93;+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the access source. (pattern: &lt;code&gt;arn:&#91;-.a-z0-9&#93;&#123;1,63&#125;:&#91;-.a-z0-9&#93;&#123;1,63&#125;:&#91;-.a-z0-9&#93;&#123;0,63&#125;:&#91;-.a-z0-9&#93;&#123;0,63&#125;:&#91;^/&#93;.&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="cidr" /></td>
    <td><code>string</code></td>
    <td>The IP range for the rule's parameters in CIDR notation.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time and date the rule was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dnsViewId" /></td>
    <td><code>string</code></td>
    <td>ID for the DNS view that the rule is associated to. (pattern: &lt;code&gt;&#91;-.a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ipAddressType" /></td>
    <td><code>string</code></td>
    <td>The IP address type. (IPV4, IPV6)</td>
</tr>
<tr>
    <td><CopyableCode code="protocol" /></td>
    <td><code>string</code></td>
    <td>The protocol determines how data is transmitted to a Global Resolver instance. (DO53, DOH, DOT)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Information about the status of the rule. (CREATING, OPERATIONAL, UPDATING, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time and date the access source was updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_access_sources">

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
    <td>The unique identifier of the access source. (pattern: &lt;code&gt;&#91;-.a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the access source. (pattern: &lt;code&gt;(?!^&#91;0-9&#93;+$)(&#91;a-zA-Z0-9-_/' '&#93;+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the access source. (pattern: &lt;code&gt;arn:&#91;-.a-z0-9&#93;&#123;1,63&#125;:&#91;-.a-z0-9&#93;&#123;1,63&#125;:&#91;-.a-z0-9&#93;&#123;0,63&#125;:&#91;-.a-z0-9&#93;&#123;0,63&#125;:&#91;^/&#93;.&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="cidr" /></td>
    <td><code>string</code></td>
    <td>The CIDR block that defines the IP address range for the access source.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the access source was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dnsViewId" /></td>
    <td><code>string</code></td>
    <td>The ID of the DNS view that the access source is associated with. (pattern: &lt;code&gt;&#91;-.a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ipAddressType" /></td>
    <td><code>string</code></td>
    <td>The IP address type of the access source. (IPV4, IPV6)</td>
</tr>
<tr>
    <td><CopyableCode code="protocol" /></td>
    <td><code>string</code></td>
    <td>The protocol used by the access source. (DO53, DOH, DOT)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the access source. (CREATING, OPERATIONAL, UPDATING, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the access source was last updated.</td>
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
    <td><a href="#get_access_source"><CopyableCode code="get_access_source" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-access_source_id"><code>access_source_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about an access source. Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify --region us-east-2 on Amazon Web Services CLI commands.</td>
</tr>
<tr>
    <td><a href="#list_access_sources"><CopyableCode code="list_access_sources" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-max_results"><code>max_results</code></a>, <a href="#parameter-next_token"><code>next_token</code></a>, <a href="#parameter-filters"><code>filters</code></a></td>
    <td>Lists all access sources with pagination support. Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify --region us-east-2 on Amazon Web Services CLI commands.</td>
</tr>
<tr>
    <td><a href="#create_access_source"><CopyableCode code="create_access_source" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-cidr"><code>cidr</code></a>, <a href="#parameter-dnsViewId"><code>dnsViewId</code></a>, <a href="#parameter-protocol"><code>protocol</code></a></td>
    <td></td>
    <td>Creates an access source for a DNS view. Access sources define IP addresses or CIDR ranges that are allowed to send DNS queries to the Route 53 Global Resolver, along with the permitted DNS protocols. Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify --region us-east-2 on Amazon Web Services CLI commands.</td>
</tr>
<tr>
    <td><a href="#update_access_source"><CopyableCode code="update_access_source" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-access_source_id"><code>access_source_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the configuration of an access source. Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify --region us-east-2 on Amazon Web Services CLI commands.</td>
</tr>
<tr>
    <td><a href="#delete_access_source"><CopyableCode code="delete_access_source" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-access_source_id"><code>access_source_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an access source. This operation cannot be undone. Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify --region us-east-2 on Amazon Web Services CLI commands.</td>
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
<tr id="parameter-access_source_id">
    <td><CopyableCode code="access_source_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the access source to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-filters">
    <td><CopyableCode code="filters" /></td>
    <td><code>object</code></td>
    <td>Values to filter the results.</td>
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
    defaultValue="get_access_source"
    values={[
        { label: 'get_access_source', value: 'get_access_source' },
        { label: 'list_access_sources', value: 'list_access_sources' }
    ]}
>
<TabItem value="get_access_source">

Retrieves information about an access source. Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify --region us-east-2 on Amazon Web Services CLI commands.

```sql
SELECT
id,
name,
arn,
cidr,
createdAt,
dnsViewId,
ipAddressType,
protocol,
status,
updatedAt
FROM aws.route53globalresolver.access_sources
WHERE access_source_id = '{{ access_source_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_access_sources">

Lists all access sources with pagination support. Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify --region us-east-2 on Amazon Web Services CLI commands.

```sql
SELECT
id,
name,
arn,
cidr,
createdAt,
dnsViewId,
ipAddressType,
protocol,
status,
updatedAt
FROM aws.route53globalresolver.access_sources
WHERE region = '{{ region }}' -- required
AND max_results = '{{ max_results }}'
AND next_token = '{{ next_token }}'
AND filters = '{{ filters }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_access_source"
    values={[
        { label: 'create_access_source', value: 'create_access_source' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_access_source">

Creates an access source for a DNS view. Access sources define IP addresses or CIDR ranges that are allowed to send DNS queries to the Route 53 Global Resolver, along with the permitted DNS protocols. Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify --region us-east-2 on Amazon Web Services CLI commands.

```sql
INSERT INTO aws.route53globalresolver.access_sources (
cidr,
clientToken,
ipAddressType,
name,
dnsViewId,
protocol,
tags,
region
)
SELECT 
'{{ cidr }}' /* required */,
'{{ clientToken }}',
'{{ ipAddressType }}',
'{{ name }}',
'{{ dnsViewId }}' /* required */,
'{{ protocol }}' /* required */,
'{{ tags }}',
'{{ region }}'
RETURNING
id,
name,
arn,
cidr,
createdAt,
dnsViewId,
ipAddressType,
protocol,
status,
updatedAt
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: access_sources
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the access_sources resource.
    - name: cidr
      value: "{{ cidr }}"
    - name: clientToken
      value: "{{ clientToken }}"
    - name: ipAddressType
      value: "{{ ipAddressType }}"
      valid_values: ['IPV4', 'IPV6']
    - name: name
      value: "{{ name }}"
    - name: dnsViewId
      value: "{{ dnsViewId }}"
    - name: protocol
      value: "{{ protocol }}"
      valid_values: ['DO53', 'DOH', 'DOT']
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_access_source"
    values={[
        { label: 'update_access_source', value: 'update_access_source' }
    ]}
>
<TabItem value="update_access_source">

Updates the configuration of an access source. Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify --region us-east-2 on Amazon Web Services CLI commands.

```sql
UPDATE aws.route53globalresolver.access_sources
SET 
cidr = '{{ cidr }}',
ipAddressType = '{{ ipAddressType }}',
name = '{{ name }}',
protocol = '{{ protocol }}'
WHERE 
access_source_id = '{{ access_source_id }}' --required
AND region = '{{ region }}' --required
RETURNING
id,
name,
arn,
cidr,
createdAt,
dnsViewId,
ipAddressType,
protocol,
status,
updatedAt;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_access_source"
    values={[
        { label: 'delete_access_source', value: 'delete_access_source' }
    ]}
>
<TabItem value="delete_access_source">

Deletes an access source. This operation cannot be undone. Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify --region us-east-2 on Amazon Web Services CLI commands.

```sql
DELETE FROM aws.route53globalresolver.access_sources
WHERE access_source_id = '{{ access_source_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
