--- 
title: access_key_infos
hide_title: false
hide_table_of_contents: false
keywords:
  - access_key_infos
  - sts
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

Creates, updates, deletes, gets or lists an <code>access_key_infos</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="access_key_infos" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sts.access_key_infos" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_access_key_info"
    values={[
        { label: 'get_access_key_info', value: 'get_access_key_info' }
    ]}
>
<TabItem value="get_access_key_info">

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
    <td><CopyableCode code="account" /></td>
    <td><code>string</code></td>
    <td>The number used to identify the Amazon Web Services account.</td>
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
    <td><a href="#get_access_key_info"><CopyableCode code="get_access_key_info" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-AccessKeyId"><code>AccessKeyId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the account identifier for the specified access key ID. Access keys consist of two parts: an access key ID (for example, AKIAIOSFODNN7EXAMPLE) and a secret access key (for example, wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY). For more information about access keys, see Managing Access Keys for IAM Users in the IAM User Guide. When you pass an access key ID to this operation, it returns the ID of the Amazon Web Services account to which the keys belong. Access key IDs beginning with AKIA are long-term credentials for an IAM user or the Amazon Web Services account root user. Access key IDs beginning with ASIA are temporary credentials that are created using STS operations. If the account in the response belongs to you, you can sign in as the root user and review your root user access keys. Then, you can pull a credentials report to learn which IAM user owns the keys. To learn who requested the temporary credentials for an ASIA access key, view the STS events in your CloudTrail logs in the IAM User Guide. This operation does not indicate the state of the access key. The key might be active, inactive, or deleted. Active keys might not have permissions to perform an operation. Providing a deleted access key might return an error that the key doesn't exist.</td>
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
<tr id="parameter-AccessKeyId">
    <td><CopyableCode code="AccessKeyId" /></td>
    <td><code>string</code></td>
    <td>The identifier of an access key. This parameter allows (through its regex pattern) a string of characters that can consist of any upper- or lowercase letter or digit.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_access_key_info"
    values={[
        { label: 'get_access_key_info', value: 'get_access_key_info' }
    ]}
>
<TabItem value="get_access_key_info">

Returns the account identifier for the specified access key ID. Access keys consist of two parts: an access key ID (for example, AKIAIOSFODNN7EXAMPLE) and a secret access key (for example, wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY). For more information about access keys, see Managing Access Keys for IAM Users in the IAM User Guide. When you pass an access key ID to this operation, it returns the ID of the Amazon Web Services account to which the keys belong. Access key IDs beginning with AKIA are long-term credentials for an IAM user or the Amazon Web Services account root user. Access key IDs beginning with ASIA are temporary credentials that are created using STS operations. If the account in the response belongs to you, you can sign in as the root user and review your root user access keys. Then, you can pull a credentials report to learn which IAM user owns the keys. To learn who requested the temporary credentials for an ASIA access key, view the STS events in your CloudTrail logs in the IAM User Guide. This operation does not indicate the state of the access key. The key might be active, inactive, or deleted. Active keys might not have permissions to perform an operation. Providing a deleted access key might return an error that the key doesn't exist.

```sql
SELECT
account
FROM aws.sts.access_key_infos
WHERE AccessKeyId = '{{ AccessKeyId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
