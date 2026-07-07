--- 
title: account_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - account_configurations
  - codeguru_security
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

Creates, updates, deletes, gets or lists an <code>account_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="account_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codeguru_security.account_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_account_configuration"
    values={[
        { label: 'get_account_configuration', value: 'get_account_configuration' }
    ]}
>
<TabItem value="get_account_configuration">

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
    <td><CopyableCode code="kmsKeyArn" /></td>
    <td><code>string</code></td>
    <td>The KMS key ARN that is used for encryption. If an AWS-managed key is used for encryption, returns empty. (pattern: &lt;code&gt;arn:aws:kms:&#91;\S&#93;+:&#91;\d&#93;&#123;12&#125;:key\/((&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;)|(mrk-&#91;0-9a-zA-Z&#93;&#123;32&#125;))&lt;/code&gt;)</td>
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
    <td><a href="#get_account_configuration"><CopyableCode code="get_account_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Use to get the encryption configuration for an account.</td>
</tr>
<tr>
    <td><a href="#update_account_configuration"><CopyableCode code="update_account_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-encryptionConfig"><code>encryptionConfig</code></a></td>
    <td></td>
    <td>Use to update the encryption configuration for an account.</td>
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
    defaultValue="get_account_configuration"
    values={[
        { label: 'get_account_configuration', value: 'get_account_configuration' }
    ]}
>
<TabItem value="get_account_configuration">

Use to get the encryption configuration for an account.

```sql
SELECT
kmsKeyArn
FROM aws.codeguru_security.account_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_account_configuration"
    values={[
        { label: 'update_account_configuration', value: 'update_account_configuration' }
    ]}
>
<TabItem value="update_account_configuration">

Use to update the encryption configuration for an account.

```sql
UPDATE aws.codeguru_security.account_configurations
SET 
encryptionConfig = '{{ encryptionConfig }}'
WHERE 
region = '{{ region }}' --required
AND encryptionConfig = '{{ encryptionConfig }}' --required
RETURNING
encryptionConfig;
```
</TabItem>
</Tabs>
