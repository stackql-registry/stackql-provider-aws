--- 
title: host_keys
hide_title: false
hide_table_of_contents: false
keywords:
  - host_keys
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

Creates, updates, deletes, gets or lists a <code>host_keys</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="host_keys" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.transfer.host_keys" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_host_key"
    values={[
        { label: 'describe_host_key', value: 'describe_host_key' },
        { label: 'list_host_keys', value: 'list_host_keys' }
    ]}
>
<TabItem value="describe_host_key">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The unique Amazon Resource Name (ARN) for the host key. (pattern: &lt;code&gt;arn:\S+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="DateImported" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date on which the host key was added to the server.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The text description for this host key. (pattern: &lt;code&gt;&#91;\p&#123;Print&#125;&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="HostKeyFingerprint" /></td>
    <td><code>string</code></td>
    <td>The public key fingerprint, which is a short sequence of bytes used to identify the longer public key.</td>
</tr>
<tr>
    <td><CopyableCode code="HostKeyId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the host key. (pattern: &lt;code&gt;hostkey-&#91;0-9a-f&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>Key-value pairs that can be used to group and search for host keys.</td>
</tr>
<tr>
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>The encryption algorithm that is used for the host key. The Type parameter is specified by using one of the following values: ssh-rsa ssh-ed25519 ecdsa-sha2-nistp256 ecdsa-sha2-nistp384 ecdsa-sha2-nistp521</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_host_keys">

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
    <td><CopyableCode code="HostKeys" /></td>
    <td><code>array</code></td>
    <td>Returns an array, where each item contains the details of a host key.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>Returns a token that you can use to call ListHostKeys again and receive additional results, if there are any.</td>
</tr>
<tr>
    <td><CopyableCode code="ServerId" /></td>
    <td><code>string</code></td>
    <td>Returns the server identifier that contains the listed host keys. (pattern: &lt;code&gt;s-(&#91;0-9a-f&#93;&#123;17&#125;)&lt;/code&gt;)</td>
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
    <td><a href="#describe_host_key"><CopyableCode code="describe_host_key" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the details of the host key that's specified by the HostKeyId and ServerId.</td>
</tr>
<tr>
    <td><a href="#list_host_keys"><CopyableCode code="list_host_keys" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of host keys for the server that's specified by the ServerId parameter.</td>
</tr>
<tr>
    <td><a href="#update_host_key"><CopyableCode code="update_host_key" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ServerId"><code>ServerId</code></a>, <a href="#parameter-HostKeyId"><code>HostKeyId</code></a>, <a href="#parameter-Description"><code>Description</code></a></td>
    <td></td>
    <td>Updates the description for the host key that's specified by the ServerId and HostKeyId parameters.</td>
</tr>
<tr>
    <td><a href="#delete_host_key"><CopyableCode code="delete_host_key" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the host key that's specified in the HostKeyId parameter.</td>
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
    defaultValue="describe_host_key"
    values={[
        { label: 'describe_host_key', value: 'describe_host_key' },
        { label: 'list_host_keys', value: 'list_host_keys' }
    ]}
>
<TabItem value="describe_host_key">

Returns the details of the host key that's specified by the HostKeyId and ServerId.

```sql
SELECT
Arn,
DateImported,
Description,
HostKeyFingerprint,
HostKeyId,
Tags,
Type
FROM aws.transfer.host_keys
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_host_keys">

Returns a list of host keys for the server that's specified by the ServerId parameter.

```sql
SELECT
HostKeys,
NextToken,
ServerId
FROM aws.transfer.host_keys
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_host_key"
    values={[
        { label: 'update_host_key', value: 'update_host_key' }
    ]}
>
<TabItem value="update_host_key">

Updates the description for the host key that's specified by the ServerId and HostKeyId parameters.

```sql
UPDATE aws.transfer.host_keys
SET 
ServerId = '{{ ServerId }}',
HostKeyId = '{{ HostKeyId }}',
Description = '{{ Description }}'
WHERE 
region = '{{ region }}' --required
AND ServerId = '{{ ServerId }}' --required
AND HostKeyId = '{{ HostKeyId }}' --required
AND Description = '{{ Description }}' --required
RETURNING
HostKeyId,
ServerId;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_host_key"
    values={[
        { label: 'delete_host_key', value: 'delete_host_key' }
    ]}
>
<TabItem value="delete_host_key">

Deletes the host key that's specified in the HostKeyId parameter.

```sql
DELETE FROM aws.transfer.host_keys
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
