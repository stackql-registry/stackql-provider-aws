--- 
title: connect_instance_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - connect_instance_configs
  - connectcampaignsv2
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

Creates, updates, deletes, gets or lists a <code>connect_instance_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="connect_instance_configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connectcampaignsv2.connect_instance_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_connect_instance_config"
    values={[
        { label: 'get_connect_instance_config', value: 'get_connect_instance_config' }
    ]}
>
<TabItem value="get_connect_instance_config">

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
    <td><CopyableCode code="connectInstanceId" /></td>
    <td><code>string</code></td>
    <td>Amazon Connect Instance Id (pattern: &lt;code&gt;&#91;-_.a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionConfig" /></td>
    <td><code>object</code></td>
    <td>Encryption config for Connect Instance. Note that sensitive data will always be encrypted. If disabled, service will perform encryption with its own key. If enabled, a KMS key id needs to be provided and KMS charges will apply. KMS is only type supported</td>
</tr>
<tr>
    <td><CopyableCode code="serviceLinkedRoleArn" /></td>
    <td><code>string</code></td>
    <td>Service linked role arn</td>
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
    <td><a href="#get_connect_instance_config"><CopyableCode code="get_connect_instance_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-connect_instance_id"><code>connect_instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get the specific Connect instance config.</td>
</tr>
<tr>
    <td><a href="#delete_connect_instance_config"><CopyableCode code="delete_connect_instance_config" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-connect_instance_id"><code>connect_instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-campaignDeletionPolicy"><code>campaignDeletionPolicy</code></a></td>
    <td>Deletes a connect instance config from the specified AWS account.</td>
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
<tr id="parameter-connect_instance_id">
    <td><CopyableCode code="connect_instance_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-campaignDeletionPolicy">
    <td><CopyableCode code="campaignDeletionPolicy" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_connect_instance_config"
    values={[
        { label: 'get_connect_instance_config', value: 'get_connect_instance_config' }
    ]}
>
<TabItem value="get_connect_instance_config">

Get the specific Connect instance config.

```sql
SELECT
connectInstanceId,
encryptionConfig,
serviceLinkedRoleArn
FROM aws.connectcampaignsv2.connect_instance_configs
WHERE connect_instance_id = '{{ connect_instance_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_connect_instance_config"
    values={[
        { label: 'delete_connect_instance_config', value: 'delete_connect_instance_config' }
    ]}
>
<TabItem value="delete_connect_instance_config">

Deletes a connect instance config from the specified AWS account.

```sql
DELETE FROM aws.connectcampaignsv2.connect_instance_configs
WHERE connect_instance_id = '{{ connect_instance_id }}' --required
AND region = '{{ region }}' --required
AND campaignDeletionPolicy = '{{ campaignDeletionPolicy }}'
;
```
</TabItem>
</Tabs>
