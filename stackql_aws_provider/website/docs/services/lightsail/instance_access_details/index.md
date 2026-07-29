--- 
title: instance_access_details
hide_title: false
hide_table_of_contents: false
keywords:
  - instance_access_details
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

Creates, updates, deletes, gets or lists an <code>instance_access_details</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="instance_access_details" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lightsail.instance_access_details" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_instance_access_details"
    values={[
        { label: 'get_instance_access_details', value: 'get_instance_access_details' }
    ]}
>
<TabItem value="get_instance_access_details">

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
    <td><CopyableCode code="cert_key" /></td>
    <td><code>string</code></td>
    <td>For SSH access, the public key to use when accessing your instance For OpenSSH clients (command line SSH), you should save this value to tempkey-cert.pub.</td>
</tr>
<tr>
    <td><CopyableCode code="expires_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>For SSH access, the date on which the temporary keys expire.</td>
</tr>
<tr>
    <td><CopyableCode code="host_keys" /></td>
    <td><code>array</code></td>
    <td>Describes the public SSH host keys or the RDP certificate.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_name" /></td>
    <td><code>string</code></td>
    <td>The name of this Amazon Lightsail instance. (pattern: &lt;code&gt;\w&#91;\w\-&#93;*\w&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ip_address" /></td>
    <td><code>string</code></td>
    <td>The public IP address of the Amazon Lightsail instance. (pattern: &lt;code&gt;(&#91;0-9&#93;&#123;1,3&#125;\.)&#123;3&#125;&#91;0-9&#93;&#123;1,3&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ipv_6_addresses" /></td>
    <td><code>array</code></td>
    <td>The IPv6 address of the Amazon Lightsail instance.</td>
</tr>
<tr>
    <td><CopyableCode code="password" /></td>
    <td><code>string</code></td>
    <td>For RDP access, the password for your Amazon Lightsail instance. Password will be an empty string if the password for your new instance is not ready yet. When you create an instance, it can take up to 15 minutes for the instance to be ready. If you create an instance using any key pair other than the default (LightsailDefaultKeyPair), password will always be an empty string. If you change the Administrator password on the instance, Lightsail will continue to return the original password value. When accessing the instance using RDP, you need to manually enter the Administrator password after changing it from the default.</td>
</tr>
<tr>
    <td><CopyableCode code="password_data" /></td>
    <td><code>object</code></td>
    <td>For a Windows Server-based instance, an object with the data you can use to retrieve your password. This is only needed if password is empty and the instance is not new (and therefore the password is not ready yet). When you create an instance, it can take up to 15 minutes for the instance to be ready.</td>
</tr>
<tr>
    <td><CopyableCode code="private_key" /></td>
    <td><code>string</code></td>
    <td>For SSH access, the temporary private key. For OpenSSH clients (command line SSH), you should save this value to tempkey).</td>
</tr>
<tr>
    <td><CopyableCode code="protocol" /></td>
    <td><code>string</code></td>
    <td>The protocol for these Amazon Lightsail instance access details. (ssh, rdp)</td>
</tr>
<tr>
    <td><CopyableCode code="username" /></td>
    <td><code>string</code></td>
    <td>The user name to use when logging in to the Amazon Lightsail instance.</td>
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
    <td><a href="#get_instance_access_details"><CopyableCode code="get_instance_access_details" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns temporary SSH keys you can use to connect to a specific virtual private server, or instance. The get instance access details operation supports tag-based access control via resource tags applied to the resource identified by instance name. For more information, see the Amazon Lightsail Developer Guide.</td>
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
    defaultValue="get_instance_access_details"
    values={[
        { label: 'get_instance_access_details', value: 'get_instance_access_details' }
    ]}
>
<TabItem value="get_instance_access_details">

Returns temporary SSH keys you can use to connect to a specific virtual private server, or instance. The get instance access details operation supports tag-based access control via resource tags applied to the resource identified by instance name. For more information, see the Amazon Lightsail Developer Guide.

```sql
SELECT
cert_key,
expires_at,
host_keys,
instance_name,
ip_address,
ipv_6_addresses,
password,
password_data,
private_key,
protocol,
username
FROM aws.lightsail.instance_access_details
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
