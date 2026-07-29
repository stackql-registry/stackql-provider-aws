--- 
title: security_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - security_policies
  - transfer
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

Creates, updates, deletes, gets or lists a <code>security_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="security_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.transfer.security_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_security_policy"
    values={[
        { label: 'describe_security_policy', value: 'describe_security_policy' },
        { label: 'list_security_policies', value: 'list_security_policies' }
    ]}
>
<TabItem value="describe_security_policy">

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
    <td><CopyableCode code="fips" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether this policy enables Federal Information Processing Standards (FIPS). This parameter applies to both server and connector security policies.</td>
</tr>
<tr>
    <td><CopyableCode code="protocols" /></td>
    <td><code>array</code></td>
    <td>Lists the file transfer protocols that the security policy applies to.</td>
</tr>
<tr>
    <td><CopyableCode code="security_policy_name" /></td>
    <td><code>string</code></td>
    <td>The text name of the specified security policy. (pattern: &lt;code&gt;Transfer&#91;A-Za-z0-9&#93;*SecurityPolicy-&#91;A-Za-z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ssh_ciphers" /></td>
    <td><code>array</code></td>
    <td>Lists the enabled Secure Shell (SSH) cipher encryption algorithms in the security policy that is attached to the server or connector. This parameter applies to both server and connector security policies.</td>
</tr>
<tr>
    <td><CopyableCode code="ssh_host_key_algorithms" /></td>
    <td><code>array</code></td>
    <td>Lists the host key algorithms for the security policy. This parameter only applies to security policies for connectors.</td>
</tr>
<tr>
    <td><CopyableCode code="ssh_kexs" /></td>
    <td><code>array</code></td>
    <td>Lists the enabled SSH key exchange (KEX) encryption algorithms in the security policy that is attached to the server or connector. This parameter applies to both server and connector security policies.</td>
</tr>
<tr>
    <td><CopyableCode code="ssh_macs" /></td>
    <td><code>array</code></td>
    <td>Lists the enabled SSH message authentication code (MAC) encryption algorithms in the security policy that is attached to the server or connector. This parameter applies to both server and connector security policies.</td>
</tr>
<tr>
    <td><CopyableCode code="tls_ciphers" /></td>
    <td><code>array</code></td>
    <td>Lists the enabled Transport Layer Security (TLS) cipher encryption algorithms in the security policy that is attached to the server. This parameter only applies to security policies for servers.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The resource type to which the security policy applies, either server or connector. (SERVER, CONNECTOR)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_security_policies">

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
    <td><CopyableCode code="security_policy_name" /></td>
    <td><code>string</code></td>
    <td>An array of security policies that were listed.</td>
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
    <td><a href="#describe_security_policy"><CopyableCode code="describe_security_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the security policy that is attached to your server or SFTP connector. The response contains a description of the security policy's properties. For more information about security policies, see Working with security policies for servers or Working with security policies for SFTP connectors.</td>
</tr>
<tr>
    <td><a href="#list_security_policies"><CopyableCode code="list_security_policies" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the security policies that are attached to your servers and SFTP connectors. For more information about security policies, see Working with security policies for servers or Working with security policies for SFTP connectors.</td>
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
    defaultValue="describe_security_policy"
    values={[
        { label: 'describe_security_policy', value: 'describe_security_policy' },
        { label: 'list_security_policies', value: 'list_security_policies' }
    ]}
>
<TabItem value="describe_security_policy">

Describes the security policy that is attached to your server or SFTP connector. The response contains a description of the security policy's properties. For more information about security policies, see Working with security policies for servers or Working with security policies for SFTP connectors.

```sql
SELECT
fips,
protocols,
security_policy_name,
ssh_ciphers,
ssh_host_key_algorithms,
ssh_kexs,
ssh_macs,
tls_ciphers,
type
FROM aws.transfer.security_policies
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_security_policies">

Lists the security policies that are attached to your servers and SFTP connectors. For more information about security policies, see Working with security policies for servers or Working with security policies for SFTP connectors.

```sql
SELECT
security_policy_name
FROM aws.transfer.security_policies
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
