--- 
title: aliases
hide_title: false
hide_table_of_contents: false
keywords:
  - aliases
  - kms
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

Creates, updates, deletes, gets or lists an <code>aliases</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="aliases" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kms.aliases" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_aliases"
    values={[
        { label: 'list_aliases', value: 'list_aliases' }
    ]}
>
<TabItem value="list_aliases">

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
    <td><CopyableCode code="alias_arn" /></td>
    <td><code>string</code></td>
    <td>String that contains the key ARN.</td>
</tr>
<tr>
    <td><CopyableCode code="alias_name" /></td>
    <td><code>string</code></td>
    <td>String that contains the alias. This value begins with alias/. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9:/_-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time that the alias was most recently created in the account and Region. Formatted as Unix time.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time that the alias was most recently associated with a KMS key in the account and Region. Formatted as Unix time.</td>
</tr>
<tr>
    <td><CopyableCode code="target_key_id" /></td>
    <td><code>string</code></td>
    <td>String that contains the key identifier of the KMS key associated with the alias.</td>
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
    <td><a href="#list_aliases"><CopyableCode code="list_aliases" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a list of aliases in the caller's Amazon Web Services account and region. For more information about aliases, see CreateAlias. By default, the ListAliases operation returns all aliases in the account and region. To get only the aliases associated with a particular KMS key, use the KeyId parameter. The ListAliases response can include aliases that you created and associated with your customer managed keys, and aliases that Amazon Web Services created and associated with Amazon Web Services managed keys in your account. You can recognize Amazon Web Services aliases because their names have the format aws/<code>&lt;service-name&gt;</code>, such as aws/dynamodb. The response might also include aliases that have no TargetKeyId field. These are predefined aliases that Amazon Web Services has created but has not yet associated with a KMS key. Aliases that Amazon Web Services creates in your account, including predefined aliases, do not count against your KMS aliases quota. Cross-account use: No. ListAliases does not return aliases in other Amazon Web Services accounts. Required permissions: kms:ListAliases (IAM policy) For details, see Controlling access to aliases in the Key Management Service Developer Guide. Related operations: CreateAlias DeleteAlias UpdateAlias Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.</td>
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
    defaultValue="list_aliases"
    values={[
        { label: 'list_aliases', value: 'list_aliases' }
    ]}
>
<TabItem value="list_aliases">

Gets a list of aliases in the caller's Amazon Web Services account and region. For more information about aliases, see CreateAlias. By default, the ListAliases operation returns all aliases in the account and region. To get only the aliases associated with a particular KMS key, use the KeyId parameter. The ListAliases response can include aliases that you created and associated with your customer managed keys, and aliases that Amazon Web Services created and associated with Amazon Web Services managed keys in your account. You can recognize Amazon Web Services aliases because their names have the format aws/<code>&lt;service-name&gt;</code>, such as aws/dynamodb. The response might also include aliases that have no TargetKeyId field. These are predefined aliases that Amazon Web Services has created but has not yet associated with a KMS key. Aliases that Amazon Web Services creates in your account, including predefined aliases, do not count against your KMS aliases quota. Cross-account use: No. ListAliases does not return aliases in other Amazon Web Services accounts. Required permissions: kms:ListAliases (IAM policy) For details, see Controlling access to aliases in the Key Management Service Developer Guide. Related operations: CreateAlias DeleteAlias UpdateAlias Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.

```sql
SELECT
alias_arn,
alias_name,
creation_date,
last_updated_date,
target_key_id
FROM aws.kms.aliases
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
