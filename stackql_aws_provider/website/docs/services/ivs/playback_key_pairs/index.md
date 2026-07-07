--- 
title: playback_key_pairs
hide_title: false
hide_table_of_contents: false
keywords:
  - playback_key_pairs
  - ivs
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

Creates, updates, deletes, gets or lists a <code>playback_key_pairs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="playback_key_pairs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ivs.playback_key_pairs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_playback_key_pair"
    values={[
        { label: 'get_playback_key_pair', value: 'get_playback_key_pair' },
        { label: 'list_playback_key_pairs', value: 'list_playback_key_pairs' }
    ]}
>
<TabItem value="get_playback_key_pair">

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
    <td>Playback-key-pair name. The value does not need to be unique. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>Key-pair ARN. (pattern: &lt;code&gt;arn:aws:ivs:&#91;a-z0-9-&#93;+:&#91;0-9&#93;+:playback-key/&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="fingerprint" /></td>
    <td><code>string</code></td>
    <td>Key-pair identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Tags attached to the resource. Array of 1-50 maps, each of the form string:string (key:value). See Best practices and strategies in Tagging Amazon Web Services Resources and Tag Editor for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is documented there.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_playback_key_pairs">

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
    <td>Playback-key-pair name. The value does not need to be unique. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>Key-pair ARN. (pattern: &lt;code&gt;arn:aws:ivs:&#91;a-z0-9-&#93;+:&#91;0-9&#93;+:playback-key/&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Tags attached to the resource. Array of 1-50 maps, each of the form string:string (key:value). See Best practices and strategies in Tagging Amazon Web Services Resources and Tag Editor for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is documented there.</td>
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
    <td><a href="#get_playback_key_pair"><CopyableCode code="get_playback_key_pair" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a specified playback authorization key pair and returns the arn and fingerprint. The privateKey held by the caller can be used to generate viewer authorization tokens, to grant viewers access to private channels. For more information, see Setting Up Private Channels in the Amazon IVS User Guide.</td>
</tr>
<tr>
    <td><a href="#list_playback_key_pairs"><CopyableCode code="list_playback_key_pairs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets summary information about playback key pairs. For more information, see Setting Up Private Channels in the Amazon IVS User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_playback_key_pair"><CopyableCode code="delete_playback_key_pair" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a specified authorization key pair. This invalidates future viewer tokens generated using the key pair’s privateKey. For more information, see Setting Up Private Channels in the Amazon IVS User Guide.</td>
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
    defaultValue="get_playback_key_pair"
    values={[
        { label: 'get_playback_key_pair', value: 'get_playback_key_pair' },
        { label: 'list_playback_key_pairs', value: 'list_playback_key_pairs' }
    ]}
>
<TabItem value="get_playback_key_pair">

Gets a specified playback authorization key pair and returns the arn and fingerprint. The privateKey held by the caller can be used to generate viewer authorization tokens, to grant viewers access to private channels. For more information, see Setting Up Private Channels in the Amazon IVS User Guide.

```sql
SELECT
name,
arn,
fingerprint,
tags
FROM aws.ivs.playback_key_pairs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_playback_key_pairs">

Gets summary information about playback key pairs. For more information, see Setting Up Private Channels in the Amazon IVS User Guide.

```sql
SELECT
name,
arn,
tags
FROM aws.ivs.playback_key_pairs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_playback_key_pair"
    values={[
        { label: 'delete_playback_key_pair', value: 'delete_playback_key_pair' }
    ]}
>
<TabItem value="delete_playback_key_pair">

Deletes a specified authorization key pair. This invalidates future viewer tokens generated using the key pair’s privateKey. For more information, see Setting Up Private Channels in the Amazon IVS User Guide.

```sql
DELETE FROM aws.ivs.playback_key_pairs
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
