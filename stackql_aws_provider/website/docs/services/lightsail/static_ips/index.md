--- 
title: static_ips
hide_title: false
hide_table_of_contents: false
keywords:
  - static_ips
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

Creates, updates, deletes, gets or lists a <code>static_ips</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="static_ips" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lightsail.static_ips" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_static_ip"
    values={[
        { label: 'get_static_ip', value: 'get_static_ip' },
        { label: 'get_static_ips', value: 'get_static_ips' }
    ]}
>
<TabItem value="get_static_ip">

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
    <td>The name of the static IP (StaticIP-Ohio-EXAMPLE). (pattern: &lt;code&gt;\w&#91;\w\-&#93;*\w&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the static IP (arn:aws:lightsail:us-east-2:123456789101:StaticIp/9cbb4a9e-f8e3-4dfe-b57e-12345EXAMPLE). (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="attached_to" /></td>
    <td><code>string</code></td>
    <td>The instance where the static IP is attached (Amazon_Linux-1GB-Ohio-1). (pattern: &lt;code&gt;\w&#91;\w\-&#93;*\w&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the static IP was created (1479735304.222).</td>
</tr>
<tr>
    <td><CopyableCode code="ip_address" /></td>
    <td><code>string</code></td>
    <td>The static IP address. (pattern: &lt;code&gt;(&#91;0-9&#93;&#123;1,3&#125;\.)&#123;3&#125;&#91;0-9&#93;&#123;1,3&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="is_attached" /></td>
    <td><code>boolean</code></td>
    <td>A Boolean value indicating whether the static IP is attached.</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>object</code></td>
    <td>Describes the resource location.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The resource type (usually StaticIp). (ContainerService, Instance, StaticIp, KeyPair, InstanceSnapshot, Domain, PeeredVpc, LoadBalancer, LoadBalancerTlsCertificate, Disk, DiskSnapshot, RelationalDatabase, RelationalDatabaseSnapshot, ExportSnapshotRecord, CloudFormationStackRecord, Alarm, ContactMethod, Distribution, Certificate, Bucket)</td>
</tr>
<tr>
    <td><CopyableCode code="support_code" /></td>
    <td><code>string</code></td>
    <td>The support code. Include this code in your email to support when you have questions about an instance or another resource in Lightsail. This code enables our support team to look up your Lightsail information more easily.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_static_ips">

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
    <td>The name of the static IP (StaticIP-Ohio-EXAMPLE). (pattern: &lt;code&gt;\w&#91;\w\-&#93;*\w&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the static IP (arn:aws:lightsail:us-east-2:123456789101:StaticIp/9cbb4a9e-f8e3-4dfe-b57e-12345EXAMPLE). (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="attached_to" /></td>
    <td><code>string</code></td>
    <td>The instance where the static IP is attached (Amazon_Linux-1GB-Ohio-1). (pattern: &lt;code&gt;\w&#91;\w\-&#93;*\w&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the static IP was created (1479735304.222).</td>
</tr>
<tr>
    <td><CopyableCode code="ip_address" /></td>
    <td><code>string</code></td>
    <td>The static IP address. (pattern: &lt;code&gt;(&#91;0-9&#93;&#123;1,3&#125;\.)&#123;3&#125;&#91;0-9&#93;&#123;1,3&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="is_attached" /></td>
    <td><code>boolean</code></td>
    <td>A Boolean value indicating whether the static IP is attached.</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>object</code></td>
    <td>Describes the resource location.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The resource type (usually StaticIp). (ContainerService, Instance, StaticIp, KeyPair, InstanceSnapshot, Domain, PeeredVpc, LoadBalancer, LoadBalancerTlsCertificate, Disk, DiskSnapshot, RelationalDatabase, RelationalDatabaseSnapshot, ExportSnapshotRecord, CloudFormationStackRecord, Alarm, ContactMethod, Distribution, Certificate, Bucket)</td>
</tr>
<tr>
    <td><CopyableCode code="support_code" /></td>
    <td><code>string</code></td>
    <td>The support code. Include this code in your email to support when you have questions about an instance or another resource in Lightsail. This code enables our support team to look up your Lightsail information more easily.</td>
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
    <td><a href="#get_static_ip"><CopyableCode code="get_static_ip" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about an Amazon Lightsail static IP.</td>
</tr>
<tr>
    <td><a href="#get_static_ips"><CopyableCode code="get_static_ips" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about all static IPs in the user's account.</td>
</tr>
<tr>
    <td><a href="#attach_static_ip"><CopyableCode code="attach_static_ip" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-staticIpName"><code>staticIpName</code></a>, <a href="#parameter-instanceName"><code>instanceName</code></a></td>
    <td></td>
    <td>Attaches a static IP address to a specific Amazon Lightsail instance.</td>
</tr>
<tr>
    <td><a href="#allocate_static_ip"><CopyableCode code="allocate_static_ip" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-staticIpName"><code>staticIpName</code></a></td>
    <td></td>
    <td>Allocates a static IP address.</td>
</tr>
<tr>
    <td><a href="#detach_static_ip"><CopyableCode code="detach_static_ip" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-staticIpName"><code>staticIpName</code></a></td>
    <td></td>
    <td>Detaches a static IP from the Amazon Lightsail instance to which it is attached.</td>
</tr>
<tr>
    <td><a href="#release_static_ip"><CopyableCode code="release_static_ip" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-staticIpName"><code>staticIpName</code></a></td>
    <td></td>
    <td>Deletes a specific static IP from your account.</td>
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
    defaultValue="get_static_ip"
    values={[
        { label: 'get_static_ip', value: 'get_static_ip' },
        { label: 'get_static_ips', value: 'get_static_ips' }
    ]}
>
<TabItem value="get_static_ip">

Returns information about an Amazon Lightsail static IP.

```sql
SELECT
name,
arn,
attached_to,
created_at,
ip_address,
is_attached,
location,
resource_type,
support_code
FROM aws.lightsail.static_ips
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_static_ips">

Returns information about all static IPs in the user's account.

```sql
SELECT
name,
arn,
attached_to,
created_at,
ip_address,
is_attached,
location,
resource_type,
support_code
FROM aws.lightsail.static_ips
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="attach_static_ip"
    values={[
        { label: 'attach_static_ip', value: 'attach_static_ip' },
        { label: 'allocate_static_ip', value: 'allocate_static_ip' }
    ]}
>
<TabItem value="attach_static_ip">

Attaches a static IP address to a specific Amazon Lightsail instance.

```sql
UPDATE aws.lightsail.static_ips
SET 
staticIpName = '{{ staticIpName }}',
instanceName = '{{ instanceName }}'
WHERE 
region = '{{ region }}' --required
AND staticIpName = '{{ staticIpName }}' --required
AND instanceName = '{{ instanceName }}' --required
RETURNING
operations;
```
</TabItem>
<TabItem value="allocate_static_ip">

Allocates a static IP address.

```sql
UPDATE aws.lightsail.static_ips
SET 
staticIpName = '{{ staticIpName }}'
WHERE 
region = '{{ region }}' --required
AND staticIpName = '{{ staticIpName }}' --required
RETURNING
operations;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="detach_static_ip"
    values={[
        { label: 'detach_static_ip', value: 'detach_static_ip' },
        { label: 'release_static_ip', value: 'release_static_ip' }
    ]}
>
<TabItem value="detach_static_ip">

Detaches a static IP from the Amazon Lightsail instance to which it is attached.

```sql
EXEC aws.lightsail.static_ips.detach_static_ip 
@region='{{ region }}' --required 
@@json=
'{
"staticIpName": "{{ staticIpName }}"
}'
;
```
</TabItem>
<TabItem value="release_static_ip">

Deletes a specific static IP from your account.

```sql
EXEC aws.lightsail.static_ips.release_static_ip 
@region='{{ region }}' --required 
@@json=
'{
"staticIpName": "{{ staticIpName }}"
}'
;
```
</TabItem>
</Tabs>
