--- 
title: public_keys
hide_title: false
hide_table_of_contents: false
keywords:
  - public_keys
  - ivs_realtime
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

Creates, updates, deletes, gets or lists a <code>public_keys</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="public_keys" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ivs_realtime.public_keys" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_public_key"
    values={[
        { label: 'get_public_key', value: 'get_public_key' },
        { label: 'list_public_keys', value: 'list_public_keys' }
    ]}
>
<TabItem value="get_public_key">

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
    <td>Public key name. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>Public key ARN. (pattern: &lt;code&gt;arn:aws:ivs:&#91;a-z0-9-&#93;+:&#91;0-9&#93;+:public-key/&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="fingerprint" /></td>
    <td><code>string</code></td>
    <td>The public key fingerprint, a short string used to identify or verify the full public key.</td>
</tr>
<tr>
    <td><CopyableCode code="publicKeyMaterial" /></td>
    <td><code>string</code></td>
    <td>Public key material. (pattern: &lt;code&gt;.*-----BEGIN PUBLIC KEY-----\r?\n(&#91;a-zA-Z0-9+/=\r\n&#93;+)\r?\n-----END PUBLIC KEY-----(\r?\n)?.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Tags attached to the resource. Array of maps, each of the form string:string (key:value). See Best practices and strategies in Tagging AWS Resources and Tag Editor for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented there.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_public_keys">

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
    <td>Public key name. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>Public key ARN. (pattern: &lt;code&gt;arn:aws:ivs:&#91;a-z0-9-&#93;+:&#91;0-9&#93;+:public-key/&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Tags attached to the resource. Array of maps, each of the form string:string (key:value). See Best practices and strategies in Tagging AWS Resources and Tag Editor for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented there.</td>
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
    <td><a href="#get_public_key"><CopyableCode code="get_public_key" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information for the specified public key.</td>
</tr>
<tr>
    <td><a href="#list_public_keys"><CopyableCode code="list_public_keys" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets summary information about all public keys in your account, in the AWS region where the API request is processed.</td>
</tr>
<tr>
    <td><a href="#delete_public_key"><CopyableCode code="delete_public_key" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified public key used to sign stage participant tokens. This invalidates future participant tokens generated using the key pair’s private key.</td>
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
    defaultValue="get_public_key"
    values={[
        { label: 'get_public_key', value: 'get_public_key' },
        { label: 'list_public_keys', value: 'list_public_keys' }
    ]}
>
<TabItem value="get_public_key">

Gets information for the specified public key.

```sql
SELECT
name,
arn,
fingerprint,
publicKeyMaterial,
tags
FROM aws.ivs_realtime.public_keys
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_public_keys">

Gets summary information about all public keys in your account, in the AWS region where the API request is processed.

```sql
SELECT
name,
arn,
tags
FROM aws.ivs_realtime.public_keys
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_public_key"
    values={[
        { label: 'delete_public_key', value: 'delete_public_key' }
    ]}
>
<TabItem value="delete_public_key">

Deletes the specified public key used to sign stage participant tokens. This invalidates future participant tokens generated using the key pair’s private key.

```sql
DELETE FROM aws.ivs_realtime.public_keys
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
